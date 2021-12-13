import { Button } from '../Button';
import * as Styled from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
  floatImage?: string;
  alignment?: 'left' | 'right';
};

export const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink,
  floatImage,
  alignment = 'right',
}: HighlightProps) => {
  return (
    <Styled.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <Styled.FloatImage src={floatImage} alt={title} />}

      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
