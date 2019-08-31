import router from "./router/index";
// Layout 是布局组件，不在后台返回，在文件里单独引入
import Layout from "@/components/Layout/layout.vue";

import Store from "./store.js";

// 默认加载的路由，不需要后台返回的路由 可以在router文件夹中添加默认路由
import defaultRouter from "@/router/defaultRouter.js";

// process.env.NODE_ENV 根据不同的环境 加载不同的路由模板处理文件
const _import = require("./router/config/_import_" + process.env.NODE_ENV);

var getRouter;          // 用来保存后台拿到的路由

router.beforeEach((to, from, next) => {
    // 判断 数据仓库中有没有 用户登录返回的路由列表  有
    if (Store.getters.comNavRouter && Store.getters.comNavRouter.length > 0) {
        if (!getRouter) {  // 判断有没有路由权限 没有 路由权限 重新请求|从Vuex中获取
            getRouter = Store.getters.comNavRouter;// 拿到路由
            routerGo(to, next);// 调用动态添加路由的方法
        } else { // 判断有没有路由列表 有 允许进入下个这里是第二个beforeEach
            next();
        }
    } else { // 判断 数据仓库中有没有 用户登录返回的路由列表  没有 ===>去登陆页
        next();
    }
});

function routerGo (to, next) {
    // 过滤路由 调用filterAsyncRouter 数据模板处理方法 返回Vue-router可以识别数据
    getRouter = filterAsyncRouter(getRouter);
    // 动态添加所有的的路由
    router.addRoutes(Store.getters.comRouter);
    next({ ...to, replace: true });
    // 调用next()放行
}

function filterAsyncRouter (asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象 递归方法
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) { // 路由有component
            if (route.component === "Layout") { // 判断路由是Layout 布局组件，将上方引用的Layout布局组件放进去
                route.component = Layout;
            } else {                            // 路由不是Layout组件 二级也main
                route.component = _import(route.component);
            }
        }
        // 判断当前的路由对象中是否含有children 有再次调用本方法 递归调用 直到没有
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children);
        }
        return true;
    });

    Store.commit("SET_ROUTER_CHANGE", defaultRouter.concat(Store.getters.comNavRouter));// 合并整个路由表(默认路由+后台返回的路由) 保存在Vuex中
    return accessedRouters;
}
