<template>
  <div class="Single Post">
    <div id="form">
      <h3>A Post</h3>
      <label for="author">Author: </label>
      <input name="type" type="text" id="author" required v-model="post.author" />
      <label for="content">Content: </label>
      <textarea id="content" required v-model="post.content" style="width: 300px; height: 400px;">Content</textarea>
      <label for="image">Image URL: </label>
      <input name="image" type="text" id="image" required v-model="post.image" />
    </div>
    <div class="container">
      <button @click="updatePost" class="updatePost">Update Post</button>
      <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  data() {
    return {
      post: {
        id: "",
        date: "",
        author: "",
        content: "",
        image: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
        this.post.date = new Date().toISOString();
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.post),
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/api/allposts");
        })
        .catch((e) => {
            console.log(e);
        });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
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
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>

</style>