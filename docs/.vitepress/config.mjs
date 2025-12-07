import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Component Lib',
  description: 'A Vue 3 Component Library',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [{ text: 'Button', link: '/components/button' }]
        }
      ]
    }
  }
})
