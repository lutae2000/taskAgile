import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";
import axios from "axios";
import bootstrap from 'bootstrap'

axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
    response => response,
    (error) => {
        return Promise.reject(error)
    }
)

const app = createApp(App);
app.use(bootstrap);
app.use(router);
app.mount('#app');