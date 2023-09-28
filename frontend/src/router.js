import { Router } from 'vue-router';
import Vue from 'vue';
import LoginPage from "./pages/LoginPage.vue";

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[{
        path: '/login',
        name: LoginPage,
        component: LoginPage
    }],
})
