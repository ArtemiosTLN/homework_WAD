import '@/assets/style.css'
import App from "@/components/footer.vue";
//import store from "./store/store.js";
import { createApp } from 'vue'
import vue_footer from '@/components/vue_footer.vue'

const footer = createApp(App)

footer.component('footer', footer)

footer.mount('#footer')