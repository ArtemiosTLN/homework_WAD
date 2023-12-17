<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="author">Author: </label>
    <input name="author" type="text" id="author" required v-model="post.author" />
    <label for="content">Content: </label>
    <input name="content" type="text" id="content" required v-model="post.content" />
    <button @click="addPost" class="addPost">Add Post</button>
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