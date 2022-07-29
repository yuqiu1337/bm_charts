/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 14:46:07
 * Copyright © YourCompanyName All rights reserved
 */
import * as echarts from "echarts";
import "./theme/dark";
import "./theme/infographic";
import "./theme/macarons";
import "./theme/roma";
import "./theme/shine";
import "./theme/vintage";
import { EChartsType } from "echarts";
import { debounce } from "lodash";
import { DEBOUNCE_DURATION, ANIMATION_DURATION } from "./constants";
import { IChartTheme } from "./types";

type BmChartConstrictor = {
  ele: HTMLElement;
  option: object;
  theme?: IChartTheme;
};

class BmChart {
  /** 挂载节点 */
  private ele: HTMLElement | null = null;
  private charts: EChartsType | null = null;
  get isInitialized() {
    return this.charts != null;
  }
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
      const theme = props.theme ? props.theme : "default";

      this.charts = echarts.init(this.ele, theme);
      this.charts.setOption({ ...props.option });
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
  /**
   * @description: 设置option
   * @param {object} optionData 配置数据
   * @param {*} notMerge   是否不合并，默认不合并
   * @param {*} forceClear 强制清空。默认false
   * @return {*}
   */
  setOptionData(optionData: object, notMerge = true, forceClear = false) {
    if (!this.charts) {
      console.warn("error");
      return;
    }
    if (forceClear) {
      this.charts.clear();
    }
    this.charts.setOption(
      {
        ...optionData,
      },
      notMerge
    );
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

export { IChartTheme };

export * from "./utils/plain";
export * from "./components";
