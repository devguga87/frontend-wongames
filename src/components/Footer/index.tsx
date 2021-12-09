import { Heading } from '../Heading';
import { Logo } from '../Logo';
import * as Styled from './styles';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Logo color="black" />
      <Styled.Content>
        <Styled.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </Styled.Column>

        <Styled.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Follow us
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </Styled.Column>

        <Styled.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/games">
              <a>Store</a>
            </Link>

            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </Styled.Column>

        <Styled.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum </span>
          <span>Lorem, ipsum dolor</span>
        </Styled.Column>
      </Styled.Content>

      <Styled.Copyright>Won Games 2021 All rights reserved.</Styled.Copyright>
    </Styled.Wrapper>
  );
};
