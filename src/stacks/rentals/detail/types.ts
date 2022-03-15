// import Animated from 'react-native-reanimated';
import { Animated } from 'react-native';
import { Rental } from '../../../api/graphql/generated/graphql';

export type RentalDetailStackParamList = {
  Summary: {
    rental: Rental;
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  Financials: {
    rental: Rental;
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  Units: {
    rental: Rental;
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  Files: {
    rental: Rental;
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  Notes: {
    rental: Rental;
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
};
