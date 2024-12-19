import {createRouter, createWebHistory} from 'vue-router';

import SignIn from "./views/SignIn.vue";

const routes = [
    {
        path: '/signin',
        name: "signIn",
        component: SignIn,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;