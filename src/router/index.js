import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ContactView from '../views/ContactView.vue'
import ProfileView from '../views/ProfileView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderView from '../views/OrderView.vue'
import FavoriteView from '../views/FavoriteView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:HomeView
    },
    {
      path: '/products',
      name: 'products',
      component:ProductView
    },
    {
      path: '/contact',
      name: 'contact',
      component:ContactView
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component:SignupView
    },
    {
      path: '/profile',
      name: 'profile',
      component:ProfileView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component:CheckoutView
    },
    {
      path: '/my-order',
      name: 'myorder',
      component:OrderView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component:FavoriteView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
