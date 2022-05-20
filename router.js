import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  // user routing
  {path: '/', name: 'home', component: page('home.vue')},
  {path: '/login', name: 'login', component: page('login.vue')},
  {path: '/register', name: 'register', component: page('register.vue')},
  {path: '/about', name: 'about', component: page('about.vue')},

  {path: '/test', name: 'test', component: page('test.vue')},


];


export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}
