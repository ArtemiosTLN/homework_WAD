<template>
  <button @click="Logout" class="button">Logout</button>
  <div class="post" v-for="post in posts" :key="post.id">
    <a :href="'/api/apost/' + post.id">
      <div class='info'>
        <img src="../components/icons/My_picture.png" class="avatar">
        <div class="date">{{ post.date }}</div>        
        <div>{{ post.author }}</div>
      </div>
      <div class="content">{{ post.content }}</div>
      <img class="image" src="{{ post.image }}">
      <component :is="likeButton" :likes="post.likes" />
    </a>
  </div>
  <div class="con">
    <button @click="DeleteAll" class="button">Delete All</button>
    <button @click="this.$router.push('/api/addpost')" class="button">Add Post</button>
  </div>
</template>


<script>
import likeButton from '@/components/likeButton.vue'
export default {
  name: "AllPosts",
  computed: {
    likeButton() {
      return likeButton
    }
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            this.$router.push("/login");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
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