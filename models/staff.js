const db = require('./firebase');

/**
 * Starts the fetch and data processing for the staff page
 *
 * @return {Promise} The promise for the data return
 */
function getStaff() {
  return new Promise((resolve, reject) => {
    db.collection('staff').get()
        .then((snapshot) => {
          const staff = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            staff.push({
              id: doc.id,
              name: data.confidential ? data.name.first : data.name.first + ' ' + data.name.last,
              confidential: data.confidential,
              email: data.confidential ? null : data.email,
              role: data.role,
              type: data.type,
              img: data.picture,
            });
          });
          const results = [
            {
              group: 'mtl',
              title: 'CRU CENTRAL COAST MISSIONAL TEAM LEADERS',
              staff: [],
            },
            {
              group: 'staff',
              title: 'CAMPUS FIELD STAFF & AREA DIRECTORS',
              staff: [],
            },
            {
              group: 'intern',
              title: 'CAMPUS MINISTRY INTERNS & PART-TIME FIELD STAFF',
              staff: [],
            },
          ];

          staff.forEach((member) => {
            switch (member.type) {
              case 'mtl':
                results[0].staff.push(member);
                break;

              case 'staff':
                results[1].staff.push(member);
                break;

              case 'ptfs':
              case 'intern':
                results[2].staff.push(member);
                break;

              default:
                break;
            }
          });
          resolve(results);
        });
  })
      .catch((err) => {
        console.log('Error getting documents', err);
        reject();
      });
}

module.exports = getStaff;
