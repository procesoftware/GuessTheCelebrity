import firebase from "firebase";
import config from "./config";


const  firebaseConfig = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        databaseURL: config.databaseURL,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId
      }
const GTCFirebase = firebase.initializeApp(firebaseConfig);
export default GTCFirebase;
    