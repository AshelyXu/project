/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2019-12-17 19:17:58
 * @最后编辑: Youmi
 * @LastEditTime : 2019-12-25 19:57:56
 */
// get方法封装
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


function jsonp(url,cb,data){
    var d=new Date();
    var str="";
    for(var i in data){
        str+=`${i}=${data[i]}&`;
    }
    url=url+"?"+str+"_xzw_T="+d.getTime();
    var scr=document.createElement("script");
    scr.src=url;
    document.body.appendChild(scr);
    window[data[data.s_name]]=function(res){
        cb(res);
    }
    scr.remove();
    }