## 柱状图

BarChart

## 基础使用:

传递类目轴数据 categoryData, 和表格 chartData

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
          categoryData={[...xAxisData]}
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
        xAxisConfig={{ data: xAxisData }}
        chartData={[{ data: chartData() }]}
      />
    </div>
  );
}
```

## 设置标题

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
        title="设置标题"
        xAxisConfig={{ data: xAxisData }}
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
          xAxisConfig={{ data: ['faiz', 'agito'] }}
          chartData={[{ name: '柱状图', data: [10, 30.4, 65.1, 53.3] }]}
        />
      </div>
    </>
  );
}
```

## 多列数据

传递 categoryDate, 和 chartData，chartData 可以为二维数组`[[60,80],[66,88]]`，或者对象数组形式`[{name:'第1列',data:[60,80]},{ name:'第二列',data:[66,88]}]`

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
          hiddenLegend={false}
          containerClass="_testchart"
          categoryData={[...xAxisData]}
          chartData={[[...chartData()], [...chartData()]]}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          hiddenLegend={false}
          containerClass="_testchart"
          categoryData={[...xAxisData]}
          chartData={[
            { name: '第一组', data: [...chartData()] },
            { name: '第二组', data: [...chartData()] },
          ]}
        />
      </div>
    </>
  );
}
```

## 修改默认主题色

传递 `mainColor={[ '#b6a2de', '#ffb980',]}`, ，会修改应用到全局的颜色

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
          hiddenLegend={false}
          containerClass="_testchart"
          mainColor={['#b6a2de', '#ffb980']}
          categoryData={[...xAxisData]}
          chartData={[
            { name: '第一组', data: [...chartData()] },
            { name: '第二组', data: [...chartData()] },
          ]}
        />
      </div>
    </>
  );
}
```

## 更多 series 自定义

设置

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
          // xAxisConfig={[]}
          text="修改一组数据中某个柱状图的颜色"
          hiddenLegend={false}
          categoryData={[...xAxisData]}
          seriesConfig={[
            {
              name: '初',
              itemStyle: {
                color: '#000',
              },
            },
            { name: '洛', data: chartData() },
          ]}
          chartData={[[...chartData()], [...chartData()]]}
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
| chartData | 表格数据，单数据可以只传数值数组，多数据可以传二维数组或者对象数组 | 是 | `number[]` 或者`{name:string,data:number[]}[]` |  |  |
| xAxisConfig | 类目轴必传`{data:[]}`，数值轴可不传 |  | 详见 echarts | `{type:'category'}` |  |
| yAxisConfig | 类目轴必传`{data:[]}`，数值轴可不传 |  | 详见 echarts | `{type:'value'}` |  |
| seriesConfig | 有定制化需求可以设置，会替换掉默认配置 | 否 | 详见 echarts |  |  |
| title | 设置标题文字 | 否 | string |  |  |
| titleConfig | 设置标题配置 | 否 | 详见 charts |  |  |
|  |  |  |  |  |  |
