# DataCard

###### 数据卡片组件

## 基础使用:

##### 数据卡片基础展示

```tsx
import React, { useLayoutEffect, useState } from 'react';
import PlainChart from '.';

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
let option = {
  xAxis: {
    max: 'dataMax',
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2, // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
      },
    },
  ],
  legend: {
    show: true,
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
};
function getData() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  return {
    series: [
      {
        type: 'bar',
        data,
      },
    ],
  };
}

export default () => {
  const [options, setOptions] = useState(option);
  useLayoutEffect(() => {
    setInterval(function () {
      setOptions(getData());
    }, 3000);
  }, []);
  console.log(options);

  return (
      <div style={{ width: '100%', height: 400 }}>
        <PlainChart initOptions={options} />
      </div>

  );
};
```

## API 文档

| 参数      | 说明                   | 是否必传 | 类型   | 默认值 |
| --------- | ---------------------- | -------- | ------ | ------ |
| initOptions | 所属产品 id            | 是       | string | 无     |
| source    | 数据源（数仓请求类型） | 是       | string | 无     |
| title     | 卡片标题               | 是       | string | 无     |
