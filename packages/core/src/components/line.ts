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
    console.log(this.options)
  }
}
export default ChartOptionHandle;
