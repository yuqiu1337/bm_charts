import { BaseOptionHandle } from "../utils";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  chartData: { data: any[] }[] | undefined;
  initSeries = {
    type: "bar",
    seriesLayoutBy: "row",
  };
  /** 设置数据 */
  setData(chartData: { data: any[] }[]): void {
    this.chartData = chartData;
    /** 判断是一维数组还是对象数组 */
    if (chartData.length > 0) {
      this.setSeries(chartData);
      this.setDataset(chartData);
      this.updateSeries();
    }
  }
  /**
   * @description:  获取主轴数据，一般为x轴
   * @return {*}
   */
  getCategory() {
    if (this.direction == "vertical") {
      const _yAxis = this.options.yAxis;
      return _yAxis?.data ?? [];
    }
    const _xAxis = this.options.xAxis;
    return _xAxis?.data ?? [];
  }
  /**
   * @description: 将配置同步
   * @return {*}
   */
  updateSeries() {
    const _series = this.options.series as any[];
    const series = this.chartData?.map((item, idx) => {
      let seriesOption = { ...this.initSeries };
      if (_series[idx]) {
        seriesOption = {
          ...seriesOption,
          ..._series[idx],
        };
      }
      return seriesOption;
    });
    this.setOptionByKey("series", series);
  }
  /**
   * @description: 设置Series只处理配置
   * @param {any} seriesData
   * @return {*}
   */
  setSeries(seriesData: any[]) {
    const _series = this.options.series as any[];
    const series = seriesData.map((item, idx) => {
      const { data, ...other } = item;
      return { ...other };
    });
    this.setOptionByKey("series", series);
  }

  /**
   * @description: 设置Series只处理数据
   * @param {any} seriesData
   * @return {*}
   */
  setDataset(chartData) {
    const category = this.getCategory();
    let dataset = { source: [["_category", ...category]] };
    if (chartData[0] instanceof Object) {
      const res = chartData.reduce((pre, item, idx, arr) => {
        pre.source.push([item.name, ...item.data]);
        return pre;
      }, dataset);
      dataset = res;
    } else {
      dataset.source.push(["_data", ...chartData]);
    }
    this.setOptionByKey("dataset", { ...dataset });
  }
}
export default ChartOptionHandle;
