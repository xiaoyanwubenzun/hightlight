'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/svgimg', controller.user.coder);
	router.get('/islogin', controller.user.islogin);
	router.get('/loginout', controller.user.loginout);
	router.get('/getuserpaiming', controller.user.getuserpaiming);
	router.get('/searchuserbestvideo', controller.user.searchuserbestvideo);
	router.post('/login', controller.user.login);
	router.post('/zhuce', controller.user.zhuce);
	router.post('/forgetpass', controller.user.forgetpass);
	router.post('/getusermessage', controller.user.getusermessage);
	router.post('/changeusermessage', controller.user.changeusermessage);
	router.post('/uploadimg', controller.upload.uploadimg);
	router.post('/uploadvideo', controller.upload.uploadvideo);
	//控制层js文件名对应数据库表名，方法名对应增删改查
	router.get('/search', controller.video.search);
	router.get('/myhightlightsearch', controller.video.myhightlightsearch);
	router.get('/searchbestvideo', controller.video.searchbestvideo);
	router.get('/getvideomessage', controller.video.getvideomessage);
	router.get('/addlikecount', controller.video.addlikecount);
	router.post('/uploadhightlight', controller.video.uploadhightlight);
	router.get('/addcomment', controller.comment.addcomment);
	router.get('/reloadcomment', controller.comment.reloadcomment);
};