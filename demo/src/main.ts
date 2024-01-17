import { createApp } from 'vue'
import VueSelect from '@/index'
import App from './app.vue' // must be imported after VueSelect
import router from './router'
import '@/css/vue-select.css'
import './assets/style.css'

const app = createApp(App)
app.use(router)

app.component('VSelect', VueSelect)

app.mount('#app')
