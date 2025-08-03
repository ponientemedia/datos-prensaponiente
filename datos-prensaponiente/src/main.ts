import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


// 1) Importa Vuetify y sus estilos
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// 2) Crea la instancia de Vuetify
const vuetify = createVuetify({
  components,
  directives,
  // aquí puedes extender tu tema si quieres…
})

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.use(vuetify) 
app.mount('#app')
