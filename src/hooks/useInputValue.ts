import {useState} from 'react';

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue || '');
  const onChangeText = (val: string) => {
    if (val !== null && val !== undefined) {
      setValue(val);
    } else {
      setValue(val);
    }
  };
  return {value, onChangeText};
};
