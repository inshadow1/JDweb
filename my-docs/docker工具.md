# Docker 工具使用指南

> Create by **Yelv** on 02 2025/3/26

## 一、Docker 基础概念

### 1. Docker 简介

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 机器上。Docker 提供了在隔离环境中运行应用程序的能力。

主要优势：

- 一致的运行环境
- 更轻松的迁移和扩展
- 更高效的资源利用
- 更快速的部署和启动

### 2. 核心概念

- **镜像（Image）**：Docker 镜像是一个只读的模板，用于创建 Docker 容器
- **容器（Container）**：容器是镜像的运行实例
- **仓库（Repository）**：用于存储和分发 Docker 镜像

## 二、Docker 安装和配置

### 1. Windows 环境安装

```bash
# 使用 Chocolatey 安装
choco install docker-desktop
```

### 2. Linux 环境安装

```bash
# 安装必要的包
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# 添加Docker的官方GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 添加Docker仓库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 安装Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

## 三、Dockerfile 编写规范

### 1. 基本结构

```dockerfile
# 基础镜像
FROM node:14-alpine

# 工作目录
WORKDIR /app

# 复制文件
COPY package*.json ./

# 运行命令
RUN npm install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
```

### 2. 最佳实践

- 使用合适的基础镜像
- 合理安排指令顺序
- 减少镜像层数
- 及时清理不必要的文件

## 四、Docker Compose 使用指南

### 1. 配置文件结构

```yaml
version: '3'

services:
  web:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=myapp
    volumes:
      - db-data:/var/lib/mysql

volumes:
  db-data:
```

### 2. 常用命令

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看日志
docker-compose logs

# 重启服务
docker-compose restart
```

## 五、实际部署案例

### 1. 多容器应用部署

以下是一个完整的部署示例，包含前端、后端和数据库服务：

```yaml
version: '3'

services:
  # MySQL数据库服务
  mysql:
    image: mysql:8.0
    container_name: app-mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: myapp
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - app-network

  # 后端API服务
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: app-backend
    restart: always
    depends_on:
      - mysql
    environment:
      - DB_HOST=mysql
      - DB_USER=root
      - DB_PASSWORD=root_password
    networks:
      - app-network

  # 前端服务
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: app-frontend
    restart: always
    ports:
      - '80:80'
    depends_on:
      - backend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  mysql-data:
```

### 2. 部署流程

1. 准备工作

   - 构建应用代码
   - 编写 Dockerfile
   - 创建 docker-compose.yml

2. 部署步骤

   ```bash
   # 构建镜像
   docker-compose build

   # 启动服务
   docker-compose up -d

   # 查看服务状态
   docker-compose ps
   ```

3. 维护操作

   ```bash
   # 查看日志
   docker-compose logs [服务名]

   # 重启服务
   docker-compose restart [服务名]

   # 更新服务
   docker-compose up -d --build [服务名]
   ```

## 六、常见问题与解决方案

### 1. 容器无法启动

- 检查端口占用
- 验证配置文件
- 查看容器日志

### 2. 网络连接问题

- 检查网络配置
- 验证服务依赖
- 确认端口映射

### 3. 数据持久化

- 使用命名卷
- 定期备份数据
- 管理数据迁移

## 七、最佳实践建议

1. 安全性考虑

   - 使用非 root 用户运行容器
   - 定期更新基础镜像
   - 限制容器资源使用

2. 性能优化

   - 合理配置资源限制
   - 优化镜像大小
   - 使用多阶段构建

3. 开发流程
   - 使用版本控制
   - 实施持续集成
   - 规范化部署流程
