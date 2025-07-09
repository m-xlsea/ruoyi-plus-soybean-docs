---
layout: home

title: RuoYi-Plus-Soybean
titleTemplate: 一个现代化的企业级多租户管理系统

hero:
  name: RuoYi-Plus-Soybean
  text: 企业级多租户管理系统
  tagline: 结合了 RuoYi-Vue-Plus 的强大后端功能和 Soybean Admin 的现代化前端特性，为开发者提供了完整的企业管理解决方案。
  image:
    src: /logo.svg
    alt: RuoYi-Plus-Soybean
  actions:
    - theme: brand
      text: 开始
      link: /guide/quick-start
    - theme: alt
      text: 介绍
      link: /guide/intro
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/xlsea/ruoyi-plus-soybean
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/m-xlsea/ruoyi-plus-soybean

features:
  - icon: 🆕
    title: 社区流行的最新技术栈
    details: Vue3,Vite6,TypeScript 和 UnoCSS
  - icon: 🔄
    title: 多框架支持
    details: 同时支持 Vue3 和 React，让您可灵活选择前端开发技术栈
  - icon: 🎨
    title: 多组件库集成
    details: 适配 Element Plus、Naive UI、Ant Design、Ant Design Vue 等多种组件库，满足多样化 UI 需求。
  - icon: 🦋
    title: 清晰的项目结构
    details: 采用 pnpm monorepo，结构清晰优雅，易于维护。代码规范性极高
  - icon: 🛠️
    title: TypeScript
    details: 严格的类型检查，易于团队开发和维护
  - icon: 🔩
    title: 主题配置
    details: 内置丰富的主题配置，轻松结合 UnoCSS进行拓展
  - icon: 🔗
    title: 文件路由系统
    details: 自动化、智能化的文件路由系统
  - icon: 🔑
    title: 权限路由
    details: 支持前端静态路由和后端动态路由
  - icon: ⚙️
    title: 扩展 Script 脚本
    details: 提供一键升级依赖、自动生成 ChangeLog、生成提交信息等多种脚本功能，显著提升开发效率。
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const partners = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/53625177?v=4',
    name: '马铃薯头',
    title: '作者',
    desc: 'RuoYi-Plus-Soybean 作者。',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/xlsea' },
      { icon: 'github', link: 'https://github.com/m-xlsea' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/></svg>'
        },
        link: 'https://blog.xlsea.cn'
      }
    ]
  },
  {
    avatar: '	https://avatars.githubusercontent.com/u/83287379?v=4',
    name: 'Elio-An',
    title: '作者',
    desc: 'RuoYi-Plus-Soybean 作者。',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/elio-an' },
      { icon: 'github', link: 'https://github.com/Elio-An' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/></svg>'
        },
        link: 'https://www.annlcc.cn'
      }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>RuoYi-Plus-Soybean 团队</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
