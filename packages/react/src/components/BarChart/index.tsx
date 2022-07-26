/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { default as useInitChart } from '@/hooks/useInitChart';
import { IChartExternal } from '@/types';
import { default as BaseChart } from '../BaseChart';
import { chartOptions, IDirection, IPosition, BarChartOptionHandle } from './config';
import { EChartsOption } from 'echarts';

export const transformArray = (color?: string | string[]): string[] => {
  let result: string[] = [];
  if (color instanceof Array && color.length > 0) {
    result = [...color];
  } else if (typeof color === 'string' && color.length > 0) {
    result = [color];
  }
  return result;
};

type seriesData = {
  data: number;
  showBackground: boolean;
  barColor: string;
};

interface IBarChart extends IChartExternal {
  /** 朝向 **/
  direction?: IDirection;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;
  /** 初始化配置 */
  cusInitOptions?: object;
  /** 柱状图颜色 */
  mainColor?: string | string[];
  /** 数据 */
  series?: object[];
  xAxis?: object;
  yAxis?: object;
  /** 表格数据 */
  chartData: unknown[];
}

/**
 * @description: 柱状图
 */
function BarChart({
  /** 朝向,默认水平 */
  direction = 'horizontal',
  /** 图例位置 */
  legendPosition = 'top',
  hiddenLegend = true,
  cusInitOptions,
  mainColor,
  containerClass,
  series,
  xAxis,
  yAxis,
  chartData,
  ...otherProps
}: IBarChart) {
  const [optionHandle, setOptionHandle] = useState<BarChartOptionHandle>();
  const [options, setOptions] = useState(optionHandle?.getOptions());

  useLayoutEffect(() => {
    if (!cusInitOptions) {
      const _barChartOptionHandle = new BarChartOptionHandle(chartOptions as EChartsOption);

      _barChartOptionHandle.setDirection(direction);
      _barChartOptionHandle.setHiddenLegend(hiddenLegend);
      _barChartOptionHandle.setLegendPosition(legendPosition);
      _barChartOptionHandle.setXAxis(xAxis);

      if (mainColor) {
        _barChartOptionHandle.setColor(mainColor);
      }

      setOptionHandle(_barChartOptionHandle);
    }
  }, []);

  useEffect(() => {
    if (optionHandle) {
      optionHandle.setData(chartData);
      setOptions(optionHandle?.getOptions());
    }
  }, [optionHandle, chartData]);

  const initOptions = optionHandle?.getOptions();
  console.log(JSON.stringify(initOptions), 'initOnLoad');
  return (
    <BaseChart
      initOptions={initOptions as EChartsOption}
      containerClass={containerClass}
      {...otherProps}
    ></BaseChart>
  );
}
export default BarChart;
export { chartOptions };
