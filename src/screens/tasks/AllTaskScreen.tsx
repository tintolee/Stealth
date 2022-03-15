import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../components/util';
import { Animated, useWindowDimensions } from 'react-native';
import { TaskStackParamList } from '../../stacks/tasks/types';
import { RouteProp, useRoute } from '@react-navigation/native';

export const AllTaskScreen: React.FC <{
  scrollY: Animated.Value;
  screenTranslateY: Animated.AnimatedInterpolation;
}> = ({ scrollY, screenTranslateY }) => {
  const route = useRoute<RouteProp<TaskStackParamList, 'All Tasks'>>();
 
  
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>All Task Screen</Text>
    </Container>
  );
};

export default AllTaskScreen;
