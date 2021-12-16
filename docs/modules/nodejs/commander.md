# 使用commander模块创建一个脚手架应用
1、初始化应用
<hr>
打开控制台，选择你想创建这个应用的目录,新建一个package.json(`npm init -y`)，内容如下
```sh
{
  "name": "my-cli",
  "version": "0.0.1",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "my-cli": "./cli.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commander": "^6.2.1",
    "minimist": "^1.2.5",
    "read-pkg": "^5.2.0"
  }
}
```
2、安装模块
```sh
npm install
```
3、新建文件cli.js,开始编写
```js
#!/usr/bin/env node
//头部标注表示这个文件使用node进行运行
const program = require('commander');
const readPkg = require('read-pkg');//高于5.2版本会报es错误
const { version } = readPkg.sync();//默认为process.cwd()
const minimist = require('minimist')
const args = minimist(process.argv);
const chalk = require('chalk')
/**
 * @description 输入一个数字和进制数,返回转化的结果
 * @return {Number}
 */
function handler(num, param) {
  try {
    let radix = args['r'] || args['radix'];
    num=parseInt(num);
    let result=num.toString(radix)//pareInt()//parseInt('100',16)=>256
    console.log(result)
  } catch (error) {
    console.log('casused by ', error)
  }
}
program.version(version).usage('<command> <option>')
program
  .command('number <num>')
  .description('输入一个16进制数,输出10进制')
  .option('-r,--radix <radix>', '将一个数字转化成对应的进制数')
  .action(handler)
//默认输出帮助信息
program
  .command("help", { isDefault: false })
  .description("Print this help")
  .action(function () {
    program.outputHelp();
  });
//重要
program.parse(process.argv)//解析参数
if (!process.argv.slice(2).length) {//
  program.outputHelp()
}
```
4、添加到全局
```sh
npm link #请使用管理员身份
```
5、测试
```sh
my-cli number 100 --radix 16#正确结果为64
```
:::tip 创建一个可交互的cli
可以参考`create-nuxt-app`脚手架,它的原理是利用了`inquirer`
:::