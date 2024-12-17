import { Meta, StoryObj } from '@storybook/react';
import BannerButton from './BannerButton';
import BannerList from './BannerList';

const meta = {
  component: BannerButton,
  args: {
    bannerList: BannerList,
  },
  argTypes: {},
} satisfies Meta<typeof BannerButton>;

export default meta;
type BannerButtonStoryObj = StoryObj<typeof BannerButton>;

export const Default: BannerButtonStoryObj = {
  args: {},
};
