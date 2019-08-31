const navRouter =
    [
        // title：模块显示名字
        // icon：模块前面显示的图标名称
        // text： 页面显示的名字
        {
            path: "/setting",
            component: "Layout",
            children: [
                {
                    path: "data",
                    component: "/setting/data",
                    meta: { text: "项目首页" }
                },
                {
                    path: "userList",
                    component: "/setting/userList",
                    meta: { text: "项目列表" }
                }
            ],
            meta: { title: "设置管理", text: "设置管理", icon: "cart" }
        },
        {
            path: "/video",
            component: "Layout",
            children: [
                {
                    path: "video",
                    component: "/video/video",
                    meta: { text: "视频管理" }
                },
                {
                    path: "videolist",
                    component: "/video/videolist",
                    meta: { text: "视频列表" }
                }
            ],
            meta: { title: "视频管理", text: "视频管理", icon: "cart" }
        }
    ];
export default navRouter;
