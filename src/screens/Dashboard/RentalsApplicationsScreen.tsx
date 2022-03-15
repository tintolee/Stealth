import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text , DarkContainer} from '../../components/util';
import styled from 'styled-components/native';


export const RentalsApplicationScreen: React.FC = () => {
  return (
    
      <ScreenContainer>
       <StatusBar backgroundColor="#f2636f" />  
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
         Rental Applications
        </HeaderText>
      </HeaderContainer>
     
    
    </ScreenContainer>
  );
};

export default RentalsApplicationScreen;


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
