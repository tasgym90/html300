import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _532905b6 = () => interopDefault(import('../pages/page2.vue' /* webpackChunkName: "pages/page2" */))
const _53371d37 = () => interopDefault(import('../pages/page3.vue' /* webpackChunkName: "pages/page3" */))
const _534534b8 = () => interopDefault(import('../pages/page4.vue' /* webpackChunkName: "pages/page4" */))
const _1e3e00f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _532905b6,
    name: "page2"
  }, {
    path: "/page3",
    component: _53371d37,
    name: "page3"
  }, {
    path: "/page4",
    component: _534534b8,
    name: "page4"
  }, {
    path: "/",
    component: _1e3e00f6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
