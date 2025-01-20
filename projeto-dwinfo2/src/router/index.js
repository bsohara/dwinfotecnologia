import { createRouter, createWebHistory } from 'vue-router'
import DWInfoLogin from '@/view/DWInfoLogin.vue'


const routes = [
    {
        path: '/login',
        name: 'login',
        component: DWInfoLogin
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router