import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from "@/views/Login";
import Register from "@/views/Register";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            //lazy loaded
            component:() => import('./views/Profile')
        },
        {
            path: '/admin',
            name: 'admin',
            //lazy loaded
            component:() => import('./views/BoardAdmin')
        },
        {
            path: '/mod',
            name: 'moderator',
            //lazy loaded
            component:() => import('./views/BoardModerator')
        },
        {
            path: '/user',
            name: 'user',
            //lazy loaded
            component:() => import('./views/BoardUser')
        }
    ]
})