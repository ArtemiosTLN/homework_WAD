import { createRouter, createWebHistory } from 'vue-router'
import posts from '../views/posts.vue'
import addPost from '../views/addPost.vue'

const routes = [{
    path: '/',
    name: 'posts',
    component: () =>
        import ("../views/posts.vue")
},
    {
        path: "/api/allposts",
        name: "posts",
        component: posts,
    },
    {
        path: "/api/addpost",
        name: "addPost",
        component: addPost,
    },
    {
        path: "/:catchAll(.*)",
        name: "posts",
        component: posts,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router