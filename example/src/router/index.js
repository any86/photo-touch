import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PhotoTouch',
    component: () => import(/* webpackChunkName: "PhotoTouch" */ '../views/PhotoTouch.vue')
  },
  {
    path: '/merge',
    name: 'Merge',
    component: () => import(/* webpackChunkName: "Merge" */ '../views/Merge.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
  },
  {
    path: '/crop',
    name: 'Crop',
    component: () => import(/* webpackChunkName: "Crop" */ '../views/Crop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
