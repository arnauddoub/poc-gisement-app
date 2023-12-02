import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { designSystem } from './styles/design-system'

import 'primeicons/primeicons.css'
import '@/styles/main.scss'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import TabMenu from 'primevue/tabmenu'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true, unstyled: true, pt: designSystem })

app.component('Avatar', Avatar)
app.component('Button', Button)
app.component('Card', Card)
app.component('Tag', Tag)
app.component('TabMenu', TabMenu)

app.mount('#app')
