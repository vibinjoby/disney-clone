import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyD-AwU3mloqdniTQwIosf22WY42j7bYAkM',
    authDomain: 'disneyplus-clone-13e5e.firebaseapp.com',
    projectId: 'disneyplus-clone-13e5e',
    storageBucket: 'disneyplus-clone-13e5e.appspot.com',
    messagingSenderId: '950289126774',
    appId: '1:950289126774:web:9788361b928e1161bb5657',
    measurementId: 'G-D3R12FLWZ2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
