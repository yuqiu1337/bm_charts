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
  yAxis: {},
  color: ['#409bff'],
  legend: {},
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
    {
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

  /** 设置图例方位 */
  setLegendPosition(legendPosition: IPosition): void {
    if (legendPosition) {
      const _legend = this.options.legend;
      this.options.legend = {
        ..._legend,
        [legendPosition]: '10px',
        // top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
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
  /** 设置yAxis */
  setYAxis(yAxis: any) {
    // const _yAxis = this.options.yAxis;
    this.options.yAxis = {
      ...yAxis,
    };
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
    if (_series) {
      const newSeries = _series.map((item, idx) => {
        return {
          ...item,
          data: chartData[idx]?.data ?? [],
        };
      });
      this.options.series = [...newSeries];
    }
  }
}
export class BarChartOptionHandle extends BaseOptionHandle {
  constructor(options: EChartsOption) {
    super(options);
  }
}
