import React from 'react';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';
import { TextField } from 'rn-material-ui-textfield';

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

export const ValidatedTextInput = flow(
  withNextInputAutoFocusForm,
  handleTextInput,
)(TextField) as React.ComponentClass<any, any>;

export default ValidatedTextInput;
