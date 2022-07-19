/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 14:46:07
 * Copyright © YourCompanyName All rights reserved
 */
import * as echarts from "echarts";
import { EChartsType } from "echarts";
import { debounce } from "lodash";
import { DEBOUNCE_DURATION, ANIMATION_DURATION } from "./constants";

type BmChartConstrictor = {
  ele: HTMLElement;
  option: object;
};

class BmChart {
  /** 挂载节点 */
  private ele: HTMLElement | null = null;
  private charts: EChartsType | null = null;

  // constructor() {

  // }
  /** 检查dom */
  checkDom() {
    return new Promise((resolve, reject) => {
      if (this.ele) {
        resolve(this);
      } else {
        reject(this);
      }
    });
  }
  /** 初始化 */
  init(props: BmChartConstrictor) {
    if (this.ele === null) {
      this.ele = props.ele;
    }
    this.ele.style.height = "100%";
    if (!this.charts) {
      this.charts = echarts.init(this.ele);
      this.charts.setOption({ ...props.option });
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this;
      window.addEventListener("resize", function () {
        _this.handlerResize();
        // window.requestAnimationFrame(() => {
        //   _this.resize();
        // });
      });
    }
  }

  /** 更改大小控制 */
  handlerResize = debounce(this.resize, DEBOUNCE_DURATION);

  /** 重置宽高 */
  resize() {
    console.log("resize");
    if (!this.charts) {
      console.warn("error");
      return;
    }
    this.charts.resize({
      width: "auto",
      height: "auto",
      animation: {
        duration: ANIMATION_DURATION,
      },
    });
  }
  /** 设置数据 */
  setData(data: Array<number | object>) {
    if (!this.charts) {
      console.warn("error");
      return;
    }
    this.charts.setOption({
      data: data,
    });
  }
  /** 设置option数据 */
  setOptionData(optionData: object) {
    if (!this.charts) {
      console.warn("error");
      return;
    }
    this.charts.setOption({
      ...optionData,
    });
  }
  /** 重新绘制 */
  reRender() {
    this.dispose();
    // this.init();
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
