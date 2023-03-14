import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB_Fv4BzF8_T2YP-ZonWWMBsMFoxsqGkJY",
    authDomain: "next-js-3ce70.firebaseapp.com",
    projectId: "next-js-3ce70",
    storageBucket: "next-js-3ce70.appspot.com",
    messagingSenderId: "418372714955",
    appId: "1:418372714955:web:8c6c2b1390c951a719f64e",
    measurementId: "G-636KDTXDCV"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();