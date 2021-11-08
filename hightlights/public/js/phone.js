(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			// 宽度     
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			// 
			if (clientWidth >= 750) {
				docEl.style.fontSize = '16px';
			} else {
				// 动态设置html的font-size
				docEl.style.fontSize = 16 * (clientWidth / 750) + 'px';
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
