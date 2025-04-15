import {signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, User,   sendEmailVerification,   createUserWithEmailAndPassword} from 'firebase/auth'

import  firebaseApp  from '@/source/config/firebase'


const auth = getAuth(firebaseApp)


export const login = async (email: string, password: string) => {
    
    return signInWithEmailAndPassword(auth, email, password)
}

export async function logOut() {
    return signOut(auth)
    
}

export function onAuthChanged(callback: (user: User | null ) => void ){
    return onAuthStateChanged(auth, callback)
}


export const createUserWithEmailAndPasswordLocal = async (
    email: string,
    password: string
  ) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCred.user, {
        url: String(process.env.NEXT_PUBLIC_LOGIN_URL)
      });
      return {
        user: userCred.user,
        error: null
      };
    } catch (error: any) {
      return {
        user: null,
        error: error.message
      };
    }
  };
  export const signInWithEmailAndPasswordLocal = async (
    email: string,
    password: string
  ) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCred.user, error: null };
    } catch (error: any) {
      return { user: null, error: error.message };
    }
  };
  