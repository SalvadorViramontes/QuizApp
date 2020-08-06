import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Options from '../views/Options.vue'
import Quiz from '../views/Quiz.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/options',
    name: 'Options',
    component: Options,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  { 
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((toRoute, _fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'QuizApp';
  next();
})

export default router