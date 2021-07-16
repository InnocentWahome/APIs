import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../components/Burgers.vue'
import Posts from '../components/Posts.vue'
import Repos from '../components/Repos.vue'
import getBurger from '../components/getBurger.vue'
import SearchDisplay from '../components/SearchDisplay.vue'
import SearchRepo from '../components/SearchRepo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/burgers',
    name: 'Burgers',
    component: Burgers
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/repos',
    name: 'Repos',
    component: Repos
  },
  {
    path: '/getburger',
    name: 'getBurger',
    component: getBurger
  },
  {
    path: '/search',
    name: 'SearchDisplay',
    component: SearchDisplay
  },
  {
    path: '/searchrepo',
    name: 'SearchRepo',
    component: SearchRepo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
