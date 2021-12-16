# 部署
## 云开发 CloudBase
云开发 CloudBase (opens new window)是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 CloudBase Framework (opens new window)来一键部署应用。

### 全局安装 CloudBase CLI
```sh
npm install -g @cloudbase/cli
```
在项目根目录运行以下命令一键部署web 应用，在部署之前可以先 [开通环境](https://console.cloud.tencent.com/tcb/env/index):
```sh
cloudbase init --without-template
cloudbase framework:deploy
```
CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认

确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 Github Action 来持续部署 Github 上的应用。

也可以使用 cloudbase init --template xxx 快速创建和部署一个新的应用

更多详细信息请查看 CloudBase Framework 的[部署项目示例](https://github.com/Tencent/cloudbase-framework#examples)

## Vercel
### 1、create project
```sh
mkdir project && cd project
```
### 2、install dependency
```sh
npm init -y && npm i -D vuepress
```
### 3、creat a README.md with content
```sh
# hello vuepress
```
### 4、create a `guide` directory within the project and add a `README.md` file with the following code:
```sh
# Guides

This page lists and describes your project with guides!
```
### 5、Create a `.vuepress` folder inside the project directory with a `config.js` file and insert the following code:
```sh
module.exports = {
  title: 'My VuePress Project',
  description: `A simple VuePress project deployed with ${PRODUCT_NAME}.`,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guides/' },
    ],
  },
  dest: 'public',
};
```
### 6、add both a development and build script to the `package.json` file in the root project directory.
```sh
{
    ...
    "scripts": {
      "dev": "vuepress dev",
      "build": "vuepress build"
    }
}
```