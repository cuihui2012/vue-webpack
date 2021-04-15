<template>
    <div>
        <h1>这是account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    
</script>

<style scoped>
    /* scoped表示样式只在组件内部生效,一般都会设置 */
    body div {
        font-style: italic;
    }
</style>