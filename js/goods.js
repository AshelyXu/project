/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 14:28:19
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-07 22:43:31
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
	function display(res){
		console.log(res);
		url="http://localhost:83/data.details.json";
		// ajaxGet()
	}
	
