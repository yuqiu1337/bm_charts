/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 15:56:53
 * Copyright © YourCompanyName All rights reserved
 */
import React, { FC, useLayoutEffect, useState } from "react";
import BmChart from "@bm/chart-core";
import { getUniqueId } from "@bm/chart-shared";

type IDefaultStyle = "white" | "black" | "custom";

// 基础
type IChartsBase = {
  style?: IDefaultStyle;
  containerClass?: string;
};

type IHistogram = IChartsBase & {
  id?: string;
  title?: string;
  option?: object;
  children?: React.ReactNode;
};

/**
 * @description: 柱状图
 * @param {IHistogram} props.option
 * @return {JSX.Element}
 */
function Histogram(props: IHistogram): JSX.Element {
  const [chartId] = useState(() => getUniqueId());
  const [bmChart, setBmChart] = useState(() => new BmChart());
  const { option } = props;

  /** 组件渲染后执行 */
  useLayoutEffect(() => {
    if (!bmChart) {
      const bmChart = new BmChart();
      setBmChart(bmChart);
    }
    if (chartId) {
      const ele = document.getElementById(chartId);
      if (ele && option) {
        bmChart.init({ ele, option });
        bmChart.resize();
      }
    }
  }, [chartId]);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      id={chartId}
      className=""
    ></div>
  );
}
export { Histogram };
