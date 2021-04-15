// 导入vue
import Vue from 'vue'
// 导入App组件
import app from './App.vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 手动安装vue-router
Vue.use(VueRouter)

// 导入自定义的路由router模块
import router from './route.js'


// 创建vue对象
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router  // 挂在路由
})