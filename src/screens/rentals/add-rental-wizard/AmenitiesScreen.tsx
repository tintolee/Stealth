import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { AmenitiesForm } from '../../../components/forms';
import { KeyboardAvoidingContainer, Text } from '../../../components/util';

export const AmenitiesScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <AmenitiesScreenContainer behavior="height">
      <StatusBar backgroundColor="#1e1e1e" />
      <CancelButton onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
      </CancelButton>
      <HeaderText subheading>What amenities do each unit have?</HeaderText>
      <AmenitiesForm />
    </AmenitiesScreenContainer>
  );
};

export default AmenitiesScreen;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const AmenitiesScreenContainer = styled(KeyboardAvoidingContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;
