import { Ribbon, RibbonColors, RibbonSizes } from '../Ribbon';
import React from 'react';
import { Button } from '../Button';
import * as Styled from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: BannerProps) => {
  return (
    <Styled.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Styled.Image src={img} role="img" aria-label={title} />
      <Styled.Caption>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </Styled.Caption>
    </Styled.Wrapper>
  );
};
