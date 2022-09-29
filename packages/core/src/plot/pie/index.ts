import { IAdaptor } from "@/core/adaptor";
import { Plot } from "../../core/plot";
import { adaptor } from "./adaptor";
import { DEFAULT_OPTIONS } from "./constants";
import type { IPieOptions, IPieChartType } from "./types";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:08:48
 * Copyright © YourCompanyName All rights reserved
 */
class Pie extends Plot {
  /**
   * 获取 条形图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): any {
    return DEFAULT_OPTIONS;
  }

  public type = "pie";

  /**
   * @description: 自定义配置变更
   * @return {*}
   */
  public changeCustomConfig(customConfig: object) {
    this.updateCustomConfig(customConfig);
  }
  // /**
  //  * @description: 标签变更
  //  * @return {*}
  //  */
  // public changeConfig (){
  //   this.updateCustomConfig()
  // }

  /**
   * @override
   */
  // public changeData(data) {
  //   const { chart, options } = this;
  //   this.updateDataset({
  //     source: data,
  //   });
  //   this.render();
  // }

  /**
   * 获取 条形图 默认配置
   */
  protected getDefaultOptions() {
    return Pie.getDefaultOptions();
  }

  protected getSchemaAdaptor():IAdaptor<IPieOptions> {
    return adaptor;
  }
}

export { Pie };
export * from "./types";
