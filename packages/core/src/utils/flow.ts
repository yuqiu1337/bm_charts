/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-08-02 17:40:31
 * Copyright © YourCompanyName All rights reserved
 */
type FlowFunction<P> = (param: P) => P;

/**
 * 类似 lodash.flow 的方法
 * @param flows
 */
export function flow<P>(...flows: FlowFunction<P>[]): FlowFunction<P> {
  return (param: P) => {
    return flows.reduce((result: P, f: FlowFunction<P>) => {
      return f(result);
    }, param);
  };
}
