// 导入vue
import Vue from 'vue'
// 导入App组件
import app from './App.vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 手动安装vue-router
Vue.use(VueRouter)
// 导入组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist组件
        {path: '/account', component: account},
        {path: '/goodslist', component: goodslist},
    ]
})

// 创建vue对象
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router  // 挂在路由
})