// src/components/Icon/index.ts
import Icon from './Icon.vue';
import { withInstall } from '@/utils/install';
// 为组件添加 install 方法
export const MyIcon = withInstall(Icon, 'MyIcon');
export default MyIcon;
