import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";

const router = createRouter({
    history: createWebHistory(),
    //base: process.env.BASE_URL,
    routes:[
        {
            path: '/login',
            name: LoginPage,
            component: LoginPage
        },
        {
            path: '/register',
            name: RegisterPage,
            component: RegisterPage
        }
    ],
});

export default router;
