const express = require('express');
const router = express.Router(); // eslint-disable-line
const db = require('../../models/firebase');

// slo specific routes
router.get('/', function(req, res) {
  const movement = db.collection('movements').doc('563b07402930ae0300fbc09b');
  db.collection('ministryteams').where('movement', '==', movement)
      .get()
      .then((snapshot) => {
        const ministries = [];
        const getMinistries = [];
        snapshot.forEach((doc) => {
          getMinistries.push(
              new Promise((resolve, reject) => {
                const data = doc.data();
                const leaders = [];
                const promises = [];
                data.leaders.forEach((leader) => {
                  promises.push(leader.get()
                      .then((val) => {
                        const data = val.data();
                        const leader = {
                          name: data.name,
                          email: data.email,
                        };
                        leaders.push(leader);
                        // console.log(leader)
                      })
                      .catch((err) => {
                        console.log('Error getting documents', err);
                      })
                  );
                });
                Promise.all(promises)
                    .then(() => {
                      const ministry = {
                        id: doc.id,
                        name: data.name,
                        description: data.description.replace('\n', '<br />'),
                        leaders: leaders,
                        img: data.imageLink,
                      };
                      ministries.push(ministry);
                      // console.log(doc.id, '=>', doc.data());
                      // console.log(ministry)
                      resolve();
                    });
              })
          );
        });
        Promise.all(getMinistries).then(() => {
          res.render('slo/ministry', {page: 'ministry', ministries: ministries});
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
});

module.exports = router;
