import { cloneDeep } from "lodash";

/**
 * @description: 合并对象到对象，或者数组的每个对象中，返回新数据
 * @param {*} target 目标，可以是数组或者对象
 * @param {*} source 对象，会合并到对象，或者数组的对象中
 * @return {*}
 */
export function mergeObject(
  target: object | Array<object>,
  source: object,
  defaultValue = {}
) {
  let _target = cloneDeep(target ?? defaultValue);

  const isObject: boolean =
    typeof _target === "object" && _target.constructor === Object;

  if (_target instanceof Array) {
    _target = _target.map((item: any) => {
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
