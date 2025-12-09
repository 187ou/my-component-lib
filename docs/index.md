---
home: true
heroText: My Component Lib
heroTagline: 轻量 · 高效 · 组件化的 Vue 3 UI 解决方案
# 如果有 logo，请将路径替换为实际文件
# heroImage: /logo.png
action:
  - text: 快速开始 →
    link: /components/button
    type: primary
  - text: 在 GitHub 上查看 ↗︎
    link: https://github.com/your-repo
    type: secondary
features:
  - title: 现代化技术栈
    details: 基于 Vue 3 + TypeScript + Vite 打造，享受极速开发体验
  - title: 轻量级 & 高性能
    details: 组件按需加载、Tree-shaking 支持，最小化打包体积
  - title: 主题定制
    details: 一行配置即可切换主题，深色模式、品牌色统统拿捏
  - title: 完善的文档
    details: 提供丰富示例与 API 指南，助你快速上手
  - title: 开箱即用
    details: 开发、测试、构建、发布全链路脚手架集成
  - title: 生态友好
    details: 与 Vue Router、Pinia、UnoCSS、VitePress 等生态无缝衔接
---

<div align="center">
  <h1>My Component Lib</h1>
  <p style="font-size:1.2rem;line-height:1.6;">让 <strong>设计</strong> 与 <strong>开发</strong> 的边界消失</p>
</div>

## ✨ 为什么选择 My Component Lib？

1. **专为 Vue 3 打造**：全面支持 Composition API、<code>&lt;script setup&gt;</code> 与 TypeScript 类型推导。
2. **极致性能**：深度 Tree-shaking，零依赖按需加载。
3. **一致的设计语言**：遵循现代 UI 设计规范，提供多主题与暗黑模式。
4. **易于扩展**：灵活的插槽机制与自定义样式变量，无缝对接业务需求。
5. **完善的文档与示例**：从快速上手到高级用法，全面覆盖。

## 🚀 快速开始

```bash
# 通过包管理器安装
pnpm add my-component-lib
# 或者使用 npm
yarn add my-component-lib
npm install my-component-lib --save
```

```ts{7}
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库及样式
import MyComponentLib from 'my-component-lib'
import 'my-component-lib/dist/style.css'

createApp(App).use(MyComponentLib).mount('#app')
```

## 🌈 组件一览

| 组件 | 说明 | 文档 |
|-------|------|------|
| Button 按钮 | 常用操作按钮，支持多种主题 & 状态 | [查看 →](./components/button.md) |
| Input 输入框 | 轻量、灵活的输入组件 | [查看 →](./components/input.md) |
| Link 文字链接 | 可插入前后置图标、禁用、跳转 | [查看 →](./components/link.md) |
| Icon 图标 | 基于 SVG Sprite 的多彩图标 | [查看 →](./components/icon.md) |

更多组件正在路上，敬请期待！

::: tip 贡献指南
欢迎提交 Issue & PR，一起让 My Component Lib 变得更好！
:::

<div align="center" style="margin-top: 3rem;">
  <sup>Made with ❤️ by My Component Lib Team</sup>
</div>
