import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/pages/MainPage"),
    children: [
      {
        path: "/home-page",
        name: "homePage",
        component: () => import("@/pages/HomePage"),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
