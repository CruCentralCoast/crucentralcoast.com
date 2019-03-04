const express = require('express');
const router = express.Router();
let db = require('../../models/firebase');

//slo specific routes
router.get('/', function (req, res) {
  let movement = db.collection('movements').doc('563b07402930ae0300fbc09b')
  db.collection('ministryteams').where('movement', '==', movement)
    .get()
    .then((snapshot) => {
      let ministries = [];
      let getMinistries = []
      snapshot.forEach((doc) => {
        getMinistries.push(
          new Promise((resolve, reject) => {
            let data = doc.data()
            let leaders = []
            let promises = []
            data.leaders.forEach((leader) => {
              promises.push(leader.get()
                .then((val) => {
                  let data = val.data()
                  let leader = {
                    name: data.name,
                    email: data.email
                  }
                  leaders.push(leader)
                  // console.log(leader)
                })
                .catch((err) => {
                  console.log('Error getting documents', err);
                })
              );
            })
            Promise.all(promises)
              .then(() => {

                let ministry = {
                  id: doc.id,
                  name: data.name,
                  description: data.description.replace('\n', '<br />'),
                  leaders: leaders,
                  img: data.imageLink,
                }
                ministries.push(ministry)
                // console.log(doc.id, '=>', doc.data());
                // console.log(ministry)
                resolve()
              })
          })
        )
      });
      Promise.all(getMinistries).then(() => {
        res.render('slo/ministry', { page: 'ministry', ministries: ministries });
      })
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;