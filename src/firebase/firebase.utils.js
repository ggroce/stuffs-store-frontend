import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "firebase.config.js";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData = null
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

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
      });
    } catch (error) {
      console.log(
        "Error setting Google oauth user in firebase.utils.js: ",
        error
      );
    }
  } else {
    try {
      await userRef.update({
        lastLoginAt: new Date(),
      });
    } catch (error) {
      console.log(
        "Error updating lastLoginAt for Google oauth user in firebase.utils.js: ",
        error
      );
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items, routeName } = doc.data();

    return {
      routeName: encodeURI(routeName.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.routeName.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
