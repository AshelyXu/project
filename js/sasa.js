//      $(function(){
//      	$(".top li:first-child").mouseover(function(){
//      		$(".top .conter ul li:first-child .lis").slideDown(1000);
//      	});
//      });
//      
        
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
	
// 楼层
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
			if(sT>50){
				$(".toTop").css("display","block");
			}else{
				$(".toTop").css("display","none");
			}
			if(sT<5000&&sT>450){
				$(".elevator").fadeIn(1000);
//				$(".elevator").css("position","fixed");
			}else{
				$(".elevator").fadeOut(1000);
			}
			});
			$(".elevator li").click(function(){
				$(this).addClass("now").siblings("li.now").removeClass("now");
				var n=$(this).index();
				var oT=$(".step").eq(n).offset().top;
				$("body").animate({"scrollTop":oT-50},1000);
			})
			$("li.toTop").click(function(){
				$("body").animate({"scrollTop":0},500);
			
		 })

		})	
		
//倒计时

    var lo = document.getElementById("tm");
    var lo1 = document.getElementById("tm1");
	var lo2 = document.getElementById("tm2");
	var lo3 = document.getElementById("tm3");
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
    time.innerHTML = x+":"+m+":"+c;
}
	setInterval(function() {
			shijian("2017,9,10",lo);
			},1000);
	
	setInterval(function() {
			shijian("2017,9,10",lo1);
			},1000);
	setInterval(function() {
			shijian("2017,9,10",lo2);
			},1000);
	setInterval(function() {
			shijian("2017,9,10",lo3);
			},1000);
			
//ajax

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
