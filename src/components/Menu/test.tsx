import { renderWithTheme } from '../../utils/tests/helpers';
import { Menu } from '.';
import { screen, fireEvent } from '@testing-library/react';

describe('<Menu/>', () => {
  it('should render menu', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);
    //selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    //clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });
    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Gustavo" />);
    expect(screen.getByText(/my account/)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/)).toBeInTheDocument();
  });
});
