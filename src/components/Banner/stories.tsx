import { Meta, Story } from '@storybook/react/types-6-0';
import { Banner, BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<BannerProps> = args => <Banner {...args} />;