<!--登录页面 -->
<template>
    <div class="wrap">
        <div class="login ">
            <el-input v-model="input" placeholder="请输入账号"></el-input>
            <el-input v-model="pwad" placeholder="请输入密码"></el-input>
            <el-button @click="handleSubmit">登录</el-button>
        </div>
    </div>
</template>

<script>
import navRouter from "@/router/router.js";
import { mapMutations } from "vuex";
export default {
    data () {
        return {
            input: "",
            pwad: ""
        };
    },
    methods: {
        // 用户登录
        handleSubmit () {
            // 登录的时候将路由写入navRouter
            this.SET_NAV_ROUTER(navRouter);
            this.SET_COM_LOGIN(true);
            setTimeout(() => {
                this.$router.replace("/");
            }, 100);
        },
        ...mapMutations({
            SET_NAV_ROUTER: "SET_NAV_ROUTER",
            SET_COM_LOGIN: "SET_COM_LOGIN"
        })
    }
};
</script>

<style scoped lang="scss">
.wrap{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login{
        width: 300px;
        text-align: center;
        & /deep/ input{margin: 10px 0}
    }
}
</style>
