import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Rental } from '../../api/graphql/generated/graphql';
import { Text } from '../util';

export const RentalListItem: React.FC<{ rental: Rental }> = ({
  rental,
}: {
  rental: Rental;
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <RentalItemRow
      onPress={() =>
        navigation.navigate('RentalDetails', { screen: 'Summary', rental })
      }
    >
      <Ionicons
        name="md-home"
        size={25}
        style={{
          color: '#dbdbdb',
          marginRight: 10,
          borderWidth: 2,
          borderRadius: 20,
          borderColor: '#dbdbdb',
          padding: 3,
          paddingLeft: 6,
          paddingTop: 6,
        }}
        color="black"
      />
      <Item key={rental.id}>
        <Text medium bold>
          {rental.name}
          
          
        </Text>
        <Text small>
          {rental.address.city}, {rental.address.country}
        </Text>
      </Item>
    </RentalItemRow>
  );
};
export default RentalListItem;

const Item = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  flex: 1;
`;

const RentalItemRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: #dbdbdb21;
  border-style: solid;
`;
