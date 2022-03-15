import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Animated, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/util';
import { RentalDetailStackParamList } from '../../../stacks/rentals';
import RentalUnitsListItem from '../../../components/rentals/RentalUnitsListItem';
import Faker from '../../../Faker';

export const RentalUnitsScreen: React.FC<{
  scrollY: Animated.Value;
  screenTranslateY: Animated.AnimatedInterpolation;
}> = ({ scrollY, screenTranslateY }) => {
  const route = useRoute<RouteProp<RentalDetailStackParamList, 'Units'>>();

  const { rental } = route.params;
  

  const { width } = useWindowDimensions();
rental.units
  return (
    <Container
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
    >
      <StatusBar backgroundColor="#f2636f" />
      <ContentContainer style={{ paddingTop: screenTranslateY }}>
        <CardRow>
          <Text medium bold margin="0px 0px 10px 0px">
            Units
          </Text>
        </CardRow>
        <Card width={width}>
          <Scroll>
          {
        rental.units?.map((unit,index)=> 
        
        <RentalUnitsListItem unit={unit} index={index} key={unit.id}/>
      
        )
      }

          </Scroll>
        </Card>
        <Card width={width}>
          <Text>Graph</Text>
        </Card>
      </ContentContainer>
    </Container>
  );
};

export default RentalUnitsScreen;

const ContentContainer = styled(Animated.View)`
  padding-bottom: 30px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Animated.ScrollView)`
  background-color: #1e1e1e;
  padding: 10px;
`;

const Card = styled.View<{ readonly width?: number }>`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #f2636f2b;
  ${({ width }) => (width ? `height: ${width * 0.75}px;` : '')};
`;

const RentalUnitsListContainer = styled.View`
  flex: 1;
  padding: 30px;
  padding-top: 0;
`;


const Scroll = styled.ScrollView`
  flex-grow: 0;
  margin-bottom: 5px;
`;
