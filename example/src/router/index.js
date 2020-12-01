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
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "Map" */ '../views/Map.vue')
  },
  {
    path: '/merge',
    name: 'Merge',
    component: () => import(/* webpackChunkName: "Merge" */ '../views/Merge.vue')
  },

  {
    path: '/merge-0',
    name: 'Merge0',
    component: () => import(/* webpackChunkName: "Merge" */ '../views/Merge0.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
  },

  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "Table" */ '../views/Table.vue')
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
