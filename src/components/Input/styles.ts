import styled, { css } from 'styled-components/native';
import CustomIcon from '../CustomIcon';
import { InputProps } from '.';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  border-radius: 100px;
  background: #f5f5f5;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput<InputProps>`
  ${({ search }) => css`
    flex: 1;
    font-size: 14px;
    line-height: 42px;
    font-family: 'CircularStd-Regular';
    margin-right: 18px;
    color: #303943;

    ${!search &&
    css`
      margin-left: 18px;
    `}
  `}
`;

export const Icon = styled(CustomIcon)`
  color: #303943;
  margin: 0 18px;
`;
