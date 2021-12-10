import { renderWithTheme } from '../../utils/tests/helpers';
import { Banner } from '.';
import { screen } from '@testing-library/react';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>Crashlands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render Banner', () => {
    renderWithTheme(<Banner {...props} />);

    expect(screen.getByText(/Defy death/i)).toBeInTheDocument();
    expect(screen.getByText(/Crashlands/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
  });
});
