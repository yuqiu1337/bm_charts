/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React from 'react';
import {
  getByRole,
  getByTestId,
  findByRole,
  render,
  screen,
  findByTestId,
} from '@testing-library/react';
import BarChart from './index';

test('barChart渲染到页面上', async () => {
  const containerClass = 'test-component';
  render(
    <BarChart
      title={''}
      data-testid={'11221'}
      id={''}
      initOptions={{}}
      initOnLoad={function (): void {
        throw new Error('Function not implemented.');
      }}
      containerClass={containerClass}
      params={{}}
      headers={{}}
      action={''}
      dataOnLoad={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  const el = await screen.findAllByTestId('11221');
  console.log(el);
  // el.then((ele) => {
  //   console.log(1);
  expect(el).toBeInTheDocument();
  // });
});
