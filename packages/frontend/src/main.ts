import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primeicons/primeicons.css'
import '@/styles/main.css'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Tailwind from 'primevue/passthrough/tailwind'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true, unstyled: true, pt: Tailwind })

app.component('Avatar', Avatar)
app.component('Button', Button)

app.mount('#app')
