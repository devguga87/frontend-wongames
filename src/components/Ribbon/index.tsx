import * as Styled from './styles';

export type RibbonSizes = 'small' | 'normal';
export type RibbonColors = 'primary' | 'secondary';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => {
  return (
    <Styled.Wrapper color={color} size={size}>
      {children}
    </Styled.Wrapper>
  );
};
