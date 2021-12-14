import SlickSlider, { Settings } from 'react-slick';
import * as Styled from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <Styled.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Styled.Wrapper>
  );
};
