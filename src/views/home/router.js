const Home = () => import(/*webpackChunkName:'home'*/ './home.vue')
export default {
  path: '/home',
  name: 'home',
  component: Home,
  children: []
}
