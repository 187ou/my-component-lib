// src/components/Dropdown/index.ts
import Dropdown from './Dropdown.vue'
import { withInstall } from '@/utils/install'

export const LinDropdown = withInstall(Dropdown, 'LinDropdown')

export * from './dropdown-types'

export default LinDropdown
