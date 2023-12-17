<template>
  <div class="post-creation">
    <div class="login-content">
      <p>Welcome to PostIT </p>
      <p class="special_font"><router-link to="/api/signup">Create an Account</router-link></p>
      <p>or</p>
      <p>Please Log In</p>
    </div>
    <div class="login-inputs">
      <input type="email" id="email" name="email" required placeholder="Email">
      <input type="password" id="password" name="password" required placeholder="Password">
      <p></p>
      <div class="button-container">
        <button class="button" @click="LogIn">Log In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            location.assign("/api/allposts");
            this.$router.push("/api/allposts")
          })
          .catch((e) => {
            console.log(e);
            this.errMsg = 'Account does not exist';
            console.log("error");
          });
    },
  },
}
</script>

<style scoped>
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