<template>
    <img src="./icons/heart_button.png" alt="Like" @click="incrementLikes">
    <span>{{ likes }}</span>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    incrementLikes() {
      this.likes++;
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  border: none;
}
</style>