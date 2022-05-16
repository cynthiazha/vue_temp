const Login = () => import(/*webpackChunkName:'login' */ './login.vue')
export default {
  path: '/login',
  name: 'login',
  component: Login,
  children: []
}
