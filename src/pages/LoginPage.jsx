import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Login from '../components/auth/Login';

import AuthenticationAPI from '../apis/AuthenticationAPI';
import { userStatusContext } from '../components/contexts/UserStatus';
import RequestHandler from '../apis/RequestHandler';

const LoginPage = () => {
  const { dispatch } = useContext(userStatusContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await AuthenticationAPI.login(email, password);
      if (response.status === 200) {
        const loginData = response.data; // Assuming it contains the tokens
        dispatch({
          type: 'login',
          token: loginData.access_token,
          name: loginData.name, // Assuming the response has this structure
        });
        localStorage.setItem('accessToken', loginData.access_token);
        localStorage.setItem('refreshToken', loginData.refresh_token);
        navigate('/', { state: { name: loginData.name } }); // Assuming you want to pass the name
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
