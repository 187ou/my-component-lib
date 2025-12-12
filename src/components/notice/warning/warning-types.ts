// src/components/notice/warning/warning-types.ts
export interface WarningProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'error'
  title?: string
  description?: string
  closable?: boolean
  closeText?: string
  center?: boolean
  showIcon?: boolean
}

export interface WarningEmits {
  (e: 'close'): void
}
