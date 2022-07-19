import BmChart from "@agito/chart-core";
import { getUniqueId } from "@agito/chart-shared";
import { useState, useLayoutEffect, useEffect } from "react";
import { IBaseChart } from "../types";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-19 10:19:06
 * Copyright © YourCompanyName All rights reserved
 */
function useInitOption(props: IBaseChart) {
  const [chartId] = useState(() => getUniqueId());
  const [bmChart, setBmChart] = useState(() => new BmChart());
  const { option, data, theme } = props;

  /** 组件渲染后执行 */
  useLayoutEffect(() => {
    if (!bmChart) {
      const bmChart = new BmChart();
      setBmChart(bmChart);
    }
    if (chartId) {
      const ele = document.getElementById(chartId);
      if (ele && option) {
        bmChart.init({ ele, option, theme });
        bmChart.resize();
      }
    }
  }, [chartId]);

  useEffect(() => {
    if (data) {
      bmChart.setOptionData(data);
    }
  }, [data]);

  return {
    bmChart,
    chartId,
  };
}
export { useInitOption };
