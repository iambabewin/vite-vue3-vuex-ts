import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue'),
            meta:{
                title:'主页',
                icon:'el-icon-document',
            }
        },
        {
            path: '/optionsApi',
            hidden: true,
            component: () => import('../views/OptionsApi.vue')
        },
        {
            path: '/compositionApi',
            component: () => import('../views/CompositionApi.vue')
        }
    ] as AppRouteRecordRaw[]
})

// 路由守卫
// router.beforeEach((to,from,next)=>{
    
// })

export default router;