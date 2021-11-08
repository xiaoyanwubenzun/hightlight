'use strict';
const Controller = require('egg').Controller;
class VideoController extends Controller {
	async search() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.search(obj);
		ctx.body = result;
	}
	async getvideomessage() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.getvideomessage(obj);
		ctx.body = result;
	}
	async checkvideoresult() {
		const { ctx } = this;
		let obj = ctx.request.body;
		const result = await ctx.service.video.checkvideoresult(obj);
		ctx.body = result;
	}
}
module.exports = VideoController;