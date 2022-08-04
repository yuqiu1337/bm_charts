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
/** 折线图类型 */
export type ILineChartType = "line" | "lineArea" | "smoothed" | "smoothedArea";
/** 饼图类型 */
export type IPieChartType = "pie" | "doughnut" | "nightingale";

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
