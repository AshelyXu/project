/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-06 22:44:56
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-07 18:56:04
 */
var aaa = document.getElementById("aaa");
var bbb = document.getElementById("bbb");
var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
aaa.onmouseover = function () {
    a1.style.display = "block";
}
aaa.onmouseout = function () {
    a1.style.display = "none"
}
bbb.onmouseover = function () {
    b1.style.display = "block";
}
bbb.onmouseout = function () {
    b1.style.display = "none"
}
class Car {
    constructor() {
        this.tbody = document.querySelector("tbody");
        this.b = document.querySelector(".b");
        this.i = document.querySelector(".i");
        this.all = document.querySelector(".xia .all");
        this.url = "http://localhost:83/data/data.json";
        this.load();
        this.addEvent();
    }
    addEvent() {
        var that = this;
        var j = true;
        this.all.onclick = function () {
            var check = document.querySelectorAll(".check");
            // console.log(check);
            if (j) {
                for (var i = 0; i < check.length; i++) {
                    // console.log(check[i]);
                    check[i].checked = true;
                    that.all.value = "取消";
                    j = false;
                }
            } else {
                for (var k = 0; k < check.length; k++) {
                    check[k].checked = false;
                    that.all.value = "全选";
                    j = true;
                }
            }
        }
        // console.log($("tbody"));
        //点击加号或减号
        $("tbody").on("click",".left",function(){
            var a=localStorage.getItem("xzw")?JSON.parse(localStorage.getItem("xzw")):[];
            // console.log(localStorage.getItem("xzw"));
            for(var i=0;i<a.length;i++){
                if(a[i].id===$(this).parent().parent().attr("id")){
                    if(a[i].num>1){
                    a[i].num--;
                    }else{
                        a[i].num=1;
                        alert("多少买一件奥");
                    }
                }
            }
            localStorage.setItem("xzw",JSON.stringify(a));
            that.load();
        })
        $("tbody").on("click",".right",function(){
            // console.log($(this).parent().parent().attr("id"));
            var a=localStorage.getItem("xzw")?JSON.parse(localStorage.getItem("xzw")):[];
            // console.log(localStorage.getItem("xzw"));
            for(var i=0;i<a.length;i++){
                if(a[i].id===$(this).parent().parent().attr("id")){
                    if(a[i].num<30){
                    a[i].num++;
                    }else{
                        alert("该商品已经被您买空拉，请先结算！");
                        a[i].num=30;
                    }
                }
            }
            localStorage.setItem("xzw",JSON.stringify(a));
            that.load();
        })
        // 删除localStorage
        $("tbody").on("click",".remove",function(){
            // console.log("这是删除按钮");
            var a=localStorage.getItem("xzw")?JSON.parse(localStorage.getItem("xzw")):[];
            // console.log(a);
            // console.log($(this).parent().parent().attr("id"));
            for(var i=0;i<a.length;i++){
                if(a[i].id===$(this).parent().parent().attr("id")){
                    // 数组删除元素
                    a.splice(i,1);
                    break;
                }
            }
            localStorage.setItem("xzw",JSON.stringify(a));
            that.load();
        })
    }
    load() {
        // 处理参数
        this.data = localStorage.getItem("xzw") ? JSON.parse(localStorage.getItem("xzw")) : [];
        var that = this;
        ajaxPost(this.url, function (res) {
            that.res = JSON.parse(res);
            // console.log(res);
            var str = "";
            var l = 0;
            var q = 0;
            for (var i = 0; i < that.data.length; i++) {
                // 拿到localStorage里的数据
                // 要请求所有的数据进行比对
                // console.log(that.data[i]);
                for (var j = 0; j < that.res.length; j++) {
                    if (that.data[i].id == that.res[j].id) {
                        var k = that.data[i].num * that.res[j].price;
                        // console.log(that.res[j]);
                        str += `<tr id="${that.res[j].id}">
                            <td><input type="checkbox" class="check"></td>
                            <td><img src="${that.res[j].img}" ></td>
                            <td>${that.res[j].name}</td>
                            <td >${that.res[j].price}</td>
                            <td><input type="button" value="-" class="btn left"/><span>${that.data[i].num}</span><input type="button" value="+" class="btn right"/></td>
                            <td >${k}</td>
                            <td><input type="button" class="remove" value="删除"></td>
                        </tr>`;
                        q += k;
                    }
                }
                l += that.data[i].num;
                // console.log(that.b);
                that.b.innerHTML = l;
                that.i.innerHTML = q;
            }
            that.tbody.innerHTML = str;
        })


    }
}

new Car();