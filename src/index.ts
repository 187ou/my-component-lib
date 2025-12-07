// src/index.ts
import { App } from 'vue'
import './styles/index.scss' // 全局样式入口

// 导入组件
import { MyButton } from './components/button'

// 组件列表（用于批量注册）
const components = [MyButton]

// 全局注册方法
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
}

// 按需导出组件
export { MyButton }

// 导出类型
export type { ButtonProps, ButtonEmits } from './components/button/button-types'

// 默认导出（支持 app.use() 全局注册）
export default {
  install
}
