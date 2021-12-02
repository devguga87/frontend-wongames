import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Styled.Wrapper>
  );
};
