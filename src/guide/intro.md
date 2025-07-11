# 项目介绍

RuoYi-Plus-Soybean 是一个现代化的企业级多租户管理系统，它结合了 [RuoYi-Vue-Plus](https://gitee.com/dromara/RuoYi-Vue-Plus) 的强大后端功能和 [Soybean Admin](https://gitee.com/soybeanjs/soybean-admin) 的现代化前端特性，为开发者提供了完整的企业管理解决方案。

> 更多内容请参考 [SoybeanAdmin 文档](https://docs.soybeanjs.cn/zh/)。

## 📚 文档

- 文档地址为 [ruoyi-plus-soybean-docs](https://github.com/m-xlsea/ruoyi-plus-soybean-docs)，采用 Vitepress 开发。
- 文档参考与 [SoybeanAdmin Docs](https://docs.soybeanjs.cn/zh/)，感谢 SoybeanJS 团队。
- 如发现文档有误，欢迎提 pr 帮助我们改进。

## 📋 项目背景

随着企业数字化转型的深入推进，传统的单体应用已无法满足现代企业对于**灵活性**、**可扩展性**和**多租户**的需求。本项目应运而生，旨在：

- 🏢 **解决多租户场景**：支持 SaaS 模式的多租户架构
- ⚡ **提升开发效率**：基于现代前端技术栈，提供极速开发体验
- 🔧 **降低维护成本**：清晰的模块划分和规范的代码结构
- 📱 **适配多终端**：支持 PC、平板、手机等多种设备

## ✨ 核心特性

- **前沿技术应用**：采用 Vue3, Vite6, TypeScript, Pinia 和 UnoCSS 等最新流行的技术栈。
- **清晰的项目架构**：采用 pnpm monorepo 架构，结构清晰，优雅易懂。
- **严格的代码规范**：遵循 [SoybeanJS 规范](https://docs.soybeanjs.cn/zh/standard/)，集成了eslint, prettier 和 simple-git-hooks，保证代码的规范性。
- **TypeScript**： 支持严格的类型检查，提高代码的可维护性。
- **丰富的主题配置**：内置多样的主题配置，与 UnoCSS 完美结合。
- **内置国际化方案**：轻松实现多语言支持。
- **自动化文件路由系统**：自动生成路由导入、声明和类型。更多细节请查看 [Elegant Router](https://github.com/soybeanjs/elegant-router)。
- **灵活的权限路由**：同时支持前端静态路由和后端动态路由。
- **丰富的页面组件**：内置多样页面和组件，包括403、404、500页面，以及布局组件、标签组件、主题配置组件等。
- **命令行工具**：内置高效的命令行工具，git提交、删除文件、发布等。
- **移动端适配**：完美支持移动端，实现自适应布局。
- **多租户架构**：完整支持SaaS多租户模式，灵活的租户管理能力
- **权限管理**：精细的基于角色的权限控制

## 🏢 适用场景

### 企业内部系统

- **OA 办公自动化系统**
- **CRM 客户关系管理**
- **ERP 企业资源规划**
- **HRM 人力资源管理**

### SaaS 平台

- **多租户管理平台**
- **企业服务平台**
- **行业解决方案**
- **云服务管理平台**

### 政务系统

- **电子政务平台**
- **公共服务系统**
- **监管平台**
- **数据分析平台**

## 🎯 项目定位

### 与 Soybean Admin 的关系

**RuoYi-Plus-Soybean** 是基于 **Soybean Admin** 框架构建的**业务型应用**：

- **继承优势**：保留了 Soybean Admin 的现代化架构和开发体验
- **业务扩展**：增加了完整的企业管理业务功能
- **生产就绪**：针对企业级应用场景进行了优化

### 与 RuoYi-Vue-Plus 后端的配合

项目与 **RuoYi-Vue-Plus** 后端形成**前后端分离**的完整解决方案：

- **API 对接**：完整对接后端提供的 RESTful API
- **权限同步**：前端权限控制与后端权限系统保持一致
- **数据流转**：标准化的数据交互格式

## 📚 需要掌握的基础知识

本项目基于 Vue3, Vite, TS 开发，并全部采用了 Vue3 的**script-setup**写法，建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [ES6](https://es6.ruanyifeng.com/)
- [Vue3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [UnoCSS](https://uno.antfu.me/)
- [VueUse](https://vueuse.org/)
- [NaiveUI](https://www.naiveui.com/zh-CN/os-theme) / [AntDesign Vue](https://www.antdv.com/components/overview-cn/)

## 🌐 浏览器支持

本地开发推荐使用`Chrome 100+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

## 🤝 社区支持

- [RuoYi-Plus-Soybean](https://gitee.com/xlsea/ruoyi-plus-soybean) 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。项目采用 MIT 开源协议，本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。
- 如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据你的活跃度邀请你加入。

---

::: tip 💡 开始使用
准备好开始使用 RuoYi-Plus-Soybean 了吗？查看我们的 [快速开始](/guide/quick-start) 指南，几分钟内就能运行起来！
:::
