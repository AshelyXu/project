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
		
$(function(){
			$(window).scroll(function(){
				var sT=$(window).scrollTop();
			if(sT>50){
				$(".toTop").css("display","block");
			}else{
				$(".toTop").css("display","none");
			}
			});
			$("li.toTop").click(function(){
				$("body").animate({"scrollTop":0},500);
			
		 })

		})	
		
 var lo = document.getElementById("time");
		 
    function shijian(sj,time){
	var d = new Date(sj);
	var t = d.getTime();
	var t2 = new Date();
	var d2 = t2.getTime();
	var d4 = (t-d2);
	var r=parseInt(d4/1000);
	var h = Math.floor(r/(3600*24));

	var x = Math.floor((r-(h*3600*24))/(60*60));
	var m =Math.floor((r-((h*3600*24)+(60*60*x)))/60);
	var c =Math.floor(r-((h*3600*24)+(60*60*x)+(60*m)));
    time.innerHTML = h+"天"+x+"时"+m+"分"+c+"秒";
}
	setInterval(function() {
			shijian("2017,9,20",lo);
			},1000);		


window.addEventListener("load",function(){
			var txt=document.getElementById("js");
		     add.onclick=function(){
				var txt1=txt.value*1;
				txt.value=++txt1;
			}
		     del.onclick=function(){
		     	if(txt.value<=1){
		     		txt.value="1";
		     	}
		     	else if(txt.value>1){
				var txt1=txt.value*1;
				txt.value=--txt1;
				}
			}
		});	
		
var btn = document.getElementById("btn2");
var show = document.getElementById("showm");
btn.onmouseover=function(){
			show.style.display="block";
		}
		btn.onmouseout=function(){
		show.style.display="none"
		}
	

$(function() {
	var offset = $("#end").offset();
	$("#cbtn").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		var addcar = $(this);
//		console.log(addcar)
	    var flyer=$("#fly")
		var n=$(".jisu p").text();
		n++;
		$(".jisu p").text(n)
		console.log(n)
		flyer.fly({
			start: {
				left: event.clientX,
				top: event.clientY
			},
			end: {
				left: 1349,
				top: 400,
				width: 0,
				height: 0
			},
			onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
//				addcar.css("cursor","default").removeClass('orange').unbind('click');
				this.destory();
			}
		});
		
	});
	});
	
