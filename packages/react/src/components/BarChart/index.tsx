/**
 * @date          Invalid Date
 * Copyright © YourCompanyName All rights reserved
 */
import React from 'react';
import classNames from 'classnames';
import { default as useInitChart } from '@/hooks/useInitChart';
import { IChartCommon, IChartSource } from '@/types';

type IBarChart = {
  title: string;
} & IChartCommon &
  IChartSource;

/**
 * @description: 柱状图
 * @param {IBaseChart} props
 */
function BarChart(props: IBarChart) {
  const { chartId } = useInitChart(props);

  const { containerClass } = props;

  return <div id={chartId} className={classNames(containerClass ? containerClass : '')}></div>;
}
export default BarChart;
