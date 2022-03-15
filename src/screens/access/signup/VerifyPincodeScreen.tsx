import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CancelButton, Container, HeaderText } from '../../../components/util';
import { PincodeVerificationForm } from '../../../components/forms';

export const VerifyPincodeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <VerifyPincodeScreenContainer>
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>Verify Pincode</HeaderText>
      <PincodeVerificationForm />
    </VerifyPincodeScreenContainer>
  );
};

export default VerifyPincodeScreen;

const VerifyPincodeScreenContainer = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
  padding-bottom: 200px;
`;
