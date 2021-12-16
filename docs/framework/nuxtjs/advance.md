# 进阶用法
## 自定义布局
- 1、在`layouts`目录下新建`[name].vue`文件,默认内容:
```vue
<template>
  <nuxt />
</template>
```
- 2、在`page`中使用
```vue
<template>
  <!-- Your template -->
</template>
<script>
  export default {
    layout: 'name'//name为自定义布局文件名
  }
</script>
```
## 页面
Nuxt.js 为页面提供的特殊配置项：
|属性名|描述|
|-----|-----|
|asyncData|	最重要的一个键, 支持 [异步数据处理](https://www.nuxtjs.cn/guide/async-data)，另外该方法的第一个参数为当前页面组件的 上下文对象。|
|fetch|	与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于 [fetch 方法的文档](https://www.nuxtjs.cn/api/pages-fetch)。|
|head	|配置当前页面的 Meta 标签, 详情参考 [页面头部配置 API](https://www.nuxtjs.cn/api/pages-head)。|
|layout	|指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。|
|loading|	如果设置为`false`，则阻止页面自动调用`this.$nuxt.$loading.finish()`和`this.$nuxt.$loading.start()`,您可以手动控制它,请看例子,仅适用于在 nuxt.config.js 中设置loading的情况下。请参考API [配置 loading 文档](https://www.nuxtjs.cn/api/configuration-loading)。|
|transition|	指定页面切换的过渡动效, 详情请参考 [页面过渡动效](https://www.nuxtjs.cn/api/pages-transition)。|
|scrollToTop|	布尔值，默认: `false`。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 [嵌套路由](https://www.nuxtjs.cn/guide/routing#嵌套路由)的应用场景。|
|validate	|校验方法用于校验 [动态路由](https://www.nuxtjs.cn/guide/routing#动态路由)的参数。|
|middleware	|指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 [路由中间件](https://www.nuxtjs.cn/guide/routing#路由中间件)。|
|watchQuery| 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...),性能考虑,默认禁用,`可选值:Boolean or Array,默认[]`
关于页面配置项的详细信息，请参考 [页面 API](https://www.nuxtjs.cn/api)。

## 动态路由
在 Nuxt.js 里面定义带参数的[动态路由](https://www.nuxtjs.cn/guide/routing)，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。
以下目录结构:
```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```
Nuxt.js 生成对应的路由配置表为：
```vue
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```
你会发现名称为 `users-id` 的路由路径带有 `:id?` 参数，表示该路由是可选的。如果你想将它设置为必选的路由，需要在 `users/_id` 目录内创建一个 `index.vue` 文件。
:::warning 
`generate` 命令会忽略动态路由: [API Configuration generate](https://www.nuxtjs.cn/api/configuration-generate#routes)
:::

## 嵌套路由
创建[内嵌](https://www.nuxtjs.cn/guide/routing)子路由，你需要添加一个 Vue 文件，同时添加一个`与该文件同名`的目录用来存放子视图组件。

:::warning
 别忘了在父组件(.vue文件) 内增加 `<nuxt-child/>` 用于显示子视图内容。
:::
假设文件结构如：
```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```
Nuxt.js 自动生成的路由配置如下：
```vue
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```
## 异步数据
1、在`nuxt.config.js`配置中引入:
```javascript
module.exports={
  modules: [
    '@nuxtjs/axios'
  ]
}
```
:::tip 自定义axios
```js
import { message } from "ant-design-vue";
export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const service = $axios.create({
    });

    //请求
    service.interceptors.request.use(config => {
        return config;
    });

    //响应
    service.interceptors.response.use(response => {
        const data = response.data;
        if (data['errStr']) {
            message.error(data.errStr || '');
            return Promise.reject(data);
        } else {
            return Promise.resolve(data);
        }
    });
    let http = {};

    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */

    http.get = function (url, params = null) {
        return new Promise((resolve, reject) => {
            service
                .get(url, { params })
                .then(res => {
                    resolve(res.data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    };

    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */

    http.post = function (url, params, config) {
        return new Promise((resolve, reject) => {
            service
                .post(url, params, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    };
    inject('request', http)
}
```
`Inject to context as $request`
:::
2、用例:
```js
export default{
    async asyncData({ app }) {
    const count = Math.ceil(Math.random() * 999999999 + 65432134213);
    let userList = await app.$request.post('/api/user/mocklist');
    return {
      count,
      userList
    };
  }
}
```

## 引入模块
如果是`es6`模块
:::info 
需要在`nuxt.config.js`中配置
```js
module.exports={
    build:{
        transpile: [/^ant-design-vue/],//es6模块,
        babel: {
            babelrc: true//在根目录下创建.babelrc文件,如果是babel.config.js,babel.config.json则会失效
        }
    }
}
```
:::

## 全局样式变量
1、安装插件
```sh
npm install @nuxtjs/style-resources -D
```
2、配置nuxt.config.js
```js
module.exports={
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/css/variables.scss'//全局变量
  }
}
```
:::info 全局样式
```js
//nuxt.config.js
module.exports={
    css:[ '@/lib/my-design-ui/style/index.scss']
}
```
:::
## 命名视图
要渲染命名视图，您可以在`布局(layout) / 页面(page)`中使用 `<nuxt name="name"/>` 或 `<nuxt-child name="name"/>` 组件。要指定页面的命名视图，我们需要在nuxt.config.js文件中扩展路由器配置：,类似于`<component :is="xxx"/>`来用,但是一个是`页面`,一个是`组件`
:::info
用例1、处理`404`请求
```js
//nuxt.config.js,
module.exports={
extendRoutes(routes, resolve) {
  routes.push({
     path: '*',
     component: resolve(__dirname, 'pages/404.vue')
    })
  }
}
```
:::

## 引入服务中间件
1、在`nuxt.config.js中配置`
```js
module.exports={
  serverMiddleware: [
    '~/server/index.js'
  ],
}
```
2、在项目根文件夹下创建`server`目录下,如何在server中创建index.js文件,文件内容如下:
<hr>
使用`express`作为服务组件
```js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const userRouter = require('./routes/user')
app.use("/user", userRouter)
//重要
module.exports = {
    path: 'api',
    handler: app
}
```
3、在页面中使用:
```js
export default {
    async asyncData(context){
        await context.$axios.get('/api/xxx);
    }
}
```

更多内容,将在笔者使用后更新
<div style="text-align:right">
    <svg t="1639728372376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2079" width="64" height="64"><path d="M841.568 864.928l0.992-1.92c0.8-1.408 1.568-3.072 2.208-4.768l0.064-0.224 0.096-0.224a48.544 48.544 0 0 0 2.24-26.208l0.032 0.288 0.032 0.288a76.768 76.768 0 0 0-10.208-26.912l0.192 0.32 0.224 0.352-226.848-399.072-34.656-60.576-261.152 459.648a77.44 77.44 0 0 0-8.64 25.312l-0.064 0.448-0.032 0.48a53.632 53.632 0 0 0 3.552 30.752l-0.128-0.352-0.128-0.352c0.704 1.696 1.408 3.136 2.208 4.512l-0.096-0.16-0.096-0.16c6.816 11.744 21.344 25.696 53.344 25.696h422.304c6.688 0 39.456-1.376 54.624-27.168z m-265.696-397.472l207.328 364.704H368.64z m437.28 338.528l-299.36-527.36c-3.072-5.536-20.352-33.568-50.432-33.568-13.536 0-32.928 5.76-48.736 33.504l-38.688 67.84 34.432 60.576 53.344-94.368 296.16 519.68h-112.64a50.496 50.496 0 0 1-2.56 26.272l0.128-0.352 0.128-0.352c-0.736 2.08-1.568 3.84-2.528 5.536l0.096-0.16 0.096-0.16-0.992 1.92c-15.136 25.824-47.872 27.168-54.272 27.168h176.16c6.496 0 39.136-1.376 54.272-27.168 6.688-11.744 11.52-31.456-4.576-58.976zM311.648 866.432a35.2 35.2 0 0 1-1.824-3.648l-0.096-0.288-0.096-0.256a51.712 51.712 0 0 1-3.52-30.688l-0.064 0.32-0.032 0.288H64.064L423.712 199.328l118.048 207.52 34.208-60.576-102.912-181.28c-2.848-5.216-20.256-33.152-50.208-33.152-13.536 0-32.928 5.856-48.736 33.568L9.824 805.92c-3.072 5.536-18.144 34.656-3.2 60.448 6.816 11.744 21.344 25.696 53.344 25.696h305.12c-31.776 0-46.496-13.728-53.344-25.696z" fill="#00C58E" p-id="2080"></path></svg>
</div>