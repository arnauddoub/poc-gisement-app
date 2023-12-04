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
import ProgressBar from 'primevue/progressbar'
import Dialog from 'primevue/dialog'
import AutoComplete from 'primevue/autocomplete'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'

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
app.component('ProgressBar', ProgressBar)
app.component('Dialog', Dialog)
app.component('AutoComplete', AutoComplete)
app.component('Dropdown', Dropdown)
app.component('InputNumber', InputNumber)
app.component('InputText', InputText)

app.mount('#app')
