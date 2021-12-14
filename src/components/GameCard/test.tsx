import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { GameCard } from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  price: 'R$ 200',
};

describe('<GameCard/>', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    //verificar se o developer renderizado
    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();
    //verificar se o img foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);
    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(screen.getByText(props.price)).not.toHaveStyle({
      color: '#8F8F8F',
    });
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render a line-throug in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15" />);

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(screen.getByText(/r\$ 15/i)).not.toHaveStyle({
      textDecoration: 'line-through',
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );
    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});
