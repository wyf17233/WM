import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
export default({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  server:{
    //启动默认打开浏览器
    open:true,
    //主机
    host:"localhost",
    //端口
    port:3001,
    //本地代理
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:3000',
    //     changeOrigin:true,
    //     rewrite(path){
    //       return path.replace(/^\/api/,'')
    //     }
    //   }
    // }
  }
})
