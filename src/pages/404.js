import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import styles from './404.module.css';

export default function NotFound() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 检查是否是notes/html路径的请求
  const isNotesHtmlPath = currentPath.includes('/notes/html/');
  const redirectPath = isNotesHtmlPath ? '/static' + currentPath : null;

  return (
    <Layout
      title="页面未找到"
      description="找不到页面">
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              找不到页面
            </Translate>
          </h1>
          <p className={styles.paragraph}>
            我们找不到您要找的页面。
          </p>
          {redirectPath && (
            <p className={styles.paragraph}>
              您是否想访问 <Link to={redirectPath}>这个页面</Link>？
            </p>
          )}
          <p className={styles.paragraph}>
            请联系系统管理员，并告知他们链接已损坏。
          </p>
          <Link className={styles.homeButton} to="/">
            <Translate
              id="theme.NotFound.button"
              description="The label of the button to go to homepage">
              返回首页
            </Translate>
          </Link>
        </div>
      </main>
    </Layout>
  );
}