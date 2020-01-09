/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 14:28:19
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-08 19:26:55
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
			// utip2.innerHTML='';
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
// 前端表单验证
var btn=document.getElementById("btn");
var t= setInterval(() => {
	if(checkAll()){
		// utip2.innerHTML='';
		$('#btn').attr("disabled",false);
		btn.style.backgroundColor="#ec3e7d";
	}else{
		btn.disabled="disabled";
		btn.style.backgroundColor="#ccc";
	}
}, 100);
var user=document.getElementById("user");
var pass=document.getElementById("pwd");
var  url="http://localhost:83/api";
// 发送ajax请求 进行后端验证
btn.onclick=function(){	
	ajaxPost(url,(res)=>{
		res=JSON.parse(res);
		// console.log(res);
		if(res.code===2){
			utip2.innerHTML='<span class="tips_false">密码错误奥</span>';
		}
		if(res.code===0){
			utip2.innerHTML='<span class="tips_false">暂未注册，快去吧<a href="zc.html" class="zc">注册</a></span>';
		}
		if(res.code===1){
			utip2.innerHTML='';
			alert("恭喜您登录成功,点击确定后3秒后跳转至首页");
			setInterval(()=>{
				window.location.href="index.html";
		},3000);	
		}
	},{
		user:user.value,
		pass:pass.value,
		type:"login"
	})
}
// post方法封装
function ajaxPost(url,cb,data){
    data=data||{};
    var str="";
    for(var i in data){
    str+=`${i}=${data[i]}&`;
    }
    str=str.slice(0,str.length-1);
    var ajx=new XMLHttpRequest();
    ajx.open("post",url,true);
    ajx.onreadystatechange=function(){
        if(ajx.readyState===4&&ajx.status===200){
            cb(ajx.responseText);
        }
	}
    ajx.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajx.send(str);
}
