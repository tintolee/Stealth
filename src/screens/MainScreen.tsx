import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text, HeaderText } from '../components/util';
import { db } from '../firebase/firebase';

export const Questions: React.FunctionComponent = () => {
  const [Question, setQuestion] = useState([]);
  useEffect(() => {
    const ref = db.collection('stealth');
    ref.onSnapshot(query => {
      const objs: ((prevState: any[]) => any[]) | { id: string }[] = [];
      query.forEach(doc => {
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setQuestion(objs);
    });
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <MainContainer>
      <QuestionContainer>
        <QuestionView>
          <QuizText center small heavy>
            Fill in the missing word
          </QuizText>

          {Question.map(obj => (
            <FirebaseView id={obj.id}>
              <HeaderText>{obj.quiz}</HeaderText>
            </FirebaseView>
          ))}

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
  background-color: #81c2e6;
`;
const QuestionContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 0 1px;
  margin-bottom: 0px;
`;
const QuestionView = styled.View`
  background-color: #1b3847;
  margin-bottom: 0px;
  border-radius: 50px;
  width: 100%;
  height: 650px;
  justify-content: flex-end;
`;

const ContinueButton = styled.TouchableOpacity`
  background-color: #1d2b33;
  justify-content: center;
  margin: 60px 20px;
  border-radius: 25px;
  padding: 0 40px;
  height: 50px;
  width: 350px;
`;

const ButtonText = styled(Text)``;
const QuizText = styled(Text)`
  justify-content: flex-end;
  margin-bottom: 300px;
`;

const FirebaseView = styled.View``;
