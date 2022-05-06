import GoogleAuth from '../componet/context/GoogleAuth';

import Button from '@mui/material/Button';

const Login = () => {

  const login = (e) => {
    GoogleAuth(e);
  }

  return (
    <>
      <Button onClick={(e) => { login(e) }}>Login</Button>
    </>
  );

};

export default Login;