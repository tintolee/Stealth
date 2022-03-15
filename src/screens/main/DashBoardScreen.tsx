import React from 'react';
import {Text, DarkContainer} from '../../components/util';
import styled from 'styled-components/native';
import { Animated} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



export const DashBoardScreen: React.FC = () => {
    scrollY: Animated.Value;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <DashboardScreenContainer>
       <StatusBar backgroundColor="#f2636f" />  
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
          Dashboard
        </HeaderText>
      </HeaderContainer>
    
      <Card>
        <SectionHeading>
          <Text medium margin="20px 0">
            Rental Applications
          </Text>
          <TextLink  onPress={()=> navigation.navigate('RentalApplications')}>
            <Text small color="#f2636f">
              View All
            </Text>
          </TextLink>
        </SectionHeading>
        <Card>
          <CardBody>
            <CardRow>
              
            </CardRow>
            <CardRow>
             
              
            </CardRow>
            <CardRow>
              
            </CardRow>
          </CardBody>
        </Card>
        </Card> 
        <Card>
        <SectionHeading>
          <Text medium margin="20px 0">
            Activities
          </Text>
          <TextLink onPress={()=> navigation.navigate('Activities')}>
            <Text small color="#f2636f">
              View All
            </Text>
          </TextLink>
        </SectionHeading>
        <Card>
          <CardBody>
            <CardRow>
              
            </CardRow>
            <CardRow>
             
              
            </CardRow>
            <CardRow>
              
            </CardRow>
          </CardBody>
        </Card>
        </Card>
        <Card>
        <SectionHeading>
          <Text medium margin="20px 0">
            Expiring Leases
          </Text>
          <TextLink onPress={()=> navigation.navigate('ExpiringLeases')}>
            <Text small color="#f2636f">
              View All
            </Text>
          </TextLink>
        </SectionHeading>
        <Card>
          <CardBody>
            <CardRow>
              
            </CardRow>
            <CardRow>
             
            </CardRow>
            <CardRow>
             
            </CardRow>
          </CardBody>
        </Card>
        </Card>
        
    </DashboardScreenContainer>
  );
};

export default DashBoardScreen;





const HeaderText = styled(Text)`
margin-top: 10px;
margin-bottom: 10px;
bottom: 5px
`;


const CardBody = styled.View`
  padding: 10px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;


const Card = styled.View<{ readonly width?: number }>`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #f2636f2b;
  ${({ width }) => (width ? `height: ${width * 0.75}px;` : '')};
  padding: 0 30px;
`;


const SectionHeading = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;



const TextLink = styled.TouchableOpacity``;


const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
  padding-top: 50px;
`;

const DashboardScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;