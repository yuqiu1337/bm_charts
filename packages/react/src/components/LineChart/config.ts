/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 17:10:43
 * Copyright © YourCompanyName All rights reserved
 */
import { BaseOptionHandle } from '@agito/chart-core';
import { EChartsOption } from 'echarts';
export const getChartOptions = function () {
  return {
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    color: ['#409bff'],
    legend: {
      show: true,
    },
    series: [],
  };
};

