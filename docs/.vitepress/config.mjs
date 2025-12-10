import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Component Lib',
  description: 'A Vue 3 Component Library',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/Avatar' },
      { text: 'Author', link: '/author' }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Avatar', link: '/components/avatar'},
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Icon', link: '/components/icon'},
            { text: 'Link', link: '/components/link'},
          ]
        }
      ]
    }
  }
})
