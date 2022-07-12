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

  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test2'
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });

  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test3'
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
    let rolling2=document.getElementById("_2tm");
    //链接网站url2
    let arr2=["https://www.bilibili.com/video/BV1s3411g7PS?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1TT4y1z7Ee?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1B7411c7r7?p=6&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1QA4y1d7xf?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1c44y1g7ac?spm_id_from=333.999.0.0"];
    for(let i=0;i<rolling2.children.length;i++)
    {
      rolling2.children[i].onclick=function()
      {
        window.open(arr2[i]);
      }
    }
    let rolling3=document.getElementById("_3tm");
    //链接网站url3
    let arr3=["https://www.bilibili.com/video/BV1EU4y1n7gC?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1bt411P7ra/?spm_id_from=333.788.recommend_more_video.-1&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1UM4y1w7oT?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV1Cb4y1m7TC?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439","https://www.bilibili.com/video/BV19v411r7hb?spm_id_from=333.999.0.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439"];
    for(let i=0;i<rolling3.children.length;i++)
    {
      rolling3.children[i].onclick=function()
      {
        window.open(arr3[i]);
      }
    }
}