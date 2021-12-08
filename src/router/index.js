import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import Newnav from '../components/Newnav.vue'
import About from '../components/About.vue'
import Courses from '../components/Courses.vue'
import Testimonial from '../components/Testimonial.vue'
import Session from '../components/Session.vue'
import Footer from '../components/Footer.vue'
import Memory from '../components/Memory.vue'
import Attention from '../components/Attention.vue'
import Speed from '../components/Speed.vue'
import Purpose from '../components/Purpose.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/banner',
    name: 'Banner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Banner.vue')
    }
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/newnav',
    name: 'Newnav',
    component: Newnav
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: Testimonial
  },
  {
    path: '/session',
    name: 'Session',
    component: Session
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/memory',
    name: 'Memory',
    component: Memory
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention
  },
  {
    path: '/speed',
    name: 'Speed',
    component: Speed
  },
  {
    path: '/purpose',
    name: 'Purpose',
    component: Purpose
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
