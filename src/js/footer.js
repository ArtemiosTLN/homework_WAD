import App from "/src/components/vue_footer.vue";
import vue_footer from '/src/components/vue_footer.vue'

const footer = createApp(App)

footer.component('vue-footer', vue_footer)

footer.mount('#footer')