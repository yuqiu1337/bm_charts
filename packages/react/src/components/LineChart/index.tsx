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
import { IDirection, ILineChartType, IPosition } from '@agito/chart-shared';
import { LineChartOptionHandle } from '@agito/chart-core';

interface ILineChart extends IChartExternal {
  chartType: ILineChartType;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;
  /** 初始化配置 */
  cusInitOptions?: object;
  /** 柱状图颜色 */
  mainColor?: string | string[];
  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
  /** 数据 */
  series?: object[];
  xAxis?: object;
  yAxis?: object;
  /** 表格数据 */
  chartData: any[];
}

/**
 * @description:
 * @return {*}
 */
function LineChart({
  /** 折线图类型 */
  chartType = 'line',
  /** 图例位置 */
  legendPosition = 'top',
  hiddenLegend = true,
  cusInitOptions,
  boundaryGap = false,
  mainColor,
  containerClass,
  series,
  xAxis,
  yAxis,
  chartData,
  ...otherProps
}: ILineChart) {
  const [optionHandle, setOptionHandle] = useState<LineChartOptionHandle>();

  useLayoutEffect(() => {
    if (!cusInitOptions) {
      const _barChartOptionHandle = new LineChartOptionHandle();
      _barChartOptionHandle.setOptions(getChartOptions() as EChartsOption);
      setOptionHandle(_barChartOptionHandle);
    }
  }, []);

  const setOption = () => {
    if (optionHandle) {
      chartType && optionHandle.setChartType(chartType);
      boundaryGap != undefined && optionHandle.setBoundaryGap(boundaryGap);
      optionHandle.setHiddenLegend(hiddenLegend);
      optionHandle.setLegendPosition(legendPosition);
      mainColor && optionHandle.setMainColor(mainColor);
      xAxis && optionHandle.setXAxis(xAxis);
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
export default LineChart;
export { getChartOptions };
