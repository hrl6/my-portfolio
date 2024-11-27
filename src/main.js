import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { slideIn } from './directives/slideIn'
import { slideUp } from './directives/slideUp'
import { fadeIn } from './directives/fadeIn'

const app = createApp(App)
app.use(router)
app.directive('slide-in', slideIn)
app.directive('slide-up', slideUp)
app.directive('fade-in', fadeIn)
app.mount('#app')
