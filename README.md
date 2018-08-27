# vue-ssr-x3

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 学习笔记
* 引入预处理器
> 例如如果用的是scss, 其实很简单,不需要配置什么, 直接yarn add 依赖包就可以了
```
yarn add node-sass sass-loader postcss-loader style-loader css-loader --save-dev
```

*使用element-ui
>第一步, 在plugins文件中创建一个element-ui.js文件 </br>
>第二步, 修改nuxt-config.js文件(nuxt配置都在这个文件中),

```
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
```
* 打包部署项目
>
>> ###npm run generate </br>
>> npm run generate会直接生产静态文件, 也就是直接打包每个路由生成一个html文件 ,可以部署在静态服务器
>> ###npm run build </br>
>> npm run build 会生成.nuxt,当需要部署在服务器的时候,只需要报.nuxt,package.json, nuxt.config.js, yarn.lock之类的上传到服务就行,然后运行yarn安装依赖包, 然后直接运行npm run start就可以打开端口,进行服务端渲染