import { IParams } from "../core/adaptor";

export function updateCommonSeries(target: IParams<object>, payload: object) {
  return Object.assign({}, target, {
    ext: {
      commonSeries: { ...payload },
    },
  });
}
