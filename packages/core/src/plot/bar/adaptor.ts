import { flow } from "../../utils";
import { Params } from "../../core/adaptor";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:14:19
 * Copyright © YourCompanyName All rights reserved
 */
function defaultOptions(params) {
  return params;
}
/**
 * 柱形图适配器
 * @param params
 */
export function adaptor(params) {
  const { options } = params;
  return flow(
    defaultOptions // 处理默认配置
  )(params);
}
