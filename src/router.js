import {createRouter, createWebHistory} from 'vue-router';

import SignIn from "./views/SignIn.vue";
import SignInBackground from "@/components/SignInBackground.vue";
import Messages from "@/views/Messages.vue";

const routes = [
    {
        path: '/signin',
        name: "signIn",
        component: SignIn,
    },
    {
        path: '/messages',
        name: "messages",
        component: Messages,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;