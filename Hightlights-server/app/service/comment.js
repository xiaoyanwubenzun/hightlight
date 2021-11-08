const Service = require('egg').Service;
class CommentService extends Service {
	async addcomment(obj) {
		let result = { code: 1, Msg: '评论成功' };
		const sql = 'INSERT INTO `comment` (vid, uid, content)  VALUES (?, ?, ?)';
		const data = await this.app.mysql.query(sql, [obj.vid, obj.uid, obj.content]);
		if (!data.affectedRows) {
			result = { code: 0, Msg: '评论失败' };
		}
		return result;
	}
	async reloadcomment(obj) {
		let result = { code: 1, Msg: '评论刷新成功' };
		const sql = 'SELECT c.cid,c.uid,c.content,c.createtime,u.username,u.userimg FROM `comment` c LEFT JOIN `user` u ON u.uid=c.uid WHERE c.vid=? AND c.`status`=1 ORDER BY c.createtime DESC';
		const data = await this.app.mysql.query(sql, [obj.vid]);
		if (data.length != 0) {
			result = { code: 1, Msg: '评论刷新成功', comment: data };
		}
		else {
			result = { code: 0, Msg: '评论刷新失败' };
		}
		// console.log(data);
		return result;
	}
}
module.exports = CommentService;