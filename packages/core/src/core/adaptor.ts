/**
 * adaptor flow 的参数
 */
export type IParams<CustomConfig> = {
  readonly options: any;
  readonly customConfig: CustomConfig;
  /** 一些存储一些扩展信息，用户上游 adaptor 向下游传递临时数据 */
  readonly ext?: Record<string, any>;
};

/**
 * 使用 纯函数的方式，这里是类型定义
 */
export type IAdaptor<O> = (params: IParams<O>) => void;
