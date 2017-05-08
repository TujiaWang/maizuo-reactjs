const express = require('express');
const path = require('path');
const http = require('http');
const app = express();


//设置CORS
//使用中间件的方式，针对所有的请求，都允许跨域访问
app.use("*", (req,res,next) => {
	res.setHeader('Access-Control-Allow-Origin', "*"); //*表示所有域
	res.setHeader('Access-Control-Allow-Credentials', true); //跨域时能否使用cookie
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next(); //注意，next不能少
});

//proxy路由
app.get("/proxy",(req,res) => {
	//目标url
	// let url = "http://v.juhe.cn/toutiao/index?type=top&key=fdbe4736f44b03fd18310ae63d058e69";
	let path = req.query.url;
	let page = req.query.page;
	let count = req.query.count;
	let url = path+"&page="+page + "&count="+count;
	console.log(url);
	// let url = "http://m.maizuo.com/v4/api/film/now-playing?__t=1489828306968&page=1&count=10"
	let data = "";
	http.get(url,(response) => {
		response.on('data',(chunk)=> {
			data += chunk;
		});
		response.on('end',() => {
			//data就是完整的数据
			// console.log(typeof data);
			// console.log(data);
			res.json(data);
		});
	});
});
app.listen(3000,() => {console.log('http server is listening in port 3000...')});