import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../firebase.config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    try {
      await userRef.set({
        displayName: userAuth.displayName,
        email: userAuth.email,
        uid: userAuth.uid,
        createdAt: new Date(),
        lastLoginAt: new Date(),
        updatedAt: new Date(),
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating Google oauth user: ', error)
    }
  }
  return userRef
  // else {
  //   try {
  //     await userRef.set({
  //       lastLoginAt: new Date(),
  //     })
  //   } catch (error) {
  //     console.log('error updating lastLoginAt for Google oauth user: ', error)
  //   }
  // }
}

export default firebase
