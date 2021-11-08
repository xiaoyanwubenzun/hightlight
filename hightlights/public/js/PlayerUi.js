!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t(require("uumPlayer")) : "function" == typeof define && define.amd ? define(["uumPlayer"], t) : "object" == typeof exports ? exports["uumPlayer-ui"] = t(require("uumPlayer")) : e["uumPlayer-ui"] = t(e.uumPlayer)
}(window, (function (e) {
	return function (e) {
		var t = {};
		function n(o) {
			if (t[o]) return t[o].exports;
			var r = t[o] = { i: o, l: !1, exports: {} };
			return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
		}
		return n.m = e, n.c = t, n.d = function (e, t, o) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var o = Object.create(null);
			if (n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
				return e[t]
			}.bind(null, r));
			return o
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 15)
	}([function (t, n) {
		t.exports = e
	}, function (e, t, n) {
		var o;
		!function () {
			"use strict";
			var n = {}.hasOwnProperty;

			function r() {
				for (var e = [], t = 0; t < arguments.length; t++) {
					var o = arguments[t];
					if (o) {
						var i = typeof o;
						if ("string" === i || "number" === i) e.push(o); else if (Array.isArray(o) && o.length) {
							var a = r.apply(null, o);
							a && e.push(a)
						} else if ("object" === i) for (var u in o) n.call(o, u) && o[u] && e.push(u)
					}
				}
				return e.join(" ")
			}
			e.exports ? (r.default = r, e.exports = r) : void 0 === (o = function () {
				return r
			}.apply(t, [])) || (e.exports = o)
		}()
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = n(42), i = (o = r) && o.__esModule ? o : { default: o }, a = n(0);
		t.default = {
			id: "uum-tooltip", el: null, timeoutHandler: null, initial: function (e) {
				if (a.DOM.isEl(e)) {
					var t = a.DOM.createElement("div", { className: this.id });
					a.DOM.appendContent(e, t), this.el = t, this.container = e
				}
			}, normalize: function (e) {
				return (0, i.default)({
					timeout: 0,
					content: "",
					top: 0,
					left: 0,
					margin: 0,
					hostEl: null,
					placement: "top",
					isFollowMouse: !1,
					event: null
				}, e)
			}, getCoordinate: function (e) {
				var t = void 0;
				switch (e.placement) {
					case "top":
						var n = a.DOM.getBoundingClientRect(e.hostEl), o = a.DOM.getBoundingClientRect(this.container),
							r = void 0;
						if (e.isFollowMouse) {
							var i = a.DOM.getPointerPosition(e.hostEl, e.event);
							r = n.left - o.left + n.width * i.x - this.el.offsetWidth / 2
						} else r = n.left - o.left + (n.width - this.el.offsetWidth) / 2;
						var u = r + this.el.offsetWidth - this.container.offsetWidth;
						u > 0 && (r -= u), t = { left: r, top: n.top - o.top - this.el.offsetHeight - e.margin }
				}
				return t
			}, show: function (e) {
				var t = this;
				if (clearTimeout(this.timeoutHandler), e = this.normalize(e), a.DOM.isEl(e.hostEl)) {
					var n = a.DOM.parent(e.hostEl, "uumPlayer"), o = a.DOM.$(".uum-tooltip", n);
					o ? (this.el = o, this.container = n) : this.initial(n), a.DOM.replaceContent(this.el, e.content), setTimeout((function () {
						t.el.style.visibility = "hidden", t.el.style.display = "block";
						var n = t.getCoordinate(e);
						t.el.style.top = n.top + "px", t.el.style.left = n.left + "px", t.el.style.visibility = "visible"
					}), 0)
				}
			}, hide: function () {
				var e = this;
				this.el && (this.timeoutHandler = setTimeout((function () {
					e.el.style.display = "none"
				})))
			}
		}
	}, function (e, t, n) {
		"use strict";
		function o(e) {
			return (e = "" + e).length < 2 && (e = "0" + e), e
		}
		Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
			if (e = parseInt(e, 10), isNaN(e)) return "- -";
			var t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), r = e % 60, i = [o(n), o(r)];
			return t > 0 && i.unshift(o(t)), i.join(":")
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		t.ClassNames = {
			LOADSTART: "uum-status-loadstart",
			ENDED: "uum-status-ended",
			PAUSED: "uum-status-paused",
			ERROR: "uum-status-error",
			SEEKING: "uum-status-seeking",
			WAITING: "uum-status-waiting",
			PLAYING: "uum-status-playing",
			ACTIVE: "uum-status-user-active",
			HAS_START: "uum-status-has-start",
			CONTROLS_HIDE: "uum-custom-controls-hide",
			ALL_SCREEN: "uum-all-screen"
		}, t.Events = {
			CONTROLS_SHOW: "controlsshow",
			CONTROLS_HIDE: "controlshide"
		}, t.ACTIVE_DURATION = 3e3, t.NORMAL_SCREEN_RATIO = 16 / 9
	}, function (e, t) {
		e.exports = "img/volume-up-line.png"
	}, function (e, t) {
		e.exports = "img/volume-mute-line.png"
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(3));

		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleTimeupdate = o.handleTimeupdate.bind(o), o.player.on("timeupdate", o.handleTimeupdate), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleTimeupdate", value: function (e) {
					this.render(this.player.currentTime())
				}
			}, {
				key: "render", value: function (e) {
					i.DOM.textContent(this.el, (0, a.default)(Math.floor(e)))
				}
			}, {
				key: "reset", value: function () {
					this.render(0)
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("timeupdate", this.handleTimeupdate), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					var e = this.player.currentTime();
					return i.Component.createElement("div", { className: (0, r.default)("uum-current-time", this.options.className) }, (0, a.default)(Math.floor(e)))
				}
			}]), t
		}(i.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(3));

		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleLoadedMetaData = o.handleLoadedMetaData.bind(o), o.player.on("durationchange", o.handleLoadedMetaData), o.player.on("loadedmetadata", o.handleLoadedMetaData), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleLoadedMetaData", value: function (e) {
					i.DOM.textContent(this.el, (0, a.default)(Math.floor(this.player.duration())))
				}
			}, {
				key: "reset", value: function () {
					i.DOM.textContent(this.el, "")
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("durationchange", this.handleLoadedMetaData), this.player.off("loadedmetadata", this.handleLoadedMetaData), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					var e = (0, a.default)(Math.floor(this.player.duration()));
					return i.Component.createElement("div", { className: (0, r.default)("uum-duration", this.options.className) }, e)
				}
			}]), t
		}(i.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = (u(n(39)), n(0)), a = u(n(2));
		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = i.util.featureDetector, s = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleClick = o.handleClick.bind(o), o.handleMouseOver = o.handleMouseOver.bind(o), o.handleMouseOut = o.handleMouseOut.bind(o), o.request = i.DOM.$(".uum-request-fullscreen", o.el), o.exit = i.DOM.$(".uum-exit-fullscreen", o.el), o.on("click", o.handleClick), l.touch || (o.fullscreenButton = i.DOM.$(".uum-request-fullscreen", o.el), o.exitFullscreenButton = i.DOM.$(".uum-exit-fullscreen", o.el), i.Events.on(o.fullscreenButton, "mouseover", o.handleMouseOver), i.Events.on(o.exitFullscreenButton, "mouseover", o.handleMouseOver), o.on("mouseout", o.handleMouseOut)), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleClick", value: function () {
					this.player.isFullscreen() ? (this.player.exitFullscreen(), this.exit.style.display = "none", this.request.style.display = "block") : (this.player.requestFullscreen(), this.exit.style.display = "block", this.request.style.display = "none"), a.default.hide()
				}
			}, {
				key: "handleMouseOver", value: function (e) {
					a.default.show({ hostEl: e.target, placement: "top", margin: 16, content: e.target.title })
				}
			}, {
				key: "handleMouseOut", value: function (e) {
					a.default.hide()
				}
			}, {
				key: "dispose", value: function () {
					this.off("click", this.handleClick), l.touch || (i.Events.off(this.fullscreenButton, "mouseover", this.handleMouseOver), i.Events.off(this.exitFullscreenButton, "mouseover", this.handleMouseOver), this.fullscreenButton = null, this.exitFullscreenButton = null, this.off("mouseout", this.handleMouseOut)), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-fullscreen-button") }, i.Component.createElement("div", {
						className: "uum-request-fullscreen",
						title: "全屏"
					}), i.Component.createElement("div", { className: "uum-exit-fullscreen", title: "退出全屏" }))
				}
			}]), t
		}(i.Component);
		t.default = s
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = c(n(1)), i = n(0), a = c(n(11)), u = c(n(2)), l = c(n(44)), s = c(n(3));
		function c(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var p = i.util.featureDetector, f = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleTimeUpdate = o.handleTimeUpdate.bind(o), o.onClick = o.onClick.bind(o), o.onSlideStart = o.onSlideStart.bind(o), o.onSlideMove = o.onSlideMove.bind(o), o.onSlideEnd = o.onSlideEnd.bind(o), o.update = o.update.bind(o), o.reset = o.reset.bind(o), o.handleMouseOver = o.handleMouseOver.bind(o), o.handleMouseMove = o.handleMouseMove.bind(o), o.handleMouseOut = o.handleMouseOut.bind(o), o.line = i.DOM.$(".uum-progress-bar__line", o.el), o.lineHandle = i.DOM.$(".uum-progress-bar__line__handle", o.el), o.hoverLight = i.DOM.$(".uum-progress-bar-hover-light", o.el), o.paddingEl = i.DOM.$(".uum-progress-bar-padding", o.el), o.player.on("timeupdate", o.handleTimeUpdate), o.on("click", o.handleClick), o.on("touchstart", o.handleSlideStart), o.player.on("ready", (function () {
					o.currentTimeEl = i.DOM.$(".uum-current-time", o.player.el)
				})), p.touch || (o.on("mousedown", o.handleSlideStart), o.on("mouseover", o.handleMouseOver), o.on("mousemove", o.handleMouseMove), o.on("mouseout", o.handleMouseOut)), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleTimeUpdate", value: function () {
					var e = 0, t = this.player.duration(), n = this.player.currentTime();
					t && n && (e = n / t * 100 + "%"), this.line.style.width = e
				}
			}, {
				key: "onClick", value: function (e) {
					this.update(e)
				}
			}, {
				key: "onSlideStart", value: function (e) {
					e.preventDefault(), this.originalPaused = this.player.paused(), this.player.pause()
				}
			}, {
				key: "onSlideMove", value: function (e) {
					e.preventDefault(), this.player.paused() || this.player.pause(), this.update(e)
				}
			}, {
				key: "onSlideEnd", value: function (e) {
					var t = this, n = i.DOM.getPointerPosition(this.el, e), o = this.player.duration() * n.x;
					this.player.currentTime(o);
					var r = !this.originalPaused && void 0 !== this.originalPaused,
						a = Math.ceil(this.player.currentTime()) >= this.player.duration();
					this.player.paused() && r && !a && setTimeout((function () {
						t.player.play()
					}), 0)
				}
			}, {
				key: "update", value: function (e) {
					var t = i.DOM.getPointerPosition(this.el, e), n = 100 * t.x + "%", o = this.player.duration() * t.x;
					this.line.style.width = n, this.currentTimeEl && i.DOM.textContent(this.currentTimeEl, (0, s.default)(Math.floor(o)))
				}
			}, {
				key: "reset", value: function () {
					this.line.style.width = 0, this.children.forEach((function (e) {
						e && e.reset && e.reset()
					}))
				}
			}, {
				key: "showToolTip", value: function (e) {
					var t = this.player.duration();
					if (t) {
						var n = i.DOM.getPointerPosition(this.el, e), o = parseInt(t * n.x, 10);
						isNaN(o) || u.default.show({
							hostEl: this.el,
							margin: 13,
							placement: "top",
							isFollowMouse: !0,
							event: e,
							content: (0, s.default)(Math.floor(o))
						})
					}
				}
			}, {
				key: "showHoverLine", value: function (e) {
					var t = i.DOM.getPointerPosition(this.el, e), n = this.el.offsetWidth * t.x;
					this.hoverLight.style.width = n + "px"
				}
			}, {
				key: "hideHoverLine", value: function (e) {
					this.hoverLight.style.width = 0
				}
			}, {
				key: "handleMouseOver", value: function (e) {
					this.showToolTip(e), this.showHoverLine(e)
				}
			}, {
				key: "handleMouseMove", value: function (e) {
					this.showToolTip(e), this.showHoverLine(e)
				}
			}, {
				key: "handleMouseOut", value: function (e) {
					u.default.hide(), this.hideHoverLine(e)
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("timeupdate", this.handleTimeUpdate), this.off("click", this.handleClick), this.off("touchstart", this.handleSlideStart), p.touch || (this.off("mousedown", this.handleSlideStart), this.off("mouseover", this.handleMouseOver), this.off("mousemove", this.handleMouseMove), this.off("mouseout", this.handleMouseOut)), this.line = null, this.lineHandle = null, this.hoverLight = null, this.paddingEl = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-progress-bar", this.options.className) }, i.Component.createElement("div", { className: "uum-progress-bar-padding" }), i.Component.createElement("div", { className: "uum-progress-bar-hover-light" }), i.Component.createElement(l.default, null))
				}
			}]), t
		}(a.default);
		t.default = f
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = n(0);
		var i = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleClick = o.handleClick.bind(o), o.handleSlideStart = o.handleSlideStart.bind(o), o.handleSlideMove = o.handleSlideMove.bind(o), o.handleSlideEnd = o.handleSlideEnd.bind(o), o.onClick = o.onClick.bind(o), o.onSlideStart = o.onSlideStart.bind(o), o.onSlideMove = o.onSlideMove.bind(o), o.onSlideEnd = o.onSlideEnd.bind(o), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "onClick", value: function (e) {
				}
			}, {
				key: "onSlideStart", value: function (e) {
				}
			}, {
				key: "onSlideMove", value: function (e) {
				}
			}, {
				key: "onSlideEnd", value: function (e) {
				}
			}, {
				key: "handleClick", value: function (e) {
					this.onClick(e)
				}
			}, {
				key: "handleSlideStart", value: function (e) {
					this.onSlideStart(e), r.DOM.addClass(this.el, "uum-sliding"), r.Events.on(document, "touchmove", this.handleSlideMove), r.Events.on(document, "touchend", this.handleSlideEnd), r.Events.on(document, "mousemove", this.handleSlideMove), r.Events.on(document, "mouseup", this.handleSlideEnd)
				}
			}, {
				key: "handleSlideMove", value: function (e) {
					this.onSlideMove(e)
				}
			}, {
				key: "handleSlideEnd", value: function (e) {
					this.onSlideEnd(e), r.DOM.removeClass(this.el, "uum-sliding"), r.Events.off(document, "touchmove", this.handleSlideMove), r.Events.off(document, "touchend", this.handleSlideEnd), r.Events.off(document, "mousemove", this.handleSlideMove), r.Events.off(document, "mouseup", this.handleSlideEnd)
				}
			}]), t
		}(r.Component);
		t.default = i
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.line = u.DOM.$(".uum-buffer-bar__line", o.el), o.handleProgress = o.handleProgress.bind(o), o.player.on("progress", o.handleProgress), o.player.on("canplay", o.handleProgress), o.handleProgress(), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "handleProgress", value: function () {
					var e = this.player.buffered(), t = this.player.duration(), n = this.player.currentTime();
					if (t > 0) for (var o = 0; o < e.length; o++) if (e.start(o) <= n && e.end(o) >= n) {
						var r = e.end(o) / t * 100 + "%";
						this.render(r);
						break
					}
				}
			}, {
				key: "render", value: function (e) {
					this.line.style.width = e
				}
			}, {
				key: "reset", value: function () {
					this.render(0)
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("progress", this.handleProgress), this.player.off("canplay", this.handleProgress), this.line = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-buffer-bar", this.options.className) }, u.Component.createElement("div", { className: "uum-buffer-bar__line" }))
				}
			}]), t
		}(u.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		var l = u.util.featureDetector, s = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.togglePlay = o.togglePlay.bind(o), o.playBtn = u.DOM.$(".uum-play-button__play", o.el), o.pauseBtn = u.DOM.$(".uum-play-button__pause", o.el), u.Events.on(o.playBtn, "click", o.togglePlay), u.Events.on(o.pauseBtn, "click", o.togglePlay), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "togglePlay", value: function (e, t) {
					this.player.paused() ? this.player.play() : this.player.pause()
				}
			}, {
				key: "dispose", value: function () {
					u.Events.off(this.playBtn, "click", this.togglePlay), u.Events.off(this.pauseBtn, "click", this.togglePlay), this.playBtn = null, this.pauseBtn = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					var e = l.touch ? {
						container: "uum-play-button--mobile",
						btnPlay: "uum-play-button__play",
						btnPause: "uum-play-button__pause"
					} : {
						container: "uum-play-button-pc",
						btnPlay: "uum-icon-play uum-play-button__play",
						btnPause: "uum-icon-pause uum-play-button__pause"
					};
					return u.Component.createElement("div", { className: (0, a.default)("uum-play-button", e.container) }, u.Component.createElement("div", { className: e.btnPlay }), u.Component.createElement("div", { className: e.btnPause }))
				}
			}]), t
		}(u.Component);
		t.default = s
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function s(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var c = function (e) {
			function t() {
				return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-not-support-notice", this.options.className) }, u.Component.createElement("div", { className: "uum-not-support-notice__text" }, "您的浏览器不支持 html5 视频播放，请升级浏览器版本或更换为 chrome 浏览器"))
				}
			}]), t
		}(u.Component);
		t.default = c
	}, function (e, t, n) {
		"use strict";
		n(16);
		var o = n(0), r = c(n(34)), i = c(n(35)), a = c(n(36)), u = c(n(37)), l = c(n(48)), s = c(n(58));

		function c(e) {
			return e && e.__esModule ? e : { default: e }
		}
		o.Plugin.register(r.default, { name: "classNameManager" }), o.Plugin.register(i.default, { name: "controlsProxy" }), o.Plugin.register(a.default, { name: "controlsEvent" }), o.Plugin.register(s.default, { name: "resetApi" }), o.util.featureDetector.touch ? o.Component.register(u.default, { name: "controlsMobile" }) : o.Component.register(l.default, { name: "controlsPc" })
	}, function (e, t, n) {
		var o = n(17);
		"string" == typeof o && (o = [[e.i, o, ""]]);
		var r = { hmr: !0, transform: void 0, insertInto: void 0 };
		n(32)(o, r);
		o.locals && (e.exports = o.locals)
	}, function (e, t, n) {
		var o = n(18);
		(e.exports = n(19)(!1)).push([e.i, ".placeholder-1511407549745{display:none}.file-placeholder-1510232955822{display:none}.uum-play-button--mobile{display:none;text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);font-size:18px;color:#fff;border-radius:50%;box-sizing:border-box;width:48px;height:48px;line-height:48px}.uum-play-button--mobile .uum-play-button__play{display:block;background:url(img/play-line.png) center no-repeat}.uum-play-button--mobile .uum-play-button__pause{display:none;background:url(img/pause-line.png) center no-repeat}.uum-play-button--mobile .uum-play-button__pause,.uum-play-button--mobile .uum-play-button__play{background-size:contain;width:100%;height:100%}.uum-icon-play{background:url(img/play-line.png) center no-repeat;width:30px;height:30px;margin-top:8px}.uum-icon-pause{background:url(img/pause-line.png) center no-repeat;width:30px;height:30px;margin-top:8px}.uum-play-button{cursor:pointer}.uum-play-button-pc{opacity:.9;margin-right:0;transition:opacity .1s ease-out;-ms-transition:opacity .1s ease-out;-moz-transition:opacity .1s ease-out;-webkit-transition:opacity .1s ease-out;-o-transition:opacity .1s ease-out}.uum-play-button-pc:hover{opacity:1}.uum-play-button-pc .uum-play-button__pause,.uum-play-button-pc .uum-play-button__play{padding:0 0}.uum-control-bar-pc{opacity:0;transition:opacity .25s cubic-bezier(0,0,.2,1);-ms-transition:opacity .25s cubic-bezier(0,0,.2,1);-moz-transition:opacity .25s cubic-bezier(0,0,.2,1);-webkit-transition:opacity .25s cubic-bezier(0,0,.2,1);-o-transition:opacity .25s cubic-bezier(0,0,.2,1)}.uum-status-user-active .uum-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uum-status-user-active .uum-play-button--mobile{display:block}.uum-status-user-active .uum-progress-bar--simple{display:none}.uum-status-user-active .uum-control-bar-pc{opacity:1}.uum-status-playing .uum-play-button__play{display:none}.uum-status-playing .uum-play-button__pause{display:block}.uum-status-loadstart .uum-custom-controls--mobile .uum-loading--mobile,.uum-status-seeking .uum-custom-controls--mobile .uum-loading--mobile,.uum-status-waiting .uum-custom-controls--mobile .uum-loading--mobile{display:block}.uum-status-loadstart .uum-custom-controls--mobile .uum-play-button,.uum-status-seeking .uum-custom-controls--mobile .uum-play-button,.uum-status-waiting .uum-custom-controls--mobile .uum-play-button{display:none}.uum-status-loadstart .uum-custom-controls--pc .uum-loading--pc,.uum-status-seeking .uum-custom-controls--pc .uum-loading--pc,.uum-status-waiting .uum-custom-controls--pc .uum-loading--pc{display:block}.uum-status-paused .uum-control-bar-pc{opacity:1}.uum-status-paused .uum-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uum-status-paused .uum-play-button--mobile{display:block}.uum-status-paused .uum-progress-bar--simple{display:none}.uum-status-paused .uum-custom-controls--mobile .uum-play-button{display:block}.uum-status-paused .uum-custom-controls--mobile .uum-play-button__play{display:block}.uum-status-paused .uum-custom-controls--mobile .uum-play-button__pause{display:none}.uum-status-paused .uum-custom-controls--mobile .uum-loading--mobile{display:none}.uum-status-paused .uum-custom-controls--mobile .uum-controls-bar{display:block}.uum-status-paused .uum-custom-controls--pc .uum-play-button__play{display:block}.uum-status-paused .uum-custom-controls--pc .uum-play-button__pause{display:none}.uum-status-ended .uum-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uum-status-ended .uum-play-button--mobile{display:block}.uum-status-ended .uum-progress-bar--simple{display:none}.uum-status-ended .uum-control-bar-pc{opacity:1}.uum-status-ended .uum-custom-controls--mobile .uum-play-button__play{display:block}.uum-status-ended .uum-custom-controls--mobile .uum-play-button__pause{display:none}.uum-status-ended .uum-custom-controls--mobile .uum-controls-bar{display:block}.uum-status-ended .uum-custom-controls--pc .uum-complete{display:block}.uum-status-error .uum-custom-controls--mobile .uum-error--mobile{display:block}.uum-status-error .uum-custom-controls--mobile .uum-play-button{display:none}.uum-status-error .uum-custom-controls--pc .uum-error--pc{display:block}.uum-fullscreen{width:100%!important;height:100%!important;padding-top:0!important}.uum-full-window .uum-exit-fullscreen,.uum-fullscreen .uum-exit-fullscreen{display:block}.uum-full-window .uum-request-fullscreen,.uum-fullscreen .uum-request-fullscreen{display:none}@media screen and (orientation:landscape){.uum-all-screen.uum-fullscreen .uum-control-bar{padding:0 30px;box-sizing:border-box}}.uum-custom-controls-hide .uum-custom-controls .uum-control-bar,.uum-custom-controls-hide .uum-custom-controls .uum-control-bar-pc,.uum-custom-controls-hide .uum-custom-controls .uum-play-button--mobile,.uum-custom-controls-hide .uum-custom-controls .uum-progress-bar--simple{display:none}.uum-progress-bar{position:relative;height:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;flex:1;-webkit-flex:1;margin-left:10px}.uum-progress-bar-pc{margin:0 10px;height:3px}.uum-progress-bar-pc .uum-progress-bar-hover-light{background:rgba(231,231,231,.7)}.uum-progress-bar-pc .uum-progress-bar-except-fill,.uum-progress-bar-pc .uum-progress-bar-hover-light{cursor:pointer;position:absolute;margin-top:-1px;height:3px;transition:all .3s cubic-bezier(0,0,.2,1);-ms-transition:all .3s cubic-bezier(0,0,.2,1);-moz-transition:all .3s cubic-bezier(0,0,.2,1);-webkit-transition:all .3s cubic-bezier(0,0,.2,1);-o-transition:all .3s cubic-bezier(0,0,.2,1)}.uum-progress-bar-pc .uum-buffer-bar{height:3px;transition:all .3s cubic-bezier(0,0,.2,1);-ms-transition:all .3s cubic-bezier(0,0,.2,1);-moz-transition:all .3s cubic-bezier(0,0,.2,1);-webkit-transition:all .31s cubic-bezier(0,0,.2,1);-o-transition:all .3s cubic-bezier(0,0,.2,1)}.uum-progress-bar-pc .uum-progress-bar-padding{position:absolute;width:100%;height:16px;bottom:0;cursor:pointer}.uum-progress-bar-pc .uum-progress-bar__line__handle{top:2px}.uum-progress-bar-pc .uum-progress-bar__line__handle-except-fill{width:0;height:0}.uum-progress-bar-pc:hover .uum-progress-bar__line__handle-except-fill{width:18px;height:18px}.uum-progress-bar-pc:hover .uum-buffer-bar,.uum-progress-bar-pc:hover .uum-progress-bar-except-fill,.uum-progress-bar-pc:hover .uum-progress-bar-hover-light{height:5px}.uum-progress-bar-pc.uum-sliding .uum-progress-bar__line__handle-except-fill{width:12px;height:12px}.uum-progress-bar-pc.uum-sliding .uum-buffer-bar,.uum-progress-bar-pc.uum-sliding .uum-progress-bar-except-fill,.uum-progress-bar-pc.uum-sliding .uum-progress-bar-hover-light{height:5px}.uum-progress-bar-except-fill{cursor:pointer;position:relative;width:100%;height:1px;transition:all .1s cubic-bezier(0,0,.2,1);-ms-transition:all .1s cubic-bezier(0,0,.2,1);-moz-transition:all .1s cubic-bezier(0,0,.2,1);-webkit-transition:all .1s cubic-bezier(0,0,.2,1);-o-transition:all .1s cubic-bezier(0,0,.2,1)}.uum-progress-bar__background{position:absolute;width:100%;height:100%;background:rgba(231,231,231,.5)}.uum-progress-bar__line{position:absolute;height:100%;width:0;z-index:2;background:#fd4c5d}.uum-progress-bar__line__handle{border-radius:50%;position:absolute;padding:10px;right:-20px;top:.5px;transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%)}.uum-progress-bar__line__handle-except-fill{background:url(img/player-01.png) center no-repeat;width:18px;height:18px}.uum-fullscreen .uum-progress-bar__line__handle{right:-17.5px;top:.5px}.uum-fullscreen .uum-progress-bar-pc .uum-progress-bar__line__handle{top:1.5px}.uum-fullscreen .uum-progress-bar-pc .uum-progress-bar__line__handle-except-fill{width:0;height:0}.uum-fullscreen .uum-progress-bar-pc:hover .uum-progress-bar__line__handle-except-fill{width:18px;height:18px}.uum-fullscreen .uum-progress-bar-pc:hover .uum-progress-bar-except-fill{height:5px}.uum-fullscreen .uum-progress-bar-pc:hover .uum-buffer-bar{height:5px}.uum-fullscreen .uum-progress-bar-pc.uum-sliding .uum-progress-bar__line__handle-except-fill{width:18px;height:18px}.uum-fullscreen .uum-progress-bar-pc.uum-sliding .uum-progress-bar-except-fill{height:5px}.uum-fullscreen .uum-progress-bar-pc.uum-sliding .uum-buffer-bar{height:5px}.uum-fullscreen .uum-progress-bar__line__handle-except-fill{width:18px;height:18px}.uum-buffer-bar{position:absolute;height:1px;width:100%;z-index:1}.uum-progress-bar--simple .uum-buffer-bar{height:3px}.uum-buffer-bar__line{position:absolute;height:100%;width:0;left:0;background:#e7e7e7}.uum-exit-fullscreen{display:none;background:url(img/fullscreen-exit-line.png) center no-repeat}.uum-request-fullscreen{display:block;background:url(img/fullscreen-line.png) center no-repeat}.uum-exit-fullscreen,.uum-request-fullscreen{background-size:contain;width:20px;height:20px}.uum-fullscreen-button{cursor:pointer;margin-right:10px;width:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uum-loading--mobile{position:absolute;display:none;text-align:center;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);font-size:13px;color:#fff;box-sizing:border-box;width:100%;height:28px;line-height:28px}.uum-loading-cnt{display:inline-block;background:rgba(0,0,0,.5);padding:0 15px;border-radius:15px}.uum-loading-cnt__spinner{display:inline-block;vertical-align:sub}.uum-loading-cnt__text{display:inline-block;margin-left:4px}.uum-icon-loading{width:14px;height:14px;background:url(img/logging.png) center no-repeat;background-size:contain;-webkit-animation-name:spin;-webkit-animation-duration:1s;-webkit-animation-timing-function:linear;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal;-webkit-animation-fill-mode:none;-webkit-animation-play-state:running;animation-name:spin;animation-duration:1s;animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal;animation-fill-mode:none;animation-play-state:running}@-webkit-keyframes spin{from{transform:rotate(0);-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0)}to{transform:rotate(360deg);-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0);-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0)}to{transform:rotate(360deg);-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg)}}.uum-loading-spinner{display:inline-block;width:65px;height:65px;border-radius:50%;-webkit-box-sizing:border-box;border:solid 6px #ddd;border-top-color:transparent;border-left-color:transparent;-webkit-animation-name:spinner;-webkit-animation-duration:.8s;-webkit-animation-timing-function:linear;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal;-webkit-animation-fill-mode:none;-webkit-animation-play-state:running;animation-name:spinner;animation-duration:.8s;animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal;animation-fill-mode:none;animation-play-state:running}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg)}}.uum-loading--pc{display:none;position:absolute;left:50%;top:50%;width:65px;height:28px;margin-left:-32.5px;margin-top:-14px;z-index:3}.uum-control-bar{position:absolute;width:100%;bottom:0;left:0}.uum-control-bar{display:none;color:#fff;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:-webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:-moz-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:-ms-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));height:38px;font-size:13px}.uum-current-time{margin:0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin-top:2px}.uum-duration{margin-left:10px;margin-right:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uum-progress-bar--simple{height:3px;position:absolute;bottom:0;left:0;width:100%}.uum-error--mobile{cursor:pointer;position:absolute;display:none;text-align:center;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);font-size:13px;color:#fff;box-sizing:border-box;width:100%;height:28px;line-height:28px}.uum-error--mobile .uum-error-cnt{display:inline-block;background:rgba(0,0,0,.5);padding:0 15px;border-radius:15px}.uum-error-cnt__spinner{display:inline-block;vertical-align:sub}.uum-error-cnt__text{display:inline-block;margin-left:4px}@-webkit-keyframes spin{from{transform:rotate(0);-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0)}to{transform:rotate(360deg);-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0);-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0)}to{transform:rotate(360deg);-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg)}}.uum-error--pc{display:none}.uum-error--pc .uum-error-cnt{position:absolute;width:100%;height:100%;left:0;top:0;font-size:14px;background:rgba(0,0,0,.8);z-index:2;transform:none}.uum-error--pc .uum-error-text{position:absolute;width:100%;left:0;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);color:#fff;text-align:center}.uum-complete{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.8)}.uum-complete__replay{position:absolute;margin-left:-24px;margin-top:-27px;background:url(img/playone.png) center no-repeat;background-size:contain;height:60px;width:60px;margin:0 auto;right:30px;bottom:70px}.uum-volume-mobile{display:inline-block;width:20px;height:100%;margin:0 4px 2px 10px}.uum-volume-mobile--normal{background:url(img/volume-up-line.png) center no-repeat;background-size:contain}.uum-volume-mobile--muted{background:url(img/volume-mute-line.png) center no-repeat;background-size:contain}.uum-time{font-size:13px;float:left;margin-right:0;margin-left:10px}.uum-time:after{content:' ';display:block;height:0;font-size:0;clear:both;overflow:hidden;visibility:hidden}.uum-time .uum-current-time,.uum-time .uum-duration{margin:0;float:left}.uum-time .uum-time-separator{float:left;margin:0 2px}.uum-control-bar-pc{font-size:16px;line-height:50px;height:50px;position:absolute;bottom:0;color:#fff;width:100%;cursor:default;z-index:2}.uum-control-bar-pc:after{content:' ';display:block;height:0;font-size:0;clear:both;overflow:hidden;visibility:hidden}.uum-control-bar-pc .uum-control__left{float:left;height:100%;position:relative;margin-left:10px}.uum-control-bar-pc .uum-control__left:after{content:' ';display:block;height:0;font-size:0;clear:both;overflow:hidden;visibility:hidden}.uum-control-bar-pc .uum-control__right{float:right;height:100%;position:relative;width:260px}.uum-control-bar-pc .uum-control__right:after{content:' ';display:block;height:0;font-size:0;clear:both;overflow:hidden;visibility:hidden}.uum-control-bar-pc .uum-play-button-pc{float:left}.uum-gradient-bottom{background:-webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:-moz-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:-ms-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));position:absolute;width:100%;bottom:0;height:49px;padding-top:49px;pointer-events:none}.uum-volume{float:left;height:100%;cursor:pointer;margin-right:0;width:82px}.uum-volume:after{content:' ';display:block;height:0;font-size:0;clear:both;overflow:hidden;visibility:hidden}.uum-volume-icon{margin-right:4px;float:left}.uum-icon-sound-large{background:url(img/volume-up-line.png) center no-repeat;background-size:contain;height:24px;width:24px;margin-top:13px}.uum-icon-sound-middle{background:url(img/volume-down-line.png) center no-repeat;background-size:contain;height:24px;width:24px;margin-top:13px}.uum-icon-sound-small{background:url(img/volume-mute-line.png) center no-repeat;background-size:contain;height:24px;width:24px;margin-top:13px;margin-right:6px}.uum-volume-line{float:left;position:relative;height:100%}.uum-volume-line__line{position:absolute;left:0;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);width:50px;height:2px;background-color:#fff}.uum-volume-line__line-padding{position:absolute;bottom:-10px;left:0;padding:10px 0;width:100%}.uum-volume-line__ball{position:absolute;top:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);left:50px;width:10px;height:10px;border-radius:50%;background:#fff}.uum-tooltip{position:absolute;display:none;background-color:rgba(0,0,0,.4);color:#fff;border-radius:4px;padding:6px 10px;white-space:nowrap;margin-top:-4px}.uum-not-support-notice{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;color:#fff;z-index:4}.uum-not-support-notice__text{position:absolute;left:0;top:50%;margin-top:-12px;width:100%;text-align:center}.uum-full-window{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;margin:0!important;box-sizing:border-box!important;min-width:0!important;max-width:none!important;min-height:0!important;max-height:none!important;width:100%!important;height:100%!important;transform:none!important;object-fit:contain;z-index:999999}.uum-fullscreen-adjust{top:0!important;right:0!important;bottom:0!important;left:0!important;margin:0!important}.uum-handfull{display:block;background:url(img/aspect-ratio-line.png) center no-repeat;background-size:contain;width:20px;height:20px}.uum-handfull-button{cursor:pointer;width:20px;margin-left:10px;margin-right:10px;height:100%;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.handfull{position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important}.hide{overflow:hidden!important}.uum-loop{display:block;background:url(img/repeat-2-fill.png) center no-repeat;background-size:contain;width:20px;height:20px}.uum-loop-button{cursor:pointer;width:20px;height:100%;float:left;margin-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.loop{background-image:url(img/repeat-one-fill.png)!important}.uum-su-button{float:left;width:60px;text-align:center;position:relative;margin-right:2px;cursor:pointer;color:#fff;font-size:14px;z-index:2}.uum-su-button>span{display:inline-block;width:100%}.show{display:block!important}.uum-su-button>ul{background:rgba(0,0,0,.4);position:absolute;bottom:-10px;list-style:none;text-align:center;width:100%;float:left;padding:0;display:none;padding-bottom:39px;border-radius:4px}.uum-su-button>ul>li{margin:0;padding:0;width:100%;height:36px;line-height:36px;cursor:pointer}.currentx{color:#5bbda5}.uumPlayer{z-index:2;position:relative;cursor:pointer;background:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uumPlayer video{display:block;width:100%;height:100%;object-fit:fill;}.uumPlayer video:focus{outline:0}.uumPlayer video::-webkit-media-controls{display:none}.uumPlayer video::-webkit-media-controls-panel-container,.uumPlayer video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.uumPlayer:focus{outline:0}", ""])
	}, function (e, t) {
		e.exports = function (e) {
			return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = [];
			return t.toString = function () {
				return this.map((function (t) {
					var n = function (e, t) {
						var n = e[1] || "", o = e[3];
						if (!o) return n;
						if (t && "function" == typeof btoa) {
							var r = (a = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
								i = o.sources.map((function (e) {
									return "/*# sourceURL=" + o.sourceRoot + e + " */"
								}));
							return [n].concat(i).concat([r]).join("\n")
						}
						var a;
						return [n].join("\n")
					}(t, e);
					return t[2] ? "@media " + t[2] + "{" + n + "}" : n
				})).join("")
			}, t.i = function (e, n) {
				"string" == typeof e && (e = [[null, e, ""]]);
				for (var o = {}, r = 0; r < this.length; r++) {
					var i = this[r][0];
					"number" == typeof i && (o[i] = !0)
				}
				for (r = 0; r < e.length; r++) {
					var a = e[r];
					"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
				}
			}, t
		}
	}, function (e, t) {
		e.exports = "img/play-line.png"
	}, function (e, t) {
		e.exports = "img/pause-line.png"
	}, function (e, t) {
		e.exports = "img/play-line.png"
	}, function (e, t) {
		e.exports = "img/pause-line.png"
	}, function (e, t) {
		e.exports = "img/fullscreen-exit-line.png"
	}, function (e, t) {
		e.exports = "img/fullscreen-line.png"
	}, function (e, t) {
		e.exports = "img/logging.png"
	}, function (e, t) {
		e.exports = "img/playone.png"
	}, function (e, t) {
		e.exports = "img/volume-down-line.png"
	}, function (e, t) {
		e.exports = "img/aspect-ratio-line.png"
	}, function (e, t) {
		e.exports = "img/repeat-2-fill.png"
	}, function (e, t) {
		e.exports = "img/repeat-one-fill.png"
	}, function (e, t, n) {
		var o, r, i = {}, a = (o = function () {
			return window && document && document.all && !window.atob
		}, function () {
			return void 0 === r && (r = o.apply(this, arguments)), r
		}), u = function (e, t) {
			return t ? t.querySelector(e) : document.querySelector(e)
		}, l = function (e) {
			var t = {};
			return function (e, n) {
				if ("function" == typeof e) return e();
				if (void 0 === t[e]) {
					var o = u.call(this, e, n);
					if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
						o = o.contentDocument.head
					} catch (e) {
						o = null
					}
					t[e] = o
				}
				return t[e]
			}
		}(), s = null, c = 0, p = [], f = n(33);
		function d(e, t) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n], r = i[o.id];
				if (r) {
					r.refs++;
					for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]);
					for (; a < o.parts.length; a++) r.parts.push(v(o.parts[a], t))
				} else {
					var u = [];
					for (a = 0; a < o.parts.length; a++) u.push(v(o.parts[a], t));
					i[o.id] = { id: o.id, refs: 1, parts: u }
				}
			}
		}
		function m(e, t) {
			for (var n = [], o = {}, r = 0; r < e.length; r++) {
				var i = e[r], a = t.base ? i[0] + t.base : i[0], u = { css: i[1], media: i[2], sourceMap: i[3] };
				o[a] ? o[a].parts.push(u) : n.push(o[a] = { id: a, parts: [u] })
			}
			return n
		}
		function h(e, t) {
			var n = l(e.insertInto);
			if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
			var o = p[p.length - 1];
			if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), p.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
				if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
				var r = l(e.insertAt.before, n);
				n.insertBefore(t, r)
			}
		}
		function A(e) {
			if (null === e.parentNode) return !1;
			e.parentNode.removeChild(e);
			var t = p.indexOf(e);
			t >= 0 && p.splice(t, 1)
		}
		function b(e) {
			var t = document.createElement("style");
			if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
				var o = function () {
					0;
					return n.nc
				}();
				o && (e.attrs.nonce = o)
			}
			return y(t, e.attrs), h(e, t), t
		}
		function y(e, t) {
			Object.keys(t).forEach((function (n) {
				e.setAttribute(n, t[n])
			}))
		}
		function v(e, t) {
			var n, o, r, i;
			if (t.transform && e.css) {
				if (!(i = t.transform(e.css))) return function () {
				};
				e.css = i
			}
			if (t.singleton) {
				var a = c++;
				n = s || (s = b(t)), o = E.bind(null, n, a, !1), r = E.bind(null, n, a, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
				var t = document.createElement("link");
				return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), h(e, t), t
			}(t), o = O.bind(null, n, t), r = function () {
				A(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = b(t), o = C.bind(null, n), r = function () {
				A(n)
			});
			return o(e), function (t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					o(e = t)
				} else r()
			}
		}
		e.exports = function (e, t) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
			(t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
			var n = m(e, t);
			return d(n, t), function (e) {
				for (var o = [], r = 0; r < n.length; r++) {
					var a = n[r];
					(u = i[a.id]).refs--, o.push(u)
				}
				e && d(m(e, t), t);
				for (r = 0; r < o.length; r++) {
					var u;
					if (0 === (u = o[r]).refs) {
						for (var l = 0; l < u.parts.length; l++) u.parts[l]();
						delete i[u.id]
					}
				}
			}
		};
		var g, w = (g = [], function (e, t) {
			return g[e] = t, g.filter(Boolean).join("\n")
		});
		function E(e, t, n, o) {
			var r = n ? "" : o.css;
			if (e.styleSheet) e.styleSheet.cssText = w(t, r); else {
				var i = document.createTextNode(r), a = e.childNodes;
				a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
			}
		}
		function C(e, t) {
			var n = t.css, o = t.media;
			if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n; else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}
		function O(e, t, n) {
			var o = n.css, r = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && r;
			(t.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
			var a = new Blob([o], { type: "text/css" }), u = e.href;
			e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = "undefined" != typeof window && window.location;
			if (!t) throw new Error("fixUrls requires window.location");
			if (!e || "string" != typeof e) return e;
			var n = t.protocol + "//" + t.host, o = n + t.pathname.replace(/\/[^\/]*$/, "/");
			return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (e, t) {
				var r, i = t.trim().replace(/^"(.*)"$/, (function (e, t) {
					return t
				})).replace(/^'(.*)'$/, (function (e, t) {
					return t
				}));
				return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
			}))
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = n(0), i = n(4);
		var a = r.util.toTitleCase, u = r.util.featureDetector, l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleMouseEnter = o.handleMouseEnter.bind(o), o.handleMouseMove = o.handleMouseMove.bind(o), o.handleMouseLeave = o.handleMouseLeave.bind(o), o.handleTouchStart = o.handleTouchStart.bind(o), o.handleTouchEnd = o.handleTouchEnd.bind(o), o.handleFirstplay = o.handleFirstplay.bind(o), o.activeTimeoutHandler = null, o.activeTimeout = i.ACTIVE_DURATION, o.events = ["loadstart", "loadedmetadata", "canplay", "canplaythrough", "error", "playing", "waiting", "seeking", "seeked", "ended", "play", "pause"], o.player.on("contextmenu", (function (e) {
					e.preventDefault()
				})), o.events.forEach((function (e) {
					var t = "handle" + a(e);
					o[t] = o[t].bind(o), o.player.on(e, o[t])
				})), u.touch ? (o.player.on("touchstart", o.handleTouchStart), o.player.on("touchend", o.handleTouchEnd)) : (o.player.on("mouseenter", o.handleMouseEnter), o.player.on("mousemove", o.handleMouseMove), o.player.on("mouseleave", o.handleMouseLeave)), o.player.on("firstplay", o.handleFirstplay), o.player.addClass(i.ClassNames.PAUSED), window.screen.height / window.screen.width > i.NORMAL_SCREEN_RATIO && o.player.addClass(i.ClassNames.ALL_SCREEN), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "dispose", value: function () {
					var e = this;
					clearTimeout(this.activeTimeoutHandler), u.touch ? (this.player.off("touchstart", this.handleTouchStart), this.player.off("touchend", this.handleTouchEnd)) : (this.player.off("mouseenter", this.handleMouseEnter), this.player.off("mousemove", this.handleMouseMove), this.player.off("mouseleave", this.handleMouseLeave)), this.events.forEach((function (t) {
						e.player.off(t, e["handle" + a(t)])
					})), this.player.off("firstplay", this.handleFirstplay), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "handleTouchStart", value: function (e) {
					this.player.hasClass(i.ClassNames.ACTIVE) && (r.DOM.parent(e.target, "uum-play-button") || r.DOM.parent(e.target, "uum-control-bar")) && clearTimeout(this.activeTimeoutHandler)
				}
			}, {
				key: "handleTouchEnd", value: function (e) {
					var t = this;
					clearTimeout(this.activeTimeoutHandler);
					var n = !1;
					(r.DOM.parent(e.target, "uum-play-button") || r.DOM.parent(e.target, "uum-control-bar")) && (n = !0), n || this.player.toggleClass(i.ClassNames.ACTIVE), this.player.hasClass(i.ClassNames.ACTIVE) && (this.activeTimeoutHandler = setTimeout((function () {
						t.player.removeClass(i.ClassNames.ACTIVE)
					}), this.activeTimeout))
				}
			}, {
				key: "handleMouseEnter", value: function (e) {
					var t = this;
					clearTimeout(this.activeTimeoutHandler), this.player.hasClass(i.ClassNames.ACTIVE) || this.player.addClass(i.ClassNames.ACTIVE), this.activeTimeoutHandler = setTimeout((function () {
						t.player.removeClass(i.ClassNames.ACTIVE)
					}), this.activeTimeout)
				}
			}, {
				key: "handleMouseMove", value: function (e) {
					this.handleMouseEnter(e)
				}
			}, {
				key: "handleMouseLeave", value: function (e) {
					clearTimeout(this.activeTimeoutHandler), this.player.removeClass(i.ClassNames.ACTIVE)
				}
			}, {
				key: "handleLoadstart", value: function () {
					this.player.addClass(i.ClassNames.LOADSTART)
				}
			}, {
				key: "handleLoadedmetadata", value: function () {
					this.player.removeClass(i.ClassNames.LOADSTART)
				}
			}, {
				key: "handlePlay", value: function () {
					var e = this;
					this.player.removeClass(i.ClassNames.LOADSTART), this.player.removeClass(i.ClassNames.SEEKING), this.player.removeClass(i.ClassNames.WAITING), this.player.removeClass(i.ClassNames.PAUSED), this.player.removeClass(i.ClassNames.ENDED), this.player.removeClass(i.ClassNames.ERROR), this.player.addClass(i.ClassNames.PLAYING), clearTimeout(this.activeTimeoutHandler), this.player.addClass(i.ClassNames.ACTIVE), this.activeTimeoutHandler = setTimeout((function () {
						e.player.removeClass(i.ClassNames.ACTIVE)
					}), this.activeTimeout)
				}
			}, {
				key: "handleWaiting", value: function () {
					this.player.addClass(i.ClassNames.WAITING)
				}
			}, {
				key: "handleCanplay", value: function () {
					this.player.removeClass(i.ClassNames.WAITING), this.player.removeClass(i.ClassNames.LOADSTART), this.player.paused() && (this.player.removeClass(i.ClassNames.PLAYING), this.player.addClass(i.ClassNames.PAUSED))
				}
			}, {
				key: "handleCanplaythrough", value: function () {
					this.player.removeClass(i.ClassNames.WAITING)
				}
			}, {
				key: "handlePlaying", value: function () {
					this.player.removeClass(i.ClassNames.WAITING), this.player.removeClass(i.ClassNames.LOADSTART), this.player.removeClass(i.ClassNames.SEEKING), this.player.removeClass(i.ClassNames.PAUSED), this.player.removeClass(i.ClassNames.ERROR), this.player.removeClass(i.ClassNames.ENDED)
				}
			}, {
				key: "handleSeeking", value: function () {
					this.player.addClass(i.ClassNames.SEEKING)
				}
			}, {
				key: "handleSeeked", value: function () {
					this.player.removeClass(i.ClassNames.SEEKING), this.player.removeClass(i.ClassNames.WAITING), this.player.removeClass(i.ClassNames.LOADSTART)
				}
			}, {
				key: "handleFirstplay", value: function () {
					var e = this;
					this.player.addClass(i.ClassNames.HAS_START), clearTimeout(this.activeTimeoutHandler), this.player.addClass(i.ClassNames.ACTIVE), this.activeTimeoutHandler = setTimeout((function () {
						e.player.removeClass(i.ClassNames.ACTIVE)
					}), this.activeTimeout)
				}
			}, {
				key: "handlePause", value: function () {
					this.player.removeClass(i.ClassNames.PLAYING), this.player.addClass(i.ClassNames.PAUSED)
				}
			}, {
				key: "handleEnded", value: function () {
					this.player.removeClass(i.ClassNames.PLAYING), this.player.removeClass(i.ClassNames.ERROR), this.player.addClass(i.ClassNames.ENDED)
				}
			}, {
				key: "handleError", value: function () {
					this.player.removeClass(i.ClassNames.PLAYING), this.player.removeClass(i.ClassNames.ENDED), this.player.removeClass(i.ClassNames.PAUSED), this.player.removeClass(i.ClassNames.LOADSTART), this.player.removeClass(i.ClassNames.SEEKING), this.player.removeClass(i.ClassNames.WAITING), this.player.addClass(i.ClassNames.ERROR)
				}
			}]), t
		}(r.Plugin);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = n(0), i = n(4);
		var a = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.controls = o.controls.bind(o), o.player.tech.el.removeAttribute("controls"), o.player.controls = o.controls, o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "controls", value: function (e) {
					return void 0 !== e && (e ? this.player.removeClass(i.ClassNames.CONTROLS_HIDE) : this.player.addClass(i.ClassNames.CONTROLS_HIDE)), !this.player.hasClass(i.ClassNames.CONTROLS_HIDE)
				}
			}]), t
		}(r.Plugin);
		t.default = a
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = n(0), i = n(4);
		var a = r.util.toTitleCase, u = r.util.featureDetector, l = r.util.includes, s = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleAllEvents("on"), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleAllEvents", value: function (e) {
					var t = this, n = ["touchstart", "touchend"], o = ["mouseenter", "mousemove", "mouseleave"];
					["play", "pause", "ended"].concat(n, o).forEach((function (r) {
						var i = "handle" + a(r);
						t[i] = t[i].bind(t), l(n, r) ? u.touch && t.player[e](r, t[i]) : l(o, r) && u.touch || t.player[e](r, t[i])
					}))
				}
			}, {
				key: "dispose", value: function () {
					clearTimeout(this.timeoutHandler), this.handleAllEvents("off"), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "setTimeoutTriggerControlsHide", value: function () {
					var e = this;
					this.timeoutHandler = setTimeout((function () {
						e.player.trigger(i.Events.CONTROLS_HIDE)
					}), i.ACTIVE_DURATION)
				}
			}, {
				key: "handlePlay", value: function () {
					clearTimeout(this.timeoutHandler), this.player.trigger(i.Events.CONTROLS_SHOW), this.setTimeoutTriggerControlsHide()
				}
			}, {
				key: "handleTouchstart", value: function () {
					clearTimeout(this.timeoutHandler)
				}
			}, {
				key: "handleTouchend", value: function () {
					clearTimeout(this.timeoutHandler), this.player.hasClass(i.ClassNames.ACTIVE) ? (this.player.trigger(i.Events.CONTROLS_SHOW), this.setTimeoutTriggerControlsHide()) : this.player.paused() || this.player.trigger(i.Events.CONTROLS_HIDE)
				}
			}, {
				key: "handleMouseenter", value: function () {
					clearTimeout(this.timeoutHandler), this.player.trigger(i.Events.CONTROLS_SHOW), this.setTimeoutTriggerControlsHide()
				}
			}, {
				key: "handleMousemove", value: function () {
					this.handleMouseenter()
				}
			}, {
				key: "handleMouseleave", value: function () {
					clearTimeout(this.timeoutHandler), this.player.paused() || this.player.trigger(i.Events.CONTROLS_HIDE)
				}
			}, {
				key: "handlePause", value: function () {
					clearTimeout(this.timeoutHandler), this.player.trigger(i.Events.CONTROLS_SHOW)
				}
			}, {
				key: "handleEnded", value: function () {
					clearTimeout(this.timeoutHandler), this.player.trigger(i.Events.CONTROLS_SHOW)
				}
			}]), t
		}(r.Plugin);
		t.default = s
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = f(n(1)), i = n(0), a = f(n(38)), u = f(n(45)), l = f(n(46)), s = f(n(13)), c = f(n(14)), p = f(n(47));

		function f(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function d(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function m(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var h = function (e) {
			function t() {
				return d(this, t), m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-custom-controls", "uum-custom-controls--mobile", this.options.className) }, i.Component.createElement(a.default, null), i.Component.createElement(s.default, null), i.Component.createElement(l.default, null), i.Component.createElement(p.default, null), i.Component.createElement(u.default, null), i.Component.createElement(c.default, null))
				}
			}]), t
		}(i.Component);
		t.default = h
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = p(n(1)), i = n(0), a = p(n(7)), u = p(n(8)), l = p(n(9)), s = p(n(43)), c = p(n(10));
		function p(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function d(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var m = function (e) {
			function t() {
				return f(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "reset", value: function () {
					this.children.forEach((function (e) {
						e && e.reset && e.reset()
					}))
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-control-bar", this.options.className) }, i.Component.createElement(s.default, null), i.Component.createElement(a.default, null), i.Component.createElement(c.default, null), i.Component.createElement(u.default, null), i.Component.createElement(l.default, null))
				}
			}]), t
		}(i.Component);
		t.default = m
	}, function (e, t, n) {
		(function (t) {
			var o, r = void 0 !== t ? t : "undefined" != typeof window ? window : {}, i = n(41);
			"undefined" != typeof document ? o = document : (o = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (o = r["__GLOBAL_DOCUMENT_CACHE@4"] = i), e.exports = o
		}).call(this, n(40))
	}, function (e, t) {
		var n;
		n = function () {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function (e, t) {
	}, function (e, t) {
		var n = /^(?:0|[1-9]\d*)$/;
		function o(e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2])
			}
			return e.apply(t, n)
		}
		var r, i, a = Object.prototype, u = a.hasOwnProperty, l = a.toString, s = a.propertyIsEnumerable,
			c = (r = Object.keys, i = Object, function (e) {
				return r(i(e))
			}), p = Math.max, f = !s.call({ valueOf: 1 }, "valueOf");
		function d(e, t) {
			var n = y(e) || function (e) {
				return function (e) {
					return function (e) {
						return !!e && "object" == typeof e
					}(e) && v(e)
				}(e) && u.call(e, "callee") && (!s.call(e, "callee") || "[object Arguments]" == l.call(e))
			}(e) ? function (e, t) {
				for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
				return o
			}(e.length, String) : [], o = n.length, r = !!o;
			for (var i in e) !t && !u.call(e, i) || r && ("length" == i || h(i, o)) || n.push(i);
			return n
		}
		function m(e, t, n) {
			var o = e[t];
			u.call(e, t) && b(o, n) && (void 0 !== n || t in e) || (e[t] = n)
		}
		function h(e, t) {
			return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || n.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		function A(e) {
			var t = e && e.constructor;
			return e === ("function" == typeof t && t.prototype || a)
		}
		function b(e, t) {
			return e === t || e != e && t != t
		}
		var y = Array.isArray;
		function v(e) {
			return null != e && function (e) {
				return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
			}(e.length) && !function (e) {
				var t = g(e) ? l.call(e) : "";
				return "[object Function]" == t || "[object GeneratorFunction]" == t
			}(e)
		}
		function g(e) {
			var t = typeof e;
			return !!e && ("object" == t || "function" == t)
		}
		var w, E = (w = function (e, t) {
			if (f || A(t) || v(t)) !function (e, t, n, o) {
				n || (n = {});
				for (var r = -1, i = t.length; ++r < i;) {
					var a = t[r], u = o ? o(n[a], e[a], a, n, e) : void 0;
					m(n, a, void 0 === u ? e[a] : u)
				}
			}(t, function (e) {
				return v(e) ? d(e) : function (e) {
					if (!A(e)) return c(e);
					var t = [];
					for (var n in Object(e)) u.call(e, n) && "constructor" != n && t.push(n);
					return t
				}(e)
			}(t), e); else for (var n in t) u.call(t, n) && m(e, n, t[n])
		}, function (e, t) {
			return t = p(void 0 === t ? e.length - 1 : t, 0), function () {
				for (var n = arguments, r = -1, i = p(n.length - t, 0), a = Array(i); ++r < i;) a[r] = n[t + r];
				r = -1;
				for (var u = Array(t + 1); ++r < t;) u[r] = n[r];
				return u[t] = a, o(e, this, u)
			}
		}((function (e, t) {
			var n = -1, o = t.length, r = o > 1 ? t[o - 1] : void 0, i = o > 2 ? t[2] : void 0;
			for (r = w.length > 3 && "function" == typeof r ? (o--, r) : void 0, i && function (e, t, n) {
				if (!g(n)) return !1;
				var o = typeof t;
				return !!("number" == o ? v(n) && h(t, n.length) : "string" == o && t in n) && b(n[t], e)
			}(t[0], t[1], i) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++n < o;) {
				var a = t[n];
				a && w(e, a, n, r)
			}
			return e
		})));
		e.exports = E
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = n(0);
		var i = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleClick = o.handleClick.bind(o), o.handleVolumeChange = o.handleVolumeChange.bind(o), o.on("click", o.handleClick), o.player.on("volumechange", o.handleVolumeChange), o.player.on("ready", o.handleVolumeChange), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleVolumeChange", value: function () {
					r.DOM.removeClass(this.el, "uum-volume-mobile--muted"), r.DOM.removeClass(this.el, "uum-volume-mobile--normal");
					var e = this.player.muted() ? "uum-volume-mobile--muted" : "uum-volume-mobile--normal";
					r.DOM.addClass(this.el, e)
				}
			}, {
				key: "handleClick", value: function () {
					var e = this.player.muted();
					this.player.muted(!e)
				}
			}, {
				key: "createEl", value: function () {
					return r.Component.createElement("div", { className: "uum-volume-mobile" })
				}
			}]), t
		}(r.Component);
		t.default = i
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(12));

		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function s(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var c = function (e) {
			function t() {
				return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-progress-bar-except-fill", this.options.className) }, i.Component.createElement("div", { className: "uum-progress-bar__background" }), i.Component.createElement("div", { className: "uum-progress-bar__line" }, i.Component.createElement("div", { className: "uum-progress-bar__line__handle" }, i.Component.createElement("div", { className: "uum-progress-bar__line__handle-except-fill" }))), i.Component.createElement(a.default, null))
				}
			}]), t
		}(i.Component);
		t.default = c
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(12));
		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleTimeUpdate = o.handleTimeUpdate.bind(o), o.line = i.DOM.$(".uum-progress-bar__line", o.el), e.on("timeupdate", o.handleTimeUpdate), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handleTimeUpdate", value: function () {
					var e = 0, t = this.player.duration(), n = this.player.currentTime();
					t && n && (e = 100 * (e = Math.round(n / t * 100) / 100) + "%"), this.line.style.width = e
				}
			}, {
				key: "reset", value: function () {
					this.line.style.width = 0, this.children.forEach((function (e) {
						e && e.reset && e.reset()
					}))
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("timeupdate", this.handleTimeUpdate), this.line = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-progress-bar--simple", this.options.className) }, i.Component.createElement("div", { className: "uum-progress-bar__background" }), i.Component.createElement("div", { className: "uum-progress-bar__line" }), i.Component.createElement(a.default, null))
				}
			}]), t
		}(i.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function s(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var c = function (e) {
			function t() {
				return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-loading", "uum-loading--mobile", this.options.className) }, u.Component.createElement("div", { className: "uum-loading-cnt" }, u.Component.createElement("span", { className: "uum-loading-cnt__spinner uum-icon-loading" }), u.Component.createElement("span", { className: "uum-loading-cnt__text" }, "正在加载")))
				}
			}]), t
		}(u.Component);
		t.default = c
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleError = o.handleError.bind(o), o.handleClick = o.handleClick.bind(o), o.textEl = u.DOM.$(".uum-error-cnt__text", o.el), o.player.on("error", o.handleError), o.on("click", o.handleClick), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "handleError", value: function (e) {
					console.log(e, e.detail);
					var t = this.player.tech.el.error, n = void 0;
					switch (parseInt(t.code, 10)) {
						case 1:
							n = "加载失败[点击重试ERR_ABORTED]";
							break;
						case 2:
							n = "加载失败[点击重试ERR_NETWORK]";
							break;
						case 3:
							n = "加载失败[点击重试ERR_DECODE]";
							break;
						case 4:
							n = "加载失败[点击重试ERR_SRC]";
							break;
						default:
							n = "加载失败[点击重试]"
					}
					u.DOM.replaceContent(this.textEl, n)
				}
			}, {
				key: "handleClick", value: function () {
					var e = this, t = this.player.src();
					this.player.reset(), setTimeout((function () {
						e.player.src(t), e.player.play()
					}), 0)
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("error", this.handleError), this.off("click", this.handleClick), this.textEl = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-error", "uum-error--mobile", this.options.className) }, u.Component.createElement("div", { className: "uum-error-cnt" }, u.Component.createElement("span", { className: "uum-error-cnt__spinner uum-icon-loading" }), u.Component.createElement("span", { className: "uum-error-cnt__text" }, "加载失败，点击重试")))
				}
			}]), t
		}(u.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = p(n(1)), i = n(0), a = p(n(49)), u = p(n(55)), l = p(n(56)), s = p(n(14)), c = p(n(57));
		function p(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function d(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var m = function (e) {
			function t() {
				return f(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-custom-controls", "uum-custom-controls--pc", this.options.className) }, i.Component.createElement(a.default, null), i.Component.createElement(l.default, null), i.Component.createElement(c.default, null), i.Component.createElement(u.default, null), i.Component.createElement(s.default, null))
				}
			}]), t
		}(i.Component);
		t.default = m
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = A(n(1)), i = n(0), a = A(n(10)), u = A(n(7)), l = A(n(8)), s = A(n(13)), c = A(n(9)), p = A(n(50)),
			f = A(n(51)), d = A(n(52)), m = A(n(53)), h = A(n(54));
		function A(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function b(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function y(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var v = function (e) {
			function t() {
				return b(this, t), y(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "reset", value: function () {
					this.children.forEach((function (e) {
						e && e.reset && e.reset()
					}))
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-control-bar-pc", this.options.className) }, i.Component.createElement(p.default, null), i.Component.createElement(a.default, { className: "uum-progress-bar-pc" }), i.Component.createElement("div", { className: "uum-control__left" }, i.Component.createElement(s.default, { className: "uum-play-button-pc" }), i.Component.createElement("div", { className: "uum-time" }, i.Component.createElement(u.default, null), i.Component.createElement("span", { className: "uum-time-separator" }, "/"), i.Component.createElement(l.default, null))), i.Component.createElement("div", { className: "uum-control__right" }, i.Component.createElement(h.default, null), i.Component.createElement(f.default, null), i.Component.createElement(m.default, null), i.Component.createElement(d.default, null), i.Component.createElement(c.default, null)))
				}
			}]), t
		}(i.Component);
		t.default = v
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function s(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var c = function (e) {
			function t() {
				return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-gradient-bottom", this.options.className) })
				}
			}]), t
		}(u.Component);
		t.default = c
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = l(n(1)), i = n(0), a = l(n(11)), u = l(n(2));
		function l(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var s = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.volumeRecord = {
					last: o.player.volume(),
					current: o.player.volume()
				}, o.onSlideStart = o.onSlideStart.bind(o), o.onSlideMove = o.onSlideMove.bind(o), o.onSlideEnd = o.onSlideEnd.bind(o), o.onClick = o.onClick.bind(o), o.update = o.update.bind(o), o.iconClick = o.iconClick.bind(o), o.handleIconMouseOver = o.handleIconMouseOver.bind(o), o.handleIconMouseOut = o.handleIconMouseOut.bind(o), o.switchStatus = o.switchStatus.bind(o), o.clearStatus = o.clearStatus.bind(o), o.handleVolumeChange = o.handleVolumeChange.bind(o), o.line = i.DOM.$(".uum-volume-line__line", o.el), o.ball = i.DOM.$(".uum-volume-line__ball", o.el), o.icon = i.DOM.$(".uum-volume-icon", o.el), i.Events.on(o.icon, "click", o.iconClick), i.Events.on(o.icon, "mouseover", o.handleIconMouseOver), i.Events.on(o.icon, "mouseout", o.handleIconMouseOut), i.Events.on(o.line, "click", o.handleClick), i.Events.on(o.ball, "mousedown", o.handleSlideStart), i.Events.on(o.ball, "touchstart", o.handleSlideStart), o.player.on("volumechange", o.handleVolumeChange), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "onSlideStart", value: function (e) {
					this.isSliding = !0
				}
			}, {
				key: "onSlideMove", value: function (e) {
					e.preventDefault();
					var t = i.DOM.getPointerPosition(this.line, e);
					this.player.volume(t.x), 0 !== this.player.volume() && this.player.muted(!1)
				}
			}, {
				key: "onSlideEnd", value: function (e) {
					this.isSliding = !1, this.updateVolumeRecord()
				}
			}, {
				key: "updateVolumeRecord", value: function () {
					this.volumeRecord = { last: this.volumeRecord.current, current: this.player.volume() }
				}
			}, {
				key: "handleVolumeChange", value: function () {
					this.player.muted() ? this.update(0) : this.update(this.player.volume()), this.isSliding || this.updateVolumeRecord()
				}
			}, {
				key: "onClick", value: function (e) {
					var t = i.DOM.getPointerPosition(this.line, e);
					this.player.volume(t.x), 0 !== this.player.volume() && this.player.muted(!1)
				}
			}, {
				key: "update", value: function (e) {
					var t = this.line.offsetWidth;
					this.ball.style.left = e * t + "px", this.switchStatus(e)
				}
			}, {
				key: "iconClick", value: function (e) {
					this.player.volume() && !this.player.muted() ? this.player.volume(0) : (this.player.volume(this.volumeRecord.last), this.player.muted(!1)), this.showTooltip()
				}
			}, {
				key: "showTooltip", value: function () {
					u.default.show({
						hostEl: this.icon,
						margin: 16,
						content: this.player.volume() && !this.player.muted() ? "静音" : "取消静音"
					})
				}
			}, {
				key: "handleIconMouseOver", value: function () {
					this.showTooltip()
				}
			}, {
				key: "handleIconMouseOut", value: function (e) {
					u.default.hide()
				}
			}, {
				key: "switchStatus", value: function (e) {
					this.clearStatus();
					var t = void 0;
					0 === e ? t = "small" : e <= .6 && e > 0 ? t = "middle" : e > .6 && (t = "large"), i.DOM.addClass(this.icon, "uum-icon-sound-" + t)
				}
			}, {
				key: "clearStatus", value: function () {
					var e = this;
					["uum-icon-sound-small", "uum-icon-sound-middle", "uum-icon-sound-large"].forEach((function (t) {
						i.DOM.removeClass(e.icon, t)
					}))
				}
			}, {
				key: "dispose", value: function () {
					i.Events.off(this.icon, "click", this.iconClick), i.Events.off(this.icon, "mouseover", this.handleIconMouseOver), i.Events.off(this.icon, "mouseout", this.handleIconMouseOut), i.Events.off(this.line, "click", this.handleClick), i.Events.off(this.ball, "mousedown", this.handleSlideStart), i.Events.off(this.ball, "touchstart", this.handleSlideStart), this.icon = null, this.line = null, this.ball = null, this.player.off("volumechange", this.handleVolumeChange), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-volume", this.options.className) }, i.Component.createElement("div", { className: "uum-volume-icon uum-icon-sound-large" }), i.Component.createElement("div", { className: "uum-volume-line" }, i.Component.createElement("div", { className: "uum-volume-line__line" }, i.Component.createElement("div", { className: "uum-volume-line__line-padding" })), i.Component.createElement("div", { className: "uum-volume-line__ball" })))
				}
			}]), t
		}(a.default);
		t.default = s
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(2));
		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.icon = i.DOM.$(".uum-handfull", o.el), i.Events.on(o.icon, "click", o.handFull.bind(o)), i.Events.on(o.icon, "mouseover", o.show.bind(o)), i.Events.on(o.icon, "mouseout", o.hide), o.createEl = o.createEl.bind(o), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "handFull", value: function (e) {
					i.DOM.hasClass(this.player.el, "handfull") ? (i.DOM.removeClass(this.player.el, "handfull"), document.body.classList.remove("hide")) : (i.DOM.addClass(this.player.el, "handfull"), document.body.classList.add("hide"))
				}
			}, {
				key: "show", value: function () {
					a.default.show({
						hostEl: this.icon,
						margin: 16,
						content: i.DOM.hasClass(document.body, "hide") ? "退出网页全屏" : "网页全屏"
					})
				}
			}, {
				key: "hide", value: function () {
					a.default.hide()
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-handfull-button", this.options.className) }, i.Component.createElement("div", { className: "uum-handfull" }))
				}
			}]), t
		}(i.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = u(n(1)), i = n(0), a = u(n(2));

		function u(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.createEl = o.createEl.bind(o), o.icon = i.DOM.$(".uum-loop", o.el), i.Events.on(o.icon, "click", o.loop.bind(o)), i.Events.on(o.icon, "mouseover", o.show.bind(o)), i.Events.on(o.icon, "mouseout", o.hide), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "loop", value: function (e) {
					this.player.loop() ? (this.player.loop(!1), i.DOM.removeClass(this.icon, "loop")) : (this.player.loop(!0), i.DOM.addClass(this.icon, "loop")), a.default.show({
						hostEl: this.icon,
						margin: 16,
						content: this.player.loop() ? "关闭循环" : "打开循环"
					})
				}
			}, {
				key: "show", value: function () {
					a.default.show({ hostEl: this.icon, margin: 16, content: this.player.loop() ? "关闭循环" : "打开循环" })
				}
			}, {
				key: "hide", value: function () {
					a.default.hide()
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-loop-button") }, i.Component.createElement("div", { className: (0, r.default)("uum-loop", this.player.loop() ? "loop" : "") }))
				}
			}]), t
		}(i.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), r = a(n(1)), i = n(0);
		a(n(2));
		function a(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var u = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.arr = i.DOM.$$("li", o.el), o.ul = i.DOM.$("ul", o.el), o.span = i.DOM.$(".uum-su-button span", o.el), i.Events.on(o.el, "mouseover", o.show.bind(o)), i.Events.on(o.el, "mouseout", o.hide.bind(o)), o.arr.forEach((function (e) {
					i.Events.on(e, "click", (function (t) {
						o.switchs(e, t)
					}))
				})), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), o(t, [{
				key: "switchs", value: function (e, t) {
					i.DOM.textContent(this.span, e.innerText), this.arr.forEach((function (e) {
						i.DOM.hasClass(e, "currentx") && i.DOM.removeClass(e, "currentx")
					})), i.DOM.addClass(t.srcElement, "currentx"), this.ul.classList.remove("show"), this.player.playbackRate(e.getAttribute("data-v"))
				}
			}, {
				key: "show", value: function (e) {
					this.ul.classList.add("show"), e.stopPropagation()
				}
			}, {
				key: "hide", value: function (e) {
					this.ul.classList.remove("show")
				}
			}, {
				key: "createEl", value: function () {
					return i.Component.createElement("div", { className: (0, r.default)("uum-su-button") }, i.Component.createElement("span", null, "倍速"), i.Component.createElement("div", { style: "position:absolute;height:30px,bottom:0" }), i.Component.createElement("ul", null, i.Component.createElement("li", { "data-v": "2" }, "2x"), i.Component.createElement("li", { "data-v": "1.75" }, "1.75x"), i.Component.createElement("li", { "data-v": "1.25" }, "1.25x"), i.Component.createElement("li", { "data-v": "1" }, "正常"), i.Component.createElement("li", { "data-v": "0.75" }, "0.75x"), i.Component.createElement("li", { "data-v": "0.5" }, "0.5x")))
				}
			}]), t
		}(i.Component);
		t.default = u
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleClick = o.handleClick.bind(o), o.on("click", o.handleClick), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "handleClick", value: function () {
					this.player.play()
				}
			}, {
				key: "dispose", value: function () {
					this.off("click", this.handleClick), function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-complete", this.options.className) }, u.Component.createElement("div", { className: "uum-complete__replay uum-icon-replay" }))
				}
			}]), t
		}(u.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function s(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		var c = function (e) {
			function t() {
				return l(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-loading", "uum-loading--pc", this.options.className) }, u.Component.createElement("div", { className: "uum-loading-spinner" }))
				}
			}]), t
		}(u.Component);
		t.default = c
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(1), a = (o = i) && o.__esModule ? o : { default: o }, u = n(0);
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.handleError = o.handleError.bind(o), o.handleClick = o.handleClick.bind(o), o.player.on("error", o.handleError), o.on("click", o.handleClick), o.textEl = u.DOM.$(".uum-error-text", o.el), o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "handleClick", value: function () {
					var e = this, t = this.player.src();
					this.player.reset(), setTimeout((function () {
						e.player.src(t), e.player.play()
					}), 0)
				}
			}, {
				key: "handleError", value: function (e) {
					var t = this.player.tech.el.error, n = void 0;
					switch (parseInt(t.code, 10)) {
						case 1:
							n = "加载失败[点击重试]";
							break;
						case 2:
							n = "加载失败[请检查您的网络]";
							break;
						case 3:
							n = "视频解码失败";
							break;
						case 4:
							n = "加载失败[该资源无法访问或者浏览器不支持该视频类型]";
							break;
						default:
							n = "加载失败[点击重试]"
					}
					u.DOM.replaceContent(this.textEl, n)
				}
			}, {
				key: "dispose", value: function () {
					this.player.off("error", this.handleError), this.off("click", this.handleClick), this.textEl = null, function e(t, n, o) {
						null === t && (t = Function.prototype);
						var r = Object.getOwnPropertyDescriptor(t, n);
						if (void 0 === r) {
							var i = Object.getPrototypeOf(t);
							return null === i ? void 0 : e(i, n, o)
						}
						if ("value" in r) return r.value;
						var a = r.get;
						return void 0 !== a ? a.call(o) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
				}
			}, {
				key: "createEl", value: function () {
					return u.Component.createElement("div", { className: (0, a.default)("uum-error", "uum-error--pc", this.options.className) }, u.Component.createElement("div", { className: "uum-error-cnt" }, u.Component.createElement("div", { className: "uum-error-text" }, "加载失败[请稍后重试]")))
				}
			}]), t
		}(u.Component);
		t.default = l
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o, r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(), i = n(0), a = n(3), u = (o = a) && o.__esModule ? o : { default: o };
		var l = function (e) {
			function t(e, n) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return o.reset = o.reset.bind(o), o.player.reset = o.reset, o
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), r(t, [{
				key: "reset", value: function () {
					this.resetBufferBar(), this.resetCurrentTime(), this.resetDuration(), this.resetProgressBar(), this.resetProgressBarSimple()
				}
			}, {
				key: "resetBufferBar", value: function () {
					var e = i.DOM.$(".uum-buffer-bar__line", this.player.el);
					e && (e.style.width = 0)
				}
			}, {
				key: "resetCurrentTime", value: function () {
					var e = i.DOM.$(".uum-current-time", this.player.el);
					e && i.DOM.textContent(e, (0, u.default)(0))
				}
			}, {
				key: "resetDuration", value: function () {
					var e = i.DOM.$(".uum-duration", this.player.el);
					e && i.DOM.textContent(e, "")
				}
			}, {
				key: "resetProgressBar", value: function () {
					var e = i.DOM.$(".uum-progress-bar .uum-progress-bar__line", this.player.el);
					e && (e.style.width = 0)
				}
			}, {
				key: "resetProgressBarSimple", value: function () {
					var e = i.DOM.$(".uum-progress-bar--simple .uum-progress-bar__line", this.player.el);
					e && (e.style.width = 0)
				}
			}]), t
		}(i.Plugin);
		t.default = l
	}])
}));