import Layout from "@/components/Layout/layout.vue";
const defaultRouter =
[
    // title：模块显示名字
    // icon：模块前面显示的图标名称
    // text： 页面显示的名字
    {
        path: "/project",
        component: Layout,
        children: [
            { path: "project",
                component: () => import("@/views/project/project.vue"),
                meta: { text: "项目首页" } },
            {
                path: "projectList",
                component: () => import("@/views/project/projectList.vue"),
                meta: { text: "项目列表" }
            }
        ],
        meta: { title: "项目管理", text: "项目管理", icon: "cart" }
    }
];
export default defaultRouter;
