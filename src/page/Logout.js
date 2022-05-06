import { getAuth } from "firebase/auth";

import Button from '@mui/material/Button';

const Logout = () => {

  const logout = (e) => {
    const auth = getAuth();
    auth.signOut();
  }

  return (
    <>
      <Button onClick={(e) => { logout(e) }} href='/'>ログアウト</Button>
    </>
  );

};

export default Logout;