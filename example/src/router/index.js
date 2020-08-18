import { createRouter,createWebHashHistory, createWebHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes
})

export default router
