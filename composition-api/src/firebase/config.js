import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMsNxzXiMcTWVZZhbwE8jKsD7yOYbiWVU',
  authDomain: 'dojo-blog-bdd74.firebaseapp.com',
  projectId: 'dojo-blog-bdd74',
  storageBucket: 'dojo-blog-bdd74.appspot.com',
  messagingSenderId: '955150451287',
  appId: '1:955150451287:web:ddecfd2905f9197b121912',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp };
