'use strict';
const Controller = require('egg').Controller;
class ManagerController extends Controller {
	async coder() {
		const { ctx } = this;
		const result = await ctx.service.manager.coder();
		ctx.body = result; // 返回一张svg图片
	}
	async managerlogin() {
		const { ctx } = this;
		const obj = ctx.request.body;
		const result = await ctx.service.manager.managerlogin(obj);
		ctx.body = result;
	}
	async managerislogin() {
		const { ctx } = this;
		const result = await ctx.service.manager.managerislogin();
		ctx.body = result;
	}
	async managerloginout() {
		const { ctx } = this;
		const result = await ctx.service.manager.managerloginout();
		ctx.body = result;
	}
	async managermessage() {
		const { ctx } = this;
		const obj = ctx.request.query;
		const result = await ctx.service.manager.managermessage(obj);
		ctx.body = result;
	}

}
module.exports = ManagerController;