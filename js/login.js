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
		

//$(function(){
//  	$(".top li:first").mouseover(function(){
//  		$(".top .conter .lis").animate(500).slideDown();
//	});
//});


 function checkuser(){
		var val=form1.user.value;
		var reg= /^1\d{10}$/;
		var reg1= /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
		if(reg.test(val)||reg1.test(val)){
			utip1.innerHTML='<span class="tips_true">输入正确</span>';
			return true;
			}else if(val==""){
				utip1.innerHTML='<span class="tips_false">请输入账号</span>';
			    return false;
		}else{
			utip1.innerHTML='<span class="tips_false">请输入正确格式的账号</span>';
			return false;
		   }
		 }
 function checkpwd(){
		var val=form1.pwd.value;
		var reg1=/^\S{6,16}$/;
		if(reg1.test(val)){
			utip2.innerHTML='<span class="tips_true">输入正确</span>';
			return true;
			}else if(val==""){
				utip2.innerHTML='<span class="tips_false">请输入密码</span>';
			   return false;
			}else{
			utip2.innerHTML='<span class="tips_false">请输入正确格式的密码</span>';
			return false;
		   }
		 }
function checkchk(){
	var val=form1.pwd.value;
	if(val==""){
		utip3.innerHTML='<span class="tips_false">请输入验证码</span>';
	    return false;
	}else{
		utip3.innerHTML='<span class="tips_true">验证码正确</span>';
	  return true;
	}
}
function checkAll(){
	return checkuser()&&checkpwd();
}
$(function(){
   	$("#btn").click(function(){
   		var $u=$("#user").val();
   		var $p=$("#pwd").val();
   		$.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+$u+"&password="+$p,function(res,status,xhr){
			if(res==0){
				$("#tip1").text("用户名不存在");
			}else if(res==2){
				alert("用户名与密码不符");
			}else{
//				window.location.href="index.html";
			}
   		})
   	})
   })


        // var verifyCode = new GVerify("v_container");
        // var verifyCode = new GVerify({id:"v_container",type:"blend"});
		// document.getElementById('sx').onclick = function(){verifyCode.refresh();};//verifyCode.refresh()刷新验证码

		// document.getElementById("btn").onclick = function(){
		// 	var res = verifyCode.validate(document.getElementById("code_input").value);
		// 	//verifyCode.validate(code);验证图形验证码，参数code为用户输入的验证码，返回值：正确：true,错误：false
		// 	if(res){
		// 		alert("验证正确");
		// 	}else{
		// 		alert("验证码错误");
		// 	}
		// }