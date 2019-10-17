import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import complet from '@/components/completed.vue'
import hello from '@/components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'default',
    path: '/',
    redirect: { name: 'hello' }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/complet',
        name: 'complet',
        component: complet
      },
      {
        path: '/hello',
        name: 'hello',
        component: hello
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
