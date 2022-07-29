做echarts的基础封装
## 提供方法
### 初始化
`init(dom)`
### 设置数据
`setOption`
### 重载
`setOption`
### 销毁
`dispose`

# options更新逻辑
弃用dataSet的模式，因为不满足自定义单数据。
series 直接覆盖, 然后再去覆盖数据
轴直接覆盖