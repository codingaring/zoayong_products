import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: '버튼입니다',
  },
  argTypes: {
    variant: {
      control: 'select', // select로 드롭다운 제공
      options: ['white', 'black', 'primary', 'secondary'], // buttonVariant에서 정의한 variants를 기반으로 옵션 제공
      description: '버튼의 스타일 변형을 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: '버튼의 크기를 설정합니다.',
    },
    className: {
      control: false,
    },
    as: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type ButtonStoryObj = StoryObj<typeof Button>;

export const Primary: ButtonStoryObj = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: ButtonStoryObj = {
  args: {
    variant: 'secondary',
  },
};

export const Large: ButtonStoryObj = {
  args: {
    size: 'lg',
  },
};

export const Small: ButtonStoryObj = {
  args: {
    size: 'sm',
  },
};

export const White: ButtonStoryObj = {
  args: {
    variant: 'white',
  },
};

export const Black: ButtonStoryObj = {
  args: {
    variant: 'black',
  },
};
