import { useState } from "react"

import GoogleAuthState from '../componet/context/GoogleAuthState';

import Login from './Login';
import Top from './Top';

const Main = () => {
  const [user, setUser] = useState(null);

  const setState = (uid) => {
    setUser(uid);
  };

  return (
    <div>
      <GoogleAuthState setState={(uid) => setState(uid)} />
      {user == null ?
        <Login />
        :
        <Top user={user} />
      }
    </div>
  );
};

export default Main;