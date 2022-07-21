import { uniqueId } from "lodash";
/**
 * @description: 获取唯一ID
 * @return {string}
 */
function getUniqueId(prefix = "_bmChart"): string {
  return uniqueId(prefix);
}
export { getUniqueId };

