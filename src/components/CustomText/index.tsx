import React from 'react';
import * as S from './styles';

export type CustomTextProps = {
  type?: 'primary' | 'secondary';
};

const CustomText: React.FC<CustomTextProps> = ({
  type = 'primary',
  children,
  ...rest
}) => {
  return (
    <S.Text type={type} {...rest}>
      {children}
    </S.Text>
  );
};

export default CustomText;
