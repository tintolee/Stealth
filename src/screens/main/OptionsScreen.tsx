import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Container, Text } from '../../components/util';
import { Context as AuthContext } from '../../context/auth/AuthContext';

export const OptionsScreen: React.FC = () => {
  const { state,logOut } = useContext(AuthContext);
  
  return (
    <Container>
      <Text>Options</Text>
      <Text>
        {state?.me?.firstname} {state?.me?.lastname}
      </Text>
      <Text>{state?.me?.primaryEmail}</Text>
      <TempLogoutButton onPress={logOut}>
        <Text large heavy center>
          Log out
        </Text>
      </TempLogoutButton>
    </Container>
  );
};

export default OptionsScreen;

const TempLogoutButton = styled.TouchableOpacity`
  justify-content: center;
  background-color: #f2636f;
  color: #1e1e1e;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  /* margin-bottom: 10px; */
`;
