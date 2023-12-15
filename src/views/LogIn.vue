<script setup>
function validatePassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/g;
  const numericRegex = /\d/;
  const startsWithUppercase = /^[A-Z]/;
  const includesUnderscore = /_/;
  const lowercaseMatches = password.match(lowercaseRegex);
  const lowercaseCount = lowercaseMatches ? lowercaseMatches.length : 0;

  if (password.length < 8 || password.length > 15) {
    alert("Salasõna peab olema vähemalt 8 tähte pikk, aga mitte pikem kui 15 tähte");
    return false;
  }
  if (!uppercaseRegex.test(password)) {
    alert("Salasõna peab sisaldama vähemalt ühte suurt tähte");
    return false;
  }

  if (lowercaseCount < 2) {
    alert("Salasõna peab sisaldama vähemalt kahte väikest tähte");
    return false;
  }

  if (!numericRegex.test(password)) {
    alert("Salasõna peab sisaldama numbrit");
    return false;
  }

  if (!startsWithUppercase.test(password)) {
    alert("Salasõna peab algama suure tähega!");
    return false;
  }

  if (!includesUnderscore.test(password)) {
    alert("Salasõna peab sisaldama _ (underscore)");
    return false;
  }
  return true;
}
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

<template>
  <div class="post-creation">
    <form action="index.html" method="post" enctype="multipart/form-data" class="login-form" onsubmit="return validatePassword()">
      <div class="login-content">
        <p>Welcome to PostIT </p>
        <p class="special_font">Create an Account</p>
        <p>or</p>
        <p>Please Log In</p>
      </div>
      <div class="login-inputs">
        <input type="email" id="email" name="email" required placeholder="Email">
        <input type="password" id="password" name="password" required placeholder="Password">
        <p></p>
        <div class="button-container">
          <button type="submit">Log In</button>
        </div>
        <p class="special_font">Forgot Password</p>
      </div>
    </form>
  </div>
</template>

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