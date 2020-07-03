import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.user);

  console.log(data.user);
  return (
    <>
      <Text> Home </Text>
      <TouchableOpacity
        onPress={async () => {
          dispatch({
            type: 'LOG_OUT',
          });
          await AsyncStorage.removeItem('@racerfan:user');
          await AsyncStorage.removeItem('@racerfan:token');
        }}
        style={{marginTop: 18, borderColor: 'black', borderWidth: 1}}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </>
  );
}
