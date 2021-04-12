// const firebase = require('firebase');
import firebase from 'firebase';

const ApiGetProducts = async () => {
  const config = {
    apiKey: 'AAAAvH5vZLw:APA91bH-Evxn6LES5E0Pm_Viq7LLc4siYL078GHLmdTd_4Ca1o7fLwjnSqOZ_mgYBHtc0QKGvKN9eiQD33DTJlMyraDm0V-caFEvA99jfRFC7HQ_9YEq1c1ULg9q1h3YQAAK5Ryh50ER',
    authDomain: '809575081148',
    projectId: 'prueba-utp-a63d5'
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.firestore();
  return db.collection('products').get();
};

export default ApiGetProducts;
