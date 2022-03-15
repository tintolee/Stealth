import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import _ from 'lodash';

import Form from '../Form';
import { Text } from '../../util';

import { Context as RentalsContext } from '../../../context/rentals/RentalsContext';
import { useGetRentalTypesQuery } from '../../../api/graphql/generated/graphql';
import CategorizedOptionsSelector from '../../CategorizedOptionsSelector';

const validationSchema = Yup.object().shape({
  rentalType: Yup.string().required(),
});

const initialValues = {
  rentalType: '',
};

export const SelectRentalTypeForm = (): JSX.Element => {
  const { setWizardRentalType } = useContext(RentalsContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { data, loading, error } = useGetRentalTypesQuery();

  const categorizedOptions = data?.rentalTypes?.length
    ? _.chain(
        data.rentalTypes.map(rentalType => ({
          label: rentalType.label,
          value: rentalType.id,
          category: rentalType.category,
        })),
      )
        .groupBy('category')
        .map((value, key) => ({ category: key, options: value }))
        .value()
    : [];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values =>
        setWizardRentalType(values, () =>
          navigation.navigate('MainStack', {
            screen: 'Rentals',
            params: {
              screen: 'AddRental',
              params: {
                screen: 'UnitsScreen',
              },
            },
          }),
        )
      }
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          {data?.rentalTypes && !loading && (
            <CategorizedOptionsSelector
              handleChange={props.setFieldValue}
              fieldName="rentalType"
              selected={props.values?.rentalType}
              categorizedOptions={categorizedOptions}
            />
          )}
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
export default SelectRentalTypeForm;

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
