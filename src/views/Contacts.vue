<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <h2>Authors of this website</h2>
        <li><p>Artjom Šiškov</p></li>
        <li><p>Artemi Sotskov</p></li>
        <li><p>Markus Hausenberg</p></li>
      </div>
    </div>
  </div>
</template>

<script>
import Headercomp from "@/App";
import FooterComp from "@/App";

export default {
  name: "Contacts",
  components: {FooterComp, Headercomp}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>