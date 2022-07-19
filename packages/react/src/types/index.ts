/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:25:15
 * Copyright © YourCompanyName All rights reserved
 */
export type IDefaultStyle = "white" | "black" | "custom";

// 基础
export type IChartsBase = {
  style?: IDefaultStyle;
  containerClass?: string;
};

export type IHistogram = IChartsBase & {
  id?: string;
  title?: string;
  option?: object;
  data?: object;
  children?: React.ReactNode;
};
