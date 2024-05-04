import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDZCXJn-iW8kivHPMDR22vppNORvUjEZ44",
  authDomain: "projetopucpr-bcd89.firebaseapp.com",
  projectId: "projetopucpr-bcd89",
  storageBucket: "projetopucpr-bcd89.appspot.com",
  messagingSenderId: "360198722478",
  appId: "1:360198722478:web:bb7ba20b8aa24e1b36ae3f"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;