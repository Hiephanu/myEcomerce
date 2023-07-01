import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router/router'
import './assets/style/index.css'
import mainLayout from './layout/mainLayout.vue'
import authLayout from './layout/authLayout.vue'
import productLayout from './layout/productLayout.vue'

import '@/assets/style/global.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import VueSplide from '@splidejs/vue-splide';

const app= createApp(App)
app.use(router)
app.mount('#app')
app.use(store)
app.use(VueSplide)
app.component('mainLayout',mainLayout)
app.component('authLayout',authLayout)
app.component('productLayout',productLayout)

library.add(fas)


app.component('font-awesome-icon', FontAwesomeIcon);
