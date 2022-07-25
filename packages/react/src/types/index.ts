/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:29:26
 * Copyright © YourCompanyName All rights reserved
 */
import { IChartTheme } from '@agito/chart-core';
import { EChartsOption } from 'echarts';

/**  图表组件通用属性 */
export interface IChartCommon extends React.HTMLAttributes<HTMLElement> {
  /** id */
  id?: string;
  /** 外层容器样式 */
  containerClass?: string;
  /** 初始化option */
  initOptions: EChartsOption;
  /** 图表数据 */
  chartData?: object | Array<object>;
  /** 数据请求完的回调 */
  initOnLoad?: () => void;
  /** 主题 */
  theme?: IChartTheme;
}

/** 图表数据相关 */
export interface IChartSource {
  /** 请求带参 **/
  params?: object;
  /** 请求Header **/
  headers?: object;
  /** 数据源 */
  action?: string;
  /** 数据请求完的回调 */
  dataOnLoad?: () => void;
  /** 数据转换函数 */
}

/** 业务图表类型 */
export interface IChartExternal extends IChartSource, Omit<IChartCommon, 'initOptions'> {}
