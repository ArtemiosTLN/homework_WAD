<template>
    <div class="Single Post">
    <div id="form">
      <h3>Add Post</h3>
      <label for="author">Author: </label>
      <input name="type" type="text" id="author" required v-model="post.author" />
      <label for="content">Content: </label>
      <textarea id="content" required v-model="post.content" style="width: 300px; height: 400px;">Content</textarea>
      <label for="image">Image URL: </label>
      <input name="image" type="text" id="image" required v-model="post.image" />
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        date: new Date().toISOString(),
        author: "",
        content: "",
        image: ""
      },
    };
  },
  methods: {
    addPost() {
      console.log("Here now")
      var data = {
        date: this.post.date,
        author: this.post.author,
        content: this.post.content,
        image: this.post.image,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
      })
      this.$router.push("/api/allposts")
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.addpost {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  background-color: lightcyan;
  border: 4px solid teal;
  padding: 20px;
  max-width: 400px;
  align-items: center;
  border-radius: 40px;
}
.textarea {
  display: flex;
  margin: 20px;
}
.form {
  display: flex;
  margin: 20px;
}
.create_post {
  width: 100px;
}
.login-inputs {
  text-align: center;
}
.post-creation{
  text-align: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  background-color: lightcyan;
  border: 4px solid teal;
  padding: 20px;
  max-width: 400px;
  align-items: center;
  border-radius: 40px;
}
</style>