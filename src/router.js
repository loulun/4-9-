import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Three from './views/Three.vue'
import Quanxin from './views/Quanxin.vue'
import Dongtai from './views/Dongtai.vue'
import Lianxi from './views/Lianxi.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    },
    {
      path: '/quanxin',
      name: 'quanxin',
      component: Quanxin
    },
    {
      path: '/dongtai',
      name: 'dongtai',
      component: Dongtai
    },
    {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    }
  ]
})
