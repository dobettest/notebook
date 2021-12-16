# Git

在实际开发中，我们会使用 Git（GitLab/GitHub）作为版本控制工具来完成团队协作。因此，熟悉 Git 的日常操作也是一名开发者的基本功。这个系列对一些术语或者理论基础不作赘述，可以参考[廖雪峰老师的博文](https://www.liaoxuefeng.com/wiki/896043488029600)。我主要对常用操作及命令做归纳总结，并就实际工作中遇到的一些问题点作记录，方便日后查询。

<hr>

必备知识点：

<div style="text-align: center;">
  <img src="./assets/git.png" alt="Git 通用操作流程图">
  <p style="text-align: center; color: #888;">（Git 通用操作流程图，图来源于网络）</p>
</div>

最常用的就是图中的 6 个命令，但在使用之前首先要弄清楚几个名词概念：

* **Remote**：远程仓库；
* **Repository**：本地仓库；
* **Index/Stage**：Git 追踪树，暂存区；
* **workspace**：本地工作区（即你编辑器的代码）

<hr>

在实际开发过程中，经常会借助一些图形化 Git 客户端来完成一些操作，比如 TortoiseGit，Sourcetree 和 IDE 中集成的插件。但也有需要命令行操作的时候，比如一些复杂的回滚操作、线上出问题、Linux 服务器上没有图形化客户端等。所以命令行操作是一项不可或缺的基本技能。

<hr>

关于 Git 的知识点，主要参考： 

* [官方文档](https://git-scm.com/book)
* 《Git权威指南第二版》
* 工作生产实践

<div style="text-align: right">
  <svg t="1637141435644" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1168" width="64" height="64"><path d="M63.49884471 444.72482676L339.27934283 168.4672005l80.63478137 81.1119106c-11.45109332 40.55595587 7.15693331 84.92894248 44.3729866 106.39974246v264.32940369c-28.62773329 16.22238256-47.7128892 47.23575993-47.71288806 82.54329842a95.42577726 95.42577726 0 0 0 95.42577726 95.42577726 95.42577726 95.42577726 0 0 0 95.42577726-95.42577726c0-35.30753736-19.08515589-66.32091583-47.71288806-82.54329842V388.42361757l98.76567986 99.7199384c-3.33990259 7.15693331-3.33990259 15.26812405-3.33990261 23.85644403a95.42577726 95.42577726 0 0 0 95.42577728 95.42577726 95.42577726 95.42577726 0 0 0 95.42577839-95.42577726 95.42577726 95.42577726 0 0 0-95.42577839-95.42577726c-8.58831998 0-16.69951071 0-23.85644403 3.33990146L604.0858758 297.2920003a94.47151987 94.47151987 0 0 0-54.86982251-111.64815985c-20.51654257-7.63406259-41.98734253-9.54257739-61.07249732-4.29415998L407.03164421 100.71489799l37.69318255-37.21605328c37.21605328-37.69318254 97.3342932-37.69318254 134.55034648 0l381.22598205 381.22598205c37.69318254 37.21605328 37.69318254 97.3342932 0 134.55034648l-381.22598205 381.22598205c-37.21605328 37.69318254-97.3342932 37.69318254-134.55034648 0L63.49884471 579.27517324c-37.69318254-37.21605328-37.69318254-97.3342932 0-134.55034648z" fill="#E64A19" p-id="1169"></path></svg>
</div>