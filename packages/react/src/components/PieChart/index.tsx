/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import { IChartExternal, ICommonObjectType } from '@/types';
import { Pie } from '@agito/chart-core';
import createChart from '../createPlot';
import { IPieChartType } from '@agito/chart-core/es/types';

interface IPieChart extends IChartExternal {
  chartType?: IPieChartType;
  /** mode */
  mode?: 'all' | 'top';
  /** top个数 */
  topCount?: number;
  nameField?: string;
  valueField?: string;
}

// /**
//  * 获取或者绑定图表实例
//  */
// export const getChart = (chartRef, chart: any) => {
//   if (!chartRef) {
//     return;
//   }
//   if (isFunction(chartRef)) {
//     chartRef(chart);
//   } else {
//     chartRef.current = chart;
//   }
// };
export const polyfill = (opt: any) => {
  return opt;
};
export default createChart<IPieChart>(Pie, 'pie', polyfill);
