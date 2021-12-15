import '../../../.jest/match-media-mock';
import { Slider } from '.';
import { render, screen } from '@testing-library/react';

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 2 }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );
    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
