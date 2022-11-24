import {
  createContext, useState, useEffect, useMemo,
} from 'react';
import Cookies from 'js-cookie';
import { CookiesProvider } from 'react-cookie';

export const cookieAuth = createContext();

function CookieAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);

  const handleUserLogin = () => {
    const session = Cookies.get('koa.sess');
    if (session) {
      setCurrentUser(true);
    }
  };

  const handleUserLogout = () => {
    console.log(currentUser);
    setCurrentUser(false);
    Cookies.get('koa.sess');
    Cookies.remove('koa.sess');
    Cookies.remove('koa.sess.sig');
  };

  useEffect(() => {
    handleUserLogin();
  }, [currentUser, handleUserLogin, handleUserLogout]);

  const userStatus = useMemo(
    () => ({ currentUser, handleUserLogin, handleUserLogout }),
    [currentUser, handleUserLogin, handleUserLogout],
  );

  return (
    <cookieAuth.Provider value={userStatus}>
      {children}
    </cookieAuth.Provider>
  );
}

export default CookieAuthProvider;
