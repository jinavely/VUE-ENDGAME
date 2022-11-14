import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import SignUpPage from '../pages/SignUpPage.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: LoginPage,
        },
        {
            path: '/signup',
            component: SignUpPage,
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});
