import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
} as Meta;

export const Template: Story<MenuProps> = args => <Menu {...args} />;

Template.parameters = {
  backgrounds: { default: 'dark' },
  viewport: {
    defaultViewport: 'mobile1',
  },
  layout: 'fullscreen',
};
