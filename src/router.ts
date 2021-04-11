import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import SwitchDemo from './components/SwitchDemo.vue'

import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home, },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'switch', component: SwitchDemo }
      ]
    },
  ]
})

router.afterEach((to, from) => {
  console.info('路由切换了', from.fullPath + ' -----> ' + to.fullPath)

})

export default router
