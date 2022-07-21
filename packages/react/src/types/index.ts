/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:29:26
 * Copyright © YourCompanyName All rights reserved
 */
import { IChartTheme } from '@agito/chart-core';
export type IDefaultStyle = 'white' | 'black' | 'custom';

/** 表格基础类型支持 */
export type IChartsBase = {
  style?: IDefaultStyle;
  containerClass?: string;
};

/**  */
export type IBaseChart = IChartsBase & {
  id?: string;
  title?: string;
  option?: object;
  data?: object;
  children?: React.ReactNode;
  theme?: IChartTheme;
};

/**  图表组件通用属性 */
export type IChartCommon = {
  /** id */
  id: string;
  /** 外层容器样式 */
  containerClass?: string;
  /** 初始化option */
  initOptions: object;
  /** 图表数据 */
  chartData?: object | Array<object>;
  /** 数据请求完的回调 */
  initOnLoad: () => void;
};

/** 图表数据相关 */
export type IChartSource = {
  /** 请求带参 **/
  params: object;
  /** 请求Header **/
  headers: object;
  /** 数据源 */
  action: string;
  /** 数据请求完的回调 */
  dataOnLoad: () => void;
  /** 数据转换函数 */
};
