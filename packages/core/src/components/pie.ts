import { IPieChartType } from "@agito/chart-shared";
import { dataTool, SeriesModel } from "echarts";
import { BaseOptionHandle } from "./plain";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  chartData!: object[];
  commonSeries = {};
  protected fixedSeries = {
    type: "pie"
  };
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
              value: 0
            };
            pre[options.topCount] = {
              ...otherItem,
              value: otherItem.value + item.value
            };
          }
          return pre;
        }, []);
      }
    }
    this.chartData = _chartData;
    this.updateSeriesData();
    this.updateSeriesConfig();
  }
  /** 设置图表类型 */
  setChartType(chartType: IPieChartType) {
    let _series = this.options.series as object[];
    switch (chartType) {
      case "doughnut":
        _series = _series.map(item => {
          return {
            ...item,
            radius: ["40%", "70%"]
          };
        });
        break;
      case "nightingale":
        _series = _series.map(item => {
          return {
            ...item,
            roseType: "area"
          };
        });
        break;
    }
    this.setOptionByKey("series", _series);
  }
  /** 数据为{name:string,value:string} */
  /**
   * @description: 将配置同步，将数据更新到Series的data里
   * @return {*}
   */
  protected updateSeriesData() {
    const _series = this.options.series as any[];
    const series = [
      {
        ..._series[0],
        data: this.chartData
      }
    ];

    this.setOptionByKey("series", series);
  }
  /**
   * @description: 设置Series直接覆盖
   * @param {any} seriesData
   * @return {*}
   */
  setSeries(seriesData: any[]) {
    this.setOptionByKey("series", seriesData);
    this.updateSeriesConfig();
  }
}
export default ChartOptionHandle;
