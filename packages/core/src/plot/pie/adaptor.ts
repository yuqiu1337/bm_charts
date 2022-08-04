import { flow, mergeObject, updateCommonSeries } from "../../utils";
import { IParams } from "../../core/adaptor";
import { IPieOptions } from "./types";
import { cloneDeep, functions } from "lodash";
import { IPieChartType, IPieType } from "../../types";

const XField = "category";
const YField = "value";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:14:19
 * Copyright © YourCompanyName All rights reserved
 */
function defaultOptions(
  params: IParams<IPieChartType>
): IParams<IPieChartType> {
  return params;
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

function chartType(params) {
  const { customConfig, options } = params;

  const chartType: IPieChartType = customConfig.chartType;

  switch (chartType) {
    case "doughnut":
      params = updateCommonSeries(params, { radius: ["40%", "70%"] });
      break;
    case "nightingale":
      params = updateCommonSeries(params, { roseType: "area" });
      break;
    default:
      break;
  }
  return params;
}
function ext(params) {
  const { options, customConfig, ext = {} } = params;

  const { commonSeries = {} } = ext;
  const { nameField = "", valueField = "" } = customConfig;
  if (nameField || valueField) {
    const encode = Object.assign(
      {},
      !nameField ? {} : { itemName: nameField },
      !valueField ? {} : { value: valueField }
    );
    params = updateCommonSeries(params, { encode });
  }

  debugger;
  return params;
}

function series(params: IParams<IPieOptions>) {
  const { options, customConfig, ext = {} } = params;

  const { commonSeries } = ext;

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

  return flow(defaultOptions, title, legend, chartType, ext, series)(params);
}
