/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 11:11:36
 * Copyright © YourCompanyName All rights reserved
 */
 /** 折线图类型 */
 export type ILineChartType = 'line' | 'lineArea' | 'smoothed' | 'smoothedArea';
 
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
