import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy now',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Template: Story = args => <Button {...args} />;
