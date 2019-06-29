import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// routers
import Home from '@/pages/Home/route'
import Songs from '@/pages/Songs/route'

const router = new Router({
  routes: [
    Home,
    Songs
  ]
})

export default router