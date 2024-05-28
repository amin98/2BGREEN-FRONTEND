import { useEffect, useReducer, createContext } from 'react';

const initialState = {
  isAuthenticated: false,
  token: JSON.parse(localStorage.getItem('token')),
  name: null,
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        name: action.name,
        error: null,
      };
    case 'logout':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        name: null,
      };
    case 'error':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const userStatusContext = createContext();

const UserStatusContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    if (user.token) {
      localStorage.setItem('token', JSON.stringify(user.token));
    } else {
      localStorage.removeItem('token');
    }
  }, [user.token]);

  return (
    <userStatusContext.Provider value={{ user, dispatch }}>
      {children}
    </userStatusContext.Provider>
  );
};

export default UserStatusContextProvider;
