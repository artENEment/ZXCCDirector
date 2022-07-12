window.onload=function()
{
    let arr=["https://www.memleaking.com/","https://leetcode.cn/","https://www.nowcoder.com/","https://juejin.cn/","https://stackoverflow.com/","https://www.proginn.com/"];
    for(let i=0;i<arr.length;i++)
    {
        document.getElementById("img"+(i+1)).onclick=function()
        {
            window.open(arr[i]);
        }
    }
}