/*
 * @说明: 
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 15:11:59
 * @最后编辑: Youmi
 * @LastEditTime : 2020-01-09 13:51:18
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        var urlObj = url.parse(req.url);
        if (urlObj.pathname === "/api") {
            // 这里是ajx请求
            ajxManage(req, res);
        } else {
            // 这里是文件请求
            fileManage(req, res);
        }
    }
}).listen("83")

// 请求文件的封装
function fileManage(req, res) {
    const path = "." + req.url;
    fs.readFile(path, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (x, w) => {
                res.write(w);
                res.end();
            })
        } else {
            res.write(data);
            res.end();
        }

    })
}
// 用来存储用户名和密码
let userMag = [];
//用来存储详情页需要的页面
let idMsg = {};
// 请求ajx的封装
function ajxManage(req, res) {
    var str = "";
    req.on("data", (d) => {
        str += d;
    })
    req.on("end", () => {
        // post的数据的解析
        let data = querystring.parse(str);
        // 非空为true 
        if (!str) {
            // get方式
            data = url.parse(req.url, true).query;
        }
        if (data.type == "login") {
            // 登录
            dl(res, data);
        }
        if (data.type == "zc") {
            // 注册
            zc(res, data);
        }
        if (data.type == "details") {
            // 详情页
            details(res, data);
        }
        if (data.type == "load") {
            res.write(JSON.stringify(idMsg));
            res.end();
        }
        if (data.type == "search") {
            search(res, data);
        }

        if (data.type == "show") {
            res.write(JSON.stringify(setMsg));
            res.end();
        }
    });
}
// 注册的函数封装
function zc(res, data) {
    let i = userMag.some((val) => {
        return val.user === data.user;
    });
    // 返回前端的信息
    let resMsg = {};
    if (i) {
        resMsg.code = 0;
        resMsg.msg = "该用户已经注册！";
    } else {
        resMsg.code = 1;
        resMsg.msg = "用户注册成功！";
        userMag.push({
            user: data.user,
            pass: data.pass,
            onoff: 0
        })
    }
    res.write(JSON.stringify(resMsg))
    res.end();
}
// 登录的函数封装
function dl(res, data) {
    let on = true;
    for (var i = 0; i < userMag.length; i++) {
        let resMsg = {};
        if (userMag[i].user === data.user) {
            on = false;
            if (userMag[i].pass === data.pass) {
                resMsg.code = 1;
                resMsg.msg = "登录成功！";
            } else {
                resMsg.code = 2;
                resMsg.msg = "密码错误！";
            }
            res.write(JSON.stringify(resMsg));
            res.end();
        }
        return;
    }
    if (on) {
        let resMsg = {
            code: 0,
            msg: "用户名不存在，请先注册"
        }
        res.write(JSON.stringify(resMsg));
        res.end();
    }
}

// 存储当前点击的图片id
function details(res, data) {
    idMsg = {};
    // console.log(data);
    // console.log(data);
    idMsg.id = data.id;
    // idMsg.push(data.id);
    // console.log(resMsg);
    // res.write(JSON.stringify(resMsg));
    res.end();
}
//用来模拟数据库的数据
let valMsg = [{
        name: "香水",
        tips: "迷你香水 小样",
        price: 190,
        old: 295,
        discount: 4.5,
        img: "img/b33-3.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 145,
        old: 295,
        discount: 4.5,
        img: "img/b33-2.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 150,
        old: 400,
        discount: 4.5,
        img: "img/b33-1.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 105,
        old: 295,
        discount: 4.5,
        img: "img/b2-4.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 130,
        old: 210,
        discount: 4.5,
        img: "img/b33-4.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 230,
        old: 560,
        discount: 4.5,
        img: "img/b333-2-1.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 116,
        old: 395,
        discount: 4.5,
        img: "img/b333-4.jpg"
    },
    {
        name: "香水",
        tips: "迷你香水 小样",
        price: 154,
        old: 245,
        discount: 4.5,
        img: "img/b333-3.jpg"
    },
    {
        name: "口红",
        tips: "迷你香水 小样",
        price: 346,
        old: 451,
        discount: 4.5,
        img: "img/b3-3.jpg"
    },
    {
        name: "口红",
        tips: "迷你香水 小样",
        price: 236,
        old: 478,
        discount: 4.5,
        img: "img/b3.jpg"
    },
    {
        name: "口红",
        tips: "迷你香水 小样",
        price: 124,
        old: 246,
        discount: 4.5,
        img: "img/b3-1.jpg"
    },
    {
        name: "口红",
        tips: "迷你香水 小样",
        price: 146,
        old: 246,
        discount: 4.5,
        img: "img/b333-1.jpg"
    },
    {
        name: "洗护",
        tips: "迷你香水 小样",
        price: 310,
        old: 210,
        discount: 4.5,
        img: "img/b2-2.jpg"
    },
    {
        name: "洗护",
        tips: "迷你香水 小样",
        price: 46,
        old: 95,
        discount: 4.5,
        img: "img/b2-3.jpg"
    },
    {
        name: "洗护",
        tips: "迷你香水 小样",
        price: 73,
        old: 103,
        discount: 4.5,
        img: "img/b4.jpg"
    },
    {
        name: "洗护",
        tips: "网红产品 爆款",
        price: 42,
        old: 106,
        discount: 4.5,
        img: "img/b3-2.jpg"
    }
];
let setMsg = [];

function search(res, data) {
    setMsg = [];
    for (var i = 0; i < valMsg.length; i++) {
        if (data.name === valMsg[i].name) {
            setMsg.push(valMsg[i])
        }
    }
    res.end();
} 