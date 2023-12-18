import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import Contacts from "../views/Contacts.vue";
import SinglePost from '../views/SinglePost.vue'

const routes = [{
        path: '/',
        name: 'LogIn',
        component: () => import('../views/LogIn.vue')
    },
    {
        path: "/api/contacts",
        name: "Contacts",
        component: Contacts
    },
    {
        path: "/api/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/singlepost/:id",
        name: "SinglePost",
        component: SinglePost,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/:catchAll(.*)",
        name: "LogIn",
        component: LogIn,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router