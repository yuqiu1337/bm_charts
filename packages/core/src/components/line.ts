import { ILineChartType, transformArray } from "@agito/chart-shared";
import { default as BarOptionHandler } from "./bar";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 16:11:50
 * Copyright © YourCompanyName All rights reserved
 */
class ChartOptionHandle extends BarOptionHandler {
  chartData: { data: any[] }[] | undefined;

  /** 每个series都会有的数据，可以被覆盖 **/
  commonSeries = {};
  
  /** 个series中，不会被修改的数据 */
  protected fixedSeries = {
    type: "line"
  };

  /** 设置折线图是否撑满 */
  setBoundaryGap(boundaryGap: boolean) {
    let _xAxis = this.options.xAxis;

    if (_xAxis instanceof Array) {
      _xAxis = _xAxis.map(item => {
        return {
          ...item,
          boundaryGap
        };
      });
    } else {
      _xAxis = {
        ..._xAxis,
        boundaryGap
      };
    }
    this.setOptionByKey("xAxis", _xAxis);
  }

  /** 设置折线图类型 */
  setChartType(chartType: ILineChartType) {
    switch (chartType) {
      case "lineArea":
        this.updateCommonSeries({ areaStyle: {} });
        break;
      case "smoothed":
        this.updateCommonSeries({ smooth: true });
        break;
      case "smoothedArea":
        this.updateCommonSeries({ smooth: true, areaStyle: {} });
        break;
    }
  }
}
export default ChartOptionHandle;
