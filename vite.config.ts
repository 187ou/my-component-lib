import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import inspect from 'vite-plugin-inspect'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test'

  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        cleanVueFileName: true,
        outDir: 'dist',
        copyDtsFiles: true,
        include: ['src/**/*'],
        exclude: ['src/**/*.test.ts']
      }),
      createSvgIconsPlugin({
        // 指定 SVG 图标目录
        iconDirs: [resolve(__dirname, 'src/assets/icons')],
        // 指定 symbolId 格式（用于 Icon 组件引用）
        symbolId: 'icon-[name]',
        // 注入到页面的 ID（默认：__svg__icons__dom__）
        inject: 'body-first',
        // 是否压缩 SVG
        svgoOptions: {
          plugins: [
            {
              name: 'removeAttrs',
              params: { attrs: ['fill'] }
            }
          ]
        }
      }),
      inspect()
    ],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
      conditions: ['module']
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'MyComponentLib',
        fileName: (format) => `my-component-lib.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: { vue: 'Vue' },
          exports: 'named'
        }
      },
      outDir: 'dist',
      sourcemap: true,
      minify: 'terser',
      cssCodeSplit: false,
      emptyOutDir: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000
    },
    server: {
      port: 3000,
      open: true
    },
    ...(isTest
      ? {
        test: {
          environment: 'jsdom',
          include: ['src/**/*.test.ts'],
          alias: { '@': resolve(__dirname, 'src') },
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          coverage: {
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.{vue,ts}'],
            exclude: ['src/**/*.d.ts', 'src/index.ts']
          }
        }
      }
      : {})
  }
})
