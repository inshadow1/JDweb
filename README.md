# JDweb 博客网站

这是一个基于 [Docusaurus](https://docusaurus.io/) 构建的个人博客网站，包含了大量前端、后端、Docker 等技术文档和博客文章。

## 项目介绍

本项目是一个使用 Docusaurus v3 构建的静态网站，主要用于记录和分享技术笔记。网站包含以下内容：

- 前端技术文档（HTML/CSS、JavaScript、TypeScript、React、Vue 等）
- 后端技术文档（Node.js、Docker、数据库等）
- 多平台开发文档
- 软件工程知识
- 面试自检资料

## 安装与启动

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 pnpm 包管理器

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
npm run dev
# 或
npm run start
```

启动后，可以在浏览器中访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
npm run build
```

构建完成后，生成的静态文件将位于 `build` 目录中。

### 本地预览生产版本

```bash
npm run serve
```

## 项目配置

本项目使用了以下主要配置：

### Docusaurus 配置

- 使用 TypeScript 进行配置（`docusaurus.config.ts`）
- 配置了中文作为默认语言
- 使用了 SWC 和 Rspack 等实验性能优化特性
- 自定义了主题和样式

### 文档结构

- 文档位于 `my-docs` 目录
- 使用自动生成的侧边栏（在 `sidebars.ts` 中配置）
- 博客文章位于 `blog` 目录

### GitHub Actions

项目配置了 GitHub Actions 工作流（`.github/workflows/deploy.yml`），用于自动部署网站。

## Docker 支持

本项目包含了 Docker 相关的文档，可以使用 Docker 进行部署：

1. 构建 Docker 镜像

```bash
docker build -t jdweb .
```

2. 运行 Docker 容器

```bash
docker run -p 3000:3000 jdweb
```

## 特别鸣谢

特别感谢 [fall-zhang](https://github.com/fall-zhang) 的贡献，本项目的大部分文档和代码都由他编写和维护。

## 许可证

本项目使用 MIT 许可证。
