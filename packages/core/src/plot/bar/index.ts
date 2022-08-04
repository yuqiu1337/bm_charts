import { Plot } from "../../core/plot";
import { adaptor } from "./adaptor";
import { BarOptions } from "./types";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:08:48
 * Copyright © YourCompanyName All rights reserved
 */
export class Bar extends Plot {
  /**
   * 获取 条形图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<BarOptions> {
    return DEFAULT_OPTIONS;
  }

  public type = "bar";

  /**
   * @override
   */
  public changeData(data: BarOptions["data"]) {
    // this.updateOption({ data });
    // const { chart, options } = this;
    // const { isPercent } = options;
    // let { xField, yField, xAxis, yAxis } = options;
    // [xField, yField] = [yField, xField];
    // [xAxis, yAxis] = [yAxis, xAxis];
    // const switchedFieldOptions = { ...options, xField, yField, yAxis, xAxis };
    // meta({ chart, options: switchedFieldOptions });
    // chart.changeData(
    //   getDataWhetherPercentage(data, xField, yField, xField, isPercent)
    // );
  }

  /**
   * 获取 条形图 默认配置
   */
  protected getDefaultOptions() {
    return Bar.getDefaultOptions();
  }

  protected getSchemaAdaptor() {
    return adaptor;
  }
}
