import path from 'path'
import { defineConfig,loadEnv,splitVendorChunkPlugin } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteRequireContext from "@originjs/vite-plugin-require-context";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock';
// let serveTarget =  process.env.ENV === "production" ?`https://xxxxxxxx.com` : `https://testxxxxxxxx.com`  //服务跨域使用
const config = defineConfig({
  base: './', // 设置打包路径
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      // "~": `${path.resolve(__dirname, 'node_modules/')}`,
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    dedupe: ['vue-demi'],
  },
  build: {
    minify: true
  },
  define: { 'process.env': process.env },
  plugins: [
    viteMockServe({
      mockPath: 'mock',
      injectCode: `
        import { setupMockServer } from '../mock';
        setupMockServer();
      `,
    }),
    splitVendorChunkPlugin(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
      // 指定symbolId格式
    }),
    Vue2({
      jsx: true
    }),
    ViteRequireContext(),
    ScriptSetup({
      reactivityTransform: true
    }),
    Components(),
    AutoImport({
      imports: [
        '@vue/composition-api',
        '@vueuse/core',
        {
          '@/jstest': [
            // named imports
            'newjstest', // import { useMouse } from '@vueuse/core',
          ],
        }
      ]
    }),
  ],
  server: {
    port: 3333,
    // proxy: {
    //   // 选项写法
    //   '/jianzhu': {
    //     target: serveTarget,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/jianzhu/, '/jianzhu')
    //   },
    //   '/profile': {
    //     target: serveTarget,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/profile/, '/profile')
    //   },
    // }
  },
})
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env };
  console.log("bbbbbbbbbbbbb",process.env)
  return config
};

