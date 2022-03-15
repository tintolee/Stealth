import React, { useContext } from 'react';
import { StyleSheet, Platform , ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { FieldArray, Formik } from 'formik';
import styled from 'styled-components/native';
import _ from 'lodash';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Form from '../Form';
import { Text } from '../../util';
import { Context as RentalsContext } from '../../../context/rentals/RentalsContext';
import { Maybe, RentalUnit } from '../../../api/graphql/generated/graphql';
import { ValidatedTextInput } from '../ValidatedTextInput';
import { ValidatedPicker as Picker } from '../ValidatedPicker';
import { ValidatedCheckbox } from '../ValidatedCheckbox';





const UnitDataValidationSchema = Yup.object().shape({
  description: Yup.string().required('Description is required'),
  amenities: Yup.object().shape({
    bedrooms: Yup.number(),
    bathrooms: Yup.number(),
    toilets: Yup.number(),
    parking: Yup.boolean(),
  }),
});
const validationSchema = Yup.object().shape({
  units: Yup.array().of(UnitDataValidationSchema),
  sameAmenities: Yup.boolean().oneOf([true, false]),
  unitData: UnitDataValidationSchema,
});

export const AmenitiesForm = (): JSX.Element => {

 

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { state, setWizardRentalUnitsInfo } = useContext(RentalsContext);
  

  const { newRental } = state;

  const options = Array(20)
    .fill(1)
    .map((x, y) => x + y)
    .map(option => ({
      label: `${option}`,
      value: option,
    }));

  const rentalUnitsArray = newRental?.noOfUnits
    ? Array(parseInt(newRental.noOfUnits, 10))
        .fill(1)
        .map((x, y) => x + y)
        .map(unitNumber => {
          const unit: RentalUnit = {
            description: `Unit ${unitNumber}`,
            amenities: {
              bedrooms: 0,
              bathrooms: 0,
              parking: false,
              toilets: 0,
            },
          };
          return unit;
        })
    : [];

  const initialValues = {
    units: rentalUnitsArray,
    sameAmenities: false,
    unitData: {
      description: `Unit`,
      amenities: {
        bedrooms: 0,
        bathrooms: 0,
        parking: false,
        toilets: 0,
      },
    },
  };



  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const units: Maybe<Array<RentalUnit>> = values?.sameAmenities
          ? Array(parseInt(newRental.noOfUnits, 10))
              .fill(1)
              .map((unitNumber, idx) => ({
                ...values?.unitData,
                description: `Unit ${unitNumber + idx}`,
              }))
          : values?.units;

        
        setWizardRentalUnitsInfo({ units}, state, () =>
          navigation.navigate('MainStack', {
            screen: 'Rentals',
            params: {
              screen: 'RentalsHomeScreen',
            },
          }),
        );
      }}
      validationSchema={validationSchema}
    >
      {props => (
        <Form>
          <AmenitiesFormContainer>
            <CheckboxControlRow>
              <Checkbox
                checked={props.values?.sameAmenities}
                value={props.values?.sameAmenities}
                name="sameAmenities"
                color="#d3c8c7"
                type="checkbox"
                onValueChange={() =>
                  props.setFieldValue(
                    'sameAmenities',
                    !props.values?.sameAmenities,
                  )
                }
              />
              <Text>Same Amenities</Text>
            </CheckboxControlRow>
            {props.values.sameAmenities ? (
              <UnitFormContainer>
                <UnitForm>
                  <TextInput
                    label="Name"
                    name="unitData.description"
                    type="text"
                    fontSize={16}
                    labelFontSize={14}
                    baseColor="#d3c8c7"
                    tintColor="#d3c8c7"
                    textColor="#d3c8c7"
                    labelTextStyle={{ fontFamily: 'Montserrat' }}
                  />
                  <PickersContainer>
                    <PickersRow>
                      <PickerControl>
                        <Label small>Bathrooms</Label>
                        <Picker
                          useNativeAndroidPickerStyle={false}
                          placeholder={{ label: 'Select' }}
                          style={
                            Platform.OS === 'ios'
                              ? pickerSelectStyles.inputIOS
                              : pickerSelectStyles.inputAndroid
                          }
                          onValueChange={(value: string) =>
                            props.setFieldValue(
                              `unitData.amenities.bathrooms`,
                              value,
                            )
                          }
                          textInputProps={{
                            style: textInputStyle.textStyle,
                          }}
                          Icon={() => (
                            <MaterialCommunityIcons
                              name="chevron-down"
                              size={20}
                              style={{ color: '#d3c8c7' }}
                              color="black"
                            />
                          )}
                          items={options}
                        />
                      </PickerControl>
                      <PickerControl>
                        <Label small>Bedrooms</Label>
                        <Picker
                          useNativeAndroidPickerStyle={false}
                          placeholder={{ label: 'Select' }}
                          style={
                            Platform.OS === 'ios'
                              ? pickerSelectStyles.inputIOS
                              : pickerSelectStyles.inputAndroid
                          }
                          textInputProps={{
                            style: textInputStyle.textStyle,
                          }}
                          onValueChange={(value: string) =>
                            props.setFieldValue(
                              `unitData.amenities.bedrooms`,
                              value,
                            )
                          }
                          Icon={() => (
                            <MaterialCommunityIcons
                              name="chevron-down"
                              size={20}
                              style={{ color: '#d3c8c7' }}
                              color="black"
                            />
                          )}
                          items={options}
                        />
                      </PickerControl>
                    </PickersRow>
                    <PickersRow>
                      <PickerControl>
                        <Label small>Toilets</Label>
                        <Picker
                          useNativeAndroidPickerStyle={false}
                          placeholder={{ label: 'Select' }}
                          style={
                            Platform.OS === 'ios'
                              ? pickerSelectStyles.inputIOS
                              : pickerSelectStyles.inputAndroid
                          }
                          onValueChange={(value: string) =>
                            props.setFieldValue(
                              `unitData.amenities.toilets`,
                              value,
                            )
                          }
                          textInputProps={{
                            style: textInputStyle.textStyle,
                          }}
                          Icon={() => (
                            <MaterialCommunityIcons
                              name="chevron-down"
                              size={20}
                              style={{ color: '#d3c8c7' }}
                              color="black"
                            />
                          )}
                          items={options}
                        />
                      </PickerControl>
                      <PickerControl>
                        <CheckboxControl>
                          <CheckBoxLabel>Parking?</CheckBoxLabel>
                          <Checkbox
                            checked={props.values?.unitData.amenities?.parking}
                            value={props.values?.unitData.amenities?.parking}
                            name="receiveNewsletters"
                            color="#d3c8c7"
                            type="checkbox"
                            onValueChange={() =>
                              props.setFieldValue(
                                `unitData.amenities.parking`,
                                !props.values?.unitData.amenities?.parking,
                              )
                            }
                          />
                        </CheckboxControl>
                      </PickerControl>
                    </PickersRow>
                  </PickersContainer>
                </UnitForm>
              </UnitFormContainer>
            ) : (
              <FieldArray
                name="units"
                render={() => (
                  <UnitFormContainer>
                    {props.values.units.map((unit, index) => (
                      <UnitForm key={_.identity(index)}>
                        <TextInput
                          label="Name"
                          name={`units.${index}.description`}
                          type="text"
                          fontSize={16}
                          labelFontSize={14}
                          baseColor="#d3c8c7"
                          tintColor="#d3c8c7"
                          textColor="#d3c8c7"
                          labelTextStyle={{ fontFamily: 'Montserrat' }}
                        />
                        <PickersContainer>
                          <PickersRow>
                            <PickerControl>
                              <Label small>Bathrooms</Label>
                              <Picker
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: 'Select' }}
                                style={
                                  Platform.OS === 'ios'
                                    ? pickerSelectStyles.inputIOS
                                    : pickerSelectStyles.inputAndroid
                                }
                                onValueChange={(value: string) =>
                                  props.setFieldValue(
                                    `units.${index}.amenities?.bathrooms`,
                                    value,
                                  )
                                }
                                textInputProps={{
                                  style: textInputStyle.textStyle,
                                }}
                                Icon={() => (
                                  <MaterialCommunityIcons
                                    name="chevron-down"
                                    size={20}
                                    style={{ color: '#d3c8c7' }}
                                    color="black"
                                  />
                                )}
                                items={options}
                              />
                            </PickerControl>
                            <PickerControl>
                              <Label small>Bedrooms</Label>
                              <Picker
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: 'Select' }}
                                style={
                                  Platform.OS === 'ios'
                                    ? pickerSelectStyles.inputIOS
                                    : pickerSelectStyles.inputAndroid
                                }
                                textInputProps={{
                                  style: textInputStyle.textStyle,
                                }}
                                onValueChange={(value: string) =>
                                  props.setFieldValue(
                                    `units.${index}.amenities?.bedrooms`,
                                    value,
                                  )
                                }
                                Icon={() => (
                                  <MaterialCommunityIcons
                                    name="chevron-down"
                                    size={20}
                                    style={{ color: '#d3c8c7' }}
                                    color="black"
                                  />
                                )}
                                items={options}
                              />
                            </PickerControl>
                          </PickersRow>
                          <PickersRow>
                            <PickerControl>
                              <Label small>Toilets</Label>
                              <Picker
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: 'Select' }}
                                style={
                                  Platform.OS === 'ios'
                                    ? pickerSelectStyles.inputIOS
                                    : pickerSelectStyles.inputAndroid
                                }
                                onValueChange={(value: string) =>
                                  props.setFieldValue(
                                    `units.${index}.amenities?.toilets`,
                                    value,
                                  )
                                }
                                textInputProps={{
                                  style: textInputStyle.textStyle,
                                }}
                                Icon={() => (
                                  <MaterialCommunityIcons
                                    name="chevron-down"
                                    size={20}
                                    style={{ color: '#d3c8c7' }}
                                    color="black"
                                  />
                                )}
                                items={options}
                              />
                            </PickerControl>
                            <PickerControl>
                              <CheckboxControl>
                                <CheckBoxLabel>Parking?</CheckBoxLabel>
                                <Checkbox
                                  checked={
                                    props.values?.units[index].amenities
                                      ?.parking
                                  }
                                  value={
                                    props.values?.units[index].amenities
                                      ?.parking
                                  }
                                  name="receiveNewsletters"
                                  color="#d3c8c7"
                                  type="checkbox"
                                  onValueChange={() =>
                                    props.setFieldValue(
                                      `units.${index}.amenities.parking`,
                                      !props.values?.units[index].amenities
                                        ?.parking,
                                    )
                                  }
                                />
                              </CheckboxControl>
                            </PickerControl>
                          </PickersRow>
                        </PickersContainer>
                      </UnitForm>
                    ))}
                  </UnitFormContainer>
                )}
              />
            )}
          </AmenitiesFormContainer>
          <ContinueButton
            disabled={!props.isValid || !props.dirty}
            onPress={
              props.handleSubmit as (values: any) => void
             }
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
export default AmenitiesForm;

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

const AmenitiesFormContainer = styled.ScrollView`
  flex: 1;
`;

const UnitFormContainer = styled.View``;

const UnitForm = styled.View`
  border-radius: 5px;
  border-color: #db4437;
  border-width: 1px;
  border-style: solid;
  padding: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
`;

const Label = styled(Text)`
  margin: 10px 0;
`;

const CheckBoxLabel = styled(Text)`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const PickersContainer = styled.View``;

const PickersRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PickerControl = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CheckboxControl = styled.View`
  flex: 1;
  width: 100%;
`;

const CheckboxControlRow = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled(ValidatedCheckbox)`
  align-self: flex-start;
`;

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    iconContainer: {
      top: 5,
      right: 15,
    },
  },
  inputAndroid: {
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    fontFamily: 'Montserrat',
    iconContainer: {
      top: 5,
      right: 15,
    },
  },
};

const textInputStyle = StyleSheet.create({
  textStyle: {
    color: '#d3c8c7',
    minWidth: '100%',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
  },
});
