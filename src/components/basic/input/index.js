// src/components/Input/index.ts
import Input from './Input.vue';
import { withInstall } from '@/utils/install';
// 为组件添加 install 方法
export const LinInput = withInstall(Input, 'LinInput');
export default LinInput;
