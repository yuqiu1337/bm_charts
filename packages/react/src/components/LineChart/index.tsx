/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import classNames from 'classnames';
import { IChartExternal, ICommonObjectType } from '@/types';
import { EChartsOption } from 'echarts';
import { Line } from '@agito/chart-core';
import { clone, cloneDeep, isFunction } from 'lodash';
import createChart from '../createPlot';
import { ILineChartType } from '@agito/chart-core/es/types';

interface ILineChartProps extends IChartExternal {
  chartType: ILineChartType;

  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
}
export const polyfill = (opt: any) => {
  return opt;
};
const LineChart = createChart<ILineChartProps>(Line, 'line', polyfill);

LineChart.defaultProps = {
  chartType: 'line',
  boundaryGap: false,
};

export { LineChart };
