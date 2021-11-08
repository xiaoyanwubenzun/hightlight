'use strict';
let md5 = require("md5");
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
class UserController extends Controller {
	async changeusermessage() {
		const { ctx } = this;
		const obj = ctx.request.body;
		const result = await ctx.service.user.changeusermessage(obj);
		ctx.body = result;
	}
	async getuserpaiming() {
		const { ctx } = this;
		const result = await ctx.service.user.getuserpaiming();
		ctx.body = result;
	}
	async searchuserbestvideo() {
		const { ctx } = this;
		const obj = ctx.request.query;
		const result = await ctx.service.user.searchuserbestvideo(obj);
		ctx.body = result;
	}
	//服务器文件结构优化
	//登录
	async coder() {
		const { ctx } = this;
		const captcha = svgCaptcha.create({
			size: 4,
			fontSize: 50,
			width: 100,
			height: 40,
			bacground: '#48D1CC'
		});
		this.ctx.session.svgtext = captcha.text; //缓存验证码中的文字
		// console.log(ctx.session.svgtext);
		ctx.body = captcha.data; // 返回一张svg图片
	}
	async login() {
		let yanzhen = { "code": "1", "Msg": "登录成功" };
		const { ctx } = this;
		const username = ctx.request.body.username;
		const passwd = ctx.request.body.passwd;
		const yzm = ctx.request.body.yanzhengma;

		if (yzm.toLowerCase() != ctx.session.svgtext.toLowerCase()) {
			yanzhen = { "code": "-2", "Msg": "验证码错误" };
			ctx.body = yanzhen;
			return;
		}
		const result = await ctx.service.user.LoginByName(username);
		if (result.length == 0) {
			yanzhen = { "code": "-1", "Msg": "账号错误或不存在或违规封停" };
		} else if (md5(passwd) != result[0].passwd) {
			yanzhen = { "code": "0", "Msg": "密码错误" };
		} else {
			yanzhen = { "code": "1", "Msg": "登录成功" };
			ctx.session.uid = result[0].uid;
			// console.log(`哈哈哈哈${result[0].uid}`);
		}
		ctx.body = yanzhen;
	}
	async islogin() {
		let islogin = { "code": "1", "Msg": "已登录" };
		const { ctx } = this;
		// console.log(ctx.session.uid);
		if (!ctx.session.uid) {
			islogin = { "code": "-1", "Msg": "未登录" };
		} else if (ctx.session.uid) {
			islogin = { "code": "1", "Msg": "已登录", "uid": ctx.session.uid };
		}
		// console.log(islogin);
		ctx.body = islogin;
	}
	async loginout() {
		let loginout = { "code": "1", "Msg": "退出成功" };
		const { ctx } = this;
		ctx.session.uid = null;
		if (!ctx.session.uid) {
			loginout = { "code": "1", "Msg": "退出成功" };
		} else if (ctx.session.uid) {
			loginout = { "code": "-1", "Msg": "退出失败" };
		}
		ctx.body = loginout;
	}
	//注册
	async zhuce() {
		const { ctx } = this;
		let obj = ctx.request.body;
		const result = await ctx.service.user.zhuce(obj);
		ctx.body = result;
	}
	//忘记密码
	async forgetpass() {
		const { ctx } = this;
		const obj = ctx.request.body;
		const result = await ctx.service.user.forgetpass(obj);
		ctx.body = result;
	}
	async getusermessage() {
		const { ctx } = this;
		let uid = ctx.request.body.uid;
		const result = await ctx.service.user.getusermessage(uid);
		ctx.body = result;
	}
}
module.exports = UserController;