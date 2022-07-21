# DataCard

###### 数据卡片组件



## 基础使用:
##### 饼图基础展示
```tsx
import React from 'react';
import { PieChart } from '@agito/chart-react';

export default () => {

  const handleDataOnLoad = () => {
    console.log('数据加载完成');
  }

  const handleChartOnLoad = (myChart) => {
    console.log(myChart,'图表加载完成')
  }

  return(
    <div style={{width:'100%',height:400}}>
      <PieChart
        source='访问数量'
        id='base'
        dataOnLoad={handleDataOnLoad}
        chartOnLoad={handleChartOnLoad}
      />
    </div>
  )
};
```

## 图例使用:
##### 饼图图例使用
```tsx
import React,{ useState } from 'react';
import { PieChart } from '@agito/chart-react';
import { Button } from '@/Assembly';

export default () => {

  let [status,setStatus] = useState('top');

  return(
    <div>
      <div>
        <Button onClick>图例在上</Button>
        <Button>图例在下</Button>
        <Button>图例在左</Button>
        <Button>图例在右</Button>
      </div>
      <div style={{width:'100%',height:400}}>
        <PieChart
          source='访问数量'
          id='_lengend'
          title='图例'
          legendPlacement='top'
        />
      </div>
    </div>
  )
};
```

## API 文档

### PieChart

| 参数      | 说明                      |  是否必传    | 类型   | 默认值 |
| --------  | ------------------------ | ------------ | ------ | ------ |
| id        | 图表唯一值                |    是        | string |  无    |
| source    | 数据源（数仓请求类型）     |    是        | string |  无    |
| title     | 标题内容                  |    否        | string |  无    |
| legendPlacement | 图例位置（可选参数 'top'、'bottom'、'left'、'right'）    |    否        | string |  无  |
| titleCustom     | 标题自定义配置(兼容EChart标题属性，方便个人定制化)                  |    否        | obj    |  无    |
| legendCustom     | 图例自定义配置(兼容EChart图例属性，方便个人定制化)            |    否        | obj |  无  |
| dataOnLoad     | 数据加载完成回调       |    否       | function |  无   |
| chartOnLoad     | 图标加载完成回调       |    否       | function( myChart : echarts.ECharts ) |  无   |

### titleCustom

自定义配置请前往EChart，https://echarts.apache.org/zh/option.html#title

### legendCustom

自定义配置请前往EChart，https://echarts.apache.org/zh/option.html#legend
