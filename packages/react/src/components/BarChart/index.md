## 柱状图

BarChart

## 基础使用:

```tsx
import React from 'react';
import BarChart from './';

const xAxisData = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const chartData = () =>
  Array(7)
    .fill('')
    .map(() => Math.floor(Math.random() * 1000));

export default function App() {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          containerClass="_testchart"
          xAxis={{ data: xAxisData }}
          chartData={[...chartData()]}
        />
      </div>
    </>
  );
}
```

## 设置图表方向

```tsx
import React from 'react';
import BarChart from './';

const xAxisData = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const chartData = () =>
  Array(7)
    .fill('')
    .map(() => Math.floor(Math.random() * 1000));

export default function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <BarChart
        direction="vertical"
        xAxis={{ data: xAxisData }}
        chartData={[{ data: chartData() }]}
      />
    </div>
  );
}
```

## 设置图例位置

```tsx
import React, { useState } from 'react';
import BarChart from './';

const legendPosition = [
  { label: '图例在上', value: 'top' },
  { label: '图例在下', value: 'bottom' },
  { label: '图例在左', value: 'left' },
  { label: '图例在右', value: 'right' },
];

export default function App() {
  const [position, setPosition] = useState('top');
  const [hiddenLegend, setHiddenLegend] = useState(false);
  const changePosition = (positionValue) => {
    setPosition(positionValue);
  };
  const changeHiddenLegend = () => {
    setHiddenLegend(!hiddenLegend);
  };

  return (
    <>
      <div>
        {legendPosition.map((item) => {
          return (
            <button onClick={() => changePosition(item.value)} key={item.value}>
              {item.label}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={() => changeHiddenLegend()}>切换显隐状态</button>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          hiddenLegend={hiddenLegend}
          legendPosition={position}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [10, 30.4, 65.1, 53.3] }]}
        />
      </div>
    </>
  );
}
```

## 设置柱状图颜色

```tsx
import React, { useState } from 'react';
import BarChart from './';

export default function App() {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          mainColor={'#39c3bb'}
          xAxis={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [400, 30.4, 65.1, 53.3] }]}
        />
      </div>
    </>
  );
}
```

## 多列数据

```tsx
import React, { useState } from 'react';
import BarChart from './';

const xAxisData = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const chartData = () =>
  Array(7)
    .fill('')
    .map(() => Math.floor(Math.random() * 1000));

export default function App() {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
        hiddenLegend={false}
          mainColor={['#39c3bb', '#66ccff']}
          xAxis={{ data: xAxisData }}
          chartData={[
            { name: '初', data: chartData() },
            { name: '洛', data: chartData() },
          ]}
        />
      </div>
    </>
  );
}
```
## 自定义series

```tsx
import React, { useState } from 'react';
import BarChart from './';

const xAxisData = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const chartData = () =>
  Array(7)
    .fill('')
    .map(() => Math.floor(Math.random() * 1000));

export default function App() {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
        series={[{
  
        },{}]}
        hiddenLegend={false}
          mainColor={['#39c3bb', '#66ccff']}
          xAxis={{ data: xAxisData }}
          chartData={[
            { name: '初', data: chartData() },
            { name: '洛', data: chartData() },
          ]}
        />
      </div>
    </>
  );
}
```

## API 文档

| 参数 | 说明 | 是否必传 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- | --- |
| direction | 图表方向 | 否 | string | horizontal | horizontal \| vertical |
| legendPosition | 图例位置 | 否 | string | top | top \| bottom \| left \| right |
| mainColor | 柱状图主体颜色 | 否 | string \| string[] | #409bff | HEXColor 类型的 string \| string[] |
| containerClass | 图表包装类 | 否 | string |  |  |
| hiddenLegend | 是否显示图例 | 否 | Boolean | true | true \| false |
| chartData | 表格数据，单数据可以只传数值数组，多数据需要传包含`name,data`的对象数组 | 是 | `number[]` 或者`{name:string,data:number[]}[]` |  |  |
| xAxis | 类目轴必传`{data:[]}`，数值轴可不传 |  | 详见 echarts | `{type:'category'}` |  |
| yAxis | 类目轴必传`{data:[]}`，数值轴可不传 |  | 详见 echarts | `{type:'value'}` |  |
| series | 有定制化需求可以设置，会替换掉默认配置 | 否 | 详见 echarts |  |  |
