import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  // user routing
  {path: '/', name: 'home', component: page('index.vue')},
  {path: '/login', name: 'login', component: page('login.vue')},

];


export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}
