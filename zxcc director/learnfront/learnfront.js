
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
    displaybox(rightbox1,"back11","HTML快速入门","菜鸟教程HTML","MDN文档",
    "https://www.bilibili.com/video/BV1vs411M7aT?spm_id_from=333.337.search-card.all.click",
    "https://www.runoob.com/html/html-tutorial.html",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element");
    
    displaybox(rightbox1,"back12","尚硅谷HTML+CSS","W3School CSS教程","CSS动画精通",
    "https://www.bilibili.com/video/BV1XJ411X7Ud?spm_id_from=333.337.search-card.all.click",
    "https://www.w3school.com.cn/css/index.asp",
    "https://www.bilibili.com/video/BV1XJ411S7Ra?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439");

    displaybox(rightbox1,"back13","JavaScript.info","尚硅谷JS","W3School JS",
    "https://zh.javascript.info/",
    "https://www.bilibili.com/video/BV1YW411T7GX?spm_id_from=333.337.search-card.all.click",
    "https://www.w3school.com.cn/js/index.asp");

    displaybox(rightbox2,"back21","Vue","React","Jquery",
    "https://cn.vuejs.org/",
    "https://react.docschina.org/",
    "https://www.runoob.com/jquery/jquery-tutorial.html");

    displaybox(rightbox2,"back22","计算机网络","数据结构与算法","操作系统",
    "https://www.bilibili.com/video/BV19E411D78Q?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1b7411N798?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1YE411D7nH?spm_id_from=333.337.search-card.all.click");

    displaybox(rightbox2,"back23","设计模式","linux","git代码托管",
    "https://www.bilibili.com/video/BV1nD4y1R7iB?p=2&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1Sv411r7vd?spm_id_from=333.337.search-card.all.click&vd_source=c73d7bc9877b983b5bb73f7d1bda7439",
    "https://www.bilibili.com/video/BV1vy4y1s7k6?spm_id_from=333.337.search-card.all.click");

    displaybox(rightbox3,"back31","BootStrap","ElementUI","uniapp",
    "https://v3.bootcss.com/",
    "https://element.eleme.cn/#/zh-CN)",
    "https://www.dcloud.io/");

    displaybox(rightbox3,"back32","Vue-cli","create-react-app","Yeoman(推荐)",
    "https://cli.vuejs.org/zh/",
    "https://create-react-app.bootcss.com/",
    "https://yowebapp.github.io/learning/");

    displaybox(rightbox3,"back33","Node.js","TypeScript","Ajax",
    "https://www.bilibili.com/video/BV1a34y167AZ?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV1Xy4y1v7S2?spm_id_from=333.337.search-card.all.click",
    "https://www.bilibili.com/video/BV1WC4y1b78y?spm_id_from=333.337.search-card.all.click");
}

