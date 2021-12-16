# 使用数据校验,让应用更稳健
## 创建一个validator
```js
var joi = require('@hapi/joi')
var userValidator = new joi.Object({
    username:joi.String().required(),
    age:joi.number().default(20)
})
```
## 测试数据
```js
var user=userValidator({username:'张三'})
//结果为:{username:'张三',age:20}
```