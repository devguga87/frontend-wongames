import * as Styled from './styles';

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </Styled.Wrapper>
  );
};
