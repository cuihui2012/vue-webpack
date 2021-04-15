// 导入jquery
import $ from 'jquery'
// 导入样式表
import './css/index.css'
import './css/index.less'

// webpack默认只打包处理js类型文件,无法处理非js类型的文件,需要安装第三方loader

$(function(){
    $("li:odd").css("backgroundColor","yellow");
    $("li:even").css("backgroundColor",function(){
        return "red";
    });
})