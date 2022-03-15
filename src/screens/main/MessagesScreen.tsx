import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { Text , DarkContainer} from '../../components/util';
import { MessageStackParamList } from '../../stacks/Messages/types';
import NewMessagesScreen from '../Messages/NewMessagesScreen';
import AllMessagesScreen from '../Messages/AllMessagesScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator<MessageStackParamList>();
const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 100;
const TAB_BAR_HEIGHT = 48;
const HEADER_TEXT_COLLAPSED_SCALE = 0.7;




export const  MessagesScreen: React.FC<{
  route: RouteProp<{ }>;
}> = ({ route: navRoute }) => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
    <MessageScreenContainer>
      <StatusBar backgroundColor="#f2636f" /> 
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
          Messages
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
            width: 200,
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
          swipeEnabled: true,
        })}
      >
      <Tab.Screen name="New Messages">
      {props => (
            <NewMessagesScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}
      </Tab.Screen>
        <Tab.Screen name="All Messages" >

        {props => (
            <AllMessagesScreen
              {...props}
              scrollY={scrollY}
              screenTranslateY={screenTranslateY}
            />
          )}

        </Tab.Screen>
    
      </Tab.Navigator>
      <Icon  onPress={()=> navigation.navigate('AllTenants')}>
      <AntDesign name="plus" size={45} color="#eddedd"/>
      </Icon>
    </MessageScreenContainer>
  );

}



  

export default MessagesScreen;
const MessageScreenContainer = styled(DarkContainer)`
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


const Icon = styled.TouchableOpacity`
position: absolute;
alignItems: center;
justifyContent: center;
right:20;
bottom:50;
backgroundColor:#ed837b;
borderRadius:50
`