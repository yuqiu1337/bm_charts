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
import { PieChartOptionHandle } from '@agito/chart-core';

interface IPieChart extends IChartExternal {
  chartType?: IPieChartType;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;
  /** 初始化配置 */
  cusInitOptions?: object;
  /** 数据设置 */
  series?: object[];
  // xAxis?: object;
  // yAxis?: object;
  /** 表格数据 */
  chartData: {
    [propName: string]: any;
  }[];
}

/**
 * @description:
 * @return {*}
 */
function LineChart({
  chartData,
  /** 饼图类型 */
  chartType = 'pie',
  /** 图例位置 */
  legendPosition = 'top',
  hiddenLegend = true,
  cusInitOptions,
  containerClass,
  series,
  xAxis,
  yAxis,
  ...otherProps
}: IPieChart) {
  const [optionHandle, setOptionHandle] = useState<PieChartOptionHandle>();

  useLayoutEffect(() => {
    if (!cusInitOptions) {
      const _barChartOptionHandle = new PieChartOptionHandle();
      _barChartOptionHandle.setOptions(getChartOptions() as EChartsOption);
      setOptionHandle(_barChartOptionHandle);
    }
  }, []);

  const setOption = () => {
    if (optionHandle) {

      chartData && optionHandle.setData(chartData);

      chartType && optionHandle.setChartType(chartType);
      // boundaryGap != undefined && optionHandle.setBoundaryGap(boundaryGap);
      optionHandle.setHiddenLegend(hiddenLegend);
      optionHandle.setLegendPosition(legendPosition);
      // mainColor && optionHandle.setMainColor(mainColor);
      // xAxis && optionHandle.setXAxis(xAxis);

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
