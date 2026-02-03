import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { gsap } from 'gsap'
// import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import '@mdi/font/css/materialdesignicons.css'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const app = createApp(App)
app.use(vuetify)
iconfont: 'mdi',
// app.use(router)
app.mount('#app')