import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo, LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {},
} as Meta;

export const Template: Story<LogoProps> = args => <Logo {...args} />;
