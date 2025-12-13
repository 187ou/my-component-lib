<!-- src/demo/App.vue -->
<template>
  <div class="demo-container">
    <h1>My Component Lib Demo</h1>

    <section class="demo-section">
      <h2>Button 组件测试</h2>
      <div class="demo-buttons">
        <lin-button>默认按钮</lin-button>
        <lin-button type="success">成功按钮</lin-button>
        <lin-button type="warning" size="large">大号警告按钮</lin-button>
        <lin-button type="danger" disabled>禁用按钮</lin-button>
        <lin-button loading>加载中按钮</lin-button>
      </div>
    </section>

    <div>
      <h2>Icon 组件</h2>
      <lin-icon name="search" size="24px" color="#409eff"></lin-icon>
      <lin-icon name="edit" size="24px" color="#67c23a"></lin-icon>

      <h2>Button 集成 Icon</h2>
      <lin-button type="primary" icon="search">搜索按钮</lin-button>

      <h2>Input 集成 Icon</h2>
      <lin-input v-model="inputValue" placeholder="搜索" prefix-icon="search" clearable></lin-input>

      <h2>Link 集成 Icon</h2>
      <lin-link href="#" icon="edit">百度一下</lin-link>

      <h2>Avatar 测试</h2>
      <div class="demo-avatars">
        <lin-avatar src="https://placehold.co/150x150.png" :size="64" />
        <lin-avatar icon="user" :size="64" />
        <lin-avatar text="Alice" :size="64" />
      </div>

      <h2>Card 组件</h2>
      <lin-card header="标题" sub-header="副标题" :hoverable="true" shadow="hover">
        这里是卡片内容
        <template #footer>
          <lin-button size="small">操作</lin-button>
        </template>
      </lin-card>

      <!-- 添加 Carousel 演示 -->
      <div class="carousel-demo">
        <h2>轮播图组件演示</h2>

        <div class="demo-section">
          <h3>基础用法</h3>
          <div class="demo-carousel">
            <lin-carousel :items="imageItems" />
          </div>
        </div>

        <div class="demo-section">
          <h3>自动播放</h3>
          <div class="demo-carousel">
            <lin-carousel
              :items="imageItems"
              autoplay
              :interval="2000"
            />
          </div>
        </div>

        <div class="demo-section">
          <h3>垂直方向</h3>
          <div class="demo-carousel" style="height: 400px;">
            <lin-carousel
              :items="imageItems"
              direction="vertical"
              height="400px"
            />
          </div>
        </div>

        <div class="demo-section">
          <h3>淡入淡出效果</h3>
          <div class="demo-carousel">
            <lin-carousel
              :items="imageItems"
              effect="fade"
            />
          </div>
        </div>

        <div class="demo-section">
          <h3>卡片效果</h3>
          <div class="demo-carousel">
            <lin-carousel
              :items="imageItems"
              effect="card"
              indicator-type="number"
            />
          </div>
        </div>

        <div class="demo-section">
          <h3>自定义内容</h3>
          <div class="demo-carousel">
            <lin-carousel :items="customItems">
              <template #default="{ item, index }">
                <div class="custom-slide" :style="{ backgroundColor: item.color }">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.content }}</p>
                  <span class="slide-index">Slide {{ index + 1 }}</span>
                </div>
              </template>

              <template #prev-arrow>
                <span class="custom-arrow">👈</span>
              </template>

              <template #next-arrow>
                <span class="custom-arrow">👉</span>
              </template>
            </lin-carousel>
          </div>
        </div>

        <div class="demo-section">
          <h3>缩略图模式</h3>
          <div class="demo-carousel">
            <lin-carousel
              :items="imageItems"
              thumbnails
              arrow-position="outer"
            />
          </div>
        </div>

        <div class="demo-section">
          <h3>进度条显示</h3>
          <div class="demo-carousel">
            <lin-carousel
              :items="imageItems"
              progress-bar
              autoplay
              :interval="3000"
            />
          </div>
        </div>
      </div>

      <div>
        <h2>Tag 测试</h2>
        <lin-tag type="success">成功</lin-tag>
        <lin-tag type="danger" closeable>可关闭</lin-tag>
        <lin-tag type="primary" icon="star">带图标</lin-tag>
        <lin-tag outline round clickable>Outline Tag</lin-tag>
        <lin-tag loading>加载中</lin-tag>
      </div>

      <div>
        <h2>Dropdown 测试</h2>
        <lin-dropdown>
          <lin-button>
            Dropdown
            <lin-icon name="arrow-down" />
          </lin-button>
          <template #dropdown>
            <lin-dropdown-menu>
              <lin-dropdown-item>选项 1</lin-dropdown-item>
              <lin-dropdown-item>选项 2</lin-dropdown-item>
              <lin-dropdown-item>选项 3</lin-dropdown-item>
            </lin-dropdown-menu>
          </template>
        </lin-dropdown>
      </div>

      <div>
        <h2>Notice 测试</h2>
        <lin-warning title="标题" description="这是内容" />
      </div>

      <div>
        <h2>Loading 测试</h2>
        <div class="loading-demo-simple">
          <lin-loading visible text="默认加载" />
          <lin-loading visible text="加载中..." type="spinner"/>
          <lin-loading visible text="加载中..." type="dots"/>
        </div>
      </div>

      <div>
        <h2>Progress 测试</h2>
        <lin-progress :percentage="30" />
        <lin-progress :percentage="70" status="success" />
        <lin-progress :percentage="45" type="circle" />
        <lin-progress :percentage="80" color="skyblue" />
      </div>

      <div>
        <h2>Timeline 测试</h2>
        <lin-timeline>
          <lin-timeline-item timestamp="2024-01-01">项目启动</lin-timeline-item>
          <lin-timeline-item timestamp="2024-01-02" type="success">完成需求</lin-timeline-item>
          <lin-timeline-item timestamp="2024-01-03" icon="check">发布上线</lin-timeline-item>
        </lin-timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LinButton, LinIcon, LinInput, LinLink, LinAvatar, LinCard, LinCarousel, LinTag, LinDropdown, LinWarning } from '../index'
