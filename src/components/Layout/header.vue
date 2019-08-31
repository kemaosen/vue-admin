<!-- Layout头部组件页面 -->
<template>
    <div class="header">
        Vue-admin动态路由
        <div>
            <el-button @click="handleOut">退出</el-button>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {

    },
    data () {
        return {

        };
    },
    methods: {
        handleOut () {
            this.$router.push("/login");
            sessionStorage.clear();
        }
    },
    watch: {},
    filters: {},
    computed: {},
    components: {

    }
};
</script>

<style scoped lang="scss">
.header{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
}
</style>
