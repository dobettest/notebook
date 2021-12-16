# 安装
## 创建第一个项目
```sh
 npx create-nuxt-app <项目名>
```
:::tip mode 属性
- 类型: `string`
- 默认: `universal`
 - 可以设置的值:
 - `'spa'`: 没有服务器端渲染（只有客户端路由导航等）
 - `'universal'`: 同构应用程序（服务器端呈现+客户端路由导航等）
:::
## 结构
在nuxt中推崇使用`命名即配置`,默认存在以下目录结构
```bash
├── .nuxt
├── assets
├── components                     # 这些组件不会像页面组件那样有 asyncData 方法的特性
├── layouts                        # 布局文件
└── pages                          # 页面/视图
    ├── components                 # 私有组件 
└── middleware                     # 中间件,一般存放
└── plugins                        # 在根vue.js应用 实例化之前需要运行的插件,比如axios 
└── static                         #此类文件不会被编译处理
└── store                          #存放全局状态vuex
└── nuxt.config.js                 #nuxt配置文件
```
### 别名
|别名|目录(文件)|
|----|---------|
|~或@|srcDir|
|~~或@@|rootDir|
默认情况下，srcDir 和 rootDir 相同。在您的 `vue` 模板中, 如果你需要引入 `assets` 或者 `static` 目录, 使用 `~/assets/your_image.png` 和 `~/static/your_image.png`方式。
:::tip 扩展别名
在nuxt.config.js文件中进行如下配置
```sh
config.resolve.alias['xxx']=path.join(__dirname,target)
```
典型应用于,`ant-design-vue`的图标压缩,在工程中创建icon文件,进行按需导入
`config.resolve.alias['@ant-design/icons/lib/dist$']=path.join(__dirname,targetPath/icon.js)`
:::

<div style="text-align:right">
    <svg t="1639728372376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2079" width="64" height="64"><path d="M841.568 864.928l0.992-1.92c0.8-1.408 1.568-3.072 2.208-4.768l0.064-0.224 0.096-0.224a48.544 48.544 0 0 0 2.24-26.208l0.032 0.288 0.032 0.288a76.768 76.768 0 0 0-10.208-26.912l0.192 0.32 0.224 0.352-226.848-399.072-34.656-60.576-261.152 459.648a77.44 77.44 0 0 0-8.64 25.312l-0.064 0.448-0.032 0.48a53.632 53.632 0 0 0 3.552 30.752l-0.128-0.352-0.128-0.352c0.704 1.696 1.408 3.136 2.208 4.512l-0.096-0.16-0.096-0.16c6.816 11.744 21.344 25.696 53.344 25.696h422.304c6.688 0 39.456-1.376 54.624-27.168z m-265.696-397.472l207.328 364.704H368.64z m437.28 338.528l-299.36-527.36c-3.072-5.536-20.352-33.568-50.432-33.568-13.536 0-32.928 5.76-48.736 33.504l-38.688 67.84 34.432 60.576 53.344-94.368 296.16 519.68h-112.64a50.496 50.496 0 0 1-2.56 26.272l0.128-0.352 0.128-0.352c-0.736 2.08-1.568 3.84-2.528 5.536l0.096-0.16 0.096-0.16-0.992 1.92c-15.136 25.824-47.872 27.168-54.272 27.168h176.16c6.496 0 39.136-1.376 54.272-27.168 6.688-11.744 11.52-31.456-4.576-58.976zM311.648 866.432a35.2 35.2 0 0 1-1.824-3.648l-0.096-0.288-0.096-0.256a51.712 51.712 0 0 1-3.52-30.688l-0.064 0.32-0.032 0.288H64.064L423.712 199.328l118.048 207.52 34.208-60.576-102.912-181.28c-2.848-5.216-20.256-33.152-50.208-33.152-13.536 0-32.928 5.856-48.736 33.568L9.824 805.92c-3.072 5.536-18.144 34.656-3.2 60.448 6.816 11.744 21.344 25.696 53.344 25.696h305.12c-31.776 0-46.496-13.728-53.344-25.696z" fill="#00C58E" p-id="2080"></path></svg>
</div>