import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {},
} as Meta;

export const Template: Story = args => {
  return (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer {...args} />
    </div>
  );
};
