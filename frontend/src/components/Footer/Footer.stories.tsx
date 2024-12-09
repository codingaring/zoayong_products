import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta = {
  component: Footer,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type FooterStoryObj = StoryObj<typeof Footer>;

export const Default: FooterStoryObj = {
  args: {
    variant: 'primary',
  },
};
