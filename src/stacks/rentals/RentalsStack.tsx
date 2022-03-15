import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { WizardStack } from './add-rental-wizard';
import { Animated, LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { RentalsHomeScreen } from '../../screens/rentals';
import propertyInformationEditForm  from '../../components/forms/propertyInformationEditForm';
import { Rental } from '../../api/graphql/generated/graphql';
const Stack = createNativeStackNavigator<RentalsStackParamList>();
import AllNewRentalApplicantsScreen from '../../screens/rentals/AllNewRentalApplicants';
import NewRentalApplicantsScreen from '../../screens/rentals/NewRentalApplicants';
import RentalUnitDetailsScreen from '../../screens/rentals/rental-detail/RentalUnitDetailsScreen'

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 100;
const TAB_BAR_HEIGHT = 48;
const HEADER_TEXT_COLLAPSED_SCALE = 0.7;

 export type RentalsStackParamList = {
  AddRental: undefined;
  RentalsHomeScreen: undefined;
  RentalDetails: undefined;
  EditRentals: {
    rental: Rental;
  } ;
  AllNewApplicants:undefined;
  NewApplicants:undefined;
  RentalUnitDetails:undefined
};

export const RentalsStack: React.FC = () => {


  const [layout, setLayout] = useState<LayoutRectangle>();
  const [headerTextlayout, setHeaderTextLayout] = useState<LayoutRectangle>();
  // console.log({ layout });

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerLayoutHeight = useMemo(() => {
    return layout?.height || HEADER_MAX_HEIGHT;
  }, [layout?.height]);

  const headerTextLayoutHeight = useMemo(() => {
    return headerTextlayout?.height
      ? headerTextlayout.height * HEADER_TEXT_COLLAPSED_SCALE
      : HEADER_MIN_HEIGHT;
  }, [headerTextlayout?.height]);

  const HEADER_SCROLL_DISTANCE =
    headerLayoutHeight - headerTextLayoutHeight - TAB_BAR_HEIGHT;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, HEADER_SCROLL_DISTANCE - 40],
    extrapolate: 'clamp',
  });

  const tabBarTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      headerLayoutHeight,
      headerLayoutHeight - HEADER_SCROLL_DISTANCE,
    ],
    extrapolate: 'clamp',
  });

  const screenTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [headerLayoutHeight + 48 + 15, headerLayoutHeight + 48 + 15],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, HEADER_TEXT_COLLAPSED_SCALE],
    extrapolate: 'clamp',
  });

  const getHeight = useCallback(
    (event: LayoutChangeEvent) =>
      event.nativeEvent.layout.height !== layout?.height &&
      setLayout(event.nativeEvent.layout),
    [layout?.height],
  );
  const getHeaderTextHeight = useCallback(
    (event: LayoutChangeEvent) =>
      event.nativeEvent.layout.height !== headerTextlayout?.height &&
      setHeaderTextLayout(event.nativeEvent.layout),
    [headerTextlayout?.height],
  );
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RentalsHomeScreen" component={RentalsHomeScreen} />
      <Stack.Screen name="AddRental" component={WizardStack} />
      <Stack.Screen name="RentalUnitDetails">
      {props => (
            <RentalUnitDetailsScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Stack.Screen>
      <Stack.Screen name="EditRentals" component={propertyInformationEditForm} />
      <Stack.Screen name="AllNewApplicants" component={AllNewRentalApplicantsScreen} />
      <Stack.Screen name="NewApplicants" component={NewRentalApplicantsScreen} options={({route})=>({
                title:route.params.name,
              })}/>
    </Stack.Navigator>
  );
};

export default RentalsStack;
