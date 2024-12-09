import { Meta, StoryObj } from '@storybook/react';
import searchIcon from '@assets/icons/search.svg';
import SearchBar from '.';

const meta = {
  component: SearchBar,
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
} satisfies Meta<typeof SearchBar>;

export default meta;
type SearchBarStoryObj = StoryObj<typeof SearchBar>;

export const Default: SearchBarStoryObj = {
  args: {},
};

export const LeftIcon: SearchBarStoryObj = {
  args: {
    leftIcon: searchIcon,
  },
};

export const RightIcon: SearchBarStoryObj = {
  args: {
    rightIcon: searchIcon,
  },
};
