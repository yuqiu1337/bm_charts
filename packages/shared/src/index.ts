import { uniqueId } from "lodash";
/**
 * @description: 获取唯一ID
 * @return {string}
 */
function getUniqueId(prefix = "_bmChart"): string {
  return uniqueId(prefix);
}
const transformArray = (color?: string | string[]): string[] => {
  let result: string[] = [];
  if (color instanceof Array && color.length > 0) {
    result = [...color];
  } else if (typeof color === "string" && color.length > 0) {
    result = [color];
  }
  return result;
};
export { getUniqueId, transformArray };
export * from './types' 