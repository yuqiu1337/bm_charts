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
  /**
   * @description: 修改数据
   * @param {string} key 字段名
   * @param {any} value 数据
   * @param {boolean} notMerge 是否合并
   * @return {*}
   */
  setOptionByKey(key: string, value: any, notMerge = false): void {
    if (!value) {
      console.warn("setOptionByKey 入参 value 不能为空");
      return;
    }

    const _optionValue = this.options[key];

    // 如果key不存在，直接覆盖，不做额外判断
    if (!_optionValue) {
      this.options[key] = value;
      return;
    }

    const isArrayCheckValue = Array.isArray(_optionValue);
    const isArrayCheckNewValue = Array.isArray(value);

    // 新数据是数组，直接替换
    if (isArrayCheckNewValue || (isArrayCheckValue && !isArrayCheckNewValue)) {
      this.options[key] = value;
      return;
    }
    const isObjectCheckValue =
      _optionValue instanceof Object && !isArrayCheckValue;

    // 旧数据为对象
    if (isObjectCheckValue) {
      const cusOptions = notMerge ? value : { ..._optionValue, ...value };
      this.options[key] = cusOptions;
    } else {
      this.options[key] = value;
    }
  }
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
