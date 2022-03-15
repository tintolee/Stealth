import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SelectRentalTypeForm } from '../../../components/forms';
import { Container, Text } from '../../../components/util';

export const SelectTypeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SelectTypeScreenContainer>
      <StatusBar backgroundColor="#1e1e1e" />
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>What type of Property is it?</HeaderText>
      <SelectRentalTypeForm />
    </SelectTypeScreenContainer>
  );
};

export default SelectTypeScreen;

const SelectTypeScreenContainer = styled(Container)`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
`;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;
