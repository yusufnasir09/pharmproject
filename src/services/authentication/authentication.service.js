import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const loginRequest = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password);
}