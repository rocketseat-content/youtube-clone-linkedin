import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  ),
];
