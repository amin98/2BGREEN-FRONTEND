import RequestHandler from './RequestHandler';

const componentURL = '/User';

const AuthenticationAPI = {
  login: async (email, password) => {
    try {
      const res = await RequestHandler.post(`${componentURL}/Login`, {
        email: email,
        password: password,
        appName: '2B-GreenAPI',
      });

      return res;
    } catch (err) {
      throw err;
    }
  },

  register: async (name, prefix, surname, email, password) => {
    try {
      const res = await RequestHandler.post(`${componentURL}/Register`, {
        name: name,
        prefix: prefix,
        surname: surname,
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
