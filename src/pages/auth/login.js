import React, {useState} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      token
      created_at
    }
  }
`;

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
  const [login, {data}] = useMutation(LOGIN);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  async function handleFormRegister() {
    setProcessing(true);
    try {
      const response = await login({variables: {email, password}});

      await AsyncStorage.setItem(
        '@racerfan:user',
        JSON.stringify(response.data.login),
      );
      dispatch({
        type: 'LOG_IN',
        user: response.data.login,
      });
      setProcessing(false);
    } catch (err) {
      setError(err.graphQLErrors[0].message);
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
