/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 14:28:19
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-05 20:20:13
 */
//导航栏的关注我们显示
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
		// 格式检测
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
function checkAll(){
	return checkuser()&&checkpwd();
}

