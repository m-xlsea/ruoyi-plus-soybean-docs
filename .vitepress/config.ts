import { defineConfig } from 'vitepress';

export default defineConfig({
  head: [
    ['meta', { name: 'author', content: 'xlsea' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'soybean, soybean-admin, ruoyi-plus-soybean, RuoYi-Vue-Plus, ruoyi, ruoyi-plus-soybean docs'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  assetsDir: 'public',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RuoYi-Plus-Soybean',
    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/xlsea/ruoyi-plus-soybean' },
      { icon: 'github', link: 'https://github.com/m-xlsea/ruoyi-plus-soybean' }
    ],
    algolia: {
      appId: '98WN1RY04S',
      apiKey: '13e9f5767b774422a5880723d9c23265',
      indexName: 'ruoyi-plus-soybean'
    },
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2024 xlsea'
    },
    nav: [
      { text: '指引', link: '/guide/intro', activeMatch: '/guide/' },
      { text: '常见问题', link: '/faq/', activeMatch: '/faq/' },
      { text: '合作', link: '/cooperate/', activeMatch: '/cooperate/' },
      { text: '捐赠', link: '/other/donate' },
      {
        text: '链接',
        items: [
          {
            text: '预览',
            link: 'https://ruoyi.xlsea.cn'
          },
          {
            text: '源码仓库',
            items: [
              {
                text: 'Gitee 仓库',
                link: 'https://gitee.com/xlsea/ruoyi-plus-soybean'
              },
              {
                text: 'Github 仓库',
                link: 'https://github.com/m-xlsea/ruoyi-plus-soybean'
              }
            ]
          },
          {
            text: '文档',
            items: [
              {
                text: '文档地址',
                link: 'https://docs.ruoyi.xlsea.cn'
              },
              {
                text: '文档源码',
                link: 'https://github.com/m-xlsea/ruoyi-plus-soybean-docs'
              }
            ]
          },
          {
            text: '相关链接',
            items: [
              {
                text: 'RuoYi-Vue-Plus',
                link: 'https://plus-doc.dromara.org/'
              },
              {
                text: 'Soybean Admin',
                link: 'https://soybeanjs.cn/'
              }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            {
              text: '简介',
              link: '/guide/intro'
            },
            {
              text: '快速上手',
              link: '/guide/quick-start'
            },
            {
              text: '同步代码',
              link: '/guide/sync'
            }
          ]
        },
        {
          text: 'Hooks 函数',
          items: [
            {
              text: 'useDict',
              link: '/guide/hooks/dict'
            },
            {
              text: 'useDownload',
              link: '/guide/hooks/download'
            },
            {
              text: 'useTable',
              link: '/guide/hooks/use-table'
            },
            {
              text: 'useTreeTable',
              link: '/guide/hooks/use-tree-table'
            }
          ]
        }
      ]
    }
  }
});
