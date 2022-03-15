import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { MaskService } from 'react-native-masked-text';
import Form from './Form';
import ValidatedTextInput from './ValidatedTextInput';
import { omit, parseDateString, Text } from '../util';
import { Context as AuthContext } from '../../context/auth/AuthContext';
import { useRegisterMutation } from '../../api/graphql/generated/graphql';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Must be valid email'),
  dateOfBirth: Yup.date()
    .label('Date of birth')
    .transform(parseDateString)
    .required(),
  password: Yup.string().required('Password is required'),
  confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const initialValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  password: '',
  confirm: '',
  dateOfBirth: '',
};

export const AddInfoForm = (): JSX.Element => {
  const { state, updateSignUpForm } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const contextInitialisedFormValues = {
    ...initialValues,
    ...state.signupForm,
  };

  return (
    <Formik
      initialValues={contextInitialisedFormValues}
      onSubmit={values =>
        updateSignUpForm(
          {
            ...omit(values, ['confirm']),
            dateOfBirth: parseDateString(undefined, values.dateOfBirth),
          },
          () =>
            navigation.navigate('AuthStack', {
              screen: 'SignUp',
              params: {
                screen: 'Terms',
              },
            }),
        )
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <TextInput
            label="First Name"
            name="firstname"
            type="text"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />

          <TextInput
            label="Last Name"
            name="lastname"
            type="text"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />
          <Text tiny>
            {' '}
            Your name should match your bank account / BVN information.
          </Text>

          <TextInput
            label="Date of birth"
            name="dateOfBirth"
            type="text"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            onChangeText={(text: any) =>
              props.handleChange('dateOfBirth')(
                MaskService.toMask('datetime', text, {
                  format: 'DD/MM/YYYY',
                }),
              )
            }
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />
          <Text tiny>
            {' '}
            Your need to be at least 18 to sign up. Your date of birth will only
            be visible by you
          </Text>
          <TextInput
            label="Phone Number"
            name="phone"
            type="text"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            onChangeText={(text: any) =>
              props.handleChange('phone')(
                text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/\s]/gi, '')
                  .length > 11
                  ? MaskService.toMask('cel-phone', text, {
                      maskType: 'INTERNATIONAL',
                      withDDD: true,
                    })
                  : MaskService.toMask('cel-phone', text, {
                      maskType: 'BRL',
                      dddMask: '(999) ',
                    }),
              )
            }
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />

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
            name="password"
            type="password"
            fontSize={18}
            labelFontSize={16}
            baseColor="#d3c8c7"
            tintColor="#d3c8c7"
            textColor="#d3c8c7"
            labelTextStyle={{ fontFamily: 'Montserrat' }}
          />

          <TextInput
            label="Confirm Password"
            name="confirm"
            type="password"
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
              Agree & Continue
            </Text>
          </ContinueButton>
        </Form>
      )}
    </Formik>
  );
};
export default AddInfoForm;

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
