/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:29:26
 * Copyright © YourCompanyName All rights reserved
 */
import { IChartTheme } from '@agito/chart-core';
import { IPosition } from '@agito/chart-shared';
import { EChartsOption } from 'echarts';

/**  图表组件通用属性 */
export interface IChartCommon {
  /** id */
  id?: string;
  /** 外层容器样式 */
  containerClass?: string;
  /** 数据请求完的回调 */
  initOnLoad?: () => void;
  /** 主题 */
  theme?: IChartTheme;
  /** 表格数据 */
  chartData: any[];
  /** 表格配置  */
  chartConfig?: object;
  /** 图例位置 */
  legendPosition?: IPosition;
  /** 是否显示图例 */
  hiddenLegend?: boolean;

  /** 标题文字设置 */
  title?: string;
  // /** 柱状图颜色 */
  // mainColor?: string | string[];

  /** 笛卡尔坐标系取值字段 */
  xField?: string;
  yField?: string | string[];
}

/** 图表数据相关 */
export interface IChartSource {
  /** 访问地址 */
  customSource?: boolean;
  action?: string;
  header?: {
    [keyof: string]: any;
  };
  params?: object;
  method?: string;
}

/** 业务图表类型 */
export interface IChartExternal extends IChartSource, IChartCommon {}

/** 图表数据类型 */
export type IChartData = number[] | number[][] | object[];
export type ICommonObjectType = { [propName: string]: any };
