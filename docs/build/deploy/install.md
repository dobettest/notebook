# 介绍
## 1、什么是容器? docker的优势是什么?
答:容器是一种轻量级、可移植、自包含的软件打包技术，使应用程序可以在几乎任何地方以相同的方式运行。开发人员在自己笔记本上创建并测试好的容器，无需任何修改就能够在生产系统的虚拟机、物理服务器或公有云主机上运行。
docker较与vm的优势:
- 1、Docker启动快速属于秒级别。虚拟机通常需要几分钟去启动
- 2、docker容器消耗的资源更少

# 安装容器
## 一、linux
### (1)、redhat/centos
#### 1、Uninstall old versions
```sh
sudo yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine
```

#### 2、Install using the repository
```sh
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
#### 3、Install Docker Engine
```sh
 sudo yum install docker-ce docker-ce-cli containerd.io
```
### 4、start docker
```sh
sudo systemctl start docker
```
### 5、restart when reboot
```sh
systemctl enable docker
```
### 6、Verify that Docker Engine is installed correctly
```sh
sudo docker run hello-world #输出hello-world
```
其他系统环境请参考[官方文档](https://docs.docker.com/engine/install)