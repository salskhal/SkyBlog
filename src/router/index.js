import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from "../views/BlogView.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Forgotten from "../views/ForgotPassword.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: BlogView,
      meta: {
        title: "Blogs"
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: "Login"
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: "Register"
      }
    },
    {
      path: '/forgotten',
      name: 'Forgot',
      component: Forgotten,
      meta: {
        title: "Forgotten Password"
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `SkyBlog | ${to.meta.title}`
  next()
})

export default router
