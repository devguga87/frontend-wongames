import * as Styled from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'small' | 'medium';
};

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary',
}: HeadingProps) => {
  return (
    <Styled.Wrapper
      color={color}
      lineLeft={lineLeft}
      size={size}
      lineBottom={lineBottom}
      lineColor={lineColor}
    >
      {children}
    </Styled.Wrapper>
  );
};
