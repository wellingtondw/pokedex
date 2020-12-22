import styled, { css } from 'styled-components/native';
import { CustomTextProps } from '.';

const textModifiers = {
  primary: () => css`
    font-size: 30px;
    line-height: 42px;
    color: #303943;
    font-family: 'CircularStd-Bold';
  `,
  secondary: () => css`
    color: #000;
  `,
};

export const Text = styled.Text<CustomTextProps>`
  ${({ type }) => css`
    ${type && textModifiers[type]};
  `}
`;
