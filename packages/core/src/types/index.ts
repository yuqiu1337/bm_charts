/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:54:16
 * Copyright © YourCompanyName All rights reserved
 */
export type IChartTheme =
  | "dark"
  | "infographic"
  | "macarons"
  | "roma"
  | "shine"
  | "vintage";
  


/**
 * @description: 方向
 * @type {IDirection}
 */
export type IDirection =
  /** 水平 */
  | "horizontal"
  /** 垂直 */
  | "vertical";

/** 位置:正方位 */
export type IPosition = "top" | "bottom" | "left" | "right";

export interface IChartCommon {
  /** id */
  id?: string;
  /** 外层容器样式 */
  containerClass?: string;
  /** 数据请求完的回调 */
  initOnLoad?: () => void;
  /** 主题 */
  // theme?: IChartTheme;
  /** 表格数据 */
  chartData?: any[];
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
