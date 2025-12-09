// scripts/generate-icon-list.js
const fs = require('fs')
const path = require('path')

const iconsDir = path.resolve(__dirname, '../src/assets/icons')
const iconFiles = fs.readdirSync(iconsDir)

const iconNames = iconFiles
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''))

// 生成图标名称列表
const iconList = `
export const iconNames = [
  ${iconNames.map(name => `'${name}'`).join(',\n  ')}
] as const

export type IconName = typeof iconNames[number]
`

fs.writeFileSync(path.resolve(__dirname, '../src/types/icon-types.ts'), iconList)
console.log('Icon list generated successfully!')
