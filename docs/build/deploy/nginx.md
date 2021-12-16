# 安装
## 拉取镜像文件
```sh
docker pull nginx
```
## 启动nginx服务
```sh
docker run --name=nginx -d -v=/wwwroot:/wwwroot -v=/.ssl:/.ssl --network=host --restart=always nginx
```
:::tip 参数说明
- 1、-d 作为后台服务启动,在控制台关闭时继续服务
- 2、-name 方便用户辨别服务
- 3、-network=host 直接使用宿主机网络，方便部署多个服务
- 4、-v 将宿主机的本地目录映射到容器中
- 5、-restart=always 在宿主机启动时启动本服务
:::

:::tip 查看某个容器的启动参数
```sh
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike YOUR-CONTAINER
```
:::

## 配置网站服务
```sh
docker exec -it nginx bash
vi /etc/nginx/conf.d/default.conf
```
:::tip 提示vi不是命令怎么办
1、办法一`(推荐)`
```sh
docker cp /path/default.conf nginx:/etc/conf.d
```
:::
:::tip 添加一个服务项
- 1、监听多个80端口,可以利用代理转发功能实现多个网站访问功能,例如添加一个notebook服务
```sh
server {
    #listen 8080 http2 ssl 同时开启http2和https访问
    listen 80;
    server_name notebook.dobettest.cn;
    access_log /var/log/nginx/host.access.log combined;
    root /wwwroot/notebook;
    index index.html index.htm index.php;
    #需要使用https时
    #ssl_certificate      /.ssl/1_dobettest.cn_bundle.crt;
    #ssl_certificate_key  /.ssl/2_dobettest.cn.key;
    #ssl_session_cache    shared:SSL:1m;
    #ssl_session_timeout  5m;
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    location /nginx_status {
      stub_status on;
      access_log off;
      allow 127.0.0.1;
      deny all;
    }
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {
      expires 365d;
      access_log off;
    }
    location ~ .*\.(js|css)?$ {
      expires 365d;
      add_header  Cache-Control  max-age=no-cache;
      #add_header    Cache-Control  max-age=31536000;
      access_log off;
    }
}
```
:::