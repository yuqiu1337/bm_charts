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
import { clone, cloneDeep, functions, isFunction } from 'lodash';
import { ILineChartType, IPosition } from '@agito/chart-core/es/types';
import { useDataSource } from '../hooks/useDataSource';

function createChart<IPlotConfig extends Record<string, any>>(
  ChartClass: any,
  name: any,
  cfg?: any,
) {
  const Com = React.forwardRef((props: IPlotConfig, ref) => {
    const { dataset, loading } = useDataSource(props);

    const { chartConfig, ...rest } = props;
    const { builtSource = true, chartData } = rest;

    const chart = useRef();
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

      // chartInstance.render();

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
      // console.log(rest);
      if (chart.current) {
        chart.current.changeCustomConfig(rest);
      }
    }, [rest]);

    // }, [rest]);
    const data = builtSource ? dataset : chartData;
    // 数据变更时
    useEffect(() => {
      if (chart.current) {
        chart.current.changeData(data);
      }
    }, [JSON.stringify(data)]);

    // //TODO:另外提供一个字段做配置变更
    // useEffect(() => {
    //   console.log(chartConfig);
    //   if (chart.current) {
    //     chart.current.changeOption(chartConfig);
    //   }
    // }, [chartConfig]);

    return <div ref={container}> </div>;
  });
  return Com;
}

export default createChart;
