import { title } from 'process';
import { EChartsOption } from 'echarts';
import { transformArray } from '.';
/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 17:10:43
 * Copyright © YourCompanyName All rights reserved
 */

/**
 * @description: 方向
 * @type {IDirection}
 */
export type IDirection =
  /** 水平 */
  | 'horizontal'
  /** 垂直 */
  | 'vertical';

/** 位置:正方位 */
export type IPosition = 'top' | 'bottom' | 'left' | 'right';

export const chartOptions = {
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
  },
  color: ['#409bff'],
  legend: {
    show: true,
  },
  series: [],
};

class BaseOptionHandle {
  /** 配置 */
  options!: EChartsOption;
  /** 主轴方向 */
  direction!: IDirection;
  constructor(options: EChartsOption) {
    this.options = options;
    this.direction = 'vertical';
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
  setColor(color: string | string[]): void {
    const _color = this.options.color;
    const transformColor = transformArray(color);
    if (transformColor.length > 0) {
      this.options.color = {
        ...transformColor,
      };
    }
  }
  /** 设置主轴方向 */
  setDirection(direction: IDirection) {
    this.direction = direction;
    if (direction === 'vertical') {
      const _xAxis: any = this.options.xAxis;
      const _yAxis: any = this.options.yAxis;
      this.options = {
        ...this.options,
        xAxis: _yAxis,
        yAxis: _xAxis,
      };
    }
  }
  /** 是否显示legend */
  setHiddenLegend(hiddenLegend: boolean) {
    const _legend = this.options.legend;
    this.options.legend = {
      ..._legend,
      show: hiddenLegend,
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
          [legendPosition]: '10px',
          // top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
        };
      }
    }
  }
  /** 设置xAxis */
  setXAxis(xAxisData: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;

    if (this.direction === 'vertical') {
      this.options.yAxis = {
        ..._yAxis,
        ...xAxisData,
      };
    } else {
      this.options.xAxis = {
        ..._xAxis,
        ...xAxisData,
      };
    }
  }
  /** 设置yAxis */
  setYAxis(yAxisOption: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;
    if (this.direction === 'vertical') {
      this.options.xAxis = {
        ..._xAxis,
        ...yAxisOption,
      };
    } else {
      this.options.yAxis = {
        ..._yAxis,
        ...yAxisOption,
      };
    }
  }
  /** 设置Legend */
  switchLegend(bool: boolean) {
    if (typeof bool === 'boolean') {
      const _legend = this.options.legend;
      this.options.legend = {
        ..._legend,
        show: bool,
      };
    }
  }
  /** 设置数据 */
  setData(chartData: { data: any[] }[]): void {
    const _series = this.options.series as object[];

    const newSeries = chartData.map((item, idx) => {
      const { type, ...otherItems } = item;
      return {
        type: 'bar',
        ...otherItems,
      };
    });
    this.options.series = [...newSeries];
  }
}
export class BarChartOptionHandle extends BaseOptionHandle {
  constructor(options: EChartsOption) {
    super(options);
  }
}
