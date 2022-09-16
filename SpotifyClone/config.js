// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// web app's Firebase configuration

const firebaseConfig = {
    
        apiKey: "AIzaSyCPEoxs3SWIXkX4Fs5KqSEQZOoSJw21Efo",
        authDomain: "spotify-clone-f5ba8.firebaseapp.com",
        projectId: "spotify-clone-f5ba8",
        storageBucket: "spotify-clone-f5ba8.appspot.com",
        messagingSenderId: "556881513465",
        appId: "1:556881513465:web:73209775d4c80272808b28"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };