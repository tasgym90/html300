import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Home', component: Home, name: "Home"},
    { path: '/Page2', component: Page2, name: "Food"},
    { path: '/Page3', component: Page3, name: "Page3"},
    { path: '/Page4', component: Page4, name: "Places"}
  ],
  mode: 'history'
})
