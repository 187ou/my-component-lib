// src/components/link/index.ts
import Link from './Link.vue';
import { withInstall } from '@/utils/install';
// 为组件添加 install 方法
export const MyLink = withInstall(Link, 'MyLink');
export default MyLink;
