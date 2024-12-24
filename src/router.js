import {createRouter, createWebHistory} from 'vue-router';

import SignIn from "./views/SignIn.vue";
import Messages from "@/views/Messages.vue";
import SignUp from "@/views/SignUp.vue";
import axios from "axios";

const routes = [
    {
        path: '/signin',
        name: "signIn",
        component: SignIn,
        meta:{requiresAuth: false},
    },
    {
        path: '/messages',
        name: "messages",
        component: Messages,
        meta:{requiresAuth: true},
    },
    {
        path: '/signup',
        name: "signUp",
        component: SignUp,
        meta:{requiresAuth: false},
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("token");
    if (to.meta.requiresAuth && !token) {
        next("/signin");
    } else if (to.meta.requiresAuth && token) {
        try {
            await axios.get("http://localhost:8080/api/v1/auth/validate", {
                headers: { Authorization: token },
            });
            next();
        } catch {
            localStorage.removeItem("token");
            next("/signin");
        }
    } else {
        next();
    }
});

export default router;