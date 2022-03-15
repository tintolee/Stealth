import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { Container, Text } from '../../../components/util';
import SelectNumberOfUnitsForm from '../../../components/forms/add-rental-wizard/SelectNumberOfUnitsForm';

export const UnitsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <UnitsContainer>
      <StatusBar backgroundColor="#1e1e1e" />
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>How many units does the property have?</HeaderText>
      <SelectNumberOfUnitsForm />
    </UnitsContainer>
  );
};

export default UnitsScreen;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

const UnitsContainer = styled(Container)`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
`;
