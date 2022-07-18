/**
 * @date          Invalid Date
 * Copyright © YourCompanyName All rights reserved
 */
import echarts, { EChartsType } from "echarts";

type BmChartConstrictor = {
  dom: HTMLElement;
};

class BmChart {
  /** 挂载节点 */
  private dom: HTMLElement | null = null;
  private charts: EChartsType | null = null;

  constructor(props: BmChartConstrictor) {
    this.dom = props.dom;
  }
  /** 检查dom */
  checkDom() {
    return new Promise((resolve, reject) => {
      if (this.dom) {
        resolve(this);
      } else {
        reject(this);
      }
    });
  }
  /** 初始化 */
  async init() {
    if (this.dom !== null) {
      this.charts = echarts.init(this.dom);
    }
  }
  /** 重置 */
  resize() {
    if (!this.charts) {
      console.log("error");
      return;
    }
    this.charts.resize({
      width: "auto",
      height: "auto",
      animation: {
        duration: 100,
      },
    });
  }
  /** 设置数据 */
  async setData(data: Array<object>) {
    if (!this.charts) {
      console.log("error");
      return;
    }
    this.charts.setOption({
      data: data,
    });
  }
  /** 重新绘制 */
  reRender() {
    this.dispose()
    this.init()
  }
  /** 销毁 */
  async dispose() {
    if (!this.charts) {
      console.log("error");
      return;
    }
    this.charts.dispose();
    this.charts = null;
  }
}
export default BmChart;
