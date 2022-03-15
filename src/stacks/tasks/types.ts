// import Animated from 'react-native-reanimated';
import { Animated } from 'react-native';


export type TaskStackParamList = {
  "Requests": {
    
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  "My Tasks": {
   
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
  "All Tasks": {
  
    scrollY: Animated.Value;
    headerLayoutHeight: number;
  };
 
};
