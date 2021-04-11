import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

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
        { path: '', component: DocDemo, },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
  ]
})

router.afterEach((to, from) => {
  console.info('路由切换了', from.fullPath + ' -----> ' + to.fullPath)

})

export default router
