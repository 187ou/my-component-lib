// src/index.ts
import 'virtual:svg-icons-register';
import './styles/index.scss'; // 全局样式入口
// 导入组件
import { LinButton } from './components/button';
import { LinInput } from './components/input';
import { LinLink } from './components/link';
import { LinIcon } from './components/icon';
import { LinAvatar } from './components/avatar';
import { LinCard } from './components/card';
// 组件列表（用于批量注册）
const components = [LinButton, LinLink, LinInput, LinIcon, LinAvatar, LinCard];
// 全局注册方法
const install = (app) => {
    components.forEach(component => {
        app.use(component);
    });
};
// 按需导出组件
export { LinButton, LinLink, LinInput, LinAvatar, LinIcon, LinCard };
// 默认导出（支持 app.use() 全局注册）
export default {
    install
};
