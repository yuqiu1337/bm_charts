import { EChartsOption } from "echarts";
import { IDirection, transformArray, IPosition } from "@agito/chart-shared";

type ICommonObject = { [propName: string]: any };
/**
 * @type: IBaseMode
 */
type IBaseMode = "default" | "custom";
class BaseOptionHandle {
  /** 配置 */
  options!: EChartsOption;
  /** 共有的series配置 */
  commonSeries!: ICommonObject;
  /** **/
  mode: IBaseMode;

  constructor() {
    this.commonSeries = {};
    this.mode = "default";
  }

  /**
   * @start ====================================================  配置对象操作相关
   */

  /**
   * @description: 设置Options对象
   * @param {EChartsOption} options
   * @return {*}
   */
  setOptions(options: EChartsOption): void {
    this.options = options;
  }

  /**
   * @description: 获取全部配置
   * @return {*}
   */
  getOptions(): EChartsOption {
    return this.options;
  }

  /**
   * @description: 获取全部配置JSON字符串
   * @return {*}
   */
  getOptionsJson(): string {
    return JSON.stringify(this.options);
  }

  /**
   * @description: 修改数据。新旧数据都为对象时，会根据notMerge的值做处理，其他情况直接覆盖旧数据
   * @param {string} key 字段名
   * @param {any} value 数据
   * @param {boolean} notMerge 是否合并
   * @return {*}
   */
  protected setOptionByKey(key: string, value: any, notMerge = false): void {
    if (!value) {
      console.warn("setOptionByKey 入参 value 不能为空", key);
      return;
    }

    const _optionValue = this.options[key];

    // 如果key不存在，直接覆盖，不做额外判断
    if (!_optionValue) {
      this.options[key] = value;
      return;
    }

    const isArrayCheckValue = Array.isArray(_optionValue);
    const isArrayCheckNewValue = Array.isArray(value);

    /**
     * 新数据是数组，直接替换
     * 新数据为对象，旧数据为数组都是直接覆盖
     */
    if (isArrayCheckNewValue || (isArrayCheckValue && !isArrayCheckNewValue)) {
      this.options[key] = value;
      return;
    }
    const isObjectCheckValue =
      _optionValue instanceof Object && !isArrayCheckValue;

    // 旧数据为对象
    if (isObjectCheckValue) {
      const cusOptions = notMerge ? value : { ..._optionValue, ...value };
      this.options[key] = cusOptions;
    } else {
      this.options[key] = value;
    }
  }
  /**
   * @description: 获取options的某个字段的深拷贝数据，目前没什么用
   * @param {string} key
   * @return {{} | []}
   */
  getOptionByKey(key: string): object | [] {
    return JSON.parse(JSON.stringify(this.options[key]));
  }
  /**
   * @end ======================================= 配置对象操作相关
   */

  /**
   * @description: 设置颜色, 会覆盖全局的配置
   * @param {string} color
   * @return {*}
   */
  setMainColor(color: string | string[]): void {
    const transformColor = transformArray(color);
    if (transformColor.length > 0) {
      this.options.color = [...transformColor];
    }
  }

  /**
   * @start =========================================================== 标题
   */
  /** 设置标题 */
  // TODO: 当前为只修改标题文字，可能需要拆分为全配置修改
  setTitle(title: string): void {
    const _title = this.options.title;
    const titleResult = {
      ..._title,
      text: title
    };
    this.setOptionByKey("title", titleResult);
  }
  /**
   * @end ===========================================================  标题
   */

  /**
   * @start =========================================================== 数据
   */
  /**
   * @description: 判断series是否包含data
   * @return {*}
   */
  protected isSeriesIncludeData(): boolean {
    const _series = this.options.series as [];
    if (_series) {
      const result = _series.some(
        (item: { data?: any }) => typeof item.data != "undefined"
      );
      return result;
    }
    return false;
  }
  /**
   * @description: 修改处理数据的模式
   * @param {IBaseMode} newMode
   * @return {*}
   */
  changeUpdateDataMode(newMode: IBaseMode): IBaseMode {
    this.mode = newMode;
    return this.mode;
  }
  /**
   * @description: 存放一些共有Series配置, 混入模式
   * @param {*} config
   * @return {string }
   */
  protected updateCommonSeries(config: ICommonObject) {
    this.commonSeries = {
      ...this.commonSeries,
      ...config
    };
    this.updateSeriesConfig();
  }
  /**
   * @description: 将配置同步
   * @return {*}
   */
  protected updateSeriesConfig() {
    const _series = this.options.series as any[];
    const series = _series.map((item, idx) => {
      return { ...this.commonSeries, ...item, ...this.fixedSeries };
    });
    this.setOptionByKey("series", series);
  }
  /**
   * @end =========================================================== 数据
   */

  /**
   * @start =========================================================== 图例
   */
  /** 是否显示legend */
  setHiddenLegend(hiddenLegend: boolean) {
    const _legend = this.options.legend;
    this.options.legend = {
      ..._legend,
      show: !hiddenLegend
    };
  }
  /** 设置图例方位 */
  setLegendPosition(legendPosition: IPosition): void {
    if (legendPosition) {
      const _legend = this.options.legend;
      const { show } = _legend;

      if (show) {
        this.options.legend = {
          [legendPosition]: "10px"
          // top: legendPosition === 'left' || legendPosition === 'right' ? 'middle' : 'auto',
        };
      }
    }
  }
  /**
   * @end ======================================= 图例
   */
}

/**
 * @description: 直角坐标系
 * @return {*}
 */
class CartesianOptionHandler extends BaseOptionHandle {
  /** 主轴方向 */
  direction!: IDirection;
  /** 类目轴数据  **/
  categoryData: any;

  constructor() {
    super();
    // 默认水平xAxis
    this.direction = "horizontal";
    this.categoryData = [];
  }
  /** 设置主轴方向 */
  setDirection(direction: IDirection) {
    if (direction !== this.direction) {
      const _xAxis: any = this.options.xAxis;
      const _yAxis: any = this.options.yAxis;
      this.options = {
        ...this.options,
        xAxis: _yAxis,
        yAxis: _xAxis
      };
      this.direction = direction;
    }
  }
  /**
   * @description: 只接受数组
   * @param {string} categoryData
   * @return {*}
   */  
  setCategoryData(categoryData: string[] | number[]) {
    this.setXAxis({ data: categoryData });
  }
  /** 设置xAxis */
  setXAxis(xAxisData: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;

    const { data, ...other } = xAxisData;

    if (this.direction === "vertical") {
      this.options.yAxis = {
        ..._yAxis,
        ...xAxisData
      };
    } else {
      this.options.xAxis = {
        ..._xAxis,
        ...xAxisData,
      };
    }
  }
  /** 设置yAxis */
  setYAxis(yAxisOption: any) {
    const _xAxis = this.options.xAxis;
    const _yAxis = this.options.yAxis;

    const { data, ...other } = yAxisOption;

    if (this.direction === "vertical") {
      this.options.xAxis = {
        ..._xAxis,
        ...yAxisOption
      };
    } else {
      this.options.yAxis = {
        ..._yAxis,
        ...yAxisOption
      };
    }
  }
}
export { BaseOptionHandle, CartesianOptionHandler };
