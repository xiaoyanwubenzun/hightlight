'use strict';
const Controller = require('egg').Controller;
class CommentController extends Controller {
	async addcomment() {
		const { ctx } = this;
		const obj = ctx.request.query;
		const result = await ctx.service.comment.addcomment(obj);
		ctx.body = result;
	}
	async reloadcomment() {
		const { ctx } = this;
		const obj = ctx.request.query;
		const result = await ctx.service.comment.reloadcomment(obj);
		ctx.body = result;
	}
}
module.exports = CommentController;