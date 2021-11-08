'use strict';
const md5 = require('md5');
const svgCaptcha = require('svg-captcha');
const Service = require('egg').Service;
class ManagerService extends Service {
	async coder() {
		let result = { code: 1, Msg: "获取验证码成功" };
		const { ctx } = this;
		const captcha = svgCaptcha.create({
			size: 4,
			fontSize: 50,
			width: 100,
			height: 40,
			bacground: '#48D1CC'
		});
		ctx.session.svgtext = captcha.text; //缓存验证码中的文字
		if (ctx.session.svgtext && captcha.data) {
			result = { code: 1, Msg: "获取验证码成功", data: captcha.data };
		}
		else {
			result = { code: 0, Msg: "获取验证码失败" };
		}
		// console.log(ctx.session.svgtext);
		return result; // 返回一张svg图片
	}
	async managerlogin(obj) {
		let yanzhen = { "code": "1", "Msg": "登录成功" };
		const { ctx } = this;
		const managername = obj.managername;
		const passwd = obj.passwd;
		const yzm = obj.yanzhengma;
		if (yzm.toLowerCase() != ctx.session.svgtext.toLowerCase()) {
			yanzhen = { "code": "-2", "Msg": "验证码错误" };
		}
		else {
			// const result = await ctx.service.manager.LoginByName(managername);
			const sqlmanager = `SELECT mid,managername,passwd,usertype FROM manager WHERE managername=?`;
			const result = await this.app.mysql.query(sqlmanager, [managername]);
			if (result.length == 0) {
				yanzhen = { "code": "-1", "Msg": "管理员账号错误或不存在" };
			} else if (md5(passwd) != result[0].passwd) {
				yanzhen = { "code": "0", "Msg": "密码错误" };
			} else {
				yanzhen = { "code": "1", "Msg": "登录成功" };
				ctx.session.mid = result[0].mid;
				const sql = `UPDATE manager SET loginintime=?,loginnum=loginnum+1 WHERE mid=?`;
				const managerlogined = await this.app.mysql.query(sql, [new Date(), ctx.session.mid]);
				if (managerlogined.affectedRows) {
					yanzhen = { "code": "1", "Msg": "登录成功刷新登入时间登录次数" };
				}
			}
		}
		return yanzhen;
	}
	async managerislogin() {
		let managerislogin = { "code": "1", "Msg": "已登录" };
		const { ctx } = this;
		if (!ctx.session.mid) {
			managerislogin = { "code": "-1", "Msg": "未登录" };
		} else if (ctx.session.mid) {
			managerislogin = { "code": "1", "Msg": "已登录", "mid": ctx.session.mid };
		}
		// console.log(islogin);
		return managerislogin;
	}
	async managerloginout() {
		let managerloginout = { "code": "1", "Msg": "退出成功" };
		const { ctx } = this;
		const mid = ctx.session.mid;
		ctx.session.mid = null;
		if (!ctx.session.mid) {
			const sql = `UPDATE manager SET loginouttime=? WHERE mid=?`;
			const loginoutdata = await this.app.mysql.query(sql, [new Date(), mid]);
			if (loginoutdata.affectedRows) {
				managerloginout = { "code": "1", "Msg": "退出成功刷新登出时间" };
			}
		} else if (ctx.session.mid) {
			managerloginout = { "code": "-1", "Msg": "退出失败" };
		}
		return managerloginout;
	}
	async managermessage(obj) {
		let result = { code: 1, Msg: "获取管理员信息成功" };
		const managermessagesql = `SELECT mid,managername,usertype FROM manager WHERE mid=?`;
		const managermessagedata = await this.app.mysql.query(managermessagesql, [obj.mid]);
		if (managermessagedata.length != 0) {
			result = { code: 1, Msg: "获取管理员信息成功", manager: managermessagedata[0] };
		}
		else {
			result = { code: 0, Msg: "获取管理员信息失败" };
		}
		return result;
	}
}
module.exports = ManagerService;