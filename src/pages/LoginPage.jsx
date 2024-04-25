import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Login from '../components/auth/Login';

import AuthenticationAPI from '../apis/AuthenticationAPI';
import { userStatusContext } from '../components/contexts/UserStatus';

const LoginPage = () => {
  const { dispatch } = useContext(userStatusContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await AuthenticationAPI.login(email, password);
      if (response.status === 200) {
        dispatch({
          type: 'login',
          token: response.data,
        });
        navigate('/products');
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
