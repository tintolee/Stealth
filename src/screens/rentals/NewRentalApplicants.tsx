import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Text , Container, DarkContainer} from '../../components/util';
import styled from 'styled-components/native';
import ProfileScreen from '../../components/TenantProfile';

import { useRoute } from '@react-navigation/native';


export const NewRentalApplicantsScreen: React.FC = () => {

    const route=useRoute()
    

      
      
    

  return (
    
      <ScreenContainer>
       <StatusBar backgroundColor="#f2636f" />  
      
     
      <StatusBar backgroundColor="#f2636f" />  
     <ProfileScreen/>

    </ScreenContainer>
  );
};

export default NewRentalApplicantsScreen;


const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 200px;
  background-color: #f2636f;
`;

const ScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
margin-top: 40px;
margin-bottom: 10px;
`;




const Label = styled(Text)`
  margin: 10px 0;
`;

