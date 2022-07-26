## 折线图

LineChart

## 基础使用:

```tsx
import React from 'react';
import BarChart from './';

export default function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <BarChart
        xAxis={{ data: ['faiz', 'agito'] }}
        chartData={[{ data: [41.1, 30.4, 65.1, 53.3] }]}
      />
    </div>
  );
}
```

## 设置图表方向

```tsx
import React from 'react';
import BarChart from './';

export default function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <BarChart
        direction="vertical"
        xAxis={{ data: ['faiz', 'agito'] }}
        chartData={[{ data: [41.1, 30.4, 65.1, 53.3] }]}
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
  const changePosition = (positionValue) => {
    setPosition(positionValue);
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
      <div style={{ width: '100%', height: '400px' }}>
        <BarChart
          hiddenLegend={false}
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

## API 文档

| 参数 | 说明 | 是否必传 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- | --- |
| direction | 图表方向 | 否 | string | horizontal | horizontal \| vertical |
| legendPosition | 图例位置 | 否 | string | top | top \| bottom \| left \| right |
| mainColor | 柱状图主体颜色 | 否 | string \| string[] | #409bff | HEXColor 类型的 string \| string[] |
| containerClass | 图表包装类 | 否 | string |  |  |
