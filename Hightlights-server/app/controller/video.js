'use strict';
const Controller = require('egg').Controller;
class VideoController extends Controller {
	async search() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.search(obj);
		ctx.body = result;
	}
	async myhightlightsearch() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.myhightlightsearch(obj);
		ctx.body = result;
	}
	async searchbestvideo() {
		const { ctx } = this;
		const result = await ctx.service.video.searchbestvideo();
		ctx.body = result;
	}
	async getvideomessage() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.getvideomessage(obj);
		ctx.body = result;
	}
	async addlikecount() {
		const { ctx } = this;
		let obj = ctx.request.query;
		const result = await ctx.service.video.addlikecount(obj);
		ctx.body = result;
	}
	async uploadhightlight() {
		const { ctx } = this;
		let obj = ctx.request.body;
		const result = await ctx.service.video.uploadhightlight(obj);
		ctx.body = result;
	}
}
module.exports = VideoController;