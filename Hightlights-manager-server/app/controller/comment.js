'use strict';
const Controller = require('egg').Controller;
class CommentController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = '';
	}
}
module.exports = CommentController;