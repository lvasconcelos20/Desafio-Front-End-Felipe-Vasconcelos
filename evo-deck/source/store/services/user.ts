import { getAuth, User } from "firebase/auth";
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
  } from "firebase/firestore";


import  firebaseApp  from '@/source/config/firebase'

import { UserEntity } from "@/common/entities/user";


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const tableName = "users";

export const createNewUserDoc = async ({
    id,
    email,
    name,
    username

  }: UserEntity) => {
    try {
      await setDoc(doc(db, tableName, id || ""), {
        name,
        email,
        username
      });
      return { error: null };
    } catch (error: any) {
      return { error: error.message };
    }
  };

  export const waitForUser = (callback: (user: User | null) => void) => {
    return auth.onAuthStateChanged(callback);
  };
  