import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
  
export const tokenAuth = createContext();
  
  const TokenAuthProvider = ({ children }) => {
    const [currentMatches, storeMatches, clearStoredMatches] = useLocalStorage('matches')
  
    const handleTokenChange = (token, action) => {
        if (action === 'logout'){
            clearStoredMatches();
        }
        else {
            storeMatches(token);
        }
    };

    const userStatus = useMemo(
      () => ({ currentMatches, handleTokenChange }),
      [currentMatches, handleTokenChange],
    );
  
    return (
      <tokenAuth.Provider value={userStatus}>
        {children}
      </tokenAuth.Provider>
    );
};
  
export default TokenAuthProvider;