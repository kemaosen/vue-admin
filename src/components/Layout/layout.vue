<!-- 页面 -->
<template>
    <el-container class="layout">
        <el-aside width="200px" class="aside">
            <Nav></Nav>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Nav from "@/components/Layout/nav.vue";
import Header from "@/components/Layout/header.vue";
import Main from "@/components/Layout/main.vue";
export default {
    mounted () {

    },
    data () {
        return {

        };
    },
    methods: {

    },
    watch: {},
    filters: {},
    computed: {},
    components: {
        Nav,
        Header,
        Main
    }
};
</script>

<style scoped lang="scss">
.layout{
    height: 100%;
    .aside{
        background-color: #545c64;
        overflow-x:hidden;
    }
    .el-header{
        padding: 0;
    }
}
</style>
