/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 14:28:19
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-08 21:42:44
 */
var aaa = document.getElementById("aaa");
		var bbb = document.getElementById("bbb");
		var a1 = document.getElementById("a1");
		var b1 = document.getElementById("b1");
		aaa.onmouseover=function(){
			a1.style.display="block";
		}
		aaa.onmouseout=function(){
			a1.style.display="none"
		}
		bbb.onmouseover=function(){
			b1.style.display="block";
		}
		bbb.onmouseout=function(){
			b1.style.display="none"
		}
	onload=function(){
		// console.log(1);
		url="http://localhost:83/api";
		ajaxGet(url,function(res){
			// console.log(res);
			res=res?JSON.parse(res):{};
			// console.log(res);
			display(res);
		},{
			type:"load"
		})
	}
	function display(num){
		var conter=document.querySelector(".box1 .conter")
		// console.log(res);
		// console.log(num.id);
		url="http://localhost:83/data/details.json";
		ajaxPost(url,function(res){			
			// console.log(res);
			res=JSON.parse(res);
			console.log(res);
			var str="";
			for(var i=0;i<res.length;i++){
                if(num.id==res[i].id){
					str+=`<div class="left">
					<div class="shang" >
						<div class="ibox">
							<img src="${res[i].img1}">
							<b class="b"></b>
						</div>
						<div class="Bbox"><img src="${res[i].img1}"  class="img"></div>
					</div>
					<div class="bottom">
						<div class="imgbox1 xiao">
							<img src="${res[i].img1}">
						</div>
						<div class="imgbox2 xiao">
							<img src="${res[i].img2}">
						</div>
						<div class="imgbox3 xiao">
							<img src="${res[i].img3}">
						</div>
					</div>
				</div>
				<div class="rcont" id=${res[i].id}>
					<h2>${res[i].name}</h2>
					<p>${res[i].tip1}</p>
					<p>${res[i].tip2}</p>
					<span class="sp">${res[i].m1}</span>
					<span class="sp">${res[i].m2}</span>
					<span class="sp">${res[i].m3}</span>
					<p class="te">特卖价<span>￥${res[i].te2}</span><i>市场价￥${res[i].te}</i></p>
					<div class="sh"><input type="button"  id="cbtn" value="立即抢购" /> 
				</div>
				  </div>`;
				}
			}
			conter.innerHTML=str;
			show();
		})
	}
	// 放大镜
	
	// 点击下面改变图片
	function change(){
		var ibox=document.querySelector(".ibox");
		// var b=document.querySelector(".b");
		var Bbox=document.querySelector(".Bbox");
		// var img=document.querySelector(".img");
        $(".bottom").on("hover",".xiao",function(){
			// console.log($(this).children().attr("src"));
			var src=$(this).children().attr("src");
			// console.log(ibox.childNodes[1].src);
			ibox.childNodes[1].src=src;
			Bbox.childNodes[0].src=src;
		})
	}
	var btn=document.getElementById("cbtn");
	var arr_data;
	// 点击加入购物车 先注释防止出现错误
    // btn.onclick=function(){console.log(1);
	// 		// console.log($(".rcont").attr("id"));
	// 		arr_data=localStorage.getItem("xzw")?JSON.parse(localStorage.getItem("xzw")):[];
			
	// 		if(arr_data.length>=1){
	// 			var onoff=true;
	// 			for(var i=0;i<arr_data.length;i++){
	// 				if(arr_data[i].id===$(".rcont").attr("id")){
	// 					arr_data[i].num++;
	// 					onoff=false;
	// 				}
	// 			}
	// 			if(onoff){
	// 				arr_data.push({
	// 					id:$(".rcont").attr("id"),
	// 					num:1
	// 				})
	// 			}	
	// 		}else{
	// 			arr_data.push({
	// 			id:$(".rcont").attr("id"),
	// 			num:1
	// 		})
	// 		}
			// 第一次存，已有数据但是这个商品第一次存，这个商品是第二次存；
	// 		localStorage.setItem("xzw",JSON.stringify(arr_data));
	// 	}
    function show(){
		$(".ibox").on("mouseover",function(eve){
			$(".b").css({
				display:"block"
			});
			$(".Bbox").css({
				display:"block"
			});
		})
		$(".ibox").on("mousemove",function(eve){
			// b的移动
				var e=eve||window.event;
				move(e);
		})
		$(".ibox").on("mouseout",function(){
			$(".b").css({
				display:"none"
			});
			$(".Bbox").css({
				display:"none"
			});
		})
		// 设置 
		var ibox=document.querySelector(".ibox");
		var b=document.querySelector(".b");
		var Bbox=document.querySelector(".Bbox");
		var img=document.querySelector(".img");
		function move(e){
		var t=e.clientY-(ibox.parentNode.parentNode.offsetTop+ibox.offsetTop)-b.offsetHeight/2+document.documentElement.scrollTop;
		var l=e.clientX-(ibox.parentNode.parentNode.offsetLeft+ibox.offsetLeft)-b.offsetWidth/2;
			if(l<0) l=0;
			if(t<0) t=0;
			if(l>ibox.offsetWidth-b.offsetWidth){
				l=ibox.offsetWidth-b.offsetWidth;
			}
			if(t>ibox.offsetHeight-b.offsetHeight){
				t=ibox.offsetHeight-b.offsetHeight;
			}
			b.style.left=l+"px";
			b.style.top=t+"px";
			// 设置右边大图的移动
			var x=l/(ibox.offsetWidth-b.offsetWidth)*(Bbox.offsetWidth-img.offsetWidth);
			var y=t/(ibox.offsetHeight-b.offsetHeight)*(Bbox.offsetHeight-img.offsetHeight);
			img.style.top=y+"px";
			img.style.left=x+"px";
		}
		// 滑过改变图片
		change();
	}

	