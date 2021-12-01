import * as Styled from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <Styled.Wrapper>{!!children && <span>{children}</span>}</Styled.Wrapper>
  );
};
