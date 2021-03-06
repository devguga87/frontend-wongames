import { Meta, Story } from '@storybook/react/types-6-0';
import { GameCard, GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta;

export const Default: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
};
