import { IChartCommon } from "../../types";

/** 饼图类型 */
export type IPieChartType = "pie" | "doughnut" | "nightingale";

export interface IPieOptions extends IChartCommon {
  chartType?: IPieChartType;
  /** mode */
  mode?: "all" | "top";
  /** top个数 */
  topCount?: number;
  /** 饼图名称标签 */
  nameField?: string;
  /** 饼图值标签 */
  valueField?: string;
}
