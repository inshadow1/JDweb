// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants'
import { themes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config:Config = {
  title: 'Yelv的笔记本',
  tagline: 'Coding For Fun !!!',
  url: 'https://yelv.site',
  baseUrl: '/',
  // url: 'https://yelv.site',
  // baseUrl: '/blog/',  // 因为你想要网站在 /blog 路径下
  // baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: './svg/fallen_leaf.svg',
  // isMDXComponent: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fall_zhang', // Usually your GitHub org/user name.
  projectName: 'front-end-note', // Usually your repo name.
  // 实验特性
  future: {
    experimental_faster: {
      swcJsLoader: true, // Use SWC to transpile JS (instead of Babel)
      swcJsMinimizer: true, //  Use SWC to minify JS (instead of Terser)
      swcHtmlMinimizer: true, // Use SWC to minify HTML and inlined JS/CSS (instead of html-minifier-terser)
      lightningCssMinimizer: true, // Use Lightning CSS to minify CSS (instead of cssnano and clean-css)
      rspackBundler: true, // Use Rspack to bundle your app (instead of webpack)
      mdxCrossCompilerCache: true // Compile MDX files once for both browser/Node.js environments instead of twice
    }
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },

 
  presets: [
    [
      'classic',
      {
        docs: {
          path: './my-docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/', // 点击编辑此页的时候弹出的内容
          numberPrefixParser (filename) {
            // // Implement your own logic to extract a potential number prefix
            // const numberPrefix = findNumberPrefix(filename);
            // // Prefix found: return it with the cleaned filename
            // if (numberPrefix) {
            //   return {
            //     numberPrefix,
            //     filename: filename.replace(prefix, ''),
            //   };
            // }
            // No number prefix found
            return { numberPrefix: undefined, filename }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/' // 点击编辑此页的时候弹出的内容，删除则全删除
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      } satisfies Preset.Options
    ]
  ],
  markdown: {
    mdx1Compat: {
      comments: true, // 允许在 mdx 中使用 HTML
      admonitions: false, // 允许自定义模块宽松的模式 :::title my title -> :::title [my title]
      headingIds: true
    }
  },

  themeConfig: {
    navbar: {
      title: 'Yelv 的笔记本',
      logo: {
        alt: 'My Site Logo',
        src: './svg/boy_avatar.svg'
      },
      items: [
        {
          type: 'doc',
          docId: '前端环境搭建',
          position: 'left',
          label: '笔记'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/inshadow1',
          label: 'GitHub',
          position: 'right'
        }
      ],
      hideOnScroll: true
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: '社区',
          items: [
            {
              label: 'bilibili',
              href: 'https://space.bilibili.com/488063421?spm_id_from=333.1007.0.0'
            },
            {
              label: 'Github',
              href: 'https://github.com/inshadow1'
            }
          ]
        },
        {
          title: '联系',
          items: [
            {
              label: '微信号：q1601698207',
              to: '#'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yelv. Built with Docusaurus.<br><a href="https://beian.miit.gov.cn">鄂ICP备2025094277号</a>`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  } satisfies Preset.ThemeConfig
}

export default config