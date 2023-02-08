import { createRouter, createWebHistory } from 'vue-router'
import Callback from '../views/Callback.vue'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import Followers from '../views/Followers.vue'
import Followings from '../views/Followings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/callback/:provider',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:username',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/:username/followers',
      name: 'followers',
      component: Followers,
    },
    {
      path: '/:username/followings',
      name: 'followings',
      component: Followings,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
