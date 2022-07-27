import { ILineChartType, transformArray } from "@agito/chart-shared";
import { BaseOptionHandle } from "../utils";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  chartData: { data: any[] }[] | undefined;
  initSeries = {
    type: "line",
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

  /** 设置折线图是否撑满 */
  setBoundaryGap(boundaryGap: boolean) {
    let _xAxis = this.options.xAxis;

    if (_xAxis instanceof Array) {
      _xAxis = _xAxis.map((item) => {
        return {
          ...item,
          boundaryGap,
        };
      });
    } else {
      _xAxis = {
        ..._xAxis,
        boundaryGap,
      };
    }
    this.setOptionByKey("xAxis", _xAxis);
  }

  /** 设置折线图类型 */
  setChartType(chartType: ILineChartType) {
    switch (chartType) {
      case "lineArea":
        this.updateSeriesConfig({ areaStyle: {} });
        break;
      case "smoothed":
        this.updateSeriesConfig({ smooth: true });
        break;
      case "smoothedArea":
        this.updateSeriesConfig({ smooth: true, areaStyle: {} });
        break;
    }
  }
}
export default ChartOptionHandle;
