import RequestHandler from './RequestHandler';

const componentURL = '/auth';

const AuthenticationAPI = {
  login: async (email, password) => {
    try {
      const res = await RequestHandler.post(componentURL + '/login', {
        email: email,
        password: password,
      });

      return res;
    } catch (err) {
      throw err;
    }
  },

  register: async (firstName, lastName, email, password) => {
    try {
      const res = await RequestHandler.post('/users/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      return res.data;
    } catch (err) {
      throw err;
    }
  },
};
export default AuthenticationAPI;
