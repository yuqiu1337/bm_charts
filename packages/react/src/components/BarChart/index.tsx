/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import { useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { IChartExternal } from '@/types';
import { default as PlainChart } from '../PlainChart';
import { getChartOptions } from './config';
import { EChartsOption } from 'echarts';
import { IDirection, IPosition } from '@agito/chart-shared';
import { BarChartOptionHandle } from '@agito/chart-core';

interface IBarChart extends IChartExternal {
  /** 朝向 **/
  direction?: IDirection;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;
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
  mainColor,
  containerClass,
  series,
  xAxis,
  yAxis,
  chartData,
  ...otherProps
}: IBarChart) {
  const [optionHandle, setOptionHandle] = useState<BarChartOptionHandle>();

  useLayoutEffect(() => {
    const _barChartOptionHandle = new BarChartOptionHandle();
    _barChartOptionHandle.setOptions(getChartOptions() as EChartsOption);
    setOptionHandle(_barChartOptionHandle);
  }, []);

  const setOption = () => {
    if (optionHandle) {
      optionHandle.setDirection(direction);
      optionHandle.setHiddenLegend(hiddenLegend);
      optionHandle.setLegendPosition(legendPosition);
      mainColor && optionHandle.setMainColor(mainColor);
      optionHandle.setXAxis(xAxis);
      series && optionHandle.setSeries(series);
      chartData && optionHandle.setData(chartData);
    }
  };

  setOption();

  const initOptions = optionHandle?.getOptions();
  console.log(initOptions);
  return (
    <PlainChart
      initOptions={initOptions as EChartsOption}
      containerClass={containerClass}
      {...otherProps}
    ></PlainChart>
  );
}
export default BarChart;
export { getChartOptions };
