import React from 'react';
import Checkbox from 'expo-checkbox';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';

const flow = (...funcs: any[]) => {
  const { length } = funcs;
  let index = length;
  // eslint-disable-next-line no-plusplus
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return (...args: any[]) => {
    let idx = 0;
    let result = length ? funcs[idx].apply(this, args) : args[0];
    // eslint-disable-next-line no-plusplus
    while (++idx < length) {
      result = funcs[idx].call(this, result);
    }
    return result;
  };
};

export const ValidatedCheckbox = flow(
  withNextInputAutoFocusForm,
  handleTextInput,
)(Checkbox) as React.ComponentClass<any, any>;

export default ValidatedCheckbox;
