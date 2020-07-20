import styled from 'styled-components/native';

export const PageContainer = styled.KeyboardAvoidingView`
  flex: 1px;
  padding-top: 20px;
  background-color: #feffff;
  align-items: center;
`;
export const Logo = styled.Text`
  width: 100%;
  align-self: center;
  font-family: Lato;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #000000;
  font-weight: bold;
  margin-top: 24px;
`;
export const ErrorBox = styled.View`
  width: 80%;
  align-items: center;
  padding: 12px 18px;
  border-radius: 8px;
  margin-top: 12px;
  margin-bottom: -24px;
  background-color: #f8d7da;
  align-self: center;
`;
export const ErrorText = styled.Text`
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: #721c24;
`;
export const InputsContainer = styled.KeyboardAvoidingView`
  width: 80%;
  justify-content: center;
  margin-top: 42px;
`;
export const TitleForm = styled.Text`
  font-family: Lato;
  width: 100%;
  align-self: flex-start;
  font-size: 26px;
  text-align: left;
  color: #3b3b3b;
  margin-bottom: 16px;
`;
export const InputForm = styled.TextInput`
  width: 100%;
  height: 52px;
  font-size: 15px;
  padding-left: 24px;
  left: 0px;
  top: 0px;
  background: #f4f6f8;
  border-radius: 8px;
  margin-bottom: 24px;
`;
export const ButtonForm = styled.TouchableOpacity`
  height: 52px;
  justify-content: center;
  align-items: center;
  background: #ff0000;
  border-radius: 8px;
`;
export const ButtonTextForm = styled.Text`
  font-family: Lato;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;
export const SwitchForm = styled.Text`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  color: #777777;
  text-decoration: underline;
  margin-top: 16px;
`;
export const CheckboxBox = styled.View`
  margin-top: -10px;
  margin-bottom: 22px;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
`;
export const CheckboxText = styled.Text`
  font-size: 15px;
  font-family: Lato-Bold;
  color: #363636;
`;
export const ForgotPassword = styled.Text`
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 22px;
  align-self: flex-end;
`;
