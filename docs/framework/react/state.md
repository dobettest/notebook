## state设计
如何确定是否应该设计为state？
* 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
* 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
* 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

## 生命周期
* 挂载阶段(componentDidMount):发送request
* 更新阶段:
* 卸载阶段:清除计时器、取消事件监听、实例(instance)销毁

## 通过类名和id去获取元素值的弊端
可能获取到多个元素,结果并不正确