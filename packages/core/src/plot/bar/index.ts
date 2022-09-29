import { Plot } from "../../core/plot";
import { adaptor } from "./adaptor";
import { DEFAULT_OPTIONS } from "./constants";
import { IBarOptions } from "./types";

export type { IBarOptions };
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:08:48
 * Copyright © YourCompanyName All rights reserved
 */
class Bar extends Plot {
  /**
   * 获取 条形图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<IBarOptions> {
    return DEFAULT_OPTIONS;
  }

  public type = "line";

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
    return Bar.getDefaultOptions();
  }

  protected getSchemaAdaptor() {
    return adaptor;
  }
}

export { Bar };
export * from "./types";
