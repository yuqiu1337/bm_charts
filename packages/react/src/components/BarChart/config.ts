import { title } from 'process';
import BarChart from '../../../es/components/BarChart/index';
import { EChartsOption } from 'echarts';
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
  title: {
    text: '12',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  legend: {},
  series: [
    {
      name: '鹏鹏',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
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

  /** 设置图例方位 */
  setLegendPosition(legendPosition: IPosition): void {
    if (legendPosition) {
      const _legend = this.options.legend;
      this.options.legend = {
        ..._legend,
        [legendPosition]: '10px',
        top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
      };
    }
  }
  /** 设置xAxis */
  setXAxis(xAxis: any) {
    // const _xAxis = this.options.xAxis;
    this.options.xAxis = {
      ...xAxis,
    };
  }
  /** 设置xAxis */
  setYAxis(yAxis: any) {
    // const _yAxis = this.options.yAxis;
    this.options.yAxis = {
      ...yAxis,
    };
  }
  /** 设置数据 */
  setData(): void {}
}
export class BarChartOptionHandle extends BaseOptionHandle {
  constructor(options: EChartsOption) {
    super(options);
  }
}
