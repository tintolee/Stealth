import React, { useContext } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Button } from 'react-native';
import styled from 'styled-components/native';
import Form from './Form';
import ValidatedTextInput from './ValidatedTextInput';
import { Text } from '../util';

import { Context as AuthContext } from '../../context/auth/AuthContext';
import {
  useVerifyAccountMutation,
  useVerifyActivationLinkMutation,
} from '../../api/graphql/generated/graphql';

const validationSchema = Yup.object().shape({
  pincode: Yup.string().matches(/\b\d{6}\b/, {
    message: 'Must be exactly 6 numbers',
    excludeEmptyString: true,
  }),
});

const initialValues = {
  pincode: '',
};

export const PincodeVerificationForm = (): JSX.Element => {
  const { state, validateAccountPincode } = useContext(AuthContext);
  const [verifyActivationLink] = useVerifyActivationLinkMutation();
  const [verifyAccount] = useVerifyAccountMutation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values =>
        validateAccountPincode({
          verifyActivationLink,
          verifyAccount,
          values,
          state,
        })
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <TextInput
            label="Pin"
            name="pincode"
            type="number"
            fontSize={18}
            labelFontSize={16}
            keyboardType="phone-pad"
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
export default PincodeVerificationForm;

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
