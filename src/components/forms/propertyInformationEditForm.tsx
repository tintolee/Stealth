import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { DarkContainer } from '../util';
import _ from 'lodash';
import {
  AddressComponent,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  PlaceType,
  Styles,
} from 'react-native-google-places-autocomplete';

import { StatusBar } from 'expo-status-bar';
import { RouteProp, useRoute } from '@react-navigation/native';
import Form from './Form';
import { Text } from '../util';
import { Animated, useWindowDimensions } from 'react-native';
import { Context as RentalsContext } from '../../context/rentals/RentalsContext';
import { AddressInput } from '../../api/graphql/generated/graphql';
import { ValidatedTextInput } from './ValidatedTextInput';
import { Rental } from '../../api/graphql/generated/graphql';
import { RentalsStackParamList } from '../../stacks/rentals';

const validationSchema = Yup.object().shape({
  line: Yup.string().required(),
  line2: Yup.string(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  postalCode: Yup.string().required(),
  country: Yup.string().required(),
});


export const propertyInformationEditForm: React.FC<{ rental: Rental }> = ({
rental,
}: {
  rental: Rental;
}) => {
  const route = useRoute<RouteProp<RentalsStackParamList, 'EditRentals'>>();
  console.log(route);
  
  const {updateRentalAdressInfo} = useContext(RentalsContext);
  ;
  
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const initialValues = {
    line: '',
    line2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  };
  
  const getComponentOfType = (
    components: AddressComponent[],
    typeName: PlaceType,
  ): string | undefined => {
    return components.find(addressComponent => {
      return addressComponent.types.includes(typeName);
    })?.long_name;
  };
  const getAddressFromPlaceDetailData = (
    detail: GooglePlaceDetail,
  ): AddressInput => {
    return {
      line: `${
        getComponentOfType(detail.address_components, 'street_number') ?? ''
      } ${getComponentOfType(detail.address_components, 'route') ?? ''}`.trim(),
      line2:
        getComponentOfType(detail.address_components, 'neighborhood') ?? '',
      city: getComponentOfType(detail.address_components, 'locality') ?? '',
      state: getComponentOfType(
        detail.address_components,
        'administrative_area_level_1',
      ),
      postalCode: getComponentOfType(detail.address_components, 'postal_code'),
      zip: getComponentOfType(detail.address_components, 'postal_code'),
      country: getComponentOfType(detail.address_components, 'country'),
    };
  };
 

  return (
    <Container>
  <StatusBar/>
  
  <Formik
  initialValues={initialValues}
  onSubmit={values =>
    updateRentalAdressInfo({ address: values },() =>
    navigation.navigate('RentalDetails', { screen: 'Summary', rental })
    )}
  validationSchema={validationSchema}
  >
  {props => (
    <Form>
      <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(resultData, details = null) => {
              // 'details' is provided when fetchDetails = true
              const addressData = details
                ? getAddressFromPlaceDetailData(details)
                : null;

              console.log({
                details,
              });
              if (addressData) {
                Object.keys(addressData).forEach((key: string) =>
                  props.handleChange(key)(
                    (addressData as Record<string, any>)[key],
                  ),
                );
              }
            }}
            fetchDetails
            suppressDefaultStyles
            styles={autocompleteStyles}
            onFail={console.log}
            onNotFound={console.log}
            textInputProps={{
              placeholderTextColor: '#d3c8c7',
              placeholder: 'Search Address',
              selectionColor: '#d3c8c7',
            }}
            query={{
              key: 'AIzaSyAjWPE343vgHUTlyImh7LeKQo8WeTDkvKk',
              language: 'en',
              components: 'country:ng',
            }}
          />
      <AddressFormContainer>
        <TextInput
          label="Address Line 1"
          name="line"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
  
        <TextInput
          label="Address Line 2"
          name="line2"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
  
        <TextInput
          label="City"
          name="city"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
  
        <TextInput
          label="State"
          name="state"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
  
        <TextInput
          label="Postal code"
          name="postalCode"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
  
        <TextInput
          label="Country"
          name="country"
          type="text"
          fontSize={16}
          labelFontSize={14}
          baseColor="#d3c8c7"
          tintColor="#d3c8c7"
          textColor="#d3c8c7"
          labelTextStyle={{ fontFamily: 'Montserrat' }}
        />
      </AddressFormContainer>
      <ContinueButton
        disabled={!props.isValid || !props.dirty}
        onPress={props.handleSubmit as (values: any) => void}
      >
        <Text large heavy center>
          Update 
        </Text>
      </ContinueButton>
    </Form>
  )}
  </Formik>

    </Container>
  );
};

export default propertyInformationEditForm;

const ContinueButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#f0cbce' : '#f2636f')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
`;

const Container=styled(DarkContainer)`
/* border-color: green;
border-width: 1px;
border-style: dashed; */
padding-top: 70px;

`

const autocompleteStyles: Partial<Styles> = {
  container: {
    marginBottom: 80,
  },
  textInputContainer: {
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#d3c8c7',
    paddingBottom: 10,
  },
  textInput: {
    fontSize: 18,
    color: '#d3c8c7',
    backgroundColor: '#1e1e1e',
    fontFamily: 'Montserrat',
  },
  listView: {
    marginTop: 30,
  },
  description: {
    fontSize: 15,
    paddingVertical: 5,
    color: '#d3c8c7',
    backgroundColor: '#1e1e1e',
    fontFamily: 'Montserrat',
  },
  poweredContainer: {
    display: 'none',
  },
};

const TextInput = styled(ValidatedTextInput)`
  font-family: 'Montserrat';
`;

const LastTextInput = styled(TextInput)`
  padding-bottom: 20px;
`;
const AddressFormContainer = styled.ScrollView`
  flex: 1;
`;
