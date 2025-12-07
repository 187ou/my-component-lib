// src/utils/install.ts
import { App, Plugin, Directive } from 'vue'

// 组件类型：支持 SFC 和函数式组件
export type SFCWithInstall<T> = T & Plugin

// 指令类型
export type DirectiveWithInstall<T> = T & Plugin

// 组件安装函数
export const withInstall = <T>(comp: T, name?: string): SFCWithInstall<T> => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const componentName = name || (comp as any).name || 'MyComponent'
    app.component(componentName, comp as any)
  }
  return comp as SFCWithInstall<T>
}

// 指令安装函数
export const withInstallDirective = <T extends Directive>(directive: T): DirectiveWithInstall<T> => {
  (directive as DirectiveWithInstall<T>).install = (app: App) => {
    const name = (directive as any).name || 'myDirective'
    app.directive(name, directive)
  }
  return directive as DirectiveWithInstall<T>
}

// 批量安装函数
export const withInstallComponents = <T extends Record<string, any>>(components: T) => {
  Object.entries(components).forEach(([, comp]) => {
    withInstall(comp)
  })
  return components
}
