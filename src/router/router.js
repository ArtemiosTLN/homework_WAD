import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts";
import APost from "../views/APost";
import AddPost from "../views/AddPost";
import Contacts from "../views/Contacts";
import LogIn from "../views/LogIn.vue";

const routes = [{
        path: '/',
        name: 'LogIn',
        component: () => import('../views/LogIn')
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
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
    { //will route to AllPosts view if none of the previous routes apply
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