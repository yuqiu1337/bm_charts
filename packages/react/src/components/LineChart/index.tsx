/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import { IChartExternal, ICommonObjectType } from '@/types';
import { Line } from '@agito/chart-core';
import createChart from '../createPlot';
import type { ILineOptions } from '@agito/chart-core';

interface ILineChartProps extends IChartExternal, ILineOptions {}

export const polyfill = (opt: any) => {
  return opt;
};
const LineChart = createChart<ILineChartProps>(Line, 'line', polyfill);

LineChart.defaultProps = {
  ...Line.defaultProps
};

export { LineChart };
