/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 19:19:16
 * Copyright © YourCompanyName All rights reserved
 */
import { useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { IChartData, IChartExternal } from '@/types';
import { default as PlainChart } from '../PlainChart';
import { getChartOptions } from './config';
import { EChartsOption } from 'echarts';
import { IDirection, IPosition } from '@agito/chart-shared';
import { BarChartOptionHandle } from '@agito/chart-core';
import React from 'react';

type ICommonObjectType = { [propName: string]: any };

interface IBarChart extends IChartExternal {
  /** 朝向 **/
  direction?: IDirection;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;
  /** 标题文字设置 */
  title?: string;
  titleConfig?: ICommonObjectType;
  /** 柱状图颜色 */
  mainColor?: string | string[];
  /** 类目轴数据 */
  categoryData?: string[];
  /** 表格数据 */
  chartData: IChartData;
  /** 数据 */
  seriesConfig?: object[];
  xAxisConfig?: object;
  yAxisConfig?: object;
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
  title,
  titleConfig,
  mainColor,
  containerClass,
  categoryData,
  seriesConfig,
  xAxisConfig,
  yAxisConfig,
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
      titleConfig && optionHandle.setTitleOptions(titleConfig);
      title && optionHandle.setTitle(title);

      direction && optionHandle.setDirection(direction);

      categoryData && optionHandle.setCategoryData(categoryData);
      xAxisConfig && optionHandle.setXAxis(xAxisConfig);

      optionHandle.setLegendPosition(legendPosition);
      optionHandle.setHiddenLegend(hiddenLegend);

      mainColor && optionHandle.setMainColor(mainColor);

      seriesConfig && optionHandle.setSeries(seriesConfig);
      // 最后设置数据，存在场景，先修改了配置，又更新了数据
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
