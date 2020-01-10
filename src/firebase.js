import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCe34D_0YZosn212k9mbqD57G_ezXRkRqg",
    authDomain: "ruby-garage.firebaseapp.com",
    databaseURL: "https://ruby-garage.firebaseio.com",
    projectId: "ruby-garage",
    storageBucket: "ruby-garage.appspot.com",
    messagingSenderId: "135681760373",
    appId: "1:135681760373:web:97d243f689da7ca41a6c3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;