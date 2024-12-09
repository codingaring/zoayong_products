import { Meta, StoryObj } from '@storybook/react';
import MainHeader from '.';

const meta = {
  component: MainHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MainHeader>;

export default meta;
type MainHeaderStoryObj = StoryObj<typeof MainHeader>;

export const Default: MainHeaderStoryObj = {
  args: {},
};
