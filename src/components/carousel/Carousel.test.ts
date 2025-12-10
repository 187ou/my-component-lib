// src/components/carousel/Carousel.test.ts
import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { LinCarousel } from './index'

const items = [
  'https://example.com/1.jpg',
  'https://example.com/2.jpg',
  'https://example.com/3.jpg'
]

describe('LinCarousel', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all slides', () => {
    const wrapper = mount(LinCarousel, {
      props: { items, height: '200px' }
    })
    expect(wrapper.findAll('.my-carousel__item').length).toBe(items.length)
  })

  it('emits change when clicking next arrow', async () => {
    const wrapper = mount(LinCarousel, {
      props: { items }
    })
    await wrapper.find('.my-carousel__arrow--next').trigger('click')
    expect(wrapper.emitted('change')?.[0][0]).toBe(1)
  })

  it('autoplay moves to next slide', async () => {
    vi.useFakeTimers()
    const wrapper = mount(LinCarousel, {
      props: { items, autoplay: true, interval: 300 }
    })

    vi.advanceTimersByTime(350)
    await wrapper.vm.$nextTick()

    const changes = wrapper.emitted('change')
    expect(changes && changes[0][0]).toBe(1)
  })

  it('supports custom slot rendering', () => {
    const wrapper = mount(LinCarousel, {
      props: { items: [{ title: 'Hello' }] },
      slots: {
        default: ({ item }: any) => h('div', { class: 'custom-slide' }, item.title)
      }
    })
    expect(wrapper.find('.custom-slide').text()).toBe('Hello')
  })
})

