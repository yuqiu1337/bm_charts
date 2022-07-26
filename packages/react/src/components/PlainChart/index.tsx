/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 13:42:36
 * Copyright © YourCompanyName All rights reserved
 */
import React from 'react';
import classNames from 'classnames';
import useInitPlainChart from '@/hooks/useInitPlainChart';
import { IChartCommon } from '@/types';

/**
 * @description: 基础图表
 * @param {IChartCommon} props
 * @return {JSX.Element}
 */
function PlainChart(props: IChartCommon): JSX.Element {
  const { chartId } = useInitPlainChart(props);

  const { containerClass } = props;
  return <div id={chartId} className={classNames(containerClass ? containerClass : '')}></div>;
}
export default PlainChart;
