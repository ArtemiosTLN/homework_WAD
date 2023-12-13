import App from "@/components/vue_nav.vue";
import { createApp } from 'vue'
import vue_nav from '@/components/vue_nav.vue'

const nav = createApp(App)

nav.component('vue-nav', vue_nav)

nav.mount('#footer')