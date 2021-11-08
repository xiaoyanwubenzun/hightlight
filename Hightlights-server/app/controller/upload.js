'use strict';
let wenjian = require('fs');
let path = require('path');
const Controller = require('egg').Controller;
class UploadController extends Controller {
	async uploadimg() {
		const { ctx } = this;
		let result = {
			// errno 即错误代码，0 表示没有错误。
			//       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
			"errno": 0,

			// data 是一个数组，返回图片Object，Object中包含需要包含url、alt和href三个属性,它们分别代表图片地址、图片文字说明和跳转链接,alt和href属性是可选的，可以不设置或设置为空字符串,需要注意的是url是一定要填的。
			"data": [{
				url: "图片地址",
				alt: "图片文字说明",
				href: "跳转链接",
			}]
		}
		let file = ctx.request.files[0];
		// let obj = ctx.request.body;
		// console.log(obj);
		// let newpath = path.join(__dirname, "../public/imgupload/" + `${Date.now()}` + `${file.filename}`);
		let newpath = "/public/imgupload/" + `${Date.now()}` + "_" + `${file.filename}`;
		let to = path.dirname(__dirname) + newpath;
		await wenjian.copyFileSync(file.filepath, to);
		await wenjian.unlinkSync(file.filepath)
		let httpurl = `http://localhost:8090${newpath}`;
		result.data[0].url = httpurl;
		result.data[0].alt = path.basename;
		result.data[0].href = httpurl;
		// console.log(file.filepath);
		ctx.body = result;
	}
	async uploadvideo() {
		const { ctx } = this;
		let result = {
			// errno 即错误代码，0 表示没有错误。
			//       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
			"errno": 0,

			// data 是一个数组，返回图片Object，Object中包含需要包含url、alt和href三个属性,它们分别代表图片地址、图片文字说明和跳转链接,alt和href属性是可选的，可以不设置或设置为空字符串,需要注意的是url是一定要填的。
			"data": [{
				url: "视频地址",
			}]
		}
		let file = ctx.request.files[0];
		// let obj = ctx.request.body;
		// console.log(obj);
		let newpath = "/public/videoupload/" + `${Date.now()}` + "_" + `${file.filename}`;
		let to = path.dirname(__dirname) + newpath;
		await wenjian.copyFileSync(file.filepath, to);
		await wenjian.unlinkSync(file.filepath);
		let httpurl = `http://localhost:8090${newpath}`;
		result.data[0].url = httpurl;
		console.log(file.filepath);
		ctx.body = result;
	}
}
module.exports = UploadController;