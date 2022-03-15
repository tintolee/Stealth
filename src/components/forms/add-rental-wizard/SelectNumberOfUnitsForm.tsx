import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components/native';

import Form from '../Form';
import { Text } from '../../util';

import { Context as RentalsContext } from '../../../context/rentals/RentalsContext';
import OptionsSelector from '../../OptionsSelector';

const validationSchema = Yup.object().shape({
  noOfUnits: Yup.string().required(),
});

const initialValues = {
  noOfUnits: '',
};

export const SelectNumberOfUnitsForm = (): JSX.Element => {
  const { setWizardRentalUnits } = useContext(RentalsContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const options = Array(20)
    .fill(1)
    .map((x, y) => x + y)
    .map(option => ({
      label: option,
      value: option,
    }));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values =>
        setWizardRentalUnits(values, () =>
          navigation.navigate('MainStack', {
            screen: 'Rentals',
            params: {
              screen: 'AddRental',
              params: {
                screen: 'SelectAddress',
              },
            },
          }),
        )
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <OptionsSelector
            handleChange={props.setFieldValue}
            fieldName="noOfUnits"
            selected={props.values?.noOfUnits}
            options={options}
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
export default SelectNumberOfUnitsForm;

const ContinueButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#f0cbce' : '#f2636f')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  justify-content: center;
  margin: 10px 0;
  margin-top: 50px;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
`;
