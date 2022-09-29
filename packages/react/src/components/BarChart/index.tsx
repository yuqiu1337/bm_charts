/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import classNames from 'classnames';
import { IChartExternal } from '@/types';
import { Bar } from '@agito/chart-core';
import createChart from '../createPlot';
import type { IBarOptions } from '@agito/chart-core';

interface IBarChartProps extends IChartExternal, IBarOptions {}

export const polyfill = (opt: any) => {
  return opt;
};
const BarChart = createChart<IBarChartProps>(Bar, 'bar', polyfill);

BarChart.defaultProps = {};

export { BarChart };
export type { IBarChartProps };
