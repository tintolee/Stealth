import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignInForm } from '../../components/forms';
import { Container, Text } from '../../components/util';

export const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SignInScreenContainer>
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>Sign in with Casabee</HeaderText>
      <SignInForm />
    </SignInScreenContainer>
  );
};

export default SignInScreen;

const SignInScreenContainer = styled(Container)`
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
