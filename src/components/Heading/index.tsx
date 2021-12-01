import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => {
  return (
    <Styled.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Styled.Wrapper>
  );
};
