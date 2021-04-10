import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/hello-world', component: HelloWorld, }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
