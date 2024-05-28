import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Login from '../components/auth/Login';

import AuthenticationAPI from '../apis/AuthenticationAPI';
// import { UserStatusContext } from '.././components/contexts/UserStatus';

const LoginPage = () => {
  // const { dispatch } = useContext(UserStatusContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await AuthenticationAPI.login(email, password);
      if (response.status === 200) {
        const loginData = response.data;
        dispatch({
          type: 'login',
          token: loginData.access_token,
          name: loginData.name,
        });
        localStorage.setItem('accessToken', loginData.access_token);
        localStorage.setItem('refreshToken', loginData.refresh_token);
        navigate('/', { state: { name: loginData.name } });
      } else {
        alert('Incorrect credentials!');
      }
    } catch (error) {
      alert('An error occurred while logging in');
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
