import Vue from "vue";
import Vuex from "vuex";
import { GET_SESSION_STORAGE, SET_SESSION_STORAGE } from "@/utils/sessionStorage.js";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        router: GET_SESSION_STORAGE("router") || [],            // 用户权限路由列表
        navRouter: GET_SESSION_STORAGE("navRouter") || [],      // 从后台获取的导航栏路由
        isLogin: GET_SESSION_STORAGE("login") || false          // 判断用户是否登录
    },
    getters: {
        // 将本地路由与后台返回的路由结合, 渲染侧边栏组件
        comRouter: state => state.router,
        // 后台返回的路由列表
        comNavRouter: state => state.navRouter,
        comLogin: state => state.isLogin

    },
    mutations: {
        SET_COM_LOGIN: (state, params) => {
            SET_SESSION_STORAGE("login", params);
            state.isLogin = params;
        },
        // 修改路由列表
        SET_ROUTER_CHANGE: (state, params) => {
            SET_SESSION_STORAGE("router", params);
            state.router = params;
        },
        //  将本地路由与后台返回的路由结合, 渲染侧边栏组件
        SET_NAV_ROUTER: (state, params) => {
            SET_SESSION_STORAGE("navRouter", params);
            state.navRouter = params;
        }
    }
});
