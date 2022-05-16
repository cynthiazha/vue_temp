import { createRouter, createWebHistory } from 'vue-router'
// 获取路由信息
// 动态加载views中的所有路由文件
const files = require.context('@/views', true, /router\.js$/)
const routes = files.keys().map((key) => {
  // const page = require('@/views' + key.replace('.', ''))
  const page = files(key)
  /*
    使用require.context返回的resolve方法，不用使用如require那般做地址处理
    因为在files这个返回的函数内部的代码已经对地址做了处理，然后在调用require()方法
   */
  return page.default
})
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
