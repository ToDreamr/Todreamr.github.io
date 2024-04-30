---
title: "Docker"
date: 2024-02-08T14:22:59+08:00
draft: false
description: "Docker的搭建"
tags: ["笔记"]
---

## Docker镜像基本命令

```shell
systemctl stop firewalld

systemctl disable firewalld
```

启动Docker

```shell
systemctl start docker

systemctl restart docker

docker -v

```

配置镜像

```shell
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<- 'EOF'

{
 "registry-mirrors":["https://n0dwetq.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

镜像操作

[repository]:tag-》仓库-版本	" 比如docker pull nginx:latest"

拉取镜像：

```sh
docker pull images %拉取镜像

docker rmi %删除镜像

docker save %保存镜像

docker load %加载镜像

docker build %打包镜像
```

```shell
docker save -o nginx.tar nginx:latest

docker rmi naginx:latest

docker load -i nginx.tar
```

## Docker容器基本操作

![image-20240208151559544](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081516670.png)

```
docker ps：查看所有的容器状态

docker logs 查看容器的运行日志

docker rm 删除容器

docker exec 进入容器
```



### 运行在固定端口

-name 命名

-p 端口映射：这是比较有意思的，由于容器隔离，需要将容器映射到服务端口

-p[宿主机端口]：[容器端口]

-d 后台运行

#### 进入容器内部(将会进入运行容器的Linux隔离环境)

```
docker exec -it image-name bash

docker stop image-name
```



## 数据卷（Volume）

为了解决耦合，创建的文件关联系统，想象量子纠缠

![image-20240208154220414](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081542474.png)

实现关联的操作称为挂载

数据卷可实现新旧数据共享

#### 命令：

```shell
docker volume create volume-name #创建数据卷
```

![image-20240208154520183](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081545242.png)

#### 数据卷挂载（-v）

![image-20240208154847551](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081548590.png)

比如：

```shell
docker run --name my-nginx -v volume-nginx:/root/html -p 80:80 nginx
```

之后对容器内文件的修改即可通过数据卷文件和SFTP文件系统操作软件Temius/XShell修改了。

## 构建DockerFile

### 镜像结构

![image-20240208160954397](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081609480.png)

从结构看出，构建镜像需要从下往上逐层构建。

### DockerFile编写

![image-20240208161135028](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081611091.png)

```dockerfile
from ubuntu:20.04 #构建基础镜像，可以是Linux，也可以是制作好的镜像
ENV JAVA_DIR=/usr/loval
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-build.jar /tmp/application.jar
RUN cd $JAVA_DIR && tar -xf ./jdk8.tar.gz \ && mv ./jdk1.8.0_144 ./java8
ENV JAVA_HOME=${JAVA_HOME}$
ENV PATH=${JAVA_HOME/bin}$
EXPOSE 8081
ENTRYPOINT java -jar /tmp/application.jar
```

```shell
docker build -t name:version . #"."代表DockerFile路径
```

### DockerCompose

Docker Compose是基于Compose文件（yml文件）来帮助快速部署的分布式应用。

![image-20240208163149641](https://cdn.jsdelivr.net/gh/Todreamr/img-cloud/img/202402081631687.png)