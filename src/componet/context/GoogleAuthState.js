import { useEffect } from "react"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebase'

const GoogleAuthState = (props) => {
  const { setState } = props;
  // const [uid, setUid] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    initializeApp(firebaseConfig);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState(user.displayName);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
}
export default GoogleAuthState;


