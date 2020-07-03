import React, {useState} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const REGISTER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      _id
      name
      email
      token
      created_at
    }
  }
`;

import {
  PageContainer,
  Logo,
  TitleForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText,
  CheckboxBox,
  CheckboxText,
} from './styles';

export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const [register, {data}] = useMutation(REGISTER);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  async function handleFormRegister() {
    if (!acceptConditions) {
      setError('You need accept the conditions to register');
      return;
    }
    setProcessing(true);
    try {
      const response = await register({variables: {name, email, password}});
      await AsyncStorage.setItem(
        '@racerfan:user',
        JSON.stringify(response.data.register),
      );
      dispatch({
        type: 'LOG_IN',
        user: response.data.register,
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
        <TitleForm>Tu cuenta</TitleForm>

        <InputForm
          placeholder="Nombre"
          onChangeText={text => setName(text)}
          value={name}
        />
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
        <CheckboxBox>
          <CheckBox
            disabled={false}
            value={acceptConditions}
            onValueChange={() =>
              acceptConditions
                ? setAcceptConditions(false)
                : setAcceptConditions(true)
            }
          />
          <CheckboxText>Acepto los términos y condiciones</CheckboxText>
        </CheckboxBox>
        {processing && (
          <ActivityIndicator size="large" style={{marginBottom: 16}} />
        )}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Registrarme</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <SwitchForm onPress={() => navigation.push('Login')}>
        ya tengo una cuenta
      </SwitchForm>
    </PageContainer>
  );
}
