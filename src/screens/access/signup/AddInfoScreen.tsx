import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { AddInfoForm } from '../../../components/forms';
import { KeyboardAvoidingContainer, Text } from '../../../components/util';

export const AddInfoScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <AddInfoScreenContainer behavior="height">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CancelButton onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={24} color="#dbdbdb" />
        </CancelButton>
        <HeaderText subheading>Add Profile Info</HeaderText>
        <AddInfoForm />
      </ScrollView>
    </AddInfoScreenContainer>
  );
};

export default AddInfoScreen;

const AddInfoScreenContainer = styled(KeyboardAvoidingContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
  /* padding-bottom: 200px; */
`;

const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;
