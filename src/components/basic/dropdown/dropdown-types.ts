// src/components/Dropdown/dropdown-types.ts
export interface DropdownItem {
  label: string
  value?: any
  command?: any
  disabled?: boolean
  divided?: boolean
  icon?: string
  keepAlive?: boolean
  type?: 'item' | 'group'
  children?: DropdownItem[]
}

export interface DropdownProps {
  trigger?: 'hover' | 'click' | 'contextmenu' | 'manual'
  menu?: DropdownItem[]
  placement?: 'bottom' | 'top' | 'auto'
  offset?: number
  teleport?: boolean
  arrow?: boolean
  rtl?: boolean
  modelValue?: any
}

export interface DropdownEmits {
  (e: 'select', value: any): void
  (e: 'visible-change', visible: boolean): void
  (e: 'command', payload: any): void
  (e: 'update:modelValue', value: any): void
}
