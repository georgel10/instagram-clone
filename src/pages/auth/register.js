import React, {useState} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {register} from '../../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  async function handleFormRegister() {
    setProcessing(true);
    try {
      const response = await register();

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
