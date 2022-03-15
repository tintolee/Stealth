import { Maybe } from 'graphql/jsutils/Maybe';
import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { RentalTypeCategories } from '../api/graphql/generated/graphql';
import { Text } from './util';

export interface Option {
  label: Maybe<string>;
  value: Maybe<string>;
}
export type CategoryOption = {
  category: string;
  options: {
    label: Maybe<string> | undefined;
    value: Maybe<string> | undefined;
    category: RentalTypeCategories;
  }[];
};

interface OptionSelectorProps {
  categorizedOptions: CategoryOption[];
  selected: unknown;
  fieldName: string;
  handleChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
}

export const CategorizedOptionsSelector: React.FC<OptionSelectorProps> = ({
  categorizedOptions,
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
      {categorizedOptions.map(categoryGroup => {
        return (
          <View key={categoryGroup.category}>
            <CategoryLabel>{categoryGroup.category}</CategoryLabel>
            {categoryGroup.options.map(option => (
              <OptionView
                option={option}
                key={option.value}
                handleSelect={handleSelect}
                selected={option.value === selectedOption}
              />
            ))}
          </View>
        );
      })}
    </OptionsListContainer>
  );
};

export default CategorizedOptionsSelector;
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

const CategoryLabel = styled(Text)`
  margin: 15px 0;
  text-transform: capitalize;
`;
