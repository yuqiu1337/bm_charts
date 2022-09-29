/** 折线图类型 */
type ILineChartType = "line" | "lineArea" | "smoothed" | "smoothedArea";

interface ILineOptions {
  chartType: ILineChartType;

  /** 是否存在边界间隙 */
  boundaryGap?: boolean;
}

export { ILineChartType, ILineOptions };
