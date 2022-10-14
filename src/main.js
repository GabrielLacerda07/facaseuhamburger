import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from "vue-sweetalert2"; //importa a lib
import "sweetalert2/dist/sweetalert2.min.css"; //configura css
import { library } from '@fortawesome/fontawesome-svg-core'//Adiionando fontAwesome
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'//Adicionando icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowDown)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(VueSweetalert2)
.mount('#app')
