import React, {useState} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Logo,
  PageContainer,
  TitleForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText,
  ForgotPassword,
} from './styles';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  async function handleFormRegister() {
    setProcessing(true);
    try {
      const response = await login();

      await AsyncStorage.setItem(
        '@racerfan:user',
        JSON.stringify(response.user),
      );
      await AsyncStorage.setItem(
        '@racerfan:token',
        JSON.stringify(response.token),
      );

      dispatch({
        type: 'LOG_IN',
        token: response.token,
        user: response.user,
      });
      setProcessing(false);
    } catch (err) {
      console.log(err);
      setProcessing(false);
    }
  }

  return (
    <PageContainer behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <Logo>LOGO</Logo>
      {error && (
        <ErrorBox>
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      )}

      <InputsContainer>
        <TitleForm>Acceder a tu cuenta</TitleForm>

        <InputForm
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <InputForm
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <ForgotPassword onPress={() => navigation.push('ResetPassword')}>
          No recuerdo la contraseña
        </ForgotPassword>
        {processing && (
          <ActivityIndicator size="large" style={{marginBottom: 16}} />
        )}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Entrar</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <SwitchForm onPress={() => navigation.push('Register')}>
        No tengo cuenta
      </SwitchForm>
    </PageContainer>
  );
}
