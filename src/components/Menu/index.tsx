import { useState } from 'react';
import * as Styled from './styles';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import { Logo } from '../Logo';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Button } from '../../components/Button';
import { MediaMatch } from '../../components/MediaMatch';

export type MenuProps = {
  username?: string;
};

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <MediaMatch lessThan="medium">
        <Styled.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </Styled.IconWrapper>
      </MediaMatch>

      <Styled.LogoWrapper>
        <Logo hideOnMobile />
      </Styled.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>
        </Styled.MenuNav>
      </MediaMatch>

      <Styled.MenuGroup>
        <Styled.IconWrapper>
          <SearchIcon aria-label="Search" />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </Styled.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username && <Button>Sign in</Button>}
        </MediaMatch>
      </Styled.MenuGroup>

      <Styled.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>
          {!!username && (
            <>
              <Styled.MenuLink href="#">my account</Styled.MenuLink>
              <Styled.MenuLink href="#">wishlist</Styled.MenuLink>
            </>
          )}
        </Styled.MenuNav>

        {!username && (
          <Styled.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <Styled.CreateAccount href="#" title="Sign In">
              Sign Up
            </Styled.CreateAccount>
          </Styled.RegisterBox>
        )}
      </Styled.MenuFull>
    </Styled.Wrapper>
  );
};
