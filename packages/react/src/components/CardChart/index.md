# DataCard

###### 数据卡片组件



## 基础使用:
##### 数据卡片基础展示
```tsx
import React from 'react';
import { CardChart } from '@agito/chart-react';

export default () => {
  return(
    <div style={{width:380,height:175}}>
      <CardChart
        productId='1.0258'
        source='总访问数'
        title='总访问数'

      />
    </div>
  )
};
```

## API 文档

| 参数      | 说明                      |  是否必传    | 类型   | 默认值 |
| --------  | ------------------------ | ------------ | ------ | ------ |
| productId | 所属产品id                |    是        | string |  无    |
| source    | 数据源（数仓请求类型）     |    是        | string |  无    |
| title     | 卡片标题                  |    是        | string |  无    |


