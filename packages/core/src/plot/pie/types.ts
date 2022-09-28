import { IChartCommon } from "../../types";

/** 饼图类型 */
type IPieChartType = "pie" | "doughnut" | "nightingale";

interface IPieOptions extends IChartCommon {
  chartType?: IPieChartType;
  /**
   *  展示模式
   */
  mode?: "all" | "top";
  /**
   * @description: top个数
   */
  topCount?: number;
  /** 饼图名称标签 */
  nameField?: string;
  /** 饼图值标签 */
  valueField?: string;
}
export { IPieChartType, IPieOptions };
