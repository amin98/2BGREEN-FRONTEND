import { useEffect, useReducer, createContext } from 'react';

const initialState = {
  isAuthenticated: false,
  token: JSON.parse(localStorage.getItem('token')),
  name: null, // Add name
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
        error: null, // Clear any old errors
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
