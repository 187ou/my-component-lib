// src/index.ts
import 'virtual:svg-icons-register';
import './styles/index.scss';
// 导入组件
import { LinButton } from './components/button';
import { LinInput } from './components/input';
import { LinLink } from './components/link';
import { LinIcon } from './components/icon';
import { LinAvatar } from './components/avatar';
import { LinCard } from './components/card';
import { LinCarousel } from './components/carousel';
// 组件列表（用于批量注册）
const components = [LinButton, LinLink, LinInput, LinIcon, LinAvatar, LinCard, LinCarousel];
// 全局注册方法
const install = (app) => {
    components.forEach(component => {
        app.use(component);
    });
};
// 按需导出组件
export { LinButton, LinLink, LinInput, LinAvatar, LinIcon, LinCard, LinCarousel };
// 默认导出（支持 app.use() 全局注册）
export default {
    install
};
