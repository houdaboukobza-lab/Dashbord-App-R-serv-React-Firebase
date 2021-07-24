import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgN3_O9WfuLA-BGi5MD3iKoV3iyXhPWCA",
    authDomain: "reserve-2885e.firebaseapp.com",
    databaseURL: "https://reserve-2885e-default-rtdb.firebaseio.com",
    projectId: "reserve-2885e",
    storageBucket: "reserve-2885e.appspot.com",
    messagingSenderId: "194723598587",
    appId: "1:194723598587:web:bf63e0bfb50ffd1c4da05e",
    measurementId: "G-ZNM0GK3FPY"
  };
export const fire = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore().collection("Users").get().then((querySnapshot) => {
//   querySnapshot.forEach((Users) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   } );
// } );cnpm start

export const firestore = firebase.firestore();




