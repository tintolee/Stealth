import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CancelButton, Container, HeaderText } from '../../../components/util';
import { AcceptTermsForm } from '../../../components/forms';

export const TermsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TermsScreenContainer>
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>Terms & Conditions</HeaderText>
      <AcceptTermsForm />
    </TermsScreenContainer>
  );
};

export default TermsScreen;

const TermsScreenContainer = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
  padding-bottom: 200px;
`;
