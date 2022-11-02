import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?:boolean
}

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/optionsApi',
            hidden:true,
            component: () => import('../views/OptionsApi.vue')
        },
        {
            path: '/compositionApi',
            component: () => import('../views/CompositionApi.vue')
        }
    ]
})