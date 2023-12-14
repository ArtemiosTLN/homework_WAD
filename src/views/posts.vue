<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div class="info">
      <img src="res/png/My_picture.png" class="avatar">
      <div class="date">{{ post.date }}</div>
      <div>{{ post.author }}</div>
    </div>
    <div class="content">{{ post.content }}</div>

    <component :is="likeButton" :likes="post.likes" />
  </div>
</template>


<script>
import { likeButton } from '../components/likeButton.vue';
export default {
  name: "posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};

</script>