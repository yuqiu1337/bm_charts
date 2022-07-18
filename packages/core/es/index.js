var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @date          Invalid Date
 * Copyright © YourCompanyName All rights reserved
 */
import echarts from "echarts";
class BmChart {
    constructor(props) {
        /** 挂载节点 */
        this.dom = null;
        this.charts = null;
        this.dom = props.dom;
    }
    /** 检查dom */
    checkDom() {
        return new Promise((resolve, reject) => {
            if (this.dom) {
                resolve(this);
            }
            else {
                reject(this);
            }
        });
    }
    /** 初始化 */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dom !== null) {
                this.charts = echarts.init(this.dom);
            }
        });
    }
    /** 重置 */
    resize() {
        if (!this.charts) {
            console.log("error");
            return;
        }
        this.charts.resize({
            width: "auto",
            height: "auto",
            animation: {
                duration: 100,
            },
        });
    }
    /** 设置数据 */
    setData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.charts) {
                console.log("error");
                return;
            }
            this.charts.setOption({
                data: data,
            });
        });
    }
    /** 重新绘制 */
    reRender() {
        this.dispose();
        this.init();
    }
    /** 销毁 */
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.charts) {
                console.log("error");
                return;
            }
            this.charts.dispose();
            this.charts = null;
        });
    }
}
export default BmChart;
