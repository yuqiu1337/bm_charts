/**
 * @date          Invalid Date
 * Copyright © YourCompanyName All rights reserved
 */
import React from 'react';
import { render } from '@testing-library/react';
import BarChart from './index';

test('11', () => {
  render(
    <BarChart
      title={''}
      id={''}
      initOptions={{}}
      initOnLoad={function (): void {
        throw new Error('Function not implemented.');
      }}
      params={{}}
      headers={{}}
      action={''}
      dataOnLoad={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
});
