'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/svgimg', controller.manager.coder);
	router.get('/managermessage', controller.manager.managermessage);
	router.post('/managerlogin', controller.manager.managerlogin);
	router.post('/managerislogin', controller.manager.managerislogin);
	router.post('/managerloginout', controller.manager.managerloginout);
	router.get('/search', controller.video.search);
	router.get('/getvideomessage', controller.video.getvideomessage);
	router.post('/checkvideoresult', controller.video.checkvideoresult);
};