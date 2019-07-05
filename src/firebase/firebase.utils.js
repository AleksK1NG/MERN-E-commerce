import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDhtqU2XtFCks_64BLC8lYgpuMzr8ZJHMg',
  authDomain: 'e-commerce-17e12.firebaseapp.com',
  databaseURL: 'https://e-commerce-17e12.firebaseio.com',
  projectId: 'e-commerce-17e12',
  storageBucket: '',
  messagingSenderId: '210692273622',
  appId: '1:210692273622:web:507987d0b221f0e8'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
