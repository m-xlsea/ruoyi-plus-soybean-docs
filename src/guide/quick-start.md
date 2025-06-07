# 快速开始

本文会帮助你从头启动项目

### 代码生成与菜单更新

项目提供了代码生成工具和菜单SQL更新文件，在 <a href="https://gitee.com/xlsea/ruoyi-plus-soybean/tree/master/docs" target="_blank">docs</a> 目录下：

- **代码生成工具**

  - 代码生成工具类位于 `docs/java` 目录，如果没有修改过VelocityUtils.java文件，直接替换即可
  - 代码生成模板位于 `docs/template` 目录，请在ruoyi-generator模块的`resource/vm`下新建 `soy`文件夹，并将所有模板拷贝至`soy`文件夹中

- **菜单SQL更新**
  - 菜单数据更新SQL文件位于 `docs/sql` 目录
  - 在系统初始化或更新时，需要执行相应的SQL文件来更新菜单数据

## 环境准备

确保你的环境满足以下要求：

- **git**: 你需要git来克隆和管理项目版本。[安装教程](../tutorial/git.md)
- **NodeJS**: >=18.12.0，推荐 18.19.0 或更高。[安装教程](../tutorial/nodejs.md)
- **pnpm**: >= 8.7.0，推荐最新版本。

## VSCode插件

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

以下为推荐的插件：

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动添加 HTML/XML 结束标签
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - 为 HTML/XML 添加关闭标签和自动重命名成对的标签
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 自动重命名成对的 HTML/XML 标签
- [Color Highlight](https://github.com/naumovs/vscode-ext-color-highlight) - 颜色高亮插件
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮.env 文件
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 统一不同编辑器的一些配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git 图形化操作工具
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 显示具体某行代码的 git 信息
- [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) - 搜索 iconify 图标的插件
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标实时显示的插件
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 国际化插件
- [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) - 提供快捷键 ctrl+l 直接输入 console.log()
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - 图标主题，显示文件和文件多种图标
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - 主题
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化插件
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 写法提示插件
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 服务插件
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) - Vue2、Vue3 写法提示插件

## 代码获取

### 从 GitHub 获取代码

```bash
# 克隆代码
git clone https://github.com/m-xlsea/ruoyi-plus-soybean.git
```

### 从 Gitee 获取代码

```bash
# 克隆代码
git clone https://gitee.com/xlsea/ruoyi-plus-soybean.git
```

::: warning 注意
最新版本的代码以 Gitee 为准。
:::

### 安装依赖

安装项目依赖

```bash
pnpm i
```

## 插件配置

### 安装 Vue - Official，禁用 Vetur

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 服务插件

## npm scripts

```json
{
  // 构建打包(prod环境)
  "build": "vite build --mode prod",
  // 构建打包(dev环境)
  "build:dev": "vite build --mode dev",
  // 构建打包(test环境)
  "build:test": "vite build --mode test",
  // 删除主项目及子项目的 node_modules, dist, pnpm-lock.yaml
  "cleanup": "sa cleanup",
  // 提交代码 (生成符合 Conventional Commits standard 的提交信息)
  "commit": "sa git-commit",
  // 本地运行(dev环境)
  "dev": "vite --mode dev",
  // 本地运行(test环境)
  "dev:test": "vite --mode test",
  // 本地运行(prod环境)
  "dev:prod": "vite --mode prod",
  // 生成路由
  "gen-route": "sa gen-route",
  // eslint检查并自动修复
  "lint": "eslint . --fix",
  // 初始化 simple-git-hooks
  "prepare": "simple-git-hooks",
  // 本地环境预览构建后的dist
  "preview": "vite preview",
  // 发布
  "release": "sa release",
  // vue文件的ts检查
  "typecheck": "vue-tsc --noEmit --skipLibCheck",
  // 更新依赖包
  "update-pkg": "sa update-pkg"
}
```

## 目录说明

```
ruoyi-plus-soybean
├── build                    # 构建配置和插件
│   ├── config               # 构建配置文件
│   └── plugins              # Vite 插件
├── docs                     # 文档和模板
│   ├── java                 # 代码生成工具类
│   └── template             # 代码生成模板
├── packages                 # Monorepo包
│   ├── alova                # 使用Alova的HTTP客户端实现
│   ├── axios                # 使用Axios的HTTP客户端实现
│   ├── color                # 颜色管理工具
│   ├── hooks                # 可复用的Vue组合函数
│   ├── materials            # UI组件和材料
│   ├── ofetch               # 使用ofetch的HTTP客户端实现
│   ├── scripts              # 构建和开发脚本
│   ├── uno-preset           # UnoCSS预设配置
│   └── utils                # 通用工具函数
├── public                   # 静态资源
├── src                      # 主应用源代码
│   ├── assets               # 静态资源(图片、图标)
│   ├── components           # 可复用的 Vue 组件
│   ├── constants            # 应用常量
│   ├── enum                 # TypeScript 枚举
│   ├── hooks                # Vue 组合函数
│   ├── layouts              # 页面布局
│   ├── locales              # 国际化
│   ├── plugins              # Vue 插件
│   ├── router               # Vue Router 配置
│   ├── service              # API 服务
│   ├── store                # Pinia 存储模块
│   ├── styles               # 全局样式
│   ├── theme                # 主题配置
│   ├── typings              # TypeScript 类型定义
│   ├── utils                # 工具函数
│   └── views                # 页面组件
└── vite.config.ts           # Vite 配置
```
