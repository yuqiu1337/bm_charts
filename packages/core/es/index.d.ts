declare type BmChartConstrictor = {
    dom: HTMLElement;
};
declare class BmChart {
    /** 挂载节点 */
    private dom;
    private charts;
    private charts2;
    constructor(props: BmChartConstrictor);
    /** 检查dom */
    checkDom(): Promise<unknown>;
    /** 初始化 */
    init(): Promise<void>;
    /** 重置 */
    resize(): void;
    /** 设置数据 */
    setData(data: Array<object>): Promise<void>;
    /** 重新绘制 */
    reRender(): void;
    /** 销毁 */
    dispose(): Promise<void>;
}
export default BmChart;
