/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import { IChartExternal, ICommonObjectType } from '@/types';
import type { IPieOptions, IPieChartType } from '@agito/chart-core';
import { Pie } from '@agito/chart-core';
import createChart from '../createPlot';
import PropTypes from 'prop-types';

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
const PieChart = createChart<IPieOptions>(Pie, 'pie', polyfill);


PieChart.defaultProps = {
  chartType: 'pie',
  topCount: 5,
  builtSource: true,
  hiddenLegend: false
};

export { PieChart, IPieOptions };
