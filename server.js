/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 15:11:59
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-05 16:50:04
 */
const http=require("http");
const fs=require("fs");
// 用来解析url
const url=require("url");
// 专门用来解析：字段名=字段值&字段名=字段值
const querystring=require("querystring");
http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        // console.log(req.url);
        var urlObj=url.parse(req.url);
        // console.log(u.pathname);
        // console.log(u);得到了一个对象 对象的身上有个pathname属性记录的是请求的地址
        if(urlObj.pathname==="/api"){
            // 这里是ajx请求
            ajxManage(req,res);
        }else{
            // 这里是文件请求
            fileManage(req,res);
        }
        // 采用switch-----路由处理
        // switch(urlObj.pathname){
        //     case "/api":
        //         ajxManage(req,res);break;
        //     case "login":
        //         loginManage(req,res);break;
        //     default:
        //         fileManage(req,res);
        // }
    }
}).listen("83")

// 请求文件的封装
function fileManage(req,res){
    const path="."+req.url;
        fs.readFile(path,(err,data)=>{
            if(err){
                fs.readFile("",(a,b){
                    res.write(b);
                })
            }else{
                res.write(data);
            }
            res.end();
        })
}
// 请求ajx的封装
function ajxManage(req,res){
    // 将url解析成对象
    // const u=url.parse(req.url,true);
    // query方法会将url后面拼接的数据自动解析成对象
    // console.log(u.query);
    // console.log("这是ajx的请求");
    // 在post发送的数据在要配合req的事件进行接收-单纯的data事件会导致数据不完整要配合end事件
    ;
    req.on("data",(d)=>{
        str+=d;
    })
    req.on("end",()=>{
        // 用来解析字段名=字段值&字段名=字段值-解析成对象 
        // post的数据的解析
        let data=querystring.parse(str);
        // 如果post数据在解析以前为空，
        // 非空为true 
        if(!str){
            // 就去解析get
            // get方式
            data=url.parse(req.url,true).query;
        }
        // 不管是post还是get都会发送
        res.write(`${data.user}---${data.pass}`);
        res.end();
    });
    // 两种方式合并---不管是get还是post发送方式 事件都会执行当是get的方式的时候创建的str会是空--要先执行post因为是异步处理
    
    
}
// 后台规定区分url和ajax请求的不同 