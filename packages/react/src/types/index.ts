/**
 * @date          Invalid Date
 * Copyright © YourCompanyName All rights reserved
 */
import { IChartTheme } from "@bm/chart-core";
export type IDefaultStyle = "white" | "black" | "custom";

// 基础
export type IChartsBase = {
  style?: IDefaultStyle;
  containerClass?: string;
};

export type IBaseChart = IChartsBase & {
  id?: string;
  title?: string;
  option?: object;
  data?: object;
  children?: React.ReactNode;
  theme?: IChartTheme;
};
