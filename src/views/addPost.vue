<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="author">Author: </label>
    <input name="author" type="text" id="author" required v-model="post.author" />
    <label for="content">Content: </label>
    <input name="content" type="text" id="content" required v-model="post.content" />
    <label for="image">Image URL: </label>
    <input name="image"  type="text" id="image" required v-model="post.image"/>
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "addPost",
  data() {
    return {
      post: {
        date: "",
        author: "",
        content: "",
        image: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        date: new Date().toISOString().replace(/T.*/, "").replace(/Z/g, ""),
        author: this.post.author,
        content: this.post.content,
        image: this.post.image,
      };
      fetch("http://localhost:3000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/api/allposts");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
};
</script>