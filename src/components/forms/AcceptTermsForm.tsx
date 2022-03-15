import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Button } from 'react-native';
import styled from 'styled-components/native';
import Form from './Form';
import ValidatedTextInput from './ValidatedTextInput';
import { Text } from '../util';

import { Context as AuthContext } from '../../context/auth/AuthContext';
import ValidatedCheckbox from './ValidatedCheckbox';
import {
  useRegisterMutation,
  useVerifyActivationLinkMutation,
} from '../../api/graphql/generated/graphql';

const validationSchema = Yup.object().shape({
  agreeTerms: Yup.boolean().oneOf([true], 'This field must be checked'),
  receiveNewsletters: Yup.boolean(),
});

const initialValues = {
  agreeTerms: false,
  receiveNewsletters: true,
};

export const AcceptTermsForm = (): JSX.Element => {
  const { state, registerUser } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [registerMutation] = useRegisterMutation();
  const [verifyActivationLink] = useVerifyActivationLinkMutation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(_: unknown) =>
        registerUser(
          { registerMutation, verifyActivationLink, args: state?.signupForm },
          () =>
            navigation.navigate('AuthStack', {
              screen: 'SignUp',
              params: {
                screen: 'PincodeVerify',
              },
            }),
        )
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <CheckboxControl>
            <Text>
              I agree to Casabee&apos;s <Text bold>Terms of Service</Text>,{' '}
              <Text bold>Privacy Policy</Text>, and{' '}
              <Text bold>Payments Terms</Text>
            </Text>
            <Checkbox
              checked={props.values?.agreeTerms}
              value={props.values?.agreeTerms}
              name="agreeTerms"
              color="#d3c8c7"
              type="checkbox"
              onValueChange={() =>
                props.setFieldValue('agreeTerms', !props.values?.agreeTerms)
              }
            />
          </CheckboxControl>

          <Text>
            <Text bold>Casabee</Text> will send you exclusive deals, listings,
            and push notifications. You can opt out of receiving these at any
            time in your account settings or directly from the marketing
            notification.
          </Text>

          <CheckboxControl>
            <Text>
              I want to receive messages and exclusive information from from
              Casabee
            </Text>
            <Checkbox
              checked={props.values?.receiveNewsletters}
              value={props.values?.receiveNewsletters}
              name="receiveNewsletters"
              color="#d3c8c7"
              type="checkbox"
              onValueChange={() =>
                props.setFieldValue(
                  'receiveNewsletters',
                  !props.values?.receiveNewsletters,
                )
              }
            />
          </CheckboxControl>

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
export default AcceptTermsForm;

const ContinueButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#f0cbce' : '#f2636f')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
`;

const CheckboxControl = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
  padding-right: 30px;
`;
const TextInput = styled(ValidatedTextInput)`
  font-family: 'Montserrat';
`;

const Checkbox = styled(ValidatedCheckbox)`
  /* margin: 8px; */
`;
