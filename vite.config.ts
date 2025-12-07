import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import inspect from 'vite-plugin-inspect'

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
