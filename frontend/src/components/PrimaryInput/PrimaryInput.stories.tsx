import { Meta, StoryObj } from '@storybook/react';
import searchIcon from '@assets/icons/search.svg';
import PrimaryInput from '.';

const meta = {
  component: PrimaryInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
  args: {
    placeholder: '검색어를 입력해주세요.',
  },
} satisfies Meta<typeof PrimaryInput>;

export default meta;
type PrimaryInputStoryObj = StoryObj<typeof PrimaryInput>;

export const Default: PrimaryInputStoryObj = {
  args: {},
};

export const LeftIcon: PrimaryInputStoryObj = {
  args: {
    leftIcon: searchIcon,
  },
};

export const RightIcon: PrimaryInputStoryObj = {
  args: {
    rightIcon: searchIcon,
  },
};
