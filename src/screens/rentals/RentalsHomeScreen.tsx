import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RefreshControl } from 'react-native';
import { DarkContainer, Text } from '../../components/util';
import { Rental } from '../../api/graphql/generated/graphql';
import { Context as AuthContext } from '../../context/auth/AuthContext';
import { Context as RentalsContext } from '../../context/rentals/RentalsContext';
import { RentalListItem } from '../../components/rentals';





const filterData = [
  {
    type: 'Category',
    name: 'Commercial',
    color: '#da636f',
  },
  {
    type: 'Category',
    name: 'Residential',
    color: '#b863da',
  },
  {
    type: 'Category',
    name: 'Religious',
    color: '#63ccda',
  },
  {
    type: 'Category',
    name: 'Industrial',
    color: '#63da77',
  },
  {
    type: 'RentalOwner',
    name: 'Owner 1',
    color: '#63daca',
  },
  {
    type: 'RentalOwner',
    name: 'Owner 2',
    color: '#d4da63',
  },
  {
    type: 'RentalOwner',
    name: 'Owner 3',
    color: '#da9363',
  },
  {
    type: 'RentalOwner',
    name: 'Owner 4',
    color: '#acda63',
  },
  {
    type: 'RentalOwner',
    name: 'Owner 5',
    color: '#dab063',
  },
];

export const RentalsHomeScreen: React.FC = () => {
  const { state: authState } = useContext(AuthContext);
  const { state: rentalsState, loadMyRentals } = useContext(RentalsContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const { isLoading, rentalsLoaded, rentals } = rentalsState;
  const loadMyRentalsCallBack = React.useCallback(
    ({ id }: { id: string }) => loadMyRentals({ id }),
    [loadMyRentals],
  );

  useEffect(() => {
    if (authState?.me?.id && rentalsLoaded === false && isLoading === false) {
     // console.log({ id: authState?.me?.id })
      loadMyRentalsCallBack({ id: authState?.me?.id });
    }
  }, [authState?.me?.id, rentalsLoaded, isLoading, loadMyRentalsCallBack]);



  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <RentalsScreenContainer>
      <StatusBar backgroundColor="#f2636f" />
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
          Rentals
        </HeaderText>
        <PrimaryActionContainer>
          <AddRentalButton
            onPress={() =>
              navigation.navigate('MainStack', {
                screen: 'Rentals',
                params: {
                  screen: 'AddRental',
                },
              })
            }
          >
            <ButtonCopy>
              <MaterialCommunityIcons name="plus" size={24} color="#1e1e1e" />
              <Text large center bold color="#1e1e1e">
                Add Rental
              </Text>
            </ButtonCopy>
          </AddRentalButton>
        </PrimaryActionContainer>
      </HeaderContainer>
      <FilterControls>
        <Label small>Filter Options</Label>
        <DefaultTypeFilters horizontal showsHorizontalScrollIndicator={false}>
          {filterData
            .filter(filter => filter.type === 'Category')
            .map(filter => (
              <Filter key={filter.name} color={filter.color}>
                <Text color="black">{filter.name}</Text>
              </Filter>
            ))}
        </DefaultTypeFilters>
        <DefaultOwnerFilters horizontal showsHorizontalScrollIndicator={false}>
          {filterData
            .filter(filter => filter.type === 'RentalOwner')
            .map(filter => (
              <Filter key={filter.name} color={filter.color}>
                <Text color="black">{filter.name}</Text>
              </Filter>
            ))}
        </DefaultOwnerFilters>
      </FilterControls>
      <RentalsListContainer>
        <Text medium bold margin="0px 0px 10px 0px">Rentals</Text>
        {isLoading && <Text center>Loading rentals</Text>}
        {rentals?.length ? (
          <RentalsList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  loadMyRentals({ id: authState?.me?.id }, () =>
                    setRefreshing(false),
                  );
                }}
              />
            }
          >
            {rentals.map((rental: Rental) => (
              <RentalListItem rental={rental} key={rental?.id} />
            ))}
          </RentalsList>
        ) : (
          <NoRentals>
            <MaterialIcons name="house" size={108} color="#dbdbdb" />
            <Text large>No Rentals</Text>
            <Text center>
              Want to manage your rental properties and lease information, we
              can help. Get started now with our Wizard
            </Text>
          </NoRentals>
        )}
      </RentalsListContainer>
    </RentalsScreenContainer>
  );
};

export default RentalsHomeScreen;

const RentalsScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
`;

const FilterControls = styled.View`
  padding: 0 30px;
  margin-bottom: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const FilterList = styled.ScrollView`
  flex-grow: 0;
  margin-bottom: 5px;
`;

const DefaultTypeFilters = styled(FilterList)``;
const DefaultOwnerFilters = styled(FilterList)``;

interface CustomFilterProps {
  readonly color?: string;
}

const Filter = styled.TouchableOpacity<CustomFilterProps>`
  background-color: ${({ color }) => color ?? '#f2636f'};
  border-radius: 3px;
  align-items: center;
  margin-right: 8px;
  padding: 5px 10px;
`;

const RentalsListContainer = styled.View`
  flex: 1;
  padding: 30px;
  padding-top: 0;
`;

const NoRentals = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;

const AddRentalButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#f0cbce' : '#dbdbdb')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  justify-content: center;
  margin: 10px 0;
  border-radius: 25px;
  padding: 0 40px;
  height: 30px;
`;

const PrimaryActionContainer = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

const ButtonCopy = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled(Text)`
  margin: 10px 0;
`;
const RentalsList = styled.ScrollView``;
