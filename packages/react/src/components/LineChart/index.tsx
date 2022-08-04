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
import { IDirection, ILineChartType, IPosition } from '@agito/chart-shared';
import { Line as ChartClass } from '@agito/chart-core';
import { clone, cloneDeep, isFunction } from 'lodash';
import createChart from '../createPlot';

interface ILineChart extends IChartExternal {
  chartType: ILineChartType;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;

  /** 标题文字设置 */
  title?: string;
  // /** 柱状图颜色 */
  // mainColor?: string | string[];
  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
  /** 笛卡尔坐标系取值字段 */
  xField?: string;
  yField?: string | string[];
  // /** 类目轴数据 */
  // categoryData?: string[];
  /** 表格数据 */
  chartData: any[];
  /** 表格配置  */
  chartConfig: object;

  /** 访问地址 */
  customSource?: boolean;
  action?: string;
  header?: {
    [keyof: string]: any;
  };
  params?: object;
  method?: string;
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
export default createChart<ILineChart>(ChartClass, 'line', polyfill);
