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

interface ILineChart extends IChartExternal {
  chartType: ILineChartType;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;

  /** 标题文字设置 */
  title?: string;
  titleConfig?: ICommonObjectType;
  /** 柱状图颜色 */
  mainColor?: string | string[];
  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
  /** 笛卡尔坐标系取值字段 */
  xField?: string;
  yField?: string | string[];
  /** 类目轴数据 */
  categoryData?: string[];
  /** 表格数据 */
  chartData: any[];
  /** 表格配置  */
  chartConfig: object;
}

/**
 * 获取或者绑定图表实例
 */
export const getChart = (chartRef, chart: any) => {
  if (!chartRef) {
    return;
  }
  if (isFunction(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};

/**
 * @description:
 * @param {ILineChart} param1
 * @param {*} ref
 * @return {*}
 */
function LineChart({ xField, yField, ...otherProps }: ILineChart, ref) {
  const { chartConfig, ...rest } = arguments[0];
  const { chartData } = rest;
  // const {} = chartConfig;
  // const {} = rest;
  const chart = useRef<ChartClass>();
  const chartOptions = useRef();
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!container.current) {
      return () => null;
    }
    if (!chartOptions.current) {
      chartOptions.current = cloneDeep(chartConfig);
    }
    const chartInstance = new (ChartClass as any)(container.current, {
      ...chartConfig,
    });

    chartInstance.render();

    chart.current = clone(chartInstance);

    return () => {
      // 销毁事件
      if (chart.current) {
        chart.current.dispose();
      }
    };
  }, []);

  // 其他配置变更时
  useEffect(() => {
    console.log(rest);
    if (chart.current) {
      chart.current.changeCustomConfig(rest);
    }
  }, [rest]);

  // useEffect(() => {});

  // 数据变更时
  useEffect(() => {
    if (chart.current) {
      chart.current.changeData(chartData);
    }
  }, chartData);

  // //TODO:另外提供一个字段做配置变更
  // useEffect(() => {
  //   console.log(chartConfig);
  //   if (chart.current) {
  //     chart.current.changeOption(chartConfig);
  //   }
  // }, [chartConfig]);

  return (
    <div ref={container}> </div>
    // <PlainChart
    //   initOptions={initOptions as EChartsOption}
    //   containerClass={containerClass}
    //   {...otherProps}
    // ></PlainChart>
  );
}
export default forwardRef(LineChart);
