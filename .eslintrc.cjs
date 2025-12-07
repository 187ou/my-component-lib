module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off', // 允许单单词组件名（如 Button）
    '@typescript-eslint/no-explicit-any': 'off' // 允许 any 类型（开发初期可放宽）
  }
}
