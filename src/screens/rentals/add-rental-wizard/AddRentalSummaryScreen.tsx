import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../../components/util';

export const AddRentalSummary: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>[Add-Rental-Wizard-Stack] Summary Screen</Text>
    </Container>
  );
};

export default AddRentalSummary;
