<template>
    <div>
        <h1>这是登录组件,使用.vue文件定义出来的---{{msg}}</h1>
        <input type="button" value="组建中的button" @click="show">
    </div>
</template>
<script>
export default {
    // 组件中的数据
    data(){
        return {
            msg: "123"
        }
    },
    // 组建中的方法
    methods: {
        show(){
            console.log("login.vue组件中的show方法");
        }
    },
}
</script>
<style>

</style>