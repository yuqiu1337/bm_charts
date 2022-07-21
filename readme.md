项目采用monorepo作组织，并限制了包管理工具的使用，安装依赖只能用 [pnpm ](https://www.pnpm.cn/)。





| 包名称              | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| @agito              | 主仓                                                         |
| @agito/chart-core   | 核心实现仓库，对echarts做的方法封装，组件不满足项目要求，需要自定义时可以引用core仓库， |
| @agito/chart-react  | React组件仓库，React项目引用这个即可                         |
| @agito/chart-shared | 主仓共享的，类型定义，工具函数等                             |

# 开发说明

以下命令默认执行位置为项目根目录

## 安装依赖

`pnpm install`

## 开发项目

各个子仓生成构建产物，esm由 [tsc](https://www.tslang.cn/docs/handbook/tsconfig-json.html)生成，umd由 [rollup.js](https://www.rollupjs.com/) 生成

| 相对各自仓库路径 | 模块类型 | 描述                                 |
| ---------------- | -------- | ------------------------------------ |
| /es              | es      | npm包引入会走`"module":"es/index.js"`  |
| /umd             | umd      | 可能用不到，为了script标签引入的模式 |
| /dist            | cjs      | 没做构建，umd已经覆盖                |

### 中心仓构建

`pnpm dev`

会依次生成各子仓的构建产物。因为存在文件依赖关系，如果第一次报找不到文件，重新执行下。

### 子仓构建

`pnpm dev:core` `pnpm dev:react` `pnpm dev:shared`

会执行对应子仓的开发模式构建

# 测试说明

## 集成测试

`/app/demo`有react项目，引入组件来开发，

## 单元测试

后续迭代增加

# 发布说明

使用[changesets](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)做发包管理

## 使用到的命令说明

`pnpm changeset`进入交互式命令行，遵循[nodejs语义版本规则](http://nodejs.cn/learn/semantic-versioning-using-npm)。

<img src="https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/YhZGYT_KoFPbE_1658284238.png" style="zoom: 50%;" />

选择本次要更新的子包

![](https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/SDInaH_NMJTFK_1658284333.png)

是否是major版本，大版本才做选择，一般是直接回车，下一步

![image-20220720103355479](https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720103355479_8iJQuk_1658284435.png)

是否是minor版本，有大的功能迭代做选择，不是的话直接回车，下一步

![image-20220720103602666](https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720103602666_7QaAQo_1658284562.png)

patch版本，添加想要提交commit说明：

![image-20220720103843891](https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720103843891_TJkODs_1658284723.png)

会让确认一次你已选择的信息，项目没做自动commit，确认无误回车即可。

*如果是pre模式不用提交*

`pnpm changelog`



会添加上一个版本与这个版本间的commit日志到每个项目的changelog里，如果生成的日志不满足，可以手动更新后再提交。

<img src="https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720104630320_5WncyB_1658285190.png" alt="image-20220720104630320" style="zoom:50%;" /><img src="https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720104652207_E54HDB_1658285212.png" alt="image-20220720104652207" style="zoom:50%;" />

`pnpm release`

前置条件： 需要先登录npm账号。



执行后，将当前版本的包发布到npm上。项目采取的是scope模式发布，名称与pkg中设置的一致。

![image-20220720105104699](https://cdn.jsdelivr.net/gh/levidcd/ImageHosting@main/2022/07/image-20220720105104699_vxrumW_1658285464.png)

## Pre模式

pnpm提供了pre模式，可以为发布上去的npm添加不同的tag。常见的tag有`alpha`,`beta`,`rc`

| 名称  | 描述                                     |
| ----- | ---------------------------------------- |
| alpha | 内部测试版，迭代快，用作内部人员测试使用 |
| beta  | 测试版，会不断加入当前版本的功能         |
| rc    | 候选版，不再加入新的功能，除错后发布     |

如果有业务项目A中有个`@agito/react`的依赖版本为`^0.0.1`, 如果有`0.0.2` 的npm包，在项目A安装依赖时，会拉取`0.0.2`，不会拉取`0.0.2-alpha.1`。

### pre与normal的区别

```sh

## pre模式 当前版本为0.0.2-alpha.1
pnpm changeser pre enter alpha # 进入alpha pre模式, 当前版本为0.0.2-alpha.1

pnpm changeset # 进入交互式指令集，描述版本变更，假设是path变更

pnpm changelog # 消耗变更描述，生成变更日志，更新版本。 pre模式下会变更为0.0.2-alpha.2

pnpm release # 会发布0.0.2-alpha.2版本

pnpm changeser pre exit # 退出pre模式


## normal模式 当前版本为0.0.2-alpha.1或者0.0.2

pnpm changeset # 进入交互式指令集，描述版本变更,假设是path变更

pnpm changelog # 消耗变更描述，生成变更日志，更新版本。 normal模式下会变更为0.0.3

pnpm release # 会发布0.0.3版本


```

