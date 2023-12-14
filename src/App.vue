<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from "@/components/footer.vue";
import Nav from "@/components/nav.vue";

export default {
  name: "App",
  components: { Footer, Nav },
};
</script>