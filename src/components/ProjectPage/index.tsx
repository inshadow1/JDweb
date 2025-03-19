import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function ProjectPage(): JSX.Element {
  return (
    <Layout
      title="项目展示"
      description="我的项目作品集"
    >
      <main className={styles.projectContainer}>
        <div className={styles.projectContent}>
          <h1>项目展示</h1>
          <p>这里展示了我的一些个人项目作品，包括Web应用、工具库等。每个项目都包含详细的说明文档和源代码链接。</p>
          
          <section className={styles.projectSection}>
            <h2>项目列表</h2>
            
            <div className={styles.projectCard}>
              <h3>个人博客系统</h3>
              <p>基于Docusaurus构建的个人技术博客系统，支持文档管理、博客写作和项目展示等功能。</p>
              <div className={styles.projectDetails}>
                <h4>技术栈</h4>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Docusaurus</li>
                </ul>
                
                <h4>特点</h4>
                <ul>
                  <li>支持Markdown/MDX写作</li>
                  <li>自定义主题和样式</li>
                  <li>响应式设计</li>
                  <li>文档版本管理</li>
                </ul>
                
                <a href="https://github.com/inshadow1" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  查看源码
                </a>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <h3>待添加项目...</h3>
              <p>更多项目正在整理中...</p>
            </div>
          </section>
          
          <section className={styles.projectSection}>
            <h2>技术栈</h2>
            <ul>
              <li>前端框架：React, Vue</li>
              <li>语言：TypeScript, JavaScript</li>
              <li>构建工具：Vite, Webpack</li>
              <li>部署：Docker, Nginx</li>
            </ul>
          </section>
          
          <section className={styles.projectSection}>
            <h2>参与贡献</h2>
            <p>如果你对这些项目感兴趣，欢迎通过以下方式参与：</p>
            <ol>
              <li>在GitHub上提交Issue或Pull Request</li>
              <li>通过项目中的联系方式与我交流</li>
              <li>分享你的想法和建议</li>
            </ol>
          </section>
        </div>
      </main>
    </Layout>
  );
}