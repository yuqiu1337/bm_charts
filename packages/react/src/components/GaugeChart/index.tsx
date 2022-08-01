/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { default as useInitChart } from '@/hooks/useInitPlainChart';
import { IChartExternal } from '@/types';
import { default as PlainChart } from '../PlainChart';
import { getChartOptions } from './config';
import { EChartsOption } from 'echarts';
import { IDirection, ILineChartType, IPieChartType, IPosition } from '@agito/chart-shared';
import { GaugeChartOptionHandle } from '@agito/chart-core';

interface IPieChart extends IChartExternal {
  /** 初始化配置 */
  cusInitOptions?: object;
  /** 表格数据 */
  chartData: {
    [propName: string]: any;
  };
}

/**
 * @description:
 * @return {*}
 */
function LineChart({ chartData, cusInitOptions, containerClass, ...otherProps }: IPieChart) {
  const [optionHandle, setOptionHandle] = useState<GaugeChartOptionHandle>();

  useLayoutEffect(() => {
    if (!cusInitOptions) {
      const _barChartOptionHandle = new GaugeChartOptionHandle();
      _barChartOptionHandle.setOptions(getChartOptions() as EChartsOption);
      setOptionHandle(_barChartOptionHandle);
    }
  }, []);

  const setOption = () => {
    if (optionHandle) {

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
export default LineChart;
export { getChartOptions };
