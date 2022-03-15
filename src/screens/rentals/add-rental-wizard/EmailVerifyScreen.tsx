import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EmailVerificationForm } from '../../../components/forms';
import { Container, Text } from '../../../components/util';

export const EmailVerifyScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <EmailVerifyScreenContainer>
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>Sign up with Casabee</HeaderText>
      <EmailVerificationForm />
    </EmailVerifyScreenContainer>
  );
};

export default EmailVerifyScreen;

const EmailVerifyScreenContainer = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
  padding-bottom: 200px;
`;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;
