import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../pages/loading';
import { UserState } from '../interfaces/User';

export default function Routes() {
  const data = useSelector((state: UserState) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStorageData() {
      const StorageUser = await AsyncStorage.getItem('@racerfan:user');

      if (StorageUser) {
        dispatch({
          type: 'LOG_IN',
          user: JSON.parse(StorageUser),
        });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <>
      <NavigationContainer>
        {loading ? (
          <Loading />
        ) : data.user.token || true ? (
          <AppRoutes />
        ) : (
          <AuthRoutes />
        )}
      </NavigationContainer>
    </>
  );
}
