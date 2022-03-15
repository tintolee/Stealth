import styled from 'styled-components/native';
import { parse, isDate } from 'date-fns';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;

export const DarkContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

export const ScrollContainer = styled.ScrollView`
  /* flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e; */
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;

export const BoldText = styled.Text``;

interface CustomTextProps {
  readonly color?: string;
  readonly margin?: number | string;
  readonly padding?: number;
  readonly title?: boolean;
  readonly subheading?: boolean;
  readonly large?: boolean;
  readonly medium?: boolean;
  readonly small?: boolean;
  readonly tiny?: boolean;
  readonly light?: boolean;
  readonly heavy?: boolean;
  readonly bold?: boolean;
  readonly black?: boolean;
  readonly center?: boolean;
  readonly right?: boolean;
}

export const Text = styled.Text<CustomTextProps>`
  color: ${({ color }) => color ?? '#dbdbdb'};
  font-family: 'Montserrat';
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};

  /* Font Size */
  ${({ title, subheading, large, medium, small, tiny }) => {
    switch (true) {
      case title:
        return `font-size: 32px;`;
      case subheading:
        return `font-size: 24px;`;
      case large:
        return `font-size: 25px;`;
      case medium:
        return `font-size: 15px;`;
      case small:
        return `font-size: 11px;`;
      case tiny:
        return `font-size: 10px;`;
      default:
        return 'font-size: 13px;';
    }
  }}

  /* Font Weight */
  ${({ light, bold, heavy, black }) => {
    switch (true) {
      case light:
        return `font-family: 'MonserratLight';`;
      case bold:
        return `font-family: 'MontserratSemiBold';`;
      case heavy:
        return `font-family: 'MontserratBold';`;
      case black:
        return `font-family: 'MontserratBlack';`;
      default:
        return `font-family: 'Montserrat';`;
    }
  }}

  /* Alignment */

  ${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center;`;
      case right:
        return `text-align: right;`;
      default:
        return `text-align: left`;
    }
  }}
`;

export const HeaderText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

export const parseDateString = (
  _: string | any,
  originalValue: string | any,
): any =>
  isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd/MM/yyyy', new Date());

export const omit = (
  obj: Record<string, unknown>,
  arr: string[],
): Record<string, unknown> =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Record<string, unknown>);

export type GenericCallback = () => void;
