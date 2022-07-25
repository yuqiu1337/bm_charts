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
  /** 初始化配置 */
  cusInitOptions?: object;
  /** 柱状图颜色 */
  mainColor?: string;
  /** 数据 */
  series?: object[];
  xAxis?: object;
  yAxis?: object;
}

/**
 * @description: 柱状图
 */
function BarChart({
  /** 朝向,默认水平 */
  direction = 'horizontal',
  /** 图例位置 */
  legendPosition = 'top',
  cusInitOptions,
  mainColor,
  containerClass,
  series,
  xAxis,
  yAxis,
  ...otherProps
}: IBarChart) {
  const [optionHandle, setOptionHandle] = useState<BarChartOptionHandle>();

  useLayoutEffect(() => {
    if (!cusInitOptions) {
      const _barChartOptionHandle = new BarChartOptionHandle(chartOptions as EChartsOption);

      _barChartOptionHandle.setDirection(direction);
      _barChartOptionHandle.setLegendPosition(legendPosition);

      setOptionHandle(_barChartOptionHandle);
    }
  }, []);

  useEffect(() => {});

  const initOptions = optionHandle?.getOptions();
  console.log(initOptions);
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
