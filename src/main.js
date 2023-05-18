import vClickOutside from "click-outside-vue3"
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(router)
app.use(vClickOutside)

app.mount('#app')
