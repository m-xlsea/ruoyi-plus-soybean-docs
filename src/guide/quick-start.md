# 快速开始

本指南将帮助你在几分钟内启动 RuoYi-Plus-Soybean 项目，开始你的开发之旅。

## 📝 代码生成与菜单更新

项目提供了代码生成工具和菜单SQL更新文件，在 <a href="https://gitee.com/xlsea/ruoyi-plus-soybean/tree/master/docs" target="_blank">docs</a> 目录下：

- **代码生成工具**

  - 代码生成工具类位于 `docs/java` 目录，如果没有修改过VelocityUtils.java文件，直接替换即可
  - 代码生成模板位于 `docs/template` 目录，请在ruoyi-generator模块的`resource/vm`下新建 `soy`文件夹，并将所有模板拷贝至`soy`文件夹中

- **菜单SQL更新**
  - 菜单数据更新SQL文件位于 `docs/sql` 目录
  - 在系统初始化或更新时，需要执行相应的SQL文件来更新菜单数据

## 🔧 环境要求

在开始之前，请确保你的开发环境满足以下要求：

| 环境        | 版本要求   | 说明                           |
| ----------- | ---------- | ------------------------------ |
| **Node.js** | >= 18.20.0 | 推荐使用 LTS 版本              |
| **pnpm**    | >= 8.7.0   | 必须使用 pnpm，不支持 npm/yarn |
| **Git**     | 最新版本   | 用于代码管理                   |

::: warning ⚠️ 重要提示
本项目**强制使用 pnpm**，使用其他包管理器可能导致依赖问题。
:::

### 环境检查

运行以下命令检查你的环境：

```bash
# 检查 Node.js 版本
node --version
# 应该输出 v18.20.0 或更高版本

# 检查 pnpm 版本
pnpm --version
# 应该输出 8.7.0 或更高版本

# 检查 Git 版本
git --version
```

### 安装 pnpm（如果未安装）

```bash
# 使用 npm 全局安装
npm install pnpm -g

# 或使用 corepack（Node.js 16.13+ 内置）
corepack enable
corepack prepare pnpm@latest --activate
```

# 📥 项目安装

### 1. 克隆仓库

```bash
# 使用 HTTPS
git clone https://github.com/m-xlsea/ruoyi-plus-soybean.git

# 或使用 SSH
git clone git@github.com:m-xlsea/ruoyi-plus-soybean.git

# 进入项目目录
cd ruoyi-plus-soybean
```

### 2. 配置镜像源（可选）

为了加速依赖安装，建议配置国内镜像源：

```bash
# 设置淘宝镜像
pnpm config set registry https://registry.npmmirror.com

# 验证配置
pnpm config get registry
```

### 3. 安装依赖

```bash
# 安装项目依赖
pnpm install
```

::: tip 💡 安装说明

- 首次安装可能需要几分钟时间
- 如果安装失败，请删除 `node_modules` 和 `pnpm-lock.yaml` 后重试
- 项目使用 Monorepo 架构，会安装多个包的依赖
  :::

### 4. 启动开发服务器

```bash
# 启动开发环境
pnpm dev

# 或者指定环境启动
pnpm dev:test    # 测试环境
pnpm dev:prod    # 生产环境
```

启动成功后，你将看到类似输出：

```
  VITE v6.2.0  ready in 1234 ms

  ➜  Local:   http://localhost:9527/
  ➜  press h + enter to show help
```

### 5. 打开浏览器

在浏览器中访问 `http://localhost:9527`，你将看到登录界面。

**默认账号信息：**

- 用户名：`admin`
- 密码：`admin123`

## 🔧 开发配置

### 环境变量配置

项目提供了三个环境配置文件：

- `.env.dev` - 开发环境
- `.env.test` - 测试环境
- `.env.prod` - 生产环境

## 🚀 常用命令

### 开发命令

```bash
# 启动开发服务器
pnpm dev

# 启动测试环境
pnpm dev:test

# 启动生产环境
pnpm dev:prod
```

### 构建命令

```bash
# 构建生产版本
pnpm build

# 构建开发版本
pnpm build:dev

# 构建测试版本
pnpm build:test

# 预览构建结果
pnpm preview
```

### 代码质量

```bash
# 代码格式检查和修复
pnpm lint

# TypeScript 类型检查
pnpm typecheck

# 生成路由
pnpm gen-route
```

### Git 提交

```bash
# 交互式提交（英文）
pnpm commit

# 交互式提交（中文）
pnpm commit:zh
```

### 依赖管理

```bash
# 更新依赖包
pnpm update-pkg

# 清理项目
pnpm cleanup

# 发布新版本
pnpm release
```

## 🏗️ 项目结构概览

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

## ❓ 常见问题

### 启动失败怎么办？

1. **检查 Node.js 版本**：确保版本 >= 18.20.0
2. **重新安装依赖**：删除 `node_modules` 和 `pnpm-lock.yaml`，然后重新 `pnpm install`
3. **检查端口占用**：确保 9527 端口未被占用
4. **查看错误日志**：根据控制台错误信息排查问题

### 后端连接失败？

1. **检查后端服务**：确保 RuoYi-Vue-Plus 后端服务正常运行
2. **检查 API 地址**：确认 `.env.dev` 中的 `VITE_APP_BASE_API` 配置正确
3. **检查网络连接**：确保前后端能够正常通信

### 权限问题？

1. **检查登录状态**：确保使用正确的账号密码登录
2. **检查角色权限**：确认当前用户拥有相应的菜单和操作权限
3. **清除缓存**：尝试清除浏览器缓存和 localStorage

::: tip 💡 获取帮助
如果遇到其他问题，可以查看 [常见问题](/faq/) 或在 [Gitee Issue](https://gitee.com/xlsea/ruoyi-plus-soybean/issues) 上提交 Issue。
:::
