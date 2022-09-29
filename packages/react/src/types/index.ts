/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:29:26
 * Copyright © YourCompanyName All rights reserved
 */
import { IChartCommon } from '@agito/chart-core';

/** 图表数据相关 */
export interface IChartSource {
  builtSource?: boolean;
  /** 访问地址 */
  action?: string;
  /** 携带header */
  header?: {
    [keyof: string]: any;
  };
  /** 携带参数 */
  params?: {
    [keyof: string]: any;
  };
  method?: string;
}

/** 业务图表类型 */
export interface IChartExternal extends IChartSource, IChartCommon {}

/** 图表数据类型 */
export type IChartData = number[] | number[][] | object[];
export type ICommonObjectType = { [propName: string]: any };
