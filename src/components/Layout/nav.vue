<!-- Layout侧边栏组件页面 -->
<template>
    <el-menu default-active="" class="el-menu-vertical-demo" router  @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <!-- 一个模块 -->
        <el-submenu :index="value.path" v-for="(value,index) in comRouter" :key="'comRouter'+index">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{value.meta.title}}</span>
            </template>
            <!-- 一个模块的每个组成页 -->
            <el-menu-item-group v-for="(item,i) in value.children" :key="'children'+i">
                <el-menu-item :index="value.path+'/'+item.path">{{item.meta.text}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        ...mapGetters({
            comRouter: "comRouter"
        })
    }
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo{
    width: 100%;
}
</style>
