		//导航
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
        // 轮播图
        var banner = document.getElementsByClassName("banner")[0];
		var pics = banner.getElementsByClassName("pic");
		var span= banner.getElementsByTagName("span");
		var index = 0;
		var interId = null;
		for(var i = 0;i<pics.length;i++){
			pics[i].style.opacity = 0;
		}
		pics[index].style.opacity = 1;
		function go(num){
			pics[index].style.opacity = 0;
			pics[num].style.opacity = 1;
			span[index].className = "";
			span[num].className = "now";
			index = num;
		}
		function auto(){
			interId = setInterval(function(){
				var n = index;
				n++;
				if(n>=pics.length){n=0};
				go(n);
			},3000)
		}
		banner.onmouseover = function(){
			clearInterval(interId)
		}
		banner.onmouseout = function(){
			auto()
		}
		auto();
		for(var i = 0;i<span.length;i++){
			(function(j){
				span[j].onmouseover = function(){
					go(j)
				}
			}(i))
		}
// 公告栏+侧边
$(function(){
			function move(){
				$(".note .conter ul").animate({"margin-top":"-30px"},800,function(){
					$(this).css("margin-top",0);
					$(".note ul li").first().appendTo($(".note ul"));
				});
			}
			setInterval(move,5000);
		});
$(function(){
			$(window).scroll(function(){
				var sT=$(window).scrollTop();
			var wH=$(window).outerHeight();
			$(".step").each(function(i,v){
				var offT=$(this).offset().top;
				if(sT+wH/2>=offT){
					$(".elevator li").eq(i).addClass("now").siblings("li.now").removeClass("now");
				}else{
					$(".elevator li").eq(i).removeClass("now");
				}
			});
			});
			$(".elevator li").click(function(){
				$(this).addClass("now").siblings("li.now").removeClass("now");
				var n=$(this).index();
				var oT=$(".step").eq(n).offset().top;
				$("html").stop().animate({scrollTop:oT-50}
					,1000);
				// console.log($("html").scrollTop());
			})
			// 回到顶部效果
			$("li.toTop").click(function(){
				$("body").stop().animate({scrollTop:0}
					,500);
		 })
		})	
			
//ajax
// 搜索框-调用百度的接口
$("#ipt").keyup(function(){
			var $v = $(this).val();
			$.ajax({
				type:"get",
				url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $v + "&cb=?",
				async:true,
				dataType:"jsonp",
				success:function(res){
//					console.log(res)
					var d = res.s;
					$(".lis1-1").empty();
					$.each(d,function(i,v){
						var $li = $("<li>");
						$li.html(v);
						$(".lis1-1").append($li);
					});
				}
			});
		});
		
$("#ipt").keyup(function(){
	$(".lis1-1").css("display","block")
}).blur(function(){
	$(".lis1-1").css("display","none")
})
