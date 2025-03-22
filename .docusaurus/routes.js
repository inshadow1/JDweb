import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '578'),
    exact: true
  },
  {
    path: '/blog/2分钟环境搭建',
    component: ComponentCreator('/blog/2分钟环境搭建', '39e'),
    exact: true
  },
  {
    path: '/blog/客户想要的不是她们所说的（译）',
    component: ComponentCreator('/blog/客户想要的不是她们所说的（译）', '082'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/git-to-baota-workflow',
    component: ComponentCreator('/blog/git-to-baota-workflow', '1e0'),
    exact: true
  },
  {
    path: '/blog/git功能查找',
    component: ComponentCreator('/blog/git功能查找', '9fa'),
    exact: true
  },
  {
    path: '/blog/npm前端包',
    component: ComponentCreator('/blog/npm前端包', 'f2e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/宝塔面板',
    component: ComponentCreator('/blog/tags/宝塔面板', '793'),
    exact: true
  },
  {
    path: '/blog/tags/常用依赖',
    component: ComponentCreator('/blog/tags/常用依赖', 'ea4'),
    exact: true
  },
  {
    path: '/blog/tags/翻译',
    component: ComponentCreator('/blog/tags/翻译', 'b12'),
    exact: true
  },
  {
    path: '/blog/tags/客户',
    component: ComponentCreator('/blog/tags/客户', '7b5'),
    exact: true
  },
  {
    path: '/blog/tags/依赖',
    component: ComponentCreator('/blog/tags/依赖', 'd2d'),
    exact: true
  },
  {
    path: '/blog/tags/自动化部署',
    component: ComponentCreator('/blog/tags/自动化部署', '832'),
    exact: true
  },
  {
    path: '/blog/tags/git',
    component: ComponentCreator('/blog/tags/git', '2f5'),
    exact: true
  },
  {
    path: '/blog/tags/github-actions',
    component: ComponentCreator('/blog/tags/github-actions', 'e0e'),
    exact: true
  },
  {
    path: '/blog/tags/npm',
    component: ComponentCreator('/blog/tags/npm', 'c94'),
    exact: true
  },
  {
    path: '/blog/TypeScript声明',
    component: ComponentCreator('/blog/TypeScript声明', 'fab'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a94'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bcb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd5c'),
            routes: [
              {
                path: '/docs/大前端知识点/-- 服务器状态码',
                component: ComponentCreator('/docs/大前端知识点/-- 服务器状态码', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/-- 前端的方向',
                component: ComponentCreator('/docs/大前端知识点/-- 前端的方向', '5e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/1.1-浏览器工作原理',
                component: ComponentCreator('/docs/大前端知识点/1.1-浏览器工作原理', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/1.2-网页的网络交互',
                component: ComponentCreator('/docs/大前端知识点/1.2-网页的网络交互', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/1.3-SEO搜索引擎优化',
                component: ComponentCreator('/docs/大前端知识点/1.3-SEO搜索引擎优化', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.1-前端的发展',
                component: ComponentCreator('/docs/大前端知识点/2.1-前端的发展', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.2-Serverless',
                component: ComponentCreator('/docs/大前端知识点/2.2-Serverless', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.3-SPA介绍',
                component: ComponentCreator('/docs/大前端知识点/2.3-SPA介绍', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.4-PWA介绍',
                component: ComponentCreator('/docs/大前端知识点/2.4-PWA介绍', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.5-SSR服务端渲染',
                component: ComponentCreator('/docs/大前端知识点/2.5-SSR服务端渲染', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/2.6-Jamstack（SSG）',
                component: ComponentCreator('/docs/大前端知识点/2.6-Jamstack（SSG）', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.1-同源策略',
                component: ComponentCreator('/docs/大前端知识点/3.1-同源策略', '6c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.2-HTTP协议',
                component: ComponentCreator('/docs/大前端知识点/3.2-HTTP协议', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.3-HTTP协议发展',
                component: ComponentCreator('/docs/大前端知识点/3.3-HTTP协议发展', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.4-HTTPS',
                component: ComponentCreator('/docs/大前端知识点/3.4-HTTPS', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.5-网络分层和基础',
                component: ComponentCreator('/docs/大前端知识点/3.5-网络分层和基础', '582'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.6-TCP、IP协议',
                component: ComponentCreator('/docs/大前端知识点/3.6-TCP、IP协议', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/3.7-双向通信',
                component: ComponentCreator('/docs/大前端知识点/3.7-双向通信', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/4.1-浏览器缓存机制',
                component: ComponentCreator('/docs/大前端知识点/4.1-浏览器缓存机制', 'f40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/4.2-Session、Cookie、Token',
                component: ComponentCreator('/docs/大前端知识点/4.2-Session、Cookie、Token', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/4.3-CDN',
                component: ComponentCreator('/docs/大前端知识点/4.3-CDN', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/5.1-浏览器垃圾回收',
                component: ComponentCreator('/docs/大前端知识点/5.1-浏览器垃圾回收', '048'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/5.2-内存泄漏',
                component: ComponentCreator('/docs/大前端知识点/5.2-内存泄漏', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/5.3-性能指标、优化',
                component: ComponentCreator('/docs/大前端知识点/5.3-性能指标、优化', '955'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/5.4-网站监控',
                component: ComponentCreator('/docs/大前端知识点/5.4-网站监控', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/6.1-网站安全',
                component: ComponentCreator('/docs/大前端知识点/6.1-网站安全', 'fa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/6.2-沙盒模式',
                component: ComponentCreator('/docs/大前端知识点/6.2-沙盒模式', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/6.3-用户追踪',
                component: ComponentCreator('/docs/大前端知识点/6.3-用户追踪', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/6.4-爬虫',
                component: ComponentCreator('/docs/大前端知识点/6.4-爬虫', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/7.1-Web3.0',
                component: ComponentCreator('/docs/大前端知识点/7.1-Web3.0', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/7.2-前端架构',
                component: ComponentCreator('/docs/大前端知识点/7.2-前端架构', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/大前端知识点/7.3-AOT & JIT',
                component: ComponentCreator('/docs/大前端知识点/7.3-AOT & JIT', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/-- uniapp 测评',
                component: ComponentCreator('/docs/多平台开发/-- uniapp 测评', '215'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/1.1-移动端适配',
                component: ComponentCreator('/docs/多平台开发/1.1-移动端适配', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/1.2-桌面端开发',
                component: ComponentCreator('/docs/多平台开发/1.2-桌面端开发', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/2.1-react-native',
                component: ComponentCreator('/docs/多平台开发/2.1-react-native', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/2.2-RN 基本元素',
                component: ComponentCreator('/docs/多平台开发/2.2-RN 基本元素', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/2.3-RN 样式',
                component: ComponentCreator('/docs/多平台开发/2.3-RN 样式', '8c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/2.4-RN 基本事件',
                component: ComponentCreator('/docs/多平台开发/2.4-RN 基本事件', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/浏览器插件开发',
                component: ComponentCreator('/docs/多平台开发/浏览器插件开发', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/小程序架构',
                component: ComponentCreator('/docs/多平台开发/小程序架构', 'c70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/做一个游戏',
                component: ComponentCreator('/docs/多平台开发/做一个游戏', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/Flutter/-- flutter命令行工具',
                component: ComponentCreator('/docs/多平台开发/Flutter/-- flutter命令行工具', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/Flutter/1.Dart语言的基础',
                component: ComponentCreator('/docs/多平台开发/Flutter/1.Dart语言的基础', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/Flutter/2.Dart 语言的进阶',
                component: ComponentCreator('/docs/多平台开发/Flutter/2.Dart 语言的进阶', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/多平台开发/VS Code插件开发',
                component: ComponentCreator('/docs/多平台开发/VS Code插件开发', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/-- 最佳实践',
                component: ComponentCreator('/docs/后端/-- 最佳实践', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/-- env 文件的使用',
                component: ComponentCreator('/docs/后端/-- env 文件的使用', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/-- nginx',
                component: ComponentCreator('/docs/后端/-- nginx', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/-- package.json',
                component: ComponentCreator('/docs/后端/-- package.json', '06f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/1.1-node基础',
                component: ComponentCreator('/docs/后端/1.1-node基础', '95a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/1.2-事件循环',
                component: ComponentCreator('/docs/后端/1.2-事件循环', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/1.3-命令行',
                component: ComponentCreator('/docs/后端/1.3-命令行', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/1.4-应用场景',
                component: ComponentCreator('/docs/后端/1.4-应用场景', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/2.1-全局模块',
                component: ComponentCreator('/docs/后端/2.1-全局模块', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/2.2-http和url模块',
                component: ComponentCreator('/docs/后端/2.2-http和url模块', '96e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/3.2-fs和path模块',
                component: ComponentCreator('/docs/后端/3.2-fs和path模块', '0d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/3.3-os和event模块',
                component: ComponentCreator('/docs/后端/3.3-os和event模块', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/4.1-express',
                component: ComponentCreator('/docs/后端/4.1-express', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/4.2-双向通信',
                component: ComponentCreator('/docs/后端/4.2-双向通信', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/5.1-nestjs',
                component: ComponentCreator('/docs/后端/5.1-nestjs', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/5.2-主要概念',
                component: ComponentCreator('/docs/后端/5.2-主要概念', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/5.3-数据库操作',
                component: ComponentCreator('/docs/后端/5.3-数据库操作', '72f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/5.4-全局控制',
                component: ComponentCreator('/docs/后端/5.4-全局控制', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/6.1-ORM',
                component: ComponentCreator('/docs/后端/6.1-ORM', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/6.1-tRPC',
                component: ComponentCreator('/docs/后端/6.1-tRPC', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/6.2-mongoose',
                component: ComponentCreator('/docs/后端/6.2-mongoose', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/6.3-prisma',
                component: ComponentCreator('/docs/后端/6.3-prisma', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/-- 容器的使用',
                component: ComponentCreator('/docs/后端/docker/-- 容器的使用', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/1.1-docker',
                component: ComponentCreator('/docs/后端/docker/1.1-docker', '806'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/1.2-docker 安装',
                component: ComponentCreator('/docs/后端/docker/1.2-docker 安装', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/2.1-docker compose',
                component: ComponentCreator('/docs/后端/docker/2.1-docker compose', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/2.2-docker build',
                component: ComponentCreator('/docs/后端/docker/2.2-docker build', '7bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/2.3-Dockerfile',
                component: ComponentCreator('/docs/后端/docker/2.3-Dockerfile', '26f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/3.1-gitlab',
                component: ComponentCreator('/docs/后端/docker/3.1-gitlab', '18c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/docker/4.1-kubernetes',
                component: ComponentCreator('/docs/后端/docker/4.1-kubernetes', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/后端/nuxt/1.nuxt概述',
                component: ComponentCreator('/docs/后端/nuxt/1.nuxt概述', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/-- 自检清单',
                component: ComponentCreator('/docs/面试-自检/-- 自检清单', '54b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/1.1-HTML、CSS知识点',
                component: ComponentCreator('/docs/面试-自检/1.1-HTML、CSS知识点', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/1.2-JS知识点',
                component: ComponentCreator('/docs/面试-自检/1.2-JS知识点', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/1.3-网络知识点',
                component: ComponentCreator('/docs/面试-自检/1.3-网络知识点', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/1.4-前端知识点',
                component: ComponentCreator('/docs/面试-自检/1.4-前端知识点', 'c3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/2.1-Vue面试题',
                component: ComponentCreator('/docs/面试-自检/2.1-Vue面试题', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/2.2-React 面试题',
                component: ComponentCreator('/docs/面试-自检/2.2-React 面试题', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/3.1-node 知识点',
                component: ComponentCreator('/docs/面试-自检/3.1-node 知识点', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/3.2-npm 包相关知识',
                component: ComponentCreator('/docs/面试-自检/3.2-npm 包相关知识', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/4.1-选择面试题',
                component: ComponentCreator('/docs/面试-自检/4.1-选择面试题', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/4.2-读代码',
                component: ComponentCreator('/docs/面试-自检/4.2-读代码', '18d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/4.3-算法题',
                component: ComponentCreator('/docs/面试-自检/4.3-算法题', '1c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/面试-自检/legacy/Vue2',
                component: ComponentCreator('/docs/面试-自检/legacy/Vue2', '5fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/-- 后端插件介绍',
                component: ComponentCreator('/docs/其它语言/java/-- 后端插件介绍', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/-- 项目文件介绍',
                component: ComponentCreator('/docs/其它语言/java/-- 项目文件介绍', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/-- IDEA 的使用',
                component: ComponentCreator('/docs/其它语言/java/-- IDEA 的使用', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/1.1-数据类型',
                component: ComponentCreator('/docs/其它语言/java/1.1-数据类型', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/1.2-运算符',
                component: ComponentCreator('/docs/其它语言/java/1.2-运算符', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/1.3-逻辑控制',
                component: ComponentCreator('/docs/其它语言/java/1.3-逻辑控制', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/1.4-复杂数据类型',
                component: ComponentCreator('/docs/其它语言/java/1.4-复杂数据类型', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/java/1.5-面向对象编程',
                component: ComponentCreator('/docs/其它语言/java/1.5-面向对象编程', 'ad7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/php/1.1-基础',
                component: ComponentCreator('/docs/其它语言/php/1.1-基础', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/php/1.2-开发环境搭建',
                component: ComponentCreator('/docs/其它语言/php/1.2-开发环境搭建', 'f8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/php/1.3-交互',
                component: ComponentCreator('/docs/其它语言/php/1.3-交互', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.1-语言基础',
                component: ComponentCreator('/docs/其它语言/python/1.1-语言基础', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.2-语法使用',
                component: ComponentCreator('/docs/其它语言/python/1.2-语法使用', '457'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.3-其他注意事项',
                component: ComponentCreator('/docs/其它语言/python/1.3-其他注意事项', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.4-爬虫和Web框架',
                component: ComponentCreator('/docs/其它语言/python/1.4-爬虫和Web框架', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.4-字符串操作',
                component: ComponentCreator('/docs/其它语言/python/1.4-字符串操作', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.4.1-Python爬虫技术',
                component: ComponentCreator('/docs/其它语言/python/1.4.1-Python爬虫技术', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.4.2-Flask框架',
                component: ComponentCreator('/docs/其它语言/python/1.4.2-Flask框架', 'f50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/1.4.3-Django框架',
                component: ComponentCreator('/docs/其它语言/python/1.4.3-Django框架', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/其它语言/python/pytorch',
                component: ComponentCreator('/docs/其它语言/python/pytorch', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/前端环境搭建',
                component: ComponentCreator('/docs/前端环境搭建', '0ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/人工智能/人工智能 AI',
                component: ComponentCreator('/docs/人工智能/人工智能 AI', 'd83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/版本控制',
                component: ComponentCreator('/docs/软件工程知识/版本控制', '273'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/编译',
                component: ComponentCreator('/docs/软件工程知识/编译', '4fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/产品设计',
                component: ComponentCreator('/docs/软件工程知识/产品设计', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/堆是什么？',
                component: ComponentCreator('/docs/软件工程知识/堆是什么？', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/复杂度分析',
                component: ComponentCreator('/docs/软件工程知识/复杂度分析', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/计算机网络知识导图',
                component: ComponentCreator('/docs/软件工程知识/计算机网络知识导图', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/架构设计',
                component: ComponentCreator('/docs/软件工程知识/架构设计', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/架构升级（重构）',
                component: ComponentCreator('/docs/软件工程知识/架构升级（重构）', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/进程模型',
                component: ComponentCreator('/docs/软件工程知识/进程模型', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/开源许可证是什么',
                component: ComponentCreator('/docs/软件工程知识/开源许可证是什么', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/面向切面编程',
                component: ComponentCreator('/docs/软件工程知识/面向切面编程', 'baf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/软件测试',
                component: ComponentCreator('/docs/软件工程知识/软件测试', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/软件设计',
                component: ComponentCreator('/docs/软件工程知识/软件设计', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/设计模式',
                component: ComponentCreator('/docs/软件工程知识/设计模式', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/设计术语',
                component: ComponentCreator('/docs/软件工程知识/设计术语', '13c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/数据结构',
                component: ComponentCreator('/docs/软件工程知识/数据结构', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/拓扑排序',
                component: ComponentCreator('/docs/软件工程知识/拓扑排序', '863'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/物联网技术的新可能',
                component: ComponentCreator('/docs/软件工程知识/物联网技术的新可能', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/系统重构',
                component: ComponentCreator('/docs/软件工程知识/系统重构', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/有向无环图',
                component: ComponentCreator('/docs/软件工程知识/有向无环图', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/组件开发',
                component: ComponentCreator('/docs/软件工程知识/组件开发', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/DevOps',
                component: ComponentCreator('/docs/软件工程知识/DevOps', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/github指南',
                component: ComponentCreator('/docs/软件工程知识/github指南', '818'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/Monorepo',
                component: ComponentCreator('/docs/软件工程知识/Monorepo', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/Unicode',
                component: ComponentCreator('/docs/软件工程知识/Unicode', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/软件工程知识/X-Y Problem',
                component: ComponentCreator('/docs/软件工程知识/X-Y Problem', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/-- linux环境下的使用',
                component: ComponentCreator('/docs/数据库/-- linux环境下的使用', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/1.1数据库对比',
                component: ComponentCreator('/docs/数据库/1.1数据库对比', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/1.2-认识数据库',
                component: ComponentCreator('/docs/数据库/1.2-认识数据库', 'a69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/2.1-postgresql',
                component: ComponentCreator('/docs/数据库/2.1-postgresql', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/3.1-MongoDB数据库',
                component: ComponentCreator('/docs/数据库/3.1-MongoDB数据库', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/3.2-mongo 命令',
                component: ComponentCreator('/docs/数据库/3.2-mongo 命令', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/3.3-node 操作 mongo',
                component: ComponentCreator('/docs/数据库/3.3-node 操作 mongo', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/3.4-mongo查询',
                component: ComponentCreator('/docs/数据库/3.4-mongo查询', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/4.1mysql数据库',
                component: ComponentCreator('/docs/数据库/4.1mysql数据库', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/数据库/5.1-达梦数据库',
                component: ComponentCreator('/docs/数据库/5.1-达梦数据库', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习资料',
                component: ComponentCreator('/docs/学习资料', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/大前端知识点',
                component: ComponentCreator('/docs/category/大前端知识点', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/多平台开发',
                component: ComponentCreator('/docs/category/多平台开发', '280'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/后端',
                component: ComponentCreator('/docs/category/后端', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/面试-自检',
                component: ComponentCreator('/docs/category/面试-自检', '10a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/其它语言',
                component: ComponentCreator('/docs/category/其它语言', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/人工智能',
                component: ComponentCreator('/docs/category/人工智能', '6b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/软件工程知识',
                component: ComponentCreator('/docs/category/软件工程知识', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/数据库',
                component: ComponentCreator('/docs/category/数据库', '08f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/css-代码片段',
                component: ComponentCreator('/docs/category/css-代码片段', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/html-和-css',
                component: ComponentCreator('/docs/category/html-和-css', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/javascript--typescript',
                component: ComponentCreator('/docs/category/javascript--typescript', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/linux--命令行',
                component: ComponentCreator('/docs/category/linux--命令行', 'fe1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/npm-包',
                component: ComponentCreator('/docs/category/npm-包', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/python',
                component: ComponentCreator('/docs/category/python', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/react',
                component: ComponentCreator('/docs/category/react', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/typescript',
                component: ComponentCreator('/docs/category/typescript', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/vue',
                component: ComponentCreator('/docs/category/vue', 'a34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git工具',
                component: ComponentCreator('/docs/git工具', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/-- BFC规范',
                component: ComponentCreator('/docs/HTML和CSS/-- BFC规范', '54d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/1.1-HTML基础',
                component: ComponentCreator('/docs/HTML和CSS/1.1-HTML基础', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/1.2-标签及语义化',
                component: ComponentCreator('/docs/HTML和CSS/1.2-标签及语义化', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/1.3-标签的属性',
                component: ComponentCreator('/docs/HTML和CSS/1.3-标签的属性', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/1.4-表单和表格标签',
                component: ComponentCreator('/docs/HTML和CSS/1.4-表单和表格标签', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/1.5-SVG 标签',
                component: ComponentCreator('/docs/HTML和CSS/1.5-SVG 标签', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.1-CSS选择器',
                component: ComponentCreator('/docs/HTML和CSS/2.1-CSS选择器', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.2-盒子基础属性',
                component: ComponentCreator('/docs/HTML和CSS/2.2-盒子基础属性', '881'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.3-盒子进阶属性',
                component: ComponentCreator('/docs/HTML和CSS/2.3-盒子进阶属性', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.4-文本和段落样式',
                component: ComponentCreator('/docs/HTML和CSS/2.4-文本和段落样式', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.5-伪类和伪元素',
                component: ComponentCreator('/docs/HTML和CSS/2.5-伪类和伪元素', '062'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/2.6-@ 规则',
                component: ComponentCreator('/docs/HTML和CSS/2.6-@ 规则', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/3.1-flex和grid布局',
                component: ComponentCreator('/docs/HTML和CSS/3.1-flex和grid布局', 'e83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/3.2-浏览器动画',
                component: ComponentCreator('/docs/HTML和CSS/3.2-浏览器动画', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/4.1-CSS变量和运算',
                component: ComponentCreator('/docs/HTML和CSS/4.1-CSS变量和运算', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/4.2-CSS预处理器',
                component: ComponentCreator('/docs/HTML和CSS/4.2-CSS预处理器', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/4.3-其他格式书写CSS',
                component: ComponentCreator('/docs/HTML和CSS/4.3-其他格式书写CSS', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/5.1-浏览器的兼容',
                component: ComponentCreator('/docs/HTML和CSS/5.1-浏览器的兼容', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/5.2-性能影响因素',
                component: ComponentCreator('/docs/HTML和CSS/5.2-性能影响因素', 'd9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/CSS 代码片段/CSS-表格',
                component: ComponentCreator('/docs/HTML和CSS/CSS 代码片段/CSS-表格', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/CSS 代码片段/CSS-动画',
                component: ComponentCreator('/docs/HTML和CSS/CSS 代码片段/CSS-动画', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/CSS 代码片段/CSS-图形',
                component: ComponentCreator('/docs/HTML和CSS/CSS 代码片段/CSS-图形', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/CSS 代码片段/CSS-样式初始化',
                component: ComponentCreator('/docs/HTML和CSS/CSS 代码片段/CSS-样式初始化', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML和CSS/CSS 代码片段/CSS-字体',
                component: ComponentCreator('/docs/HTML和CSS/CSS 代码片段/CSS-字体', 'a2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.1-JS基础知识',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.1-JS基础知识', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.2-变量与类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.2-变量与类型', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.3-运算符',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.3-运算符', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.4-构造类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.4-构造类型', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.5-扩展数据类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.5-扩展数据类型', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.6-正则',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.6-正则', 'a53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/1.7-工具对象',
                component: ComponentCreator('/docs/JavaScript & TypeScript/1.7-工具对象', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/2.1-this 和函数',
                component: ComponentCreator('/docs/JavaScript & TypeScript/2.1-this 和函数', '6d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/2.2-面向对象编程',
                component: ComponentCreator('/docs/JavaScript & TypeScript/2.2-面向对象编程', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/2.3-模块化开发',
                component: ComponentCreator('/docs/JavaScript & TypeScript/2.3-模块化开发', '4b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/2.4-错误捕获及兼容',
                component: ComponentCreator('/docs/JavaScript & TypeScript/2.4-错误捕获及兼容', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.1-DOM和事件',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.1-DOM和事件', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.2-DOM 相关 API',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.2-DOM 相关 API', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.3-WebComponent',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.3-WebComponent', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.4-canvas',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.4-canvas', '80b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.5-浏览器对象',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.5-浏览器对象', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.6-浏览器的存储',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.6-浏览器的存储', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/3.7-跨窗口交互',
                component: ComponentCreator('/docs/JavaScript & TypeScript/3.7-跨窗口交互', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/4.1-前后端交互',
                component: ComponentCreator('/docs/JavaScript & TypeScript/4.1-前后端交互', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/4.2-Promise 和 async',
                component: ComponentCreator('/docs/JavaScript & TypeScript/4.2-Promise 和 async', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/4.3-迭代器',
                component: ComponentCreator('/docs/JavaScript & TypeScript/4.3-迭代器', 'b66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/4.4-数据通信',
                component: ComponentCreator('/docs/JavaScript & TypeScript/4.4-数据通信', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/4.5-二进制对象',
                component: ComponentCreator('/docs/JavaScript & TypeScript/4.5-二进制对象', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/5.1-多线程',
                component: ComponentCreator('/docs/JavaScript & TypeScript/5.1-多线程', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/6-WebAssembly',
                component: ComponentCreator('/docs/JavaScript & TypeScript/6-WebAssembly', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/高级程序设计/-- 函数式编程',
                component: ComponentCreator('/docs/JavaScript & TypeScript/高级程序设计/-- 函数式编程', '386'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/高级程序设计/-- JS设计模式',
                component: ComponentCreator('/docs/JavaScript & TypeScript/高级程序设计/-- JS设计模式', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/高级程序设计/函数写法的进化',
                component: ComponentCreator('/docs/JavaScript & TypeScript/高级程序设计/函数写法的进化', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/高级程序设计/JS闭包',
                component: ComponentCreator('/docs/JavaScript & TypeScript/高级程序设计/JS闭包', '834'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- 兼容性解决方案',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- 兼容性解决方案', 'ec0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- 节流和防抖',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- 节流和防抖', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- 实现深克隆',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- 实现深克隆', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- JS的数组处理方法',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- JS的数组处理方法', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- JS日期处理',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- JS日期处理', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- JS宿主对象操作',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- JS宿主对象操作', '40d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- JS颜色处理',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- JS颜色处理', '1d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/JS 常用方法/-- JS字符串处理',
                component: ComponentCreator('/docs/JavaScript & TypeScript/JS 常用方法/-- JS字符串处理', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/-- TS的配置',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/-- TS的配置', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/-- tsc 命令',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/-- tsc 命令', '9db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/1.1-认识TS',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/1.1-认识TS', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/1.3-声明文件',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/1.3-声明文件', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/2.1-TS的数据类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/2.1-TS的数据类型', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/2.2-函数类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/2.2-函数类型', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/2.3-interface 和 type',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/2.3-interface 和 type', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/2.4-类类型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/2.4-类类型', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/3.1-语言特性',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/3.1-语言特性', 'c50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/3.2-泛型',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/3.2-泛型', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/3.3-ThisType',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/3.3-ThisType', 'bf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JavaScript & TypeScript/TypeScript/4-最佳实践',
                component: ComponentCreator('/docs/JavaScript & TypeScript/TypeScript/4-最佳实践', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/1.1-linux',
                component: ComponentCreator('/docs/Linux & 命令行/1.1-linux', '0b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/1.2-文件系统',
                component: ComponentCreator('/docs/Linux & 命令行/1.2-文件系统', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/2.1-Shell命令基础',
                component: ComponentCreator('/docs/Linux & 命令行/2.1-Shell命令基础', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/2.2-Shell编写脚本',
                component: ComponentCreator('/docs/Linux & 命令行/2.2-Shell编写脚本', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/3.1-PowerShell',
                component: ComponentCreator('/docs/Linux & 命令行/3.1-PowerShell', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux & 命令行/3.2-wsl',
                component: ComponentCreator('/docs/Linux & 命令行/3.2-wsl', '967'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/axios',
                component: ComponentCreator('/docs/npm 包/axios', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/babel',
                component: ComponentCreator('/docs/npm 包/babel', 'e7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/chalk',
                component: ComponentCreator('/docs/npm 包/chalk', '11d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/codemirror',
                component: ComponentCreator('/docs/npm 包/codemirror', 'c21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/commander',
                component: ComponentCreator('/docs/npm 包/commander', '11c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/cross-spawn',
                component: ComponentCreator('/docs/npm 包/cross-spawn', 'd6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/crypto-js',
                component: ComponentCreator('/docs/npm 包/crypto-js', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/echarts',
                component: ComponentCreator('/docs/npm 包/echarts', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/eslint',
                component: ComponentCreator('/docs/npm 包/eslint', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/file-extra',
                component: ComponentCreator('/docs/npm 包/file-extra', 'fb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/gulp',
                component: ComponentCreator('/docs/npm 包/gulp', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/highlightjs',
                component: ComponentCreator('/docs/npm 包/highlightjs', '66d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/husky',
                component: ComponentCreator('/docs/npm 包/husky', 'ad9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/immer',
                component: ComponentCreator('/docs/npm 包/immer', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/jest',
                component: ComponentCreator('/docs/npm 包/jest', 'b8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/jquery',
                component: ComponentCreator('/docs/npm 包/jquery', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/json-server',
                component: ComponentCreator('/docs/npm 包/json-server', 'df4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/lerna',
                component: ComponentCreator('/docs/npm 包/lerna', 'e87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/less',
                component: ComponentCreator('/docs/npm 包/less', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/mock',
                component: ComponentCreator('/docs/npm 包/mock', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/moment',
                component: ComponentCreator('/docs/npm 包/moment', '679'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/monaco-editor',
                component: ComponentCreator('/docs/npm 包/monaco-editor', '238'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/ora',
                component: ComponentCreator('/docs/npm 包/ora', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/pm2',
                component: ComponentCreator('/docs/npm 包/pm2', 'd46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/pnpm',
                component: ComponentCreator('/docs/npm 包/pnpm', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/portfinder',
                component: ComponentCreator('/docs/npm 包/portfinder', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/postcss',
                component: ComponentCreator('/docs/npm 包/postcss', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/prettier',
                component: ComponentCreator('/docs/npm 包/prettier', 'f97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/rollup',
                component: ComponentCreator('/docs/npm 包/rollup', '075'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/sass',
                component: ComponentCreator('/docs/npm 包/sass', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/sortablejs',
                component: ComponentCreator('/docs/npm 包/sortablejs', '14a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/vite',
                component: ComponentCreator('/docs/npm 包/vite', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/vitest',
                component: ComponentCreator('/docs/npm 包/vitest', '285'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/webpack',
                component: ComponentCreator('/docs/npm 包/webpack', '74d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/xlsx',
                component: ComponentCreator('/docs/npm 包/xlsx', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 包/yarn',
                component: ComponentCreator('/docs/npm 包/yarn', 'a72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/npm 和 nvm 的使用',
                component: ComponentCreator('/docs/npm 和 nvm 的使用', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/-- 框架对比',
                component: ComponentCreator('/docs/React/-- 框架对比', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/-- 自定义 hooks',
                component: ComponentCreator('/docs/React/-- 自定义 hooks', 'eea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/-- Hooks',
                component: ComponentCreator('/docs/React/-- Hooks', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/1.1-React核心概念',
                component: ComponentCreator('/docs/React/1.1-React核心概念', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/1.2-JSX语法',
                component: ComponentCreator('/docs/React/1.2-JSX语法', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/1.3-函数式组件',
                component: ComponentCreator('/docs/React/1.3-函数式组件', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/2.1-组件之间数据传递',
                component: ComponentCreator('/docs/React/2.1-组件之间数据传递', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/2.2-高阶指引',
                component: ComponentCreator('/docs/React/2.2-高阶指引', '315'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/2.3-组件数据请求',
                component: ComponentCreator('/docs/React/2.3-组件数据请求', 'def'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/4.1-大型应用程序的开发',
                component: ComponentCreator('/docs/React/4.1-大型应用程序的开发', 'c8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/4.2-React+CSS',
                component: ComponentCreator('/docs/React/4.2-React+CSS', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/4.3-React+TypeScript',
                component: ComponentCreator('/docs/React/4.3-React+TypeScript', '089'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/4.4-React-Router',
                component: ComponentCreator('/docs/React/4.4-React-Router', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/class 组件/1-Class组件',
                component: ComponentCreator('/docs/React/class 组件/1-Class组件', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/class 组件/2-事件，值传递',
                component: ComponentCreator('/docs/React/class 组件/2-事件，值传递', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/class 组件/3-生命周期',
                component: ComponentCreator('/docs/React/class 组件/3-生命周期', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/class 组件/4-高阶组件',
                component: ComponentCreator('/docs/React/class 组件/4-高阶组件', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/class 组件/5-路由的使用',
                component: ComponentCreator('/docs/React/class 组件/5-路由的使用', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/-- 测试',
                component: ComponentCreator('/docs/Vue/-- 测试', 'e12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/-- 组合式 API',
                component: ComponentCreator('/docs/Vue/-- 组合式 API', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/-- Vite FAQ',
                component: ComponentCreator('/docs/Vue/-- Vite FAQ', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/-- Vue 编写组件库',
                component: ComponentCreator('/docs/Vue/-- Vue 编写组件库', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/-- vue-cil（旧）',
                component: ComponentCreator('/docs/Vue/-- vue-cil（旧）', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/1.1-Vue介绍',
                component: ComponentCreator('/docs/Vue/1.1-Vue介绍', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/1.3-vue中的样式',
                component: ComponentCreator('/docs/Vue/1.3-vue中的样式', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/1.4-组件值的传递',
                component: ComponentCreator('/docs/Vue/1.4-组件值的传递', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/2.1-指令v-option',
                component: ComponentCreator('/docs/Vue/2.1-指令v-option', 'ee2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/2.2-修饰符',
                component: ComponentCreator('/docs/Vue/2.2-修饰符', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/2.3-插槽的使用',
                component: ComponentCreator('/docs/Vue/2.3-插槽的使用', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/3.1-vue-router',
                component: ComponentCreator('/docs/Vue/3.1-vue-router', '250'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/3.2-Vue 搭配 TS',
                component: ComponentCreator('/docs/Vue/3.2-Vue 搭配 TS', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/3.3-pinia（vuex）',
                component: ComponentCreator('/docs/Vue/3.3-pinia（vuex）', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/4.1-优化',
                component: ComponentCreator('/docs/Vue/4.1-优化', '0fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/4.2-响应性',
                component: ComponentCreator('/docs/Vue/4.2-响应性', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/4.3-实用特性',
                component: ComponentCreator('/docs/Vue/4.3-实用特性', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/5.1-服务端渲染',
                component: ComponentCreator('/docs/Vue/5.1-服务端渲染', '411'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/Vue2/1.1-Vue的依赖',
                component: ComponentCreator('/docs/Vue/Vue2/1.1-Vue的依赖', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Vue/Vue2/2.1-vue-router',
                component: ComponentCreator('/docs/Vue/Vue2/2.1-vue-router', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
