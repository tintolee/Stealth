import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { Text , DarkContainer} from '../../components/util';
import { TaskStackParamList  } from '../../stacks/tasks/types';
import AllTaskScreen from '../tasks/AllTaskScreen';
import MyTaskScreen from '../tasks/MyTaskScreen';
import TaskRequestScreen from '../tasks/TaskRequestScreen';

const Tab = createMaterialTopTabNavigator<TaskStackParamList>();
const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 100;
const TAB_BAR_HEIGHT = 48;
const HEADER_TEXT_COLLAPSED_SCALE = 0.7;




export const TasksScreen: React.FC<{
  route: RouteProp<{ }>;
}> = ({ route: navRoute }) => {

  const [layout, setLayout] = useState<LayoutRectangle>();
  const [headerTextlayout, setHeaderTextLayout] = useState<LayoutRectangle>();

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

    const screenTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [headerLayoutHeight + 48 + 15, headerLayoutHeight + 48 + 15],
      extrapolate: 'clamp',
    });
  
  
  return (
    <TaskScreenContainer>
      <StatusBar backgroundColor="#f2636f" /> 
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
          Tasks
        </HeaderText>
      </HeaderContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#DBDBDB',
            marginTop: 20
          },
          tabBarItemStyle: {
            width: 130,
            justifyContent: 'center',
            alignItems: 'center',
      
          },
          tabBarStyle: {
            backgroundColor: '#F2636F',
            
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#DBDBDB' : '#DBDBDB';
            return (
              <Text
                heavy={focused}
                color={color}
                style={{
                  fontSize: 11,
                  minWidth: '100%',
                  textAlign: 'center',
                }}
              >
                {route.name}
              </Text>
            );
          },
          tabBarLabelStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:0
          },
          swipeEnabled: false,
        })}
      >
      <Tab.Screen name="Requests">

      {props => (
            <TaskRequestScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
      </Tab.Screen>
    
        <Tab.Screen name="My Tasks">

        {props => (
            <MyTaskScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="All Tasks">

        {props => (
            <AllTaskScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}

        </Tab.Screen>
      </Tab.Navigator>
    </TaskScreenContainer>
  );

}



  

export default TasksScreen;

const TaskScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
margin-top: 10px;
margin-bottom: 10px;
bottom: 5px
`;

const HeaderContainer = styled.View`
padding: 0 30px;
justify-content: space-between;
min-height: 50px;
background-color: #f2636f;
padding-top: 50px;
`;

const CashflowMetricsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const OutstandingContainer = styled.View`
  padding-right: 5px;
  align-items: flex-start;
`;
const CashflowContainer = styled.View`
  align-items: flex-end;
`;
const CashflowText = styled(Text)``;

const OutstandingText = styled(CashflowText)`
  text-align: justify;
`;
const DepositsText = styled(CashflowText)`
  padding-left: 5px;
`;