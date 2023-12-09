import {store} from "../store/store.js";
import LikeButton from "../components/vue_like_button.js";

<template>
    <div class="post" v-for="post in posts" :key="post.id">
    <div class="info">
    <img src="res/png/My_picture.png" class="avatar">
    <div class="date">{{ post.date }}</div>
    <div>{{ post.author }}</div>
</div>
<div class="content">{{ post.content }}</div>
      <div>
      <Likebuttoncomponent></Likebuttoncomponent>
      </div>
</div>
</template>
    `,
    computed: {
        posts() {
          return store.getters.getPosts
        },
    },
});
;