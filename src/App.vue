<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: { Footer, Nav },
};
</script>