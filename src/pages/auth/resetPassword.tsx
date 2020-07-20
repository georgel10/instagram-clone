import React, { useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

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
} from './styles';

export default function ResetPassword({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handlePress() {
    setProcessing(true);
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
        <TitleForm>Restablecer la contraseña</TitleForm>

        <InputForm
          placeholder="Your Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        {processing && (
          <ActivityIndicator size="large" style={{ marginBottom: 16 }} />
        )}
        <ButtonForm onPress={handlePress}>
          <ButtonTextForm>Enviar</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <SwitchForm onPress={() => navigation.push('Register')}>
        No recuerdo la contraseña
      </SwitchForm>
    </PageContainer>
  );
}
