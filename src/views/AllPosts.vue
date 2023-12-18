<template>
  <button @click="Logout" class="button">Logout</button>
  <div class="post" v-for="post in posts" :key="post.id">
    <a :href="'/api/singlepost/' + post.id">
      <div class="info">
        <img src="../components/icons/My_picture.png" class="avatar">
        <div class="date">{{ formatDate(post.date) }}</div>        
        <div>{{ post.author }}</div>
      </div>
      <div class="content">{{ post.content }}</div>
      <img class="image" v-if="post.image" src="{{ post.image }}">
      <component :is="LikeButton" :likes="post.likes" />
    </a>
  </div>
  <div class="con">
    <button @click="DeleteAll" class="button">Delete All</button>
    <button @click="this.$router.push('/api/addpost')" class="button">Add Post</button>
  </div>
</template>


<script>
import moment from 'moment'
import LikeButton from '@/components/likeButton.vue'
export default {
  name: "AllPosts",
  computed: {
    LikeButton() {
      return LikeButton
    }
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    DeleteAll() {
      fetch(`http://localhost:3000/api/posts`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/api/allposts");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/api/login");
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
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};

</script>