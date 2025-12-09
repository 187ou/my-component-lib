import './styles/index.scss'; // 全局样式入口
// 导入组件
import { MyButton } from './components/button';
import { MyLink } from './components/link';

// 组件列表（用于批量注册）
const components = [MyButton, MyLink];
// 全局注册方法
const install = (app) => {
    components.forEach(component => {
        app.use(component);
    });
};
// 按需导出组件
export { MyButton, MyLink };
// 默认导出（支持 app.use() 全局注册）
export default {
    install
};
