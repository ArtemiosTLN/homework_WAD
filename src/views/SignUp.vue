<template>
  <div class="form">
    <h1>SignUp</h1>
    <p>Create an account for PostIT!</p>
    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required v-model="password">
    <div v-if="errMsg">{{ errMsg }}</div>
    <button @click="SignUp" class="button">SignUp</button>
    <button @click="this.$router.push('/api/login')" class="button">Back to login</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      email: '',
      password: '',
      errMsg: '',
    }
  },
  watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
    validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      } else {
        this.errMsg = ''
      }
    },
    SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
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
            this.$router.push("/api/login")
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
}
</script>

<style scoped>

</style>