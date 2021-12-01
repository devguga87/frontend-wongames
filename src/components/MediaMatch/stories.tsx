import { Story, Meta } from '@storybook/react/types-6-0';
import { MediaMatch, MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {},
} as Meta;

export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on desktop</MediaMatch>
);

export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
