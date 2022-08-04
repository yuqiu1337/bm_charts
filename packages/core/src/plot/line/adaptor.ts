import { flow } from "../../utils";
import { IParams } from "../../core/adaptor";
import { ILineChartType, IPosition } from "packages/shared/es";
import { ILineOptions } from "./types";
import { cloneDeep } from "lodash";

const XField = "category";
const YField = "value";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:14:19
 * Copyright © YourCompanyName All rights reserved
 */
function defaultOptions(
  params: IParams<ILineChartType>
): IParams<ILineChartType> {
  return params;
}

function axis(params: IParams<ILineChartType>): IParams<ILineChartType> {
  const { customConfig, options } = params;

  const {
    xField = XField,
    yField = YField,
    boundaryGap = false,
  } = customConfig;

  // 处理是否撑满x
  params.options.xAxis = mergeObject(params.options.xAxis, { boundaryGap });

  const isYFieldArr = Array.isArray(yField);

  let series;
  if (isYFieldArr) {
    params.options.series = params.options.series.concat(
      Array(yField.length - params.options.series.length)
        .fill("")
        .map(() => params.options.series[0])
    );
    series = params.options.series.map((item, idx) => {
      const encode = Object.assign(
        {},
        !xField ? {} : { x: xField },
        !yField ? {} : { y: yField[idx] }
      );
      return mergeObject(item, { encode });
    });
  } else {
    const encode = Object.assign(
      {},
      !xField ? {} : { x: xField },
      !yField ? {} : { y: yField }
    );
    series = mergeObject(params.options.series, { encode });
  }

  params.options = Object.assign(params.options, options, { series });

  return params;
}
/**
 * @description: 合并对象到对象，或者数组的每个对象中，返回新数据
 * @param {*} target 目标，可以是数组或者对象
 * @param {*} source 对象，会合并到对象，或者数组的对象中
 * @return {*}
 */
export function mergeObject(target, source, defaultValue = {}) {
  const isArray = Array.isArray(target);
  const isObject = typeof target === "object" && target.constructor === Object;

  let _target = cloneDeep(target ?? defaultValue);

  if (isArray) {
    _target = _target.map((item) => {
      return Object.assign({}, item, source);
    });
    return _target;
  }
  if (isObject) {
    _target = Object.assign({}, _target, source);
    return _target;
  }

  return _target;
}

/**
 * @description:
 * @param {*} params
 * @return {*}
 */
function title(params) {
  const { customConfig, options } = params;

  const title = customConfig.title;
  params.options.title = mergeObject(params.options.title, {
    text: title,
  });

  return params;
}


/**
 * @description:
 * @param {*} params
 * @return {*}
 */
function legend(params) {
  const { customConfig, options } = params;

  // 图例位置
  const legendPosition: IPosition = customConfig.legendPosition;
  let legend = {};
  switch (legendPosition) {
    case "top":
      legend = {
        top: 0,
        left: "center",
      };
      break;
    case "bottom":
      legend = {
        top: "auto",
        bottom: 0,
        left: "center",
      };
      break;
    case "left":
      legend = {
        top: 0,
        left: 0,
      };
      break;
    case "right":
      legend = {
        top: 0,
        left: "auto",
        right: 0,
      };
      break;
  }
  params.options.legend = mergeObject(params.options.legend, legend);

  return params;
}

function updateCommonSeries(payload: object) {
  return Object.assign({}, params, {
    ext: {
      commonSeries: { ...payload },
    },
  });
}

function chartType(params) {
  const { customConfig, options } = params;

  const chartType: ILineChartType = customConfig.chartType;

  switch (chartType) {
    case "lineArea":
      params = updateCommonSeries({ areaStyle: {} });
      break;
    case "smoothed":
      params = updateCommonSeries({ smooth: true });
      break;
    case "smoothedArea":
      params = updateCommonSeries({ smooth: true, areaStyle: {} });
      break;
    default:
      break;
  }
  return params;
}

function series(params: IParams<ILineOptions>) {
  const { options, customConfig, ext = {} } = params;

  const { commonSeries = {} } = ext;

  const series = mergeObject(options.series, commonSeries);

  const _options = mergeObject(options, series);

  return Object.assign({}, params, {
    options: _options,
  });
}
/**
 * 柱形图适配器
 * @param params
 */
export function adaptor(params) {
  const { options, customConfig } = params;

  return flow(
    defaultOptions,
    title,
    axis, // 处理默认配置
    legend,
    chartType,
    series
  )(params);
}
