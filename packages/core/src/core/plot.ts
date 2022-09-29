import * as echarts from "echarts";
import { EChartsType } from "echarts";
import { ANIMATION_DURATION } from "../constants";
import { bind } from "size-sensor";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 15:46:51
 * Copyright © YourCompanyName All rights reserved
 */
const SOURCE_ATTRIBUTE_NAME = "data-chart-source-type";
export abstract class Plot {
  /** 图表类型名称 */
  public abstract readonly type: string;
  private preData;

  /** 图表配置 */
  public options;
  /** 图表定制化配置 */
  public customConfig: object;
  /** 图表容器 */
  public container: HTMLElement;
  /** 图表实例 */
  public chart!: EChartsType;

  private unbind!: () => void | undefined;

  static getDefaultOptions() {
    return {};
  }

  /**
   * 获取默认的 options 配置项
   * 每个组件都可以复写
   */
  protected getDefaultOptions(): any {
    return Plot.getDefaultOptions();
  }

  constructor(container: HTMLElement, options) {
    this.customConfig = {};

    // 获取ID是否存在
    this.container =
      typeof container === "string"
        ? document.getElementById(container)
        : container;

    this.options = Object.assign({}, this.getDefaultOptions(), options);
    this.preData = [];
    // 初始化
    this.createChart();

    // 监听大小变化
  }
  /**
   * @description: 更新自定义的配置
   * @return {*}
   */
  updateCustomConfig(config: object): void {
    this.customConfig = Object.assign({}, this.customConfig, config);
    this.reInit();
  }

  /**
   * @description:
   * @param {*} dataset
   * @return {*}
   */
  updateDataset(dataset: any, xField?: string, yField?: string): void {
    // this.chart.setOption({ dataset });
    this.options = Object.assign({}, this.options, { dataset });
    // if (xField && yField) {
    //   const _series = this.getDefaultOptions()["series"];
    //   console.log(_series);
    // }
    // console.log(this.chart.getOption());
  }

  /**
   * @description:
   */
  createChart() {
    this.chart = echarts.init(this.container);

    this.chart.setOption(this.options);
    // 给容器增加标识，知道图表的来源
    this.container.setAttribute(SOURCE_ATTRIBUTE_NAME, "BMChart");
    this.container.style.height = "100%";

    this.triggerResize();
  }
  /**
   * @description:
   * @param {number} width
   * @param {number} height
   * @return {*}
   *
   */
  changeSize(width: number, height: number) {
    //TODO: 是否实现待定
    this.chart.resize({
      width,
      height,
      animation: {
        duration: ANIMATION_DURATION,
      },
    });
  }
  /**
   * @description: data
   * @return {*}
   */
  public changeData(data) {
    const { chart, options } = this;
    this.preData = data;
    this.updateDataset({
      source: data,
    });
    if (data.length > 0) {
      this.render();
    }
  }

  reInit() {
    this.dispose();
    this.createChart();
    this.reRender();
    this.triggerResize();
  }

  reRender() {
    this.changeData(this.preData);
  }

  update(arg0: {}) {
    throw new Error("Method not implemented.");
  }

  /**
   * @description: 更新
   * @param {*} options
   */

  /**
   * @description: 更新配置, 只更新实例中的数据
   * @param {*} options
   * @return {*}
   */
  updateOptions(options) {
    this.options = Object.assign({}, this.options, options);
  }

  /**
   * 每个组件有自己的适配器，处理数据
   */
  protected abstract getSchemaAdaptor();

  /**
   * @description: 处理option的数据，并赋给图表实例
   * @return {*}
   */

  render() {
    const { options } = this.execAdaptor();
    console.log(options, "render");
    // console.log(this.chart.getOption(), "render");
    this.chart.setOption(options);
    // 绑定
    this.bindSizeSensor();
  }
  /**
   * @description: 销毁
   * @return {*}
   */

  dispose() {
    this.chart.dispose();
    this.unbindSizeSensor();
  }

  /**
   * 执行 adaptor 操作
   */
  protected execAdaptor() {
    const adaptor = this.getSchemaAdaptor();

    // 转化成 Charts API
    return adaptor({
      customConfig: this.customConfig,
      options: this.options,
    });
  }

  /**
   * @description: 触发大小变化
   * @return {*}
   */

  private triggerResize() {
    this.chart.resize({
      width: "auto",
      height: "auto",
      animation: {
        duration: ANIMATION_DURATION,
      },
    });
  }

  /**
   * 绑定 dom 容器大小变化的事件
   */
  private bindSizeSensor() {
    if (this.unbind) {
      return;
    }

    this.unbind = bind(this.container, () => {
      // // 获取最新的宽高信息
      // const { width, height } = getContainerSize(this.container);

      // 主要是防止绑定的时候触发 resize 回调
      // if (width !== this.chart.width || height !== this.chart.height) {
      this.triggerResize();
      // }
    });
  }

  /**
   * 取消绑定监听大小变更的绑定
   */
  private unbindSizeSensor() {
    if (this.unbind) {
      this.unbind();
      this.unbind = undefined;
    }
  }
}
