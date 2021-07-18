import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home';
import Login from "@/components/Login";
import Register from "@/components/Register";
//lazy loaded
const Profile = () => import("./components/Profile")
const BoardAdmin = () => import("./components/BoardAdmin")
const BoardModerator = () => import("./components/BoardModerator")
const BoardUser = () => import("./components/BoardUser")

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path: "/mod",
        name: "moderator",
        // lazy-loaded
        component: BoardModerator,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) =>{
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequired && !loggedIn){
        next('/login')
    } else{
        next();
    }
})

export default router;