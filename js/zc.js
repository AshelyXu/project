/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 14:28:19
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-05 21:07:09
 */
        var aaa = document.getElementById("aaa");
		var bbb = document.getElementById("bbb");
		var a1 = document.getElementById("a1");
		var b1 = document.getElementById("b1");
		// 导航关注我们显示消失
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
		// 前端验证账号
var btn=document.getElementById("btn");
var xz=document.getElementById("ch2");
function checkusr(){
		var val=form2.user.value;
		var reg= /^1\d{10}$/;
		var reg1= /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
		if(reg.test(val)||reg1.test(val)){
			tip1.innerHTML='<span class="tips_true">输入正确</span>';
			return true;
			}else if(val==""){
				tip1.innerHTML='<span class="tips_false">请输入账号</span>';
			    return false;
		}else{
			tip1.innerHTML='<span class="tips_false">请输入正确格式的账号</span>';
			return false;
		   }
		 }
        // 前端验证密码
function checkpd(){
		var val=form2.pwd.value;
		var reg= /\w{6,16}$/;
		if(reg.test(val)){
			tip2.innerHTML='<span class="tips_true">输入正确</span>';
			return true;
			}else if(val==""){
				tip2.innerHTML='<span class="tips_false">请输入账号,6-16位字符和数字</span>';
			    return false;
		}else{
			tip2.innerHTML='<span class="tips_false">请输入正确格式的账号</span>';
			return false;
		   }
		 }

function checkrpd(){
		var val1=form2.pwd.value;
		var val=form2.rpwd.value;
		if(val==val1){
			tip3.innerHTML='<span class="tips_true">输入正确</span>';
			return true;
		}else{
			tip3.innerHTML='<span class="tips_false">两次密码不一致，请重新输入</span>';
			return false;
		   }
}
// 设置按钮的disabled发送状态
function checkAll(){
	return checkusr()&&checkpd()&&checkrpd()&&xz.checked;
}
var t= setInterval(() => {
	if(checkAll()){
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
	ajaxGet(url,(res)=>{
		 res=JSON.parse(res);
		if(res.code===0){
			alert("该用户已被注册换个名字哦！");
		}else{
			alert("恭喜您注册成功,点击确定后3秒后跳转至登录页");
			setInterval(()=>{
				window.location.href="login.html";
		},3000);	
		}
	},{
		user:user.value,
		pass:pass.value,
		type:"zc"
	})
}



// get
function ajaxGet(url,cb,data){
    data=data||{};
    var str="";
    for(var i in data){
        str+=i+"="+data[i]+"&";
    }
    var d=new Date();
    url=url+"?"+str+"_xzw_T="+d.getTime();
    var ajx=new XMLHttpRequest;
    ajx.open("get",url,true);
    ajx.onreadystatechange=function(){
        if(ajx.readyState===4&&ajx.status===200){
            cb(ajx.responseText);
        }
    }
    ajx.send();
}

