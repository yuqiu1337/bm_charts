import { cloneDeep } from "lodash";

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