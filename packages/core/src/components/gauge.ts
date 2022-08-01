import { IPieChartType } from "@agito/chart-shared";
import { dataTool, SeriesModel } from "echarts";
import { BaseOptionHandle } from "./plain";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  chartData!: object;
  commonSeries = {};
  protected fixedSeries = {
    type: "gauge"
  };
  /** 设置数据 */
  setData(
    chartData: { name: any; value: any },
  ): void {
    const _chartData = chartData;
    this.chartData = [_chartData];
    this.updateSeriesData();
    this.updateSeriesConfig();
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
