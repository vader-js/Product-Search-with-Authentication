import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import {auth} from '../firebase/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import("../components/LoginForm.vue")
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import("../components/RegisterForm.vue")
        }
      ],
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    }
   
  ]
 
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
  } else if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
  }else{
  next();
  }
})


export default router
