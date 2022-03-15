import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import Form from './Form';
import ValidatedTextInput from './ValidatedTextInput';
import { Text } from '../util';

import { Context as AuthContext } from '../../context/auth/AuthContext';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Must be valid email'),
});

// interface Props {
//   handleSubmit: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
// }
const initialValues = {
  email: '',
};

export const EmailVerificationForm = (): JSX.Element => {
  const { validateEmail } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values =>
        validateEmail(values.email, () =>
          navigation.navigate('AuthStack', {
            screen: 'SignUp',
            params: {
              screen: 'AddInfo',
            },
          }),
        )
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <TextInput
            label="Email"
            name="email"
            type="email"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />

          <ContinueButton
            disabled={!props.isValid || !props.dirty}
            onPress={props.handleSubmit as (values: any) => void}
          >
            <Text large heavy center>
              Continue
            </Text>
          </ContinueButton>
        </Form>
      )}
    </Formik>
  );
};
export default EmailVerificationForm;

const ContinueButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#f0cbce' : '#f2636f')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
`;

const TextInput = styled(ValidatedTextInput)`
  font-family: 'Montserrat';
`;
