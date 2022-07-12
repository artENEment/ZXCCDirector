
window.onload=function(){
    //点击卡片，按钮触发翻面效果
    let btn1=document.getElementById("btn1");
    btn1.onclick=function()
    {
        let front1=document.getElementById("front1");
        let back1=document.getElementById("back1");
        front1.style.transform="rotateY(180deg)";
        back1.style.transform="rotateY(0deg)";
    }

    let btn2=document.getElementById("btn2");
    btn2.onclick=function()
    {
        let front2=document.getElementById("front2");
        let back2=document.getElementById("back2");
        front2.style.transform="rotateY(180deg)";
        back2.style.transform="rotateY(0deg)";
    }

    let btn3=document.getElementById("btn3");
    btn3.onclick=function()
    {
        let front3=document.getElementById("front3");
        let back3=document.getElementById("back3");
        front3.style.transform="rotateY(180deg)";
        back3.style.transform="rotateY(0deg)";
    }

    //点击back卡片中的超链接打开多个窗口
 
    //获取所有的盒子对象
    let rightbox1=document.getElementById("rightbox1");
    let rightbox2=document.getElementById("rightbox2");
    let rightbox3=document.getElementById("rightbox3");

    //模板函数，参数为盒子对象,超链接的id,需要改变的text,需要打开窗口的url
    let displaybox=function(rightbox,id,text1,text2,text3,str1,str2,str3)
    {  
        if(rightbox.style.opacity==1)
        {
           rightbox.style.opacity=0.5;
           setTimeout(() => {
            resolve();
           }, 1);
        }
        let a=document.getElementById(id);
        a.onclick=function()
        {
           rightbox.style.opacity=1;
           rightbox.children[0].innerHTML=text1;
           rightbox.children[2].innerHTML=text2;
           rightbox.children[4].innerHTML=text3;
           rightbox.children[0].href=str1;
           rightbox.children[2].href=str2;
           rightbox.children[4].href=str3;
        }
        //7秒后隐藏盒子
        setInterval(function(){
            rightbox.style.opacity=0;
        },7000);
    }
    //调用displaybox
    displaybox(rightbox1,"back11","廖雪峰JAVA","动力节点JAVA","黑马程序员JAVA",
    "https://www.liaoxuefeng.com/wiki/1252599548343744",
    "https://www.bilibili.com/video/BV1Rx411876f?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV18J411W7cE?spm_id_from=333.337.search-card.all.click");
    
    displaybox(rightbox1,"back12","C#官方文档","传智播客.net教程","朝夕教育.net",
    "https://docs.microsoft.com/zh-cn/dotnet/csharp/",
    "https://www.bilibili.com/video/BV1FJ411W7e5?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV147411x7p1?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");

    displaybox(rightbox1,"back13","黑马程序员C++","牛客网C++","老九学堂C++",
    "https://www.bilibili.com/video/BV1et411b73Z?spm_id_from=333.337.search-card.all.click",
    "https://www.nowcoder.com/tutorial/10003/7bdcb36b1ff74114b026c46b7ac64ac1",
    "https://www.bilibili.com/video/BV12x411D7xr/?spm_id_from=333.788.recommend_more_video.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");

    displaybox(rightbox1,"back14","翁恺C语言","一篇笔记入门(csdn)","小甲鱼",
    "https://www.bilibili.com/video/BV19W411B7w1?spm_id_from=333.337.search-card.all.click",
    "https://blog.csdn.net/qq_23079443/article/details/81108901?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165547544816782425182854%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165547544816782425182854&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-81108901-null-null.142^v17^control,157^v15^new_3&utm_term=C%E8%AF%AD%E8%A8%80&spm=1018.2226.3001.4187",
    "https://www.bilibili.com/video/BV17s411N78s?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");

    displaybox(rightbox1,"back15","Python两小时入门","Python全套教程","python官方",
    "https://www.bilibili.com/video/BV1944y1x7SW?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV1wD4y1o7AS?spm_id_from=333.337.search-card.all.click",
    "https://www.python.org/");

    displaybox(rightbox1,"back16","黑马Php","菜鸟Php","Php官方",
    "https://www.bilibili.com/video/BV18x411H7qD?spm_id_from=333.337.search-card.all.click",
    "https://www.runoob.com/php/php-tutorial.html",
    "https://www.php.net/");

    displaybox(rightbox1,"back17","菜鸟Rust","Rust入门视频","Rust官方",
    "https://www.runoob.com/rust/rust-tutorial.html",
    "https://www.bilibili.com/video/BV1hp4y1k7SV?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.rust-lang.org/zh-CN/");

    displaybox(rightbox1,"back18","菜鸟Go语言","尚硅谷Go","Golang官方",
    "https://www.runoob.com/go/go-tutorial.html",
    "https://www.bilibili.com/video/BV1ME411Y71o?spm_id_from=333.337.search-card.all.click",
    "https://golang.google.cn/");

    displaybox(rightbox2,"back21","计算机组成原理","","计算机网络",
    "https://www.bilibili.com/video/BV1BE411D7ii?spm_id_from=333.337.search-card.all.click",
    "",
    "https://www.bilibili.com/video/BV19E411D78Q?spm_id_from=333.337.search-card.all.click");

    displaybox(rightbox2,"back22","数据结构与算法","","数据库SQL",
    "https://leetcode.cn/leetbook/detail/illustration-of-algorithm/",
    "",
    "https://www.bilibili.com/video/BV1Kr4y1i7ru?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");

    displaybox(rightbox2,"back23","设计模式","linux","git代码托管",
    "https://www.bilibili.com/video/BV1nD4y1R7iB?p=2&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1Sv411r7vd?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1vy4y1s7k6?spm_id_from=333.337.search-card.all.click");

    displaybox(rightbox3,"back31","Spring全家桶","Django"," CakePHP",
    "https://www.bilibili.com/video/BV1WZ4y1P7Bp/?spm_id_from=333.788.recommend_more_video.4&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1NL41157ph?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://cakephp.org/");

    displaybox(rightbox3,"back32","Linux服务器","C++开发服务器","搭建个人网站",
    "https://www.bilibili.com/video/BV1H4411m73W?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV184411s7qF?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV1rU4y1J785/?spm_id_from=333.788.recommend_more_video.0&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");
}