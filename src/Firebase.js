import firebase from 'firebase';
const firebaseconfig = {
  apiKey: 'AIzaSyC9-ZS_avEOl9cyV51P-SWyn8Qa8p_-NNc',
  authDomain: 'sci-2021.firebaseapp.com',
  projectId: 'sci-2021',
  storageBucket: 'sci-2021.appspot.com',
  messagingSenderId: '383249742705',
  appId: '1:383249742705:web:e71f014e4eb97a63d294d0',
  measurementId: 'G-Z3K3BB0MLZ',
};
const fire = firebase.initializeApp(firebaseconfig);
const db = fire.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { fire, db, auth, storage };
