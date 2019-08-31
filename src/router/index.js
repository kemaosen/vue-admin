import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout/layout.vue";
import Store from "@/store.js";
Vue.use(Router);

const router = new Router({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                { path: "/", component: () => import("@/views/project/project.vue") }
            ]
        },
        { path: "/login", component: () => import("@/views/login.vue") }

    ]
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        next();
    } else {
        // 登录验证 登录状态是false 路由重新定向跳转到登录页
        if (!Store.getters.comLogin) {
            next("/login");
        } else { // 用户登录了 允许通过
            next();
        }
    }
});
