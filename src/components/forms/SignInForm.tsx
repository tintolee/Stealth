import React, { useContext } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Button } from 'react-native';
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
  password: '',
};

export const SignInForm = (): JSX.Element => {
  const { logIn } = useContext(AuthContext);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={logIn}
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
          <TextInput
            label="Password"
            type="password"
            name="password"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />
          <ContinueButton onPress={props.handleSubmit as (values: any) => void}>
            <Text large heavy center>
              Continue
            </Text>
          </ContinueButton>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;

const ContinueButton = styled.TouchableOpacity`
  background-color: #f2636f;
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
`;

const TextInput = styled(ValidatedTextInput)`
  font-family: 'Montserrat';
`;
