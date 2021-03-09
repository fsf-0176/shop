import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/trolley',
    name: 'Trolley',
    component: () => import('../views/Trolley.vue')
  },
  {
    path: '/track',
    name: 'Track',
    component: () => import('../views/Track.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: () => import('../views/OrderDetail.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/product-detail/:id(\\d+)',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