import { LinLoading, LinMessage, LinNotification, LinProgress, LinTimeline,  LinTimelineItem } from '../index'

LinMessage.info('这是提示信息')
LinNotification.success('这是成功提示')

const inputValue = ref('')

// Carousel 相关数据
const imageItems = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'
]

const customItems = [
  {
    title: '功能丰富',
    content: '支持多种轮播效果和交互方式',
    color: '#FF6B6B'
  },
  {
    title: '响应式设计',
    content: '完美适配各种屏幕尺寸',
    color: '#4ECDC4'
  },
  {
    title: '易于使用',
    content: '提供丰富的配置项和自定义插槽',
    color: '#45B7D1'
  }
]
</script>

<style scoped>
.loading-demo-simple {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.loading-demo-simple :deep(.my-loading) {
  position: relative !important;
  width: 120px;
  height: 120px;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin: 40px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.demo-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-avatars {
  display: flex;
  gap: 24px;
  align-items: center;
}

/* Carousel 演示样式 */
.carousel-demo {
  padding: 24px 0;
}

.carousel-demo .demo-section {
  margin-bottom: 48px;
}

.carousel-demo .demo-section h3 {
  margin-bottom: 16px;
  color: var(--my-color-gray-6);
}

.demo-carousel {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 40px;
}

.custom-slide h3 {
  font-size: 32px;
  margin-bottom: 16px;
  color: white;
}

.custom-slide p {
  font-size: 18px;
  margin-bottom: 24px;
}

.slide-index {
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}

.custom-arrow {
  font-size: 24px;
}

.controls span {
  padding: 8px 16px;
  background: white;
  border-radius: 4px;
  font-weight: 500;
}
</style>
