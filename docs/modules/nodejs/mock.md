# 一、数据模板定义
方法:`Mock.mock`
```js
1、name|min-max 
"string|1-3": "★" =>"★★", 
"number|1-100": 100 => 78,
"array|1-10" :['a']=>['a','a','a'],
"boolean|1-2": true => false or true
2、name|count
"string|3": "★" => "★★★"
"array|3": [
    "Mock.js" => ["Mock.js","Mock.js","Mock.js"]
]
"object|2": {
    "310000": "上海市",
    "320000": "江苏省", => "object:"{"320000": "江苏省","330000": "浙江省"}
    "330000": "浙江省",
    "340000": "安徽省"
}
```
# 二、数据占位符定义
方法:`Mock.Random`或者`Mock.mock(@xxx)`
- range(start?, stop, step?)
- date( format? )//yyyy-MM-dd
- time(format?)// HH:mm:ss
- datetime(format)//yyyy-MM-dd HH:mm:ss
- image( size?, background?, foreground?, format?, text? )//重要 
- c?paragraph( min?, max? )//英(中)段落
- c?sentence( min?, max? ) //英(中)句子
- c?name( middle? )//英(中)名字
- city( prefix? )//true生成省、市
- country( prefix? )//true生成市、区
- guid()//生成用户id

[更多内容](http://mockjs.com/)查看