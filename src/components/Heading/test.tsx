import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Titulo</Heading>);
    expect(screen.getByRole('heading', { name: 'Titulo' })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Titulo</Heading>);
    expect(screen.getByRole('heading', { name: 'Titulo' })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with line left', () => {
    renderWithTheme(<Heading lineLeft>Titulo</Heading>);
    expect(screen.getByRole('heading', { name: 'Titulo' })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should render a heading with line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Titulo</Heading>);
    expect(screen.getByRole('heading', { name: 'Titulo' })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',
      },
    );
  });
});
