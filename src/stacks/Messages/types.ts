// import Animated from 'react-native-reanimated';
import { Animated } from 'react-native';


export type MessageStackParamList = {
  "New Messages": {
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  "All Messages": {
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
 
};
