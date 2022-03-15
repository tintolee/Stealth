import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';
// import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Text } from '../../../components/util';
import { RentalDetailStackParamList } from '../../../stacks/rentals';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Rental } from '../../../api/graphql/generated/graphql';

export const RentalUnitDetailsScreen: React.FC<{
  route: RouteProp<{ RentalDetails: { rental: Rental } }>;
  scrollY: Animated.Value;
  screenTranslateY: Animated.AnimatedInterpolation;
}> = ({ scrollY, screenTranslateY },{ route: navRoute }) => {
  const route = useRoute<RouteProp<RentalDetailStackParamList, 'Units'>>();

const Header = route.params.id
const rental = route.params.name

 
  
  
  // console.log({ screenTranslateY });
  const { width } = useWindowDimensions();

  
   
   const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Container
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
    >

<HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
        Unit  {Header}
        </HeaderText>
      </HeaderContainer>
      <StatusBar backgroundColor="#f2636f" />
      <ContentContainer style={{ paddingTop: screenTranslateY }}>
        <Text medium margin="10px 0">
          Unit Information
        </Text>
        <Card>
          <CardBody>
            <CardRow>
              <CardContent>
                <SubHeading bold>Address</SubHeading>
                <Text>{rental?.address?.line}</Text>
                <Text>
                  {rental?.address?.line2}, {rental?.address?.city}{' '}
                  {rental?.address?.postalCode}
                </Text>
                <Text>{rental?.address?.state}</Text>
                <Text>{rental?.address?.country}</Text>
              </CardContent>
              <CardActions>
                <MaterialCommunityIcons
                  name="map"
                  size={18}
                  style={{ color: '#f2636f', paddingRight: 5 }}
                  color="black"
                />
                <EditIcon  onPress={() =>
              console.warn('map')
              
            }>
            
                  </EditIcon>
              </CardActions>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Size</SubHeading>
                <Text>2000 sq ft</Text>
              </CardContent>
              <CardContent>
                <SubHeading bold>Market Rent</SubHeading>
                <Text right>₦ 1000000</Text>
              </CardContent>
            </CardRow>
          </CardBody>
        </Card>
        <SectionHeading>
          <Text medium margin="20px 0">
           Lease Information
          </Text>
          <TextLink>
            <Text small color="#f2636f">
              View All
            </Text>
          </TextLink>
        </SectionHeading>
        <Card>
          <CardBody>
            <CardRow>
              <CardContent>
                <SubHeading bold>Floor 1A</SubHeading>
              </CardContent>
              <CardContent>
                <Text>₦ 1,500,000</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Floor 3C</SubHeading>
              </CardContent>
              <CardContent>
                <Text>₦ 400,000</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Floor 2C</SubHeading>
              </CardContent>
              <CardContent>
                <Text>₦ 850,000</Text>
              </CardContent>
            </CardRow>
          </CardBody>
        </Card>
        <SectionHeading>
          <Text medium margin="20px 0">
            Tenant Applications
          </Text>
          <TextLink>
            <Text small color="#f2636f" onPress={()=> navigation.navigate('AllNewApplicants')}>
              View All
            </Text>
          </TextLink>
        </SectionHeading>
        <FilterOptions>
          <FilterText small bold>
            New
          </FilterText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={18}
            style={{ color: '#d3c8c7', paddingRight: 5 }}
            color="black"
          />
        </FilterOptions>
        <Card>
          <CardBody>
            <CardRow>
              <CardContent>
                <SubHeading bold>John Doe</SubHeading>
              </CardContent>
              <CardContent>
                <Text>3 days ago</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Flaurent Malouda</SubHeading>
              </CardContent>
              <CardContent>
                <Text>1 week ago</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Eugene Aogo</SubHeading>
              </CardContent>
              <CardContent>
                <Text>1 month ago</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Tom Hardy</SubHeading>
              </CardContent>
              <CardContent>
                <Text>1 month ago</Text>
              </CardContent>
            </CardRow>
            <CardRow>
              <CardContent>
                <SubHeading bold>Isaac Akpan</SubHeading>
              </CardContent>
              <CardContent>
                <Text>2 month ago</Text>
              </CardContent>
            </CardRow>
          </CardBody>
        </Card>
        <Card width={width}>
          <Text>Applications list</Text>
        </Card>
      </ContentContainer>
    </Container>
  );
};

export default RentalUnitDetailsScreen;

const Container = styled(Animated.ScrollView)`
  background-color: #1e1e1e;
  padding: 10px;
`;

const ContentContainer = styled(Animated.View)`
  padding-bottom: 30px;
`;

const HeaderText = styled(Text)`
  margin-bottom: 10px;
  /* color: #1e1e1e; */
`;

const SubHeading = styled(Text)`
  /* color: #1e1e1e; */
  margin-bottom: 5px;
`;

const AddressCard = styled.TouchableOpacity<{ readonly width?: number }>`
  flex: 1;
  border-radius: 10px;
  padding: 10px;
  background-color: #4b4b4b;
  elevation: 3;
  margin-bottom: 15px;
  margin-right: 10px;
  ${({ width }) => `width: ${width}px;`};
`;

const SummaryItem = styled.TouchableOpacity<{ readonly width?: number }>`
  flex: 1;
  border-radius: 10px;
  padding: 10px;
  background-color: #4b4b4b;
  elevation: 3;
  margin-bottom: 15px;
  margin-right: 10px;
  ${({ width }) => `width: ${width}px;`};
`;

const SummaryLargeText = styled(Text)`
  font-size: 18px;
  padding-right: 10px;
`;
const SummaryBody = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  top: 10px;
`;

const EditIcon = styled.TouchableOpacity`


`

const CardBody = styled.View`
  padding: 10px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const Actions = styled.View``;
const CardHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const QuickInfoCardsList = styled.ScrollView``;

const Card = styled.View<{ readonly width?: number }>`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #f2636f2b;
  ${({ width }) => (width ? `height: ${width * 0.75}px;` : '')};
`;

const CardContent = styled.View``;
const CardActions = styled.View`
  flex-direction: row;
`;

const SectionHeading = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const FilterOptions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FilterText = styled(Text)`
  padding-right: 2px;
`;

const TextLink = styled.TouchableOpacity``;

const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
  padding-top: 50px;
`;





const LeaseInfo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: #dbdbdb21;
  border-style: solid;
`;
