export function updateCommonSeries(payload: object) {
  return Object.assign({}, params, {
    ext: {
      commonSeries: { ...payload },
    },
  });
}
