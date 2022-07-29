/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { default as useInitChart } from '@/hooks/useInitPlainChart';
import { IChartExternal, ICommonObjectType } from '@/types';
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
  /** 标题文字设置 */
  title?: string;
  titleConfig?: ICommonObjectType;
  /** 柱状图颜色 */
  mainColor?: string | string[];
  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
  /** 类目轴数据 */
  categoryData?: string[];
  /** 表格数据 */
  chartData: any[];
  /** 数据 */
  seriesConfig?: object[];
  xAxisConfig?: object;
  yAxisConfig?: object;
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
  title = '',
  titleConfig,
  mainColor,
  categoryData,
  containerClass,
  seriesConfig,
  xAxisConfig,
  yAxisConfig,
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
      title && optionHandle.setTitle(title);
      titleConfig && optionHandle.setTitle(titleConfig);
      boundaryGap != undefined && optionHandle.setBoundaryGap(boundaryGap);

      optionHandle.setHiddenLegend(hiddenLegend);

      optionHandle.setLegendPosition(legendPosition);

      mainColor && optionHandle.setMainColor(mainColor);

      categoryData && optionHandle.setCategoryData(categoryData);
      xAxisConfig && optionHandle.setXAxis(xAxisConfig);

      seriesConfig && optionHandle.setSeries(seriesConfig);

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
