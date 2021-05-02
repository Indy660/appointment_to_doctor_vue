import Vue from 'vue'
import VueRouter from 'vue-router'
import MainForm from '../views/MainForm.vue'
import SuccessForm from '../views/SuccessForm.vue'
import ErrorForm from '../views/ErrorForm.vue'

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainForm',
            component: MainForm
        },
        {
            path: '/success',
            name: 'Success',
            component: SuccessForm,
            props: true
        },
        {
            path: '/error',
            name: 'Error',
            component: ErrorForm
        }
    ]
});

export default router
