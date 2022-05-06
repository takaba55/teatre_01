import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { firebaseConfig } from '../../firebase/firebase'

const GoogleAuth = (e) => {
  e.preventDefault();

  // Initialize Firebase
  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider);
}

export default GoogleAuth;
