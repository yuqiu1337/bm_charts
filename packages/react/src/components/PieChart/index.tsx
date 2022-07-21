import React,{useEffect,useState} from 'react';
import * as echarts from 'echarts';
import styles from './style.less';

interface TitleCustom {
  [propName: string]: any
}

interface LegendCustom {
  type?:string,
  [propName: string]: any
}

interface DefaultLegend {
  [propName: string]: string | number
}

type Props = {
  productId:string,
  source:string,
  id:string | number| undefined,
  title?:string,
  titleCustom?:TitleCustom,
  legendPlacement?:string,
  legendCustom?:LegendCustom,
  dataOnLoad?:Function,
  chartOnLoad?:Function
}

type EChartsOption = echarts.EChartsOption;

let list = [
  {name:'杭州市',value:1500},
  {name:'上海市',value:150},
  {name:'北京市',value:1000},
  {name:'武汉市',value:800},
  {name:'厦门市',value:400},
  {name:'呼和浩特市',value:320},
  {name:'长春市',value:532},
  {name:'沈阳市',value:660},
  {name:'哈尔滨市',value:620},
  {name:'长沙市',value:700},
  {name:'泉州市',value:445}
]

let chartDom: HTMLElement;
let myChart: echarts.ECharts | null = null;
let option: EChartsOption;

const PieChart = (props: Props) => {

  const {
    productId,
    source,
    id,
    dataOnLoad,
    chartOnLoad,
    title,
    titleCustom,
    legendCustom,
    legendPlacement
  } = props;

  //let [datas,setData] = useState<{ name: string; value: number}[]>([]);

  const getData = () => {
    setTimeout(() => {
      dataOnLoad && dataOnLoad();
      creatChart(list);
    }, 500);
  }

  const setDefaultLegend = ():DefaultLegend => {
    let lenged = legendCustom || {};
    let obj = {};
    const { show,top='null',left='null',right='null',bottom='null' } = lenged;
    if(top === 'null' && left === 'null' && right === 'null' && bottom === 'null'){
      if(legendPlacement){
        obj = {show:true};
        if('top'){
          obj.top = 32;
          obj.left = 'center';
        }
      }else{
        obj = {show:false};
      }
    }
    return obj;
  }

  const creatChart = (data: { name: string; value: number; }[]) => {
    chartDom = document.getElementById(`${id}`);
    myChart = echarts.init(chartDom);
    option = {
      title:{
        show:title ? true : false,
        left:'center',
        text:title,
        ...titleCustom
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        ...setDefaultLegend(),
        ...legendCustom
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart && myChart.setOption(option);
    chartOnLoad && chartOnLoad(myChart);
  }

  const changeResize = () => {
    myChart && myChart.resize();
  }

  useEffect(() => {
    getData();
    window.addEventListener("resize", changeResize);
    return () => {
      window.removeEventListener("resize", changeResize);
      myChart && echarts.dispose(myChart);
    }
  },[]);

  return(
    <div className={styles.pie_chart}>
      <div id={`${id}`} className={styles.chart}></div>
    </div>
  )
};
export default PieChart;

