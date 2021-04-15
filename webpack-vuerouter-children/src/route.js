// 抽离路由组件
import VueRouter from 'vue-router'
// 导入组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
// 导入子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist组件
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        },
        {path: '/goodslist', component: goodslist},
    ]
})

// 把router对象暴露出去,在main.js中会在vw对象绑定路由
export default router