window.onload=function()
{   
    //获取列表和视频DOM流
    let list=document.getElementById("list");
    let video=document.getElementById("video");
    //封装点击切换视频的模板方法
    let change=function(id,url)
    {
        let btn=document.getElementById(id)
        btn.onclick=function()
        {
           video.src=url;
        }
    }
//调用模板方法
change("node1","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=1");
change("node2","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=2");
change("node3","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=3");
change("node4","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=4");
change("node5","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=5");
change("node6","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=6");
change("node7","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=7");
change("node8","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=8");
change("node9","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=9");
change("node10","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=10");
change("node11","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=11");
change("node12","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=12");
//创建哈希表存放视频地址
let map=new Map();
map.set(1,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=1");
map.set(2,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=2");
map.set(3,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=3");
map.set(4,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=4");
map.set(5,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=5");
map.set(6,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=6");
map.set(7,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=7");
map.set(8,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=8");
map.set(9,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=9");
map.set(10,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=10");
map.set(11,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=11");
map.set(12,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=12");





    //当单击一个节点时，扫描所有的节点，如果扫描到的节点是正在播放视频的节点，则把对应的字体颜色变为绿色，把其他字体的颜色全部改回白色
    //这里只要我们点击list，就绝对会触发单击节点的事件，所以只要给list加上点击事件即可

    list.onclick=function()
    {  
        //遍历哈希表中的值，如果和播放视频的url相同,把该视频对应的右标题栏文字变成绿色，其他文字变回白色
        //当经过正在播放视频的标题时,颜色不变，经过未播放视频的标题是，颜色变为蓝色
        for(let i=1;i<=12;i++)
        {
            
            if(map.get(i)==video.src)
            {
                let workingvideo=document.getElementById("node"+i);
                workingvideo.style.color="aquamarine";
                workingvideo.onmouseover=function(){this.style.color="aquamarine";}
                workingvideo.onmouseout=function(){this.style.color="aquamarine";}
                for(let j=1;j<=12;j++)
                {
                    if(j==i)
                    {
                        continue;
                    }
                    else{
                        let anothervideo=document.getElementById("node"+j);
                        anothervideo.style.color="aliceblue";
                        anothervideo.onmouseover=function(){this.style.color="aqua";}
                        anothervideo.onmouseout=function(){this.style.color="aliceblue";}
                    }
                }
            }
        }
    }
    //点击按钮1
    let btn1=document.getElementById("btn1");
    btn1.onclick=function()
    {
        //修改视频默认播放路径
        video.src="http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=1";
        //修改html内容
        list.innerHTML=`            
        <div class="listnode" id="node1">P1: 节奏,普通的动次打次</div>
        <div class="listnode" id="node2">P2: 认识钢琴键盘</div>
        <div class="listnode" id="node3">P3: 调是啥</div>
        <div class="listnode" id="node4">P4: 音程，智商考验</div>
        <div class="listnode" id="node5">P5: 和弦是什么</div>
        <div class="listnode" id="node6">P6: 五度循环圈，智商考验2</div>
        <div class="listnode" id="node7">P7: 调式中歌音级的名称</div>
        <div class="listnode" id="node8">P8: 自然小调</div>
        <div class="listnode" id="node9">P9: 关系大小调</div>
        <div class="listnode" id="node10">P10:细思极恐的音程度数</div>
        <div class="listnode" id="node11">P11:自然音程与变化音程</div>
        <div class="listnode" id="node12">P12:小调的变体</div>`;
        //修改对应节点链接的视频地址
        change("node1","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=1");
        change("node2","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=2");
        change("node3","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=3");
        change("node4","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=4");
        change("node5","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=5");
        change("node6","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=6");
        change("node7","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=7");
        change("node8","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=8");
        change("node9","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=9");
        change("node10","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=10");
        change("node11","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=11");
        change("node12","http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=12");
        //修改哈希表
        map.clear();
        map.set(1,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=1");
        map.set(2,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=2");
        map.set(3,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=3");
        map.set(4,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=4");
        map.set(5,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=5");
        map.set(6,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=6");
        map.set(7,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=7");
        map.set(8,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=8");
        map.set(9,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=9");
        map.set(10,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=10");
        map.set(11,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=11");
        map.set(12,"http://player.bilibili.com/player.html?aid=4500081&bvid=BV1ms411q714&cid=7294184&page=12");
    }
    //点击按钮2
    let btn2=document.getElementById("btn2");
    btn2.onclick=function()
    {   
        //修改视频默认播放路径
        video.src="https://player.bilibili.com/player.html?aid=88396385&bvid=BV117411G7XG&cid=151003311&page=1";
        //修改html内容
        list.innerHTML=`            
        <div class="listnode" id="node1">P1: FL入门上(阿正)</div>
        <div class="listnode" id="node2">P2: FL入门下(阿正)</div>
        <div class="listnode" id="node3">P3: FL初始设定</div>
        <div class="listnode" id="node4">P4: FL基础操作:鼓组</div>
        <div class="listnode" id="node5">P5: FL基础操作:旋律</div>
        <div class="listnode" id="node6">P6: FL混音及输出</div>
        <div class="listnode" id="node7">P7: emo trap风格beat</div>
        <div class="listnode" id="node8">P8: drill风格beat</div>
        <div class="listnode" id="node9">P9: 电子音乐:progressive house</div>
        <div class="listnode" id="node10">P10:电子音乐:future bass</div>
        <div class="listnode" id="node11">P11:电子音乐:future house/bounce</div>
        <div class="listnode" id="node12">P12:电子音乐:dubstep</div>`;
        //修改对应节点链接的视频地址
        change("node1","https://player.bilibili.com/player.html?aid=88396385&bvid=BV117411G7XG&cid=151003311&page=1");
        change("node2","https://player.bilibili.com/player.html?aid=89378732&bvid=BV147411n7X7&cid=152661169&page=1");
        change("node3","https://player.bilibili.com/player.html?aid=288504116&bvid=BV1Ff4y1y7W7&cid=277039636&page=1");
        change("node4","https://player.bilibili.com/player.html?aid=971067333&bvid=BV1dp4y1s7aF&cid=277813590&page=1");
        change("node5","https://player.bilibili.com/player.html?aid=373544081&bvid=BV1jo4y1f7NS&cid=281350105&page=1");
        change("node6","https://player.bilibili.com/player.html?aid=246131207&bvid=BV1Mv41147ws&cid=281945607&page=1");
        change("node7","https://player.bilibili.com/player.html?aid=752962645&bvid=BV12k4y1r7Fg&cid=184693118&page=1" );
        change("node8","https://player.bilibili.com/player.html?aid=294251874&bvid=BV1WF411h7yL&cid=446755067&page=1");
        change("node9","https://player.bilibili.com/player.html?aid=200295839&bvid=BV1Hz411B7En&cid=178377111&page=1");
        change("node10","https://player.bilibili.com/player.html?aid=18814622&bvid=BV1UW411e7RL&cid=30685770&page=1");
        change("node11","https://player.bilibili.com/player.html?aid=809499667&bvid=BV1134y1k7DK&cid=540380965&page=1");
        change("node12","https://player.bilibili.com/player.html?aid=15046109&bvid=BV1Hx41137xY&cid=24505118&page=1");
        //修改哈希表
        map.clear();
        map.set(1,"https://player.bilibili.com/player.html?aid=88396385&bvid=BV117411G7XG&cid=151003311&page=1");
        map.set(2,"https://player.bilibili.com/player.html?aid=89378732&bvid=BV147411n7X7&cid=152661169&page=1");
        map.set(3,"https://player.bilibili.com/player.html?aid=288504116&bvid=BV1Ff4y1y7W7&cid=277039636&page=1");
        map.set(4,"https://player.bilibili.com/player.html?aid=971067333&bvid=BV1dp4y1s7aF&cid=277813590&page=1");
        map.set(5,"https://player.bilibili.com/player.html?aid=373544081&bvid=BV1jo4y1f7NS&cid=281350105&page=1");
        map.set(6,"https://player.bilibili.com/player.html?aid=246131207&bvid=BV1Mv41147ws&cid=281945607&page=1");
        map.set(7,"https://player.bilibili.com/player.html?aid=752962645&bvid=BV12k4y1r7Fg&cid=184693118&page=1" );
        map.set(8,"https://player.bilibili.com/player.html?aid=294251874&bvid=BV1WF411h7yL&cid=446755067&page=1");
        map.set(9,"https://player.bilibili.com/player.html?aid=200295839&bvid=BV1Hz411B7En&cid=178377111&page=1");
        map.set(10,"https://player.bilibili.com/player.html?aid=18814622&bvid=BV1UW411e7RL&cid=30685770&page=1");
        map.set(11,"https://player.bilibili.com/player.html?aid=809499667&bvid=BV1134y1k7DK&cid=540380965&page=1");
        map.set(12,"https://player.bilibili.com/player.html?aid=15046109&bvid=BV1Hx41137xY&cid=24505118&page=1");
    }
    let btn3=document.getElementById("btn3");
    btn3.onclick=function()
    {
        //修改视频默认播放路径
        video.src="https://player.bilibili.com/player.html?aid=754954745&bvid=BV1Tk4y1y7Kv&cid=245247509&page=1";
        //修改html内容
        list.innerHTML=`            
        <div class="listnode" id="node1">P1: 808处理</div>
        <div class="listnode" id="node2">P2: 808处理2</div>
        <div class="listnode" id="node3">P3: 滑音</div>
        <div class="listnode" id="node4">P4: 侧链压缩</div>
        <div class="listnode" id="node5">P5: EQ调制</div>
        <div class="listnode" id="node6">P6: 认识delay</div>
        <div class="listnode" id="node7">P7: 包络线控制</div>
        <div class="listnode" id="node8">P8: Gross beat</div>
        <div class="listnode" id="node9">P9: Edison降噪</div>
        <div class="listnode" id="node10">P10:简单入门扒谱</div>
        <div class="listnode" id="node11">P11:如何编写和弦走向</div>
        <div class="listnode" id="node12">P12:番外篇:如何制作hyperpop</div>`;
        //修改对应节点链接的视频地址
        change("node1","https://player.bilibili.com/player.html?aid=754954745&bvid=BV1Tk4y1y7Kv&cid=245247509&page=1");
        change("node2","https://player.bilibili.com/player.html?aid=844283945&bvid=BV1B54y1Y7eP&cid=302134671&page=1");
        change("node3","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287536&page=13");
        change("node4","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287545&page=14");
        change("node5","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287606&page=16" );
        change("node6","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287696&page=18");
        change("node7","https://player.bilibili.com/player.html?aid=21523673&bvid=BV1GW411T7xY&cid=35434776&page=1" );
        change("node8","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287765&page=21" );
        change("node9","https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287826&page=25");
        change("node10","https://player.bilibili.com/player.html?aid=8563823&bvid=BV17x41127zb&cid=14101412&page=1");
        change("node11","https://player.bilibili.com/player.html?aid=884222321&bvid=BV1WK4y1Y7AF&cid=224377576&page=1");
        change("node12","https://player.bilibili.com/player.html?aid=982022785&bvid=BV13t4y1p7gg&cid=733112089&page=1");
        //修改哈希表
        map.clear();
        map.set(1,"https://player.bilibili.com/player.html?aid=754954745&bvid=BV1Tk4y1y7Kv&cid=245247509&page=1");
        map.set(2,"https://player.bilibili.com/player.html?aid=844283945&bvid=BV1B54y1Y7eP&cid=302134671&page=1");
        map.set(3,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287536&page=13");
        map.set(4,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287545&page=14");
        map.set(5,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287606&page=16") ;
        map.set(6,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287696&page=18");
        map.set(7,"https://player.bilibili.com/player.html?aid=21523673&bvid=BV1GW411T7xY&cid=35434776&page=1" );
        map.set(8,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287765&page=21" );
        map.set(9,"https://player.bilibili.com/player.html?aid=50431643&bvid=BV1d441187Kq&cid=88287826&page=25");
        map.set(10,"https://player.bilibili.com/player.html?aid=8563823&bvid=BV17x41127zb&cid=14101412&page=1");
        map.set(11,"https://player.bilibili.com/player.html?aid=884222321&bvid=BV1WK4y1Y7AF&cid=224377576&page=1");
        map.set(12,"https://player.bilibili.com/player.html?aid=982022785&bvid=BV13t4y1p7gg&cid=733112089&page=1");
    }
}