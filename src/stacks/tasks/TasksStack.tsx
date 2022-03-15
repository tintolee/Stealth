import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import{AllTaskScreen} from '../../screens/tasks/AllTaskScreen';
import{MyTaskScreen} from '../../screens/tasks/MyTaskScreen';
import{TaskRequestScreen} from '../../screens/tasks/TaskRequestScreen'


const Stack = createNativeStackNavigator<RentalsStackParamList>();

type RentalsStackParamList = {
    AllTaskScreen: undefined;
    MyTaskScreen: undefined;
    TaskRequestScreen: undefined;
};

export const TasksStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllTaskScreen" component={AllTaskScreen} />
      <Stack.Screen name="MyTaskScreen" component={MyTaskScreen} />
      <Stack.Screen name="TaskRequestScreen" component={TaskRequestScreen } />
    </Stack.Navigator>
  );
};

export default TasksStack;
