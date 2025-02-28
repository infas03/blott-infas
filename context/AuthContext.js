import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkRegistrationStatus = useCallback(async () => {
    try {
      const status = await AsyncStorage.getItem('isRegistered');
      if (status !== null) {
        setIsRegistered(JSON.parse(status));
      }
    } catch (error) {
      console.error('Error retrieving isRegistered status from AsyncStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkRegistrationStatus();
  }, [checkRegistrationStatus]);


  if (loading) {
    return null;
  }

  const value = { isRegistered, setIsRegistered };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
