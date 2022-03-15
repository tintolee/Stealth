
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Text } from '../util';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RentalDetailStackParamList } from '../../stacks/rentals';

export const RentalUnitsListItem: React.FC<{unit:any,index:Number}> = ({
  unit,index
  }: {
    unit:any,index:Number
  }) => {
    const route = useRoute<RouteProp<RentalDetailStackParamList, 'Units'>>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { rental } = route.params;
 

  
  return (
    <RentalUnitItemRow
      onPress={() =>
        navigation.navigate('RentalUnitDetails', {
            id:index+1,
            name:rental
        })
      }
    >
        
      <MaterialIcons
        name="apartment"
        size={24}
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
      <Item >
        <Text medium bold>
        Unit {index+1}
        </Text>
      </Item>
    </RentalUnitItemRow>
  );
};
export default RentalUnitsListItem;

const Item = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  flex: 1;
`;

const RentalUnitItemRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: #dbdbdb21;
  border-style: solid;
`;

