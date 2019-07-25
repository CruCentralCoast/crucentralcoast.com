const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CONFIG)),
  databaseURL: 'https://cru-demo.firebaseio.com',
});

module.exports = admin.firestore();
