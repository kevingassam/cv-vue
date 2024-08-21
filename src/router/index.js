import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InformationView from '../views/InformationView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { 
        hideMenu: true,
        title: 'Login',
       },

    },
    {
      path: '/informations',
      name: 'informations',
      component: InformationView,
      meta: { title: 'Informations' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue App';
  next();
});



export default router
