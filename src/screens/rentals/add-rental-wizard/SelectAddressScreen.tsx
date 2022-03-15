import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingContainer, Text } from '../../../components/util';
import SearchAddressForm from '../../../components/forms/add-rental-wizard/SearchAddressForm';

export const SelectAddressScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SelectAddressScreenContainer behavior="height">
      <StatusBar backgroundColor="#1e1e1e" />
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>Where is the Property?</HeaderText>
      <SearchAddressForm />
    </SelectAddressScreenContainer>
  );
};

export default SelectAddressScreen;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

const SelectAddressScreenContainer = styled(KeyboardAvoidingContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
`;
