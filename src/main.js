import './assets/style.css'
import App from "./App.vue";
//import store from "./store/store.js";
//import { createApp } from 'vue'

import vue_footer from './components/vue_footer.vue'

const app = createApp(App)


app.component('vue-footer', vue_footer)

app.mount('#app')

/*new Vue({
    render: (h) => h(App),
    store, // подключение Vuex к приложени
}).$mount("#app");*/