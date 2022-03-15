import { withNextInputAutoFocusForm } from 'react-native-formik';
import styled from 'styled-components/native';

const FormView = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: flex-start;
  border-radius: 5px;
`;

export const Form = withNextInputAutoFocusForm(FormView);

export default Form;
