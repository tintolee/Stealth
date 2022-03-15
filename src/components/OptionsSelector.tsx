import { Maybe } from 'graphql/jsutils/Maybe';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from '../components/util';

export interface Option {
  label: Maybe<string>;
  value: Maybe<string>;
}
interface OptionSelectorProps {
  options: Option[];
  selected: unknown;
  fieldName: string;
  handleChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
}

export const OptionsSelector: React.FC<OptionSelectorProps> = ({
  options,
  selected,
  handleChange,
  fieldName,
}: OptionSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState(selected);
  const handleSelect = (value: Maybe<string>) => {
    setSelectedOption(value);
    handleChange(fieldName, value);
  };
  return (
    <OptionsListContainer showsVerticalScrollIndicator={false}>
      <Spacer />
      {options.map(option => (
        <OptionView
          option={option}
          key={option.value}
          handleSelect={handleSelect}
          selected={option.value === selectedOption}
        />
      ))}
    </OptionsListContainer>
  );
};

export default OptionsSelector;

const OptionView: React.FC<{
  option: Option;
  selected: boolean;
  handleSelect: (value: Maybe<string>) => void;
}> = ({
  option,
  selected,
  handleSelect,
}: {
  option: Option;
  selected: boolean;
  handleSelect: (value: Maybe<string>) => void;
}) => {
  const { label } = option;
  return (
    <OptionButton
      selected={selected}
      onPress={() => handleSelect(selected ? null : option.value)}
    >
      <Text large bold>
        {label}
      </Text>
    </OptionButton>
  );
};

const OptionsListContainer = styled.ScrollView``;

const Spacer = styled.View`
  height: 100px;
`;
const OptionButton = styled.TouchableOpacity<{
  readonly selected?: boolean;
}>`
  ${({ selected }) => (selected ? 'background-color: #f2636f' : '')};
  border-radius: 5px;
  border-color: #db4437;
  border-width: 1px;
  border-style: solid;
  padding: 20px;
  margin-bottom: 10px;
`;
