import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDb01Yta2YB4G_6TnrGySA4ZMAve9JL2k',
  authDomain: 'chat-room-8c041.firebaseapp.com',
  projectId: 'chat-room-8c041',
  storageBucket: 'chat-room-8c041.appspot.com',
  messagingSenderId: '474241916358',
  appId: '1:474241916358:web:55a829ef874aa6b78866c7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectAuth = firebaseApp.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
