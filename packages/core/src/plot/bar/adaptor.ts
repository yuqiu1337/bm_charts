import { flow, mergeObject, updateCommonSeries } from "../../utils";
import { IParams } from "../../core/adaptor";
import { IPosition, IDirection } from "../../types";
import { IBarOptions } from "./types";

const XField = "category";
const YField = "value";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:14:19
 * Copyright © YourCompanyName All rights reserved
 */
function defaultOptions(params: IParams): IParams {
  return params;
}

function setField(xField: string, yField: string, originSeries: any[]) {
  let series;
  const isYFieldArr = Array.isArray(yField);
  if (isYFieldArr) {
    originSeries = originSeries.concat(
      Array(yField.length - originSeries.length)
        .fill("")
        .map(() => originSeries[0])
    );
    series = originSeries.map((item, idx) => {
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
    series = mergeObject(originSeries, { encode });
  }
  return series;
}

function axis(params: IParams): IParams {
  const { customConfig, options } = params;
  const { xField = XField, yField = YField, direction } = customConfig;

  let series;

  if (direction == "vertical") {
    series = setField(xField, yField, options.series);
  } else {
    series = setField(yField, xField, options.series);
  }

  params.options = Object.assign(params.options, options, {
    series,
    ...setDirection(direction),
  });

  return params;
}

function setDirection(direction) {
  const valueAxis = { type: "value" };
  const categoryAxis = { type: "category" };

  if (direction == "vertical") {
    return {
      xAxis: valueAxis,
      yAxis: categoryAxis,
    };
  } else {
    return {
      yAxis: valueAxis,
      xAxis: categoryAxis,
    };
  }
}

/**
 * @description:
 * @param {*} params
 * @return {*}
 */
function title(params): IParams {
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

function series(params: IParams<IBarOptions>) {
  const { options, customConfig, ext = {} } = params;

  const { commonSeries = {} } = ext;

  const series = mergeObject(options.series, commonSeries);

  const _options = mergeObject(options, { series });

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
    series
  )(params);
}
