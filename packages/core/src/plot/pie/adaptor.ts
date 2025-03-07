import { flow, mergeObject, updateCommonSeries } from "../../utils";
import { IParams } from "../../core/adaptor";
import { IPieChartType, IPieOptions } from "./types";
import { NAME_FIELD, TOP_COUNT, VALUE_FIELD } from "./constants";
import { IPosition } from "@/types";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:14:19
 * Copyright © YourCompanyName All rights reserved
 */
function defaultOptions(params: IParams<IPieOptions>): IParams<IPieOptions> {
  return params;
}

/**
 * @description:
 * @param {*} params
 * @return {*}
 */
function title(params: IParams<IPieOptions>): IParams<IPieOptions> {
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
function legend(params: IParams<IPieOptions>): IParams<IPieOptions> {
  const { customConfig, options } = params;

  // 图例位置
  const legendPosition: IPosition | undefined = customConfig.legendPosition;
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

function chartType(params: IParams<IPieOptions>): IParams<IPieOptions> {
  const { customConfig, options } = params;

  const chartType: IPieChartType | undefined = customConfig.chartType;

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
function mode(params: IParams<IPieOptions>): IParams<IPieOptions> {
  const { options, customConfig, ext = {} } = params;
  const {
    mode,
    topCount = TOP_COUNT,
    nameField = NAME_FIELD,
    valueField = VALUE_FIELD,
  } = customConfig;

  if (mode == "top") {
    if (params.options?.dataset && params.options?.dataset?.source) {
      params.options.dataset.source = params.options.dataset.source.reduce(
        (pre: any[], item: { name: any; value: never }, idx: number) => {
          if (idx < topCount) {
            pre.push(item as never);
          } else {
            const otherItem: { name: any; value: never } = pre[topCount] ?? {
              [nameField]: "其他",
              [valueField]: 0,
            };
            pre[topCount] = {
              ...otherItem,
              [valueField]: otherItem.value + item.value,
            };
          }
          return pre;
        },
        []
      );
    }
  }

  return params;
}

function dataField(params: IParams<IPieOptions>): IParams<IPieOptions> {
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

  return params;
}

function series(params: IParams<IPieOptions>): IParams<IPieOptions> {
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
export function adaptor(params: IParams<IPieOptions>): IParams<IPieOptions> {
  const { options, customConfig } = params;

  return flow(
    defaultOptions,
    title,
    mode,
    legend,
    chartType,
    dataField,
    series
  )(params);
}
