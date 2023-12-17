<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {Footer, Nav},
};
</script>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}
body {
  line-height: 1.6;
  margin: 0;
}
.info{
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
}
.avatar {
  width: 100px !important;
  height: 64.51px !important;
  text-align: left;
  max-width: 80px;
  height: 100%;
}
.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  color: #34495e;
  text-decoration: none;
}
.logo {
  margin: 7px;
  max-width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  width: 100%;
  padding-top: .5em;
  padding-bottom: .1em;
  border: 1px solid #646174;
  background-color: #a2ccea;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.nav {
  margin-top: 5px;
}

.nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #34495e;
  font-size: .99em;
}

.nav a:hover {
  background-color: #7ebeb6;
  color: #092747;
}

@media (min-width: 5px) {
  .header,
  .nav {
    display: flex;
  }
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
.date {
  text-align: right;
  font-size: 15px;
  padding-bottom: 10px;
}
.image {
  max-width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: 30px;
}
.post {
  display: block;
  padding-top: 10px;
  padding-bottom: 1px;
  padding-right: 50px;
  padding-left: 50px;
  background: lightcyan;
  border: 4px solid teal;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  max-width: 700px;
}
.content {
  font-size: 25px;
  text-align: center;
}
.button {
  width: 100px;
  height: 100px;

  max-width: 100%;
  height: 100%;
}
footer p {
  text-align: center;
  font-family: "Lucida Calligraphy", serif;
}
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

textarea {
  resize: none;
}
.dropdown {
  position: relative;
}
.dropdown-content {
  position: absolute;
  background-color: #e0fffe;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  right: 50px;
  width: 250px;
  border: 4px solid teal;
  opacity: 0;
}

.dropdown > .logo:focus + .dropdown-content {
  opacity: 1;
}
.logout {
  border: cadetblue;
  color: cornflowerblue;
  padding: 15px 15px;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 0;
}
.logout:hover {
  background-color: #7ebeb6;
  color: #092747;
}
.buttons {
  border: cadetblue;
  color: cornflowerblue;
  padding: 15px 15px;
  align-items: flex-start;
  display: table-row;
  font-size: 18px;
  justify-items: center;
  margin-right: auto;
  margin-left: auto;
  gap: 10px;
}
.buttons:hover {
  background-color: #7ebeb6;
  color: #092747;
}
</style>
