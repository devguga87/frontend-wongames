import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'oi',
  },
} as Meta;

export const Template: Story = args => <Logo {...args} />;
