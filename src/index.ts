// src/index.ts
import { App } from 'vue'
import './styles/index.scss' // 全局样式入口

// 导入组件
import { MyButton } from './components/button'
import { MyInput } from './components/input'
import { MyLink } from './components/link'
import { MyIcon } from './components/icon'

// 组件列表（用于批量注册）
const components = [MyButton, MyLink, MyInput, MyIcon]

// 全局注册方法
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
}

// 按需导出组件
export { MyButton, MyLink, MyInput, MyIcon }

// 导出类型
export type { ButtonProps, ButtonEmits } from './components/button/button-types'
export type { InputProps, InputEmits } from './components/input/input-types'
export type { LinkProps, LinkEmits } from './components/link/link-types'
export type { IconProps } from './components/icon/icon-types'

// 默认导出（支持 app.use() 全局注册）
export default {
  install
}
