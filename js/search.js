/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-08 20:24:03
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-09 15:17:18
 */
// 页数
var num;
// 设置当前页为第一页 0     
var index=0;
// 设置一页放几个
var maxNum=4
var a;
var page_list=document.querySelector(".page_list");
onload=function(){
    url="http://localhost:83/api"
    ajaxGet(url,function(res){
        // console.log( res);
        res=res?JSON.parse(res):{};
        a=res;
        display(res);
        page(res);
    },{
        type:"show"
    })
}
function display(res){
    // console.log(index);
    // 渲染页面
    // console.log(res);
    var str="";
    for(var i=index*maxNum;i<index*maxNum+maxNum;i++){
        // console.log(res);
        console.log(i);
        str+=`<div class="box_lis1">
        <div class="contry"><img src="img/cha.png"/><span>中国品牌</span></div>
        <div class="boxpic1"><img src="${res[i].img}"/></div>
        <div class="boxtxt"><span id="txt1">￥${res[i].price}</span>  <span id="txt2">￥${res[i].old}</span> <span id="txt3">${res[i].discount}折</span></div>
        <div class="fottxt"><span>BURBERRY</span><p>BRIT SHEER  红粉恋歌淡<span>${res[i].name}</span> 小样</p><p>4.5毫升</p></div>
    </div>`
    }
    var box3=document.querySelector(".box3");
    box3.innerHTML=str;
    
}
// 价格点击排序
$(".up").on("click",function(){
    // console.log(a);
    var arr=[];
    for(var z=0;z<a.length;z++){
        // console.log(a[i].price);
        arr.push(a[z].price);
    }
    // 冒泡排序 arr
    // console.log(arr);
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
          // 如果将这里的大于号改为小于号 数组内部将从大到小的排列
          if (arr[j] > arr[j + 1]) {
            var b;
            b = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = b;
          }
        }
      }
    //   此时的arr已经是价格排序好的数组-根据数组去找对应的a中的数据
    //   console.log(arr);
     var  arr_new=[];
    //  console.log(a);
     
     for(var x=0;x<arr.length;x++){
         a.forEach((val)=>{
             console.log(val.price);
             if(val.price==arr[x]){
                //  console.log(val);
                 arr_new.push(val);
             }
         })
     }
    //  console.log(arr_new);
     a=arr_new;
     display(a);
})
$(".down").on("click",function(){
    var arr=[];
    for(var z=0;z<a.length;z++){
        // console.log(a[i].price);
        arr.push(a[z].price);
    }
    // 冒泡排序 arr
    // console.log(arr);
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j <arr.length - 1 - i; j++) {
          // 如果将这里的大于号改为小于号 数组内部将从大到小的排列
          if (arr[j] < arr[j + 1]) {
            var b;
            b = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = b;
          }
        }
      }
    //   此时的arr已经是价格排序好的数组-根据数组去找对应的a中的数据
    //   console.log(arr);
     var  arr_new=[];
    //  console.log(a);
     
     for(var x=0;x<arr.length;x++){
         a.forEach((val)=>{
            //  console.log(val.price);
             if(val.price==arr[x]){
                //  console.log(val);
                 arr_new.push(val);
             }
         })
     }
     a=arr_new;
     display(a);
})
// 分页
function page(res){
    
    // 先生成动态得页码
    // console.log(res);
    num=res.length/4;
    // console.log(num);
    var str="";
    
    for(let i=0;i<num;i++){
    var li=document.createElement("li");
    li.innerHTML=(i+1);
    // console.log(li);
    page_list.appendChild(li);
    setActive();    
} 
}

// 按钮操作索引
$(".left").on("click",function(){
    // console.log("上一页");
    // console.log(num);
    if(index==0){
        index=num-1;
        // console.log(index);
    }else{
        index--;
    }
    // console.log(index);
    setActive();
    display(a);
})
$(".right").on("click",function(){
    // console.log("下一页");
    if(index==num-1){
        index=0;
        // console.log(index);
    }else{
        index++;
    }
    // console.log(index);
    setActive();
    display(a);
})
// 设置当前项
function setActive(){
    // console.log(page_list.children[0]);
    
  for(var i=0;i<page_list.children.length;i++){
        page_list.children[i].className="";
    }
    page_list.children[index].className="te";
    
}