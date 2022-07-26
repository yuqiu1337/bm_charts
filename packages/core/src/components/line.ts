import { ILineChartType, transformArray } from "@agito/chart-shared";
import { BaseOptionHandle } from "../utils";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BaseOptionHandle {
  /** 设置数据 */
  setData(chartData: { data: any[] }[]): void {
    const _series = this.options.series as object[];

    const newSeries = chartData.map((item, idx) => {
      const { type, ...otherItems } = item;
      return {
        type: "line",
        ...otherItems,
      };
    });
    this.options.series = [...newSeries];
    console.log(this.options);
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
    this.options.xAxis = _xAxis;
  }
  /** 设置折线图类型 */
  setChartType(chartType: ILineChartType) {
    let _series = this.options.series as object[];
    switch (chartType) {
      case "lineArea":
        _series = _series.map((item) => {
          return {
            ...item,
            areaStyle: {},
          };
        });
        break;
      case "smoothed":
        _series = _series.map((item) => {
          return {
            ...item,
            smooth: true,
          };
        });
        break;
      case "smoothedArea":
        _series = _series.map((item) => {
          return {
            ...item,
            smooth: true,
            areaStyle: {},
          };
        });
        break;
    }
    this.options.series = [..._series];
  }
}
export default ChartOptionHandle;
