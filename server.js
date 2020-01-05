/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 15:11:59
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-05 20:13:21
 */
const http=require("http");
const fs=require("fs");
const url=require("url");
const querystring=require("querystring");
http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        var urlObj=url.parse(req.url);
        if(urlObj.pathname==="/api"){
            // 这里是ajx请求
            ajxManage(req,res);
        }else{
            // 这里是文件请求
            fileManage(req,res);
        }
    }
}).listen("83")

// 请求文件的封装
function fileManage(req,res){
    const path="."+req.url;
        fs.readFile(path,(err,data)=>{
            if(err){
                fs.readFile("./404.html",(x,w)=>{ 
                    res.write(w);
                    res.end();
                })
            }else{
                res.write(data);
                res.end();
            }
            
        })
}
// 用来存储用户名和密码
let userMag=[];

// 请求ajx的封装
function ajxManage(req,res){
    var str="";
    req.on("data",(d)=>{
        str+=d;
    })
    req.on("end",()=>{
        // post的数据的解析
        let data=querystring.parse(str);
        // 非空为true 
        if(!str){
            // get方式
            data=url.parse(req.url,true).query;
        }
        if(data.type=="login"){
            // 登录
             dl(res,data);
        }else{
            // 注册
        zc(res,data);
        }
    });  
}
// 注册的函数封装
function zc(res,data){
    let i= userMag.some((val)=>{
        return  val.user===data.user;
     });
     // 返回前端的信息
     let resMsg={};
     if(i){
         resMsg.code=0;
         resMsg.msg="该用户已经注册！";
     }else{
         resMsg.code=1;
         resMsg.msg="用户注册成功！";
     userMag.push({
         user:data.user,
         pass:data.pass,
         onoff:0
     })
     }
     res.write(JSON.stringify(resMsg))
     res.end();
}
// 登录的函数封装
function dl(res,data){
    let on =true;
for(var i=0;i<userMag.length;i++){
    let resMsg={};
    if(userMag[i].user===data.user){
        on=false;
        if(userMag[i].pass===data.pass){
             resMsg.code=1;
             resMsg.msg="登录成功！";
        }else{
            resMsg.code=2;
            resMsg.msg="密码错误！";
        }
        res.write(JSON.stringify(resMsg));
        res.end();
    }
    return; 
}
if(on){
    let resMsg={
        code:0,
        msg:"用户名不存在，请先注册"
    }
    res.write(JSON.stringify(resMsg));
    res.end();
}
}