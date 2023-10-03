import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vuelidate from 'vuelidate'

axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
    response => response,
    (error) => {
        return Promise.reject(error)
    }
)

const app = createApp(App);
app.use(Vuelidate);
app.use(router);
app.mount('#app');