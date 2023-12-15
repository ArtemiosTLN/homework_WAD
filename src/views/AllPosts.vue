<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <a :href="'/api/apost/' + post.id">
      <div class='info'>
        <img src="../components/icons/My_picture.png" class="avatar">
        <div class="date">{{ post.date }}</div>        
        <div>{{ post.author }}</div>
      </div>
      <div class="content">{{ post.content }}</div>
      <img class="image" src="{{ post.image }}">
      <component :is="LikeButton" :likes="post.likes" />
    </a>
  </div>
</template>


<script>
import { LikeButton } from '@/components/LikeButton'
export default {
  name: "AllPosts",
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