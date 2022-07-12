/*
使用layui创建轮播效果
*/ 
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test1'
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });

/*
使用layui实现折叠面板
 */
//注意：折叠面板 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
var element = layui.element;
      
//…
});


/*
正常处理
*/
window.onload=function()
{
    let rolling=document.getElementById("tm");
    //链接网站的url
    let arr=["http://www.atguigu.com/","https://www.runoob.com/","https://zh.javascript.info/","https://www.w3school.com.cn/","https://developer.mozilla.org/en-US/"];
    for(let i=0;i<rolling.children.length;i++)
    {
        rolling.children[i].onclick=function()
        {
           window.open(arr[i]);
        }
    }
}