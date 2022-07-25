/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-21 13:42:36
 * Copyright © YourCompanyName All rights reserved
 */
import React from 'react';
import classNames from 'classnames';
import useInitChart from '@/hooks/useInitChart';
import { IChartCommon } from '@/types';

/**
 * @description: 基础图表
 * @param {IChartCommon} props
 * @return {JSX.Element}
 */
function BaseChart(props: IChartCommon): JSX.Element {
  const { chartId } = useInitChart(props);

  const { containerClass } = props;

  return <div id={chartId} className={classNames(containerClass ? containerClass : '')}></div>;
}
export default BaseChart;
