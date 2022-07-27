import {
  ILineChartType,
  IPieChartType,
  transformArray,
} from "@agito/chart-shared";
import { EChartsOption } from "echarts";
import { BaseOptionHandle } from "../utils";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  /** 设置数据 */
  setData(
    chartData: { name: any; value: any }[],
    options: { mode: string; topCount: number }
  ): void {
    let _chartData = chartData;
    if (options && options.mode === "top") {
      if (options.topCount < chartData.length && options.topCount > 0) {
        _chartData = _chartData.reduce((pre, item, idx) => {
          if (idx < options.topCount) {
            pre.push(item as never);
          } else {
            const otherItem: { name: any; value: never } = pre[
              options.topCount
            ] ?? {
              name: "其他",
              value: 0,
            };
            pre[options.topCount] = {
              ...otherItem,
              value: otherItem.value + item.value,
            };
          }
          return pre;
        }, []);
      }
    }
    const res = _chartData.reduce(
      (pre, item, idx, arr) => {
        pre.source.push([item.name, item.value]);
        return pre;
      },
      { source: [] }
    );
    this.setOptionByKey("dataset", res);
  }
  /** 设置图表类型 */
  setChartType(chartType: IPieChartType) {
    let _series = this.options.series as object[];
    switch (chartType) {
      case "doughnut":
        _series = _series.map((item) => {
          return {
            ...item,
            radius: ["40%", "70%"],
          };
        });
        break;
      case "nightingale":
        _series = _series.map((item) => {
          return {
            ...item,
            roseType: "area",
          };
        });
        break;
    }
    this.setOptionByKey("series", _series);
  }
}
export default ChartOptionHandle;
