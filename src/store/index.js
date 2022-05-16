import { createStore } from 'vuex'

// 动态加载modules
const modules = {}
const files = require.context('./modules', true, /index\.js$/)
files.keys().map((key) => {
  const moduleName = key.replace('./', '').replace('/index.js', '')
  const module = files(key)
  modules[moduleName] = module.default
})
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules
})
export default store
