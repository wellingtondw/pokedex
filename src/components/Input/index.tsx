import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export type InputProps = {
  search?: boolean;
} & TextInputProps;

const Input: React.FC<InputProps> = ({ search = false, ...rest }) => {
  return (
    <S.Container>
      {search && <S.Icon name="search" size={20} />}
      <S.TextInput search={search} {...rest} placeholderTextColor="#ccc" />
    </S.Container>
  );
};

export default Input;
