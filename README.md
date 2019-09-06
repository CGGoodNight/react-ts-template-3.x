## 项目说明

### 框架及技术栈

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [react-redux](https://github.com/reactjs/react-redux)
* [react-router](https://github.com/ReactTraining/react-router)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [react-intl](https://github.com/yahoo/react-intl)
* [antd](https://ant.design/docs/react/introduce-cn)
* [axios](https://github.com/axios/axios)

### 项目规范

规范参考[规范文档](https://qtgit.qingtui.im/frontend/web-docs)

## 特性

* 项目配置了代码热加载，支持利用 Sass 预处理样式
* 利用[Prettier](https://prettier.io/)格式化代码，编辑器集成参考[这里](https://prettier.io/docs/en/editors.html)
* 项目自动校验 git commit message 格式

## 程序目录

```
.
├── config                         # 项目配置文件(打包配置等)
├── docs                           # 项目文档
├── scripts                        # npm scripts 脚本
├── mock                           # mock数据
│   ├── server.conf                # mock数据配置文件
├── public                         # 项目公共资源文件(此目录下的文件不会被构建工具处理)
│   ├── index.html                 # 程序主页面
│   ├── favicon.ico                #
├── src                            # 程序源文件
│   ├── index.tsx                  # 程序启动和渲染
│   ├── api                        # api调用层
│   │   ├── model                  # api的参数类型
│   ├── components                 # 全局可复用的表现组件
│   ├── containers                 # 全局可复用的容器组件
│   ├── locales                    # 国际化资源文件
│   ├── model                      # 对象模型
│   │   ├── po                     # PO：persistent object持久对象
│   │   ├── bo                     # BO：business object业务对象
│   ├── static                     # 静态文件(音频、图片)
│   ├── styles                     # 程序公共样式
│   ├── features                   # 各功能模块文件
│   ├── services                   # 服务层
│   ├── constants                  # 常量文件
│   ├── transformers               # 数据转换
│   ├── persistence                # 持久化层
│   ├── utils                      # 全局可用工具类
│   ├── store                      # Redux指定块
│   │   ├── ConfigureStore.ts      # 创建和使用redux store
│   │   ├── History.ts             # react-router 历史配置
│   │   └── RootReducer.ts         # Reducer注册和注入
│   │   └── RootSaga.ts            # Saga注册和注入
└── tests                          # 单元测试
```

项目目前没有建立相应目录，建议实际项目开发时按照此目录结构组织代码

### 安装说明

```shell
yarn
```

#### 请求代理

修改 package.json 中的 proxy 字段

#### Mock数据
当后端开发人员还没有准备好后端接口时，为了能让前端项目开发继续进行下去，往往需要提供`假数据`来协助前端开发。

本脚手架中提供了mock数据的功能

##### 步骤

1. 准备好假数据文件，如 sample.json 文件，放在项目的 `/mock/sample.json` 目录。

  ```json
  {
    "error": 0,
    "message": "ok",
    "data": {
      "uname": "foo",
      "uid": 1
    }
  }
  ```
2. 准备一个 `server.conf` 配置文件，放在项目目录的 `/mock/server.conf`，内容如下。

  ```
  rewrite ^\/api\/user$ /mock/sample.json
  ```
3. 然后当你请求 `http://127.0.0.1:8080/api/user` 的时候，返回的就是 sample.json 中的内容。

##### 说明

关于 server.conf 配置语法，格式如下：

```
指令名称 正则规则 目标文件
```

* `指令名称` 支持 `rewrite` 、 `redirect`。
* `正则规则` 用来命中需要作假的请求路径。
* `目标文件` 设置转发的目标地址，需要配置一个可请求的 url 地址。

##### 动态假数据

静态的假数据可以通过 json 文件提供，那么动态数据怎么提供？node 服务器可以通过 js 的方式提供动态假数据。

/mock/dynamic.js

```js
module.exports = function(req, res, next) {

  res.write('Hello world ');

  // set custom header.
  // res.setHeader('xxxx', 'xxx');

  res.end('The time is ' + Date.now());
};
```

然后结合 server.conf 就可以模拟各种动态请求了。

```
rewrite ^\/api\/dynamic\/time$ /mock/dynamic.js
```

#### 开发调试

```shell
yarn start
```

#### 使用 VS Code 调试

运行 yarn start，在 VS Code 中按 F5 开启调试，或者使用 VS Code 左侧的调试菜单

#### 打包构建

```shell
yarn build
```
