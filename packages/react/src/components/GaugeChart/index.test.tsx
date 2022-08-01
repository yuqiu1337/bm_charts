/* eslint-disable no-undef */
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
import { calcColor } from './index';

// test('barChart渲染到页面上', async () => {
//   const containerClass = 'test-component';
//   render(
//     <BarChart
//       title={''}
//       data-testid={'11221'}
//       id={''}
//       initOptions={{}}
//       initOnLoad={function (): void {
//         throw new Error('Function not implemented.');
//       }}
//       containerClass={containerClass}
//       params={{}}
//       headers={{}}
//       action={''}
//       dataOnLoad={function (): void {
//         throw new Error('Function not implemented.');
//       }}
//     />,
//   );
//   const el = await screen.findAllByTestId('11221');
//   console.log(el);
//   // el.then((ele) => {
//   //   console.log(1);
//   expect(el).toBeInTheDocument();
//   // });
// });

test('测试函数,入参null,出参[]', () => {
  const params = null;
  const res = calcColor(params);
  expect(res).toStrictEqual([]);
});
test('测试函数,入参undefined,出参[]', () => {
  const params = undefined;
  const res = calcColor(params);
  expect(res).toStrictEqual([]);
});
test("测试函数,入参'',出参[]", () => {
  const params = '';
  const res = calcColor(params);
  expect(res).toStrictEqual([]);
});
test('测试函数,入参"#000",出参["#000"]', () => {
  const params = '#000';
  const res = calcColor(params);
  expect(res).toStrictEqual(['#000']);
});
test('测试函数,入参[],出参[]', () => {
  const params = [];
  const res = calcColor(params);
  expect(res).toStrictEqual([]);
});
test("测试函数,入参['#000'],出参[]", () => {
  const params = ['#000'];
  const res = calcColor(params);
  expect(res).toStrictEqual(['#000']);
});
test('测试函数,入参{},出参[]', () => {
  const params = {};
  const res = calcColor(params);
  expect(res).toStrictEqual([]);
});
