import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import '../src/styles/reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#2c2c2c' },
      ],
    },
  },
};

export default preview;
