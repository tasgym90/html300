import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59654f9a = () => interopDefault(import('../pages/page2.vue' /* webpackChunkName: "pages/page2" */))
const _5973671b = () => interopDefault(import('../pages/page3.vue' /* webpackChunkName: "pages/page3" */))
const _59817e9c = () => interopDefault(import('../pages/page4.vue' /* webpackChunkName: "pages/page4" */))
const _11c56d2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page2",
    component: _59654f9a,
    name: "page2"
  }, {
    path: "/page3",
    component: _5973671b,
    name: "page3"
  }, {
    path: "/page4",
    component: _59817e9c,
    name: "page4"
  }, {
    path: "/",
    component: _11c56d2e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
