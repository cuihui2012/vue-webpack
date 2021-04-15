// import 'path'/import xx from ''  --es6中语法

import Vue from 'vue'  // 默认导入的是vue/package.json中main树形对应的文件(阉割版vue),这种导入时需在webpack.config.js配置连接路径
// import Vue from '../node_modules/vue/dist/vue.js'  // 这种导入可行

// 在webpack中,推荐使用.vue组件模板文件定义组件,.vue文件需要loader解析
import login from './login.vue'

// 引入自定义模块
// xx为export default暴露的数据,可以使用任意变量来接收,
// {}为export暴露的数据,按需引入即可,名称需与模块中变量一致,可以使用 as name1 使用别名
import xx,{title,content as c1} from './test.js'
// 打印自定义模块中暴露的数据
console.log(xx);
console.log(title);
console.log(c1);

var vm = new Vue({
    el: "#app",
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // },
    
    // render: function(f){
    //     // 引入的是runtime-login包,可以通过render进行渲染,上述方法不能直接渲染
    //     return f(login);
    // },
    // 渲染的简写
    render: c => c(login)
})