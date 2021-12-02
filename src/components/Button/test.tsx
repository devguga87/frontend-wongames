import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
describe('<Button />', () => {
  it('should render the small size', () => {
    const { container } = renderWithTheme(<Button size="small">Hello</Button>);
    expect(screen.getByRole('button', { name: 'Hello' })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a button medium size by default', () => {
    renderWithTheme(<Button>Hello</Button>);
    expect(screen.getByRole('button', { name: 'Hello' })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Hello</Button>);
    expect(screen.getByRole('button', { name: 'Hello' })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render full width version', () => {
    renderWithTheme(<Button fullWidth>Hello</Button>);
    expect(screen.getByRole('button', { name: 'Hello' })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Hello</Button>,
    );
    expect(screen.getByRole('button', { name: 'Hello' })).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
