import { EChartsOption } from "echarts";
import { IDirection, transformArray, IPosition } from "@agito/chart-shared";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-26 15:46:53
 * Copyright © YourCompanyName All rights reserved
 */

type ICommonObject = { [propName: string]: any };
class BaseOptionHandle {
  /** 配置 */
  options!: EChartsOption;
  /** 主轴方向 */
  direction!: IDirection;
  /** 共有的series配置 */
  initSeries!: ICommonObject;
  categoryData: any;

  constructor() {
    this.direction = "horizontal";
    this.initSeries = {};
  }
  setOptions(options: EChartsOption): void {
    this.options = options;
  }
  /** 获取全部配置 */
  getOptions(): EChartsOption {
    return this.options;
  }
  /** 获取JSON */
  getOptionsJson(): string {
    return JSON.stringify(this.options);
  }
  /** 设置标题 */
  setTitle(title: string): void {
    const _title = this.options.title;
    this.options.title = {
      ..._title,
      text: title,
    };
  }
  /** 柱状图颜色 */
  setMainColor(color: string | string[]): void {
    const _color = this.options.color;
    const transformColor = transformArray(color);
    if (transformColor.length > 0) {
      this.options.color = [...transformColor];
    }
  }
  /** 设置主轴方向 */
  setDirection(direction: IDirection) {
    if (direction !== this.direction) {
      const _xAxis: any = this.options.xAxis;
      const _yAxis: any = this.options.yAxis;
      this.options = {
        ...this.options,
        xAxis: _yAxis,
        yAxis: _xAxis,
      };
      this.direction = direction;
    }
  }
  /**
   * @description: 存放一些共有Series配置
   * @param {*} config
   * @return {*}
   */
  updateSeriesConfig(config: ICommonObject) {
    this.initSeries = {
      ...this.initSeries,
      ...config,
    };
  }
  /** 是否显示legend */
  setHiddenLegend(hiddenLegend: boolean) {
    const _legend = this.options.legend;
    this.options.legend = {
      ..._legend,
      show: !hiddenLegend,
      // top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
    };
  }
  /** 设置图例方位 */
  setLegendPosition(legendPosition: IPosition): void {
    if (legendPosition) {
      const _legend = this.options.legend;
      const { show } = _legend;

      if (show) {
        this.options.legend = {
          [legendPosition]: "10px",
          // top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
        };
      }
    }
  }
  /**
   * @description: 修改数据
   * @param {string} key 字段名
   * @param {any} value 数据
   * @param {boolean} notMerge 是否合并
   * @return {*}
   */
  setOptionByKey(key: string, value: any, notMerge = false): void {
    if (!value) {
      console.warn("setOptionByKey 入参 value 不能为空", key);
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
  /**
   * @description: 设置主轴数据，一般为x轴
   * @param {any} data
   * @return {*}
   */  
  setCategory(data: any) {
    data && (this.categoryData = data);
  }
  /**
   * @description:  获取主轴数据，一般为x轴
   * @return {*}
   */
  getCategory() {
    return this.categoryData;
  }
  /** 设置xAxis */
  setXAxis(xAxisData: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;

    const { data, ...other } = xAxisData;
    this.setCategory(data);
    if (this.direction === "vertical") {
      this.options.yAxis = {
        ..._yAxis,
        ...other,
      };
    } else {
      this.options.xAxis = {
        ..._xAxis,
        ...other,
      };
    }
  }
  /** 设置yAxis */
  setYAxis(yAxisOption: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;

    const { data, ...other } = yAxisOption;
    this.setCategory(data);

    if (this.direction === "vertical") {
      this.options.xAxis = {
        ..._xAxis,
        ...other,
      };
    } else {
      this.options.yAxis = {
        ..._yAxis,
        ...other,
      };
    }
  }
  /** 设置Legend */
  switchLegend(bool: boolean) {
    if (typeof bool === "boolean") {
      const _legend = this.options.legend;
      this.options.legend = {
        ..._legend,
        show: bool,
      };
    }
  }
}

export { BaseOptionHandle };
