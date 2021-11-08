let md5 = require("md5");
const Service = require('egg').Service;
class UserService extends Service {
	async changeusermessage(obj) {
		let result = { code: 1, Msg: '个人信息修改成功' };
		const havetelsql = `SELECT * FROM user u WHERE u.tel=?`;
		const haveemailsql = `SELECT * FROM user u WHERE u.useremail=?`;
		const changeusermessagesql = 'UPDATE user u SET u.userimg=?,u.usersign=?,u.tel =?, u.useremail =?, u.gender =?, u.uage =?, u.consttell =?, u.gamelike =? WHERE uid =? AND u.`status` = 1';
		const haveteldata = await this.app.mysql.query(havetelsql, [obj.tel]);
		if (haveteldata.length == 1 && obj.uid != haveteldata[0].uid) {
			result = { code: 0, Msg: '手机号已被注册，换一个试试' };
		}
		else {
			const haveemaildata = await this.app.mysql.query(haveemailsql, [obj.useremail]);
			if (haveemaildata.length == 1 && obj.uid != haveemaildata[0].uid) {
				result = { code: -1, Msg: '邮箱已被使用，换一个试试' };
			} else {
				const changeusermessagedata = await this.app.mysql.query(changeusermessagesql, [obj.userimg, obj.usersign, obj.tel, obj.useremail, obj.gender, obj.uage, obj.consttell, obj.gamevalue, obj.uid, obj.mibao]);
				if (!changeusermessagedata.affectedRows) {
					result = { code: -2, Msg: '用户不存在或账号被封停' };
				}
			}
		}
		return result;
	}
	async getuserpaiming() {
		let result = { code: 1, Msg: '查询所有用户贡献成功' };
		const sql = 'SELECT u.uid,u.userimg,u.username,u.gender,u.uage,u.usersign,IFNULL(SUM(v.watchnum), 0) wnum,IFNULL(SUM(v.likecount),0) likenum,COUNT(v.uid) vnum,IFNULL(SUM(v.watchnum), 0)+IFNULL(SUM(v.likecount),0)+COUNT(v.uid) sums FROM user u LEFT JOIN video v ON v.uid=u.uid WHERE v.`status`=1 and u.`status`=1 GROUP BY u.uid ORDER BY sums DESC';
		const data = await this.app.mysql.query(sql);
		if (data.length == 0) {
			result = { code: 0, Msg: '查询所有用户贡献失败' };
		}
		else if (data.length != 0) {
			result = { code: 1, Msg: '查询所有用户贡献成功', userlist: data };
		}
		return result
	}
	async searchuserbestvideo(obj) {
		let result = { code: 1, Msg: '查询此用户热度最高视频成功' };
		const sql = 'SELECT v.vid,u.username,v.vtitle,v.vtext,v.videotype,v.fengmian,v.createtime,v.watchnum,v.likecount,COUNT(c.vid) cnum,v.watchnum + v.likecount + COUNT(c.vid) sums FROM video v LEFT JOIN`comment` c ON c.vid = v.vid LEFT JOIN user u ON u.uid = v.uid WHERE v.uid = ? AND v.`status` = 1 AND u.`status` = 1 GROUP BY v.vid ORDER BY sums DESC LIMIT 2';
		const data = await this.app.mysql.query(sql, [obj.searchuid]);
		if (data.length == 0) {
			result = { code: 0, Msg: '查询所有用户贡献失败' };
		}
		else if (data.length != 0) {
			result = { code: 1, Msg: '查询所有用户贡献成功', bestvideolist: data };
		}
		return result
	}
	//服务器文件结构优化
	//登录
	async LoginByName(username) {
		const sql = `SELECT uid,username,passwd FROM user WHERE username=? AND status=1`;
		const data = await this.app.mysql.query(sql, [username]);
		return data;
	}
	//注册
	async zhuce(obj) {
		let result = { "code": 1, "Msg": "注册成功,去登录吧" };
		const usernamesql = `SELECT * FROM user WHERE username=?`;
		const telsql = `SELECT * FROM user WHERE tel=?`;
		const usernamedata = await this.app.mysql.query(usernamesql, [obj.username]);
		if (usernamedata.length != 0) {
			result = { "code": -1, "Msg": "用户名已被使用，换一个试试" };
		} else {
			const teldata = await this.app.mysql.query(telsql, [obj.tel]);
			if (teldata.length != 0) {
				result = { "code": -2, "Msg": "手机号已被注册，换一个试试" };
			} else {
				const sql = `INSERT INTO user (username, passwd, tel)  VALUES (?, ?, ?)`
				const data = await this.app.mysql.query(sql, [obj.username, md5(obj.passwd), obj.tel]);
				if (data.length == 0) {
					result = { "code": 0, "Msg": "注册失败" };
				}
			}

		}

		return result;
	}
	//忘记密码
	async forgetpass(obj) {
		let result = { code: 1, "Msg": "账号密码重置成功" };
		const telsql = `SELECT * FROM user WHERE tel=?`;
		const telsqldata = await this.app.mysql.query(telsql, [obj.tel]);
		if (telsqldata.length == 0) {
			result = { code: 0, "Msg": "账号密码重置失败，手机号不存在" };
		} else {
			const telmibaosql = `SELECT * FROM user WHERE tel=? AND mibao=?`;
			const telmibaosqldata = await this.app.mysql.query(telmibaosql, [obj.tel, obj.mibao]);
			if (telmibaosqldata.length == 0) {
				result = { code: -1, "Msg": "账号密码重置失败，密保错误" };
			} else {
				const usernamesql = `SELECT * FROM user WHERE username=?`;
				const usernamesqldata = await this.app.mysql.query(usernamesql, [obj.username]);
				if (usernamesqldata.length != 0) {
					result = { code: -2, "Msg": "账号密码重置失败，用户名已被使用" };
				} else {
					const sql = `UPDATE user SET username=?, passwd=?  WHERE tel=?`;
					const data = await this.app.mysql.query(sql, [obj.username, md5(obj.passwd), obj.tel]);
					if (data.length == 0) {
						result = { code: -3, "Msg": "账号密码重置失败，未知错误" };
					}
				}

			}
		}

		return result;
	}
	async getusermessage(uid) {
		let result = { "code": 1, "Msg": "查询用户信息成功" };
		const sql = `SELECT username,userimg,usersign,tel,useremail,gender,uage,consttell,gamelike,mibao FROM user WHERE uid=? AND STATUS=1`
		const data = await this.app.mysql.query(sql, [uid]);
		if (data.length == 0) {
			result = { "code": -1, "Msg": "该账号已被封停，请联系管理员" };
		} else if (data.length != 0) {
			result = { "code": 1, "Msg": "查询用户信息成功", "user": data[0] };
		}
		// console.log(result);
		return result;
	}
}
module.exports = UserService;