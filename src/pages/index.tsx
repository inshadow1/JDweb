import { useState } from 'react'
import clsx from 'clsx'
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import styles from './index.module.css'
import ShuffleText from '@site/src/components/shuffle/shuffle'
import { LanguageTools } from '@site/src/components/LanguageTools/LanguageTools'
function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.headerText}>
          <h1 className="hero__title">Yelv</h1>
          <ShuffleText />
        </div>
        <div className=''>
          <img src="/svg/media-work.svg" height={460} width={460} alt="" />
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  const [visible, setVisible] = useState()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <LanguageTools />
    </Layout>
  )
}
