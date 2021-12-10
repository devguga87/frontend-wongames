import { Button } from '../Button';
import * as Styled from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => {
  return (
    <Styled.Wrapper>
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
