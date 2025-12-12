// src/index.ts
import 'virtual:svg-icons-register'
import { App } from 'vue'
import './styles/index.scss'

// 按功能模块导入
import * as BasicComponents from './components/basic'
import * as NoticeComponents from './components/notice'

// 组件列表（用于批量注册）
const components = [...Object.values(BasicComponents), ...Object.values(NoticeComponents)]

// 全局注册方法
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
}

// 按需导出组件
export * from './components/basic'
export * from './components/notice'

// 默认导出（支持 app.use() 全局注册）
export default {
  install
}
