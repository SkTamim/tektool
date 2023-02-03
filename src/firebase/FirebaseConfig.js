// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDJU7vN3Fi9orIB8qCCDEf_9VOvMiaDCeM",
	authDomain: "tektool-e6931.firebaseapp.com",
	databaseURL: "https://tektool-e6931-default-rtdb.firebaseio.com",
	projectId: "tektool-e6931",
	storageBucket: "tektool-e6931.appspot.com",
	messagingSenderId: "573091634262",
	appId: "1:573091634262:web:916ae3308dbc6aa7352ff7",
	measurementId: "G-P9G0P1BSG9",
};
export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// // Initialize Firestore database and get a reference to the service
export const database = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);