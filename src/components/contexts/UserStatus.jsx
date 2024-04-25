import { useEffect, useReducer, createContext } from 'react';

const initialState = {
  isAuthenticated: false,
  token: JSON.parse(localStorage.getItem('token')),
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        token: action.token,
      };
    case 'logout':
      return {
        ...state,
        token: null,
      };
  }
};

export const userStatusContext = createContext();

const UserStatusContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    if (user.token !== null && user.token !== undefined) {
      localStorage.setItem('token', JSON.stringify(user.token));
    } else {
      localStorage.removeItem('token');
    }
  }, [user.token]);

  useEffect(() => {
    if (user.token === undefined || user.token === null) {
      return;
    }
  }, []);

  return (
    <userStatusContext.Provider value={{ user, dispatch }}>
      {children}
    </userStatusContext.Provider>
  );
};

export default UserStatusContextProvider;
