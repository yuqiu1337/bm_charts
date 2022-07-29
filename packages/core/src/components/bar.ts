import { BaseOptionHandle, CartesianOptionHandler } from "./plain";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends CartesianOptionHandler {
  chartData: any[];
  commonSeries = {};
  protected fixedSeries = {
    type: "bar"
  };
  /** 设置数据 */
  setData(chartData: { data: any[] }[]): void {
    /** 判断是一维数组还是对象数组 */
    if (chartData.length > 0) {
      let params;
      if (chartData[0] instanceof Array) {
        params = chartData.map(item => ({ data: item }));
      } else if (chartData[0] instanceof Object) {
        params = chartData.map(item => ({ ...item }));
      } else if (typeof chartData[0] == "number") {
        params = [{ data: chartData }];
      }

      if (params) {
        this.chartData = params;
        this.updateSeriesData();
      }
    }
    this.updateSeriesConfig();
  }
  /**
   * @description: 将配置同步，将数据更新到Series的data里
   * @return {*}
   */
  protected updateSeriesData() {
    let _series = this.options.series as any[];

    const useData = this.chartData.length > _series.length;

    if (useData) {
      _series = _series.concat(
        Array(this.chartData.length - _series.length).fill(_series[0])
      );
    }

    const series = _series?.map((item, idx) => {
      const { data, ...other } = item;
      const idxChart = this.chartData[idx] ?? {};
      const idxChartData = idxChart.data ?? [];

      let newData;

      let newItem = {
        ...other
      };
      if (data && data.length > 0) {
        newData = idxChartData.map((dataItem, dataIdx) => {
          const originalData = data[dataIdx];

          if (typeof originalData == "object") {
            return { ...originalData, value: dataItem };
          } else {
            return dataItem;
          }
        });
      } else {
        newData = this.chartData[idx]?.data ?? [];
      }

      newItem = {
        ...newItem,
        ...idxChart,
        data: newData
      };

      return newItem;
    });
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

  // /**
  //  * @description: 设置Series只处理数据
  //  * @param {any} seriesData
  //  * @return {*}
  //  */
  // private setDataset(chartData) {
  //   const category = this.getCategory();
  //   const dataset = { source: [["_category", ...category]] };
  //   const res = chartData.reduce((pre, item, idx, arr) => {
  //     pre.source.push([item.name, ...item.data]);
  //     return pre;
  //   }, dataset);

  //   this.setOptionByKey("dataset", { ...res });
  // }
}
export default ChartOptionHandle;
