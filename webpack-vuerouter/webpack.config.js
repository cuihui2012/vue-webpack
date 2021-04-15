const path = require('path');
// 引入插件,页面放入到内存中去
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:'./src/main.js', // 单个入口文件配置
    // entry: {                  //多个入口文件配置
    //     main: "./src/main.js",
    //     main1: "./src/main1.js",
    //     main2: "./src/main2.js"
    // },
    output:{                  //出口文件配置
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({ // 创建一个在内存中生成html页面的插件,会自动引用内存中的js文件,不用再手动去引用
            template: path.join(__dirname,'./src/index.html'), // 指定页面路径
            filename: 'index.html' // 指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: {   // 配置所有第三方模块加载器
        rules: [ // 第三方模块匹配规则
            {
                test: /\.css$/,     // 所有.css文件
                use: [
                    'style-loader', // 使用loader,处理时从后往前调用
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,     // 所有.less文件
                use: [
                    'style-loader', // 使用loader
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,     // 所有图片文件
                use: [
                    'url-loader?limit=126&name=[hash:8]-[name].[ext]' // 使用loader,参数表示文件大小,在其内使用的是base64转码的字符串,否则使用的是路径图片(name参数表示名字和之前一致,拼接了8位hash值,防止重名文件,托管在根目录下)
                ]
            },
            {
                test: /\.vue$/,     // 所有.vue文件
                use: [
                    'vue-loader' // 使用loader
                ]
            }
        ]
    },
    resolve: {
        // alias: { // 设置import/require时,以vue结尾被导入时的链接
        //     "vue$": "vue/dist/vue.js"
        // }
    },
    mode: "development"       //模式配置
}