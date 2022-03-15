import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../../components/util';

export const Questions: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <MainContainer>
      <QuestionContainer>
        <QuestionView>
          <ContinueButton>
            <ButtonText center large heavy>
              Continue
            </ButtonText>
          </ContinueButton>
        </QuestionView>
      </QuestionContainer>
    </MainContainer>
  );
};

export default Questions;

const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #7ea8ed;
`;
const QuestionContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 0 1px;
  margin-bottom: 0px;
`;
const QuestionView = styled.View`
  background-color: #51597d;
  margin-bottom: 0px;
  border-radius: 50px;
  width: 100%;
  height: 650px;
  justify-content: flex-end;
`;

const ContinueButton = styled.TouchableOpacity`
  background-color: #a5b0e6;
  justify-content: center;
  margin: 60px 20px;
  border-radius: 25px;
  padding: 0 40px;
  height: 50px;
  width: 350px;
`;

const ButtonText = styled(Text)``;
