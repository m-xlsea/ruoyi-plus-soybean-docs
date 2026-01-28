import { defineConfig } from 'vitepress';
import { qqSvg } from './icon.js';

export default defineConfig({
  title: 'RuoYi-Plus-Soybean',
  description:
    'RuoYi-Plus-Soybean 是基于 RuoYi-Vue-Plus 和 Soybean Admin 的快速开发框架，提供了丰富的 Hooks 函数和组件，方便开发者快速开发。',
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
      { icon: 'github', link: 'https://github.com/m-xlsea/ruoyi-plus-soybean' },
      { icon: 'gitcode', link: 'https://gitcode.com/xlsea/ruoyi-plus-soybean' },
      { icon: 'gitee', link: 'https://gitee.com/xlsea/ruoyi-plus-soybean' },
      {
        icon: {
          svg: qqSvg
        },
        link: 'https://qm.qq.com/q/LJj6MIVto6'
      }
    ],
    algolia: {
      appId: 'ED89FPJ6YB',
      apiKey: '3171cb74a74a25de316aab968c0582b3',
      indexName: 'docs_ruoyi_xlsea_cn_ed89fpj6yb_pages'
    },
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2024 xlsea'
    },
    nav: [
      { text: '指引', link: '/guide/intro', activeMatch: '/guide/' },
      { text: '常见问题', link: '/faq', activeMatch: '/faq' },
      { text: '合作', link: '/cooperate', activeMatch: '/cooperate' },
      { text: '捐赠', link: '/other/donate', activeMatch: '/other/donate' },
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
                text: 'GitHub 仓库',
                link: 'https://github.com/m-xlsea/ruoyi-plus-soybean'
              },
              {
                text: 'GitCode 仓库',
                link: 'https://gitcode.com/xlsea/ruoyi-plus-soybean'
              },
              {
                text: 'Gitee 仓库',
                link: 'https://gitee.com/xlsea/ruoyi-plus-soybean'
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
          },
          {
            text: '友情链接',
            items: [
              {
                text: "Annlcc's Blog",
                link: 'https://www.annlcc.cn?source=ruoyi-plus-soybean'
              },
              {
                text: 'Snail Job',
                link: 'https://preview.snailjob.opensnail.com?source=ruoyi-plus-soybean'
              },
              {
                text: 'Aizuda',
                link: 'https://naiveui.aizuda.com?source=ruoyi-plus-soybean'
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
