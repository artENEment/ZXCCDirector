window.onload=function()
{
  //获取iframe
  let myiframe=document.getElementById("myiframe");

  //鼠标经过标题触发的事件
  let headhover=document.getElementById("mainhead");
  let mainico=document.getElementById("mainico");
  headhover.onmouseover=function()
  {
    mainico.style.backgroundImage="url(ZXCC director2.png)";
  }
  //鼠标点击标题跳转到首页
  headhover.onclick=function()
  {
    myiframe.src="home/home.html";
  }
  
  //点击旁边的文字跳转到首页
  let textpng=document.getElementById("textpng");
  textpng.onclick=function()
  {
    alert("Hi,Welcome");
    myiframe.src="home/home.html";
  }
    //点击标题栏中"学习编程"触发的事件
    let a2=document.getElementById("a2");
    a2.onclick=function(){myiframe.src="learncoding/learncoding.html";}
    //点击标题栏中"学习编曲"触发的事件
    let a3=document.getElementById("a3");
    a3.onclick=function(){myiframe.src="makingmusic/makingmusic.html";}
    //点击标题栏中"我的收藏"触发的事件
    let a4=document.getElementById("a4");
    a4.onclick=function(){myiframe.src="mycollections/mycollections.html";}
    //点击标题栏中"技术论坛"触发的事件
    let a5=document.getElementById("a5");
    a5.onclick=function(){myiframe.src="forum/forum.html";}
    //点击标题栏中"关于作者"触发的事件
    let a6=document.getElementById("a6");
    a6.onclick=function(){myiframe.src="designer/designer.html";}

    
    //左侧菜单栏
    //点击左侧菜单栏中"作者简介"触发的事件
    let a7=document.getElementById("a7");
    a7.onclick=function(){myiframe.src="designer/designer.html";}
    //点击头像触发事件
    let headimage=document.getElementById("headimage");
    headimage.onclick=function(){myiframe.src="designer/designer.html";}
    //点击Atele触发事件
    let Atele=document.getElementById("Atele");
    Atele.onclick=function(){myiframe.src="designer/designer.html"}
    //学习前端
    let btn1=document.getElementById("btn1");
    btn1.onclick=function()
    {
      myiframe.src="learnfront/learnfront.html";
    }
    //学习后端
    let btn2=document.getElementById("btn2");
    btn2.onclick=function()
    {
      myiframe.src="learnback/learnback.html";
    } 
    //学习编曲
    let btn3=document.getElementById("btn3");
    btn3.onclick=function(){myiframe.src="makingmusic/makingmusic.html";}
    //技术论坛
    let btn4=document.getElementById("btn4");
    btn4.onclick=function(){myiframe.src="forum/forum.html";}
    //其他文章
    let btn5=document.getElementById("btn5");
    btn5.onclick=function(){myiframe.src="article/article.html";}
    //github,云音乐,b站 点击跳转
    let github=document.getElementById("github");
    github.onclick=function()
    {
      window.open("https://github.com/artENEment/ZXCCDirector");
    }
    let cloud=document.getElementById("cloud");
    cloud.onclick=function()
    {
      window.open("https://music.163.com/#/artist?id=51280108");
    }
    let bilibili=document.getElementById("bilibili");
    bilibili.onclick=function()
    {
      window.open("https://space.bilibili.com/321932845?spm_id_from=333.1007.0.0");
    }
}
