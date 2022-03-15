/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import {
  RentalFinancialsScreen,
  RentalUnitsScreen,
  RentalSummaryScreen,
} from '../../../screens/rentals/rental-detail';
import { Text } from '../../../components/util';
import { Rental } from '../../../api/graphql/generated/graphql';
import { RentalDetailStackParamList } from './types';

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 100;
const TAB_BAR_HEIGHT = 48;
const HEADER_TEXT_COLLAPSED_SCALE = 0.7;
const Tab = createMaterialTopTabNavigator<RentalDetailStackParamList>();

export const RentalDetailsStack: React.FC<{
  route: RouteProp<{ RentalDetails: { rental: Rental } }>;
}> = ({ route: navRoute }) => {
  const { rental } = navRoute.params;
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
    <RentalsScreenContainer>
      <StatusBar backgroundColor="#f2636f" />
      <HeaderContainer
        onLayout={getHeight}
        style={{
          // opacity: imageOpacity,
          top: headerTranslateY,
        }}
      >
        <Animated.View
          style={{
            top: titleTranslateY,
            transform: [{ scale: titleScale }],
          }}
        >
          <HeaderText center bold large onLayout={getHeaderTextHeight}>
            {rental?.name}
            {/* {'\n'}
            <Text bold>
              {rental?.units?.length
                ? `(${rental?.units?.length} unit${
                    rental?.units?.length > 1 ? 's' : ''
                  })`
                : ''}
            </Text> */}
          </HeaderText>
        </Animated.View>
        <Animated.View
          style={{
            opacity: imageOpacity,
          }}
        >
          <Text small center>
            {rental?.address.line}, {rental?.address.line2},{' '}
            {rental?.address.city}
          </Text>
          <CashflowMetricsContainer>
            <OutstandingContainer>
              <OutstandingText bold>Outstanding</OutstandingText>
              <OutstandingText large heavy>
                N1,250,000
              </OutstandingText>
            </OutstandingContainer>
            <CashflowContainer>
              <DepositsText bold>Deposits</DepositsText>
              <DepositsText>N500,000</DepositsText>
            </CashflowContainer>
          </CashflowMetricsContainer>
        </Animated.View>
      </HeaderContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#DBDBDB',
          },
          tabBarItemStyle: {
            width: 95,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            backgroundColor: '#F2636F',
            position: 'absolute',
            top: tabBarTranslateY as unknown as number,
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
          },
          swipeEnabled: false,
        })}
      >
        <Tab.Screen name="Summary" initialParams={{ rental }}>
          {props => (
            <RentalSummaryScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Financials" initialParams={{ rental }}>
          {props => (
            <RentalFinancialsScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Units" initialParams={{ rental }}>
          {props => (
            <RentalUnitsScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Files" initialParams={{ rental }}>
          {props => (
            <RentalSummaryScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Notes" initialParams={{ rental }}>
          {props => (
            <RentalSummaryScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </RentalsScreenContainer>
  );
};

export default RentalDetailsStack;

// const MainAreaContainer = styled.View`
//   background-color: #1e1e1e;
//   height: 1200px;
//   flex: 1;
// `;
const RentalsScreenContainer = styled.View`
  flex: 1;
  background-color: #f2636f;
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const HeaderContainer = styled(Animated.View)<{
  readonly headerTranslateY?: number;
}>`
  padding: 40px 60px;
  padding-bottom: 5px;
  justify-content: space-between;
  background-color: #f2636f;
  position: absolute;
  elevation: 1;
  z-index: 2;
  width: 100%;
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
