import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Component Lib',
  description: 'A Vue 3 Component Library',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Components',
        items: [
          { text: 'Basic Components', link: '/components/basic/avatar' },
          { text: 'Notice Components', link: '/components/notice/warning' }
        ]
      },
      { text: 'Author', link: '/author' }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Basic Components',
          items: [
            { text: 'Avatar', link: '/components/basic/avatar'},
            { text: 'Button', link: '/components/basic/button' },
            { text: 'Card', link: '/components/basic/card' },
            { text: 'Carousel', link: '/components/basic/carousel'},
            { text: 'Dropdown', link: '/components/basic/dropdown' },
            { text: 'Input', link: '/components/basic/input' },
            { text: 'Icon', link: '/components/basic/icon'},
            { text: 'Link', link: '/components/basic/link'},
            { text: 'Tag', link: '/components/basic/tag'},
          ]
        },
        {
          text: 'Notice Components',
          items: [
            { text: 'Warning', link: '/components/notice/warning' },
            { text: 'Message', link: '/components/notice/message' },
            { text: 'Loading', link: '/components/notice/loading' },
            { text: 'Notification', link: '/components/notice/notification' },
            { text: 'Progress', link: '/components/notice/progress' },
            { text: 'Timeline', link: '/components/notice/timeline' },
          ]
        }
      ]
    }
  }
})
