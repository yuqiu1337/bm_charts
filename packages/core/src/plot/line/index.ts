import { Plot } from "../../core/plot";
import { adaptor } from "./adaptor";
import { DEFAULT_OPTIONS, DEFAULT_PROPS } from "./constants";
import { ILineOptions } from "./types";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:08:48
 * Copyright © YourCompanyName All rights reserved
 */
class Line extends Plot {
  static defaultProps: ILineOptions;
  /**
   * 获取 条形图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<ILineOptions> {
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
  //   const { chart, options } = this
  //   this.updateDataset({
  //     source: data
  //   },);
  //   this.render()
  // }

  /**
   * 获取 条形图 默认配置
   */
  protected getDefaultOptions() {
    return Line.getDefaultOptions();
  }

  protected getSchemaAdaptor() {
    return adaptor;
  }
}
const defaultProps: ILineOptions = DEFAULT_PROPS();

Line.defaultProps = defaultProps;
export { Line };
export * from "./types";
