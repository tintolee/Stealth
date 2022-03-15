import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/util';
import { RentalDetailStackParamList } from '../../../stacks/rentals';

export const RentalFinancialsScreen: React.FC<{
  scrollY: Animated.Value;
  screenTranslateY: Animated.AnimatedInterpolation;
}> = ({ scrollY, screenTranslateY }) => {
  const route = useRoute<RouteProp<RentalDetailStackParamList, 'Financials'>>();

  const { rental } = route.params;

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
            Income Statement
          </Text>
          <SelectDropdown>
            <FilterText>Last Month</FilterText>
            <MaterialCommunityIcons
              name="chevron-down"
              size={18}
              style={{ color: '#d3c8c7', paddingRight: 5 }}
              color="black"
            />
          </SelectDropdown>
        </CardRow>
        <Table>
          <Card>
            <CardRow>
              <CardContent>
                <SubHeading bold>Income</SubHeading>
              </CardContent>
              <CardContent>
                <SubHeading bold>Total</SubHeading>
              </CardContent>
            </CardRow>
            <CardBody>
              <AccountLine name="Rent Income" amount="N6,000,000" />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardRow>
                <CardContent>
                  <Text bold>Total Income</Text>
                </CardContent>
                <CardContent>
                  <Text right bold>
                    N12,000,000
                  </Text>
                </CardContent>
              </CardRow>
            </CardBody>
          </Card>
        </Table>
        <Table>
          <Card>
            <CardRow>
              <CardContent>
                <SubHeading bold>Expenses</SubHeading>
              </CardContent>
              <CardContent>
                <SubHeading bold>Total</SubHeading>
              </CardContent>
            </CardRow>
            <CardBody>
              <AccountLine name="Services" amount="N6,000,000" />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <AccountLine name="Repairs" amount="N6,000,000" />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardRow>
                <CardContent>
                  <Text bold>Total Expenses</Text>
                </CardContent>
                <CardContent>
                  <Text right bold>
                    N12,000,000
                  </Text>
                </CardContent>
              </CardRow>
            </CardBody>
          </Card>
        </Table>
        <Table>
          <CardRow>
            <CardContent>
              <SubHeading bold>Net Operating Income</SubHeading>
            </CardContent>
            <CardContent>
              <Text right bold>
                (-) N6,000,000
              </Text>
            </CardContent>
          </CardRow>
          <CardRow>
            <CardContent>
              <SubHeading bold>Net Income</SubHeading>
            </CardContent>
            <CardContent>
              <Text right bold>
                (-) N6,000,000
              </Text>
            </CardContent>
          </CardRow>
        </Table>
      </ContentContainer>
    </Container>
  );
};

export default RentalFinancialsScreen;

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

const CardBody = styled.View`
  padding: 10px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LineItemCardRow = styled(CardRow)`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CardContent = styled.View`
  justify-content: center;
`;

const SubHeading = styled(Text)`
  /* color: #1e1e1e; */
  margin-bottom: 5px;
`;

const Table = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SelectDropdown = styled.TouchableOpacity`
  padding: 5px;
  padding-left: 10px;
  flex-direction: row;
  border-width: 1px;
  border-color: #f2636f;
  border-radius: 3px;
`;

const FilterText = styled(Text)`
  padding-right: 2px;
`;

const ItemButton = styled.TouchableOpacity``;

const TextLine = styled.View`
  flex-direction: row;
  align-items: center;
`;
const LineItemList = styled.View`
  padding-left: 30px;
`;

const ContentContainer = styled(Animated.View)`
  padding-bottom: 30px;
`;
const AccountLine: React.FC<{
  name: string;
  amount: string;
  summary?: boolean;
}> = ({
  name,
  amount,
  summary = false,
}: {
  name: string;
  amount: string;
  summary?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <ItemButton onPress={() => setExpanded(!expanded)}>
        <CardRow>
          <CardContent>
            <TextLine>
              <Ionicons
                name={expanded ? 'caret-down' : 'caret-forward'}
                size={14}
                color="#f2636f"
                style={{ paddingRight: 5 }}
              />
              <Text bold={summary}>{name}</Text>
            </TextLine>
          </CardContent>
          <CardContent>
            <Text bold={summary} right>
              {amount}
            </Text>
          </CardContent>
        </CardRow>
      </ItemButton>
      {expanded && (
        <LineItemList>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
          <LineItemCardRow>
            <CardContent>
              <TextLine>
                <Text>{`${new Date().toLocaleDateString()} - ${name}`}</Text>
              </TextLine>
            </CardContent>
            <CardContent>
              <Text right>{amount}</Text>
            </CardContent>
          </LineItemCardRow>
        </LineItemList>
      )}
    </>
  );
};

AccountLine.defaultProps = {
  summary: false,
};
