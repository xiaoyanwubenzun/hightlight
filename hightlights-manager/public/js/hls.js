(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if (typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window
		} else if (typeof global !== "undefined") {
			g = global
		} else if (typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.uumPlayerHls = f()
	}
})(function () {
	var define, module, exports;
	return (function () {
		function e(t, n, r) {
			function s(o, u) {
				if (!n[o]) {
					if (!t[o]) {
						var a = typeof require == "function" && require;
						if (!u && a) return a(o, !0);
						if (i) return i(o, !0);
						var f = new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f
					}
					var l = n[o] = {
						exports: {}
					};
					t[o][0].call(l.exports, function (e) {
						var n = t[o][1][e];
						return s(n ? n : e)
					}, l, l.exports, e, t, n, r)
				}
				return n[o].exports
			}
			var i = typeof require == "function" && require;
			for (var o = 0; o < r.length; o++) s(r[o]);
			return s
		}
		return e
	})()({
		1: [
			function (require, module, exports) {
				(function webpackUniversalModuleDefinition(root, factory) {
					if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
					else if (typeof define === 'function' && define.amd) define([], factory);
					else if (typeof exports === 'object') exports["Hls"] = factory();
					else root["Hls"] = factory()
				})(typeof self !== 'undefined' ? self : this, function () {
					return (function (modules) {
						var installedModules = {};

						function __webpack_require__(moduleId) {
							if (installedModules[moduleId]) {
								return installedModules[moduleId].exports
							}
							var module = installedModules[moduleId] = {
								i: moduleId,
								l: false,
								exports: {}
							};
							modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
							module.l = true;
							return module.exports
						}
						__webpack_require__.m = modules;
						__webpack_require__.c = installedModules;
						__webpack_require__.d = function (exports, name, getter) {
							if (!__webpack_require__.o(exports, name)) {
								Object.defineProperty(exports, name, {
									configurable: false,
									enumerable: true,
									get: getter
								})
							}
						};
						__webpack_require__.n = function (module) {
							var getter = module && module.__esModule ? function getDefault() {
								return module['default']
							} : function getModuleExports() {
								return module
							};
							__webpack_require__.d(getter, 'a', getter);
							return getter
						};
						__webpack_require__.o = function (object, property) {
							return Object.prototype.hasOwnProperty.call(object, property)
						};
						__webpack_require__.p = "/dist/";
						return __webpack_require__(__webpack_require__.s = 9)
					})([(function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						__webpack_require__.d(__webpack_exports__, "a", function () {
							return enableLogs
						});
						__webpack_require__.d(__webpack_exports__, "b", function () {
							return logger
						});
						var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
							return typeof obj
						} : function (obj) {
							return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
						};

						function noop() { }
						var fakeLogger = {
							trace: noop,
							debug: noop,
							log: noop,
							warn: noop,
							info: noop,
							error: noop
						};
						var exportedLogger = fakeLogger;

						function formatMsg(type, msg) {
							msg = '[' + type + '] > ' + msg;
							return msg
						}

						function consolePrintFn(type) {
							var func = self.console[type];
							if (func) {
								return function () {
									for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
										args[_key] = arguments[_key]
									}
									if (args[0]) args[0] = formatMsg(type, args[0]);
									func.apply(self.console, args)
								}
							}
							return noop
						}

						function exportLoggerFunctions(debugConfig) {
							for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
								functions[_key2 - 1] = arguments[_key2]
							}
							functions.forEach(function (type) {
								exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type)
							})
						}
						var enableLogs = function enableLogs(debugConfig) {
							if (debugConfig === true || (typeof debugConfig === 'undefined' ? 'undefined' : _typeof(debugConfig)) === 'object') {
								exportLoggerFunctions(debugConfig, 'debug', 'log', 'info', 'warn', 'error');
								try {
									exportedLogger.log()
								} catch (e) {
									exportedLogger = fakeLogger
								}
							} else {
								exportedLogger = fakeLogger
							}
						};
						var logger = exportedLogger
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						var HlsEvents = {
							MEDIA_ATTACHING: 'hlsMediaAttaching',
							MEDIA_ATTACHED: 'hlsMediaAttached',
							MEDIA_DETACHING: 'hlsMediaDetaching',
							MEDIA_DETACHED: 'hlsMediaDetached',
							BUFFER_RESET: 'hlsBufferReset',
							BUFFER_CODECS: 'hlsBufferCodecs',
							BUFFER_CREATED: 'hlsBufferCreated',
							BUFFER_APPENDING: 'hlsBufferAppending',
							BUFFER_APPENDED: 'hlsBufferAppended',
							BUFFER_EOS: 'hlsBufferEos',
							BUFFER_FLUSHING: 'hlsBufferFlushing',
							BUFFER_FLUSHED: 'hlsBufferFlushed',
							MANIFEST_LOADING: 'hlsManifestLoading',
							MANIFEST_LOADED: 'hlsManifestLoaded',
							MANIFEST_PARSED: 'hlsManifestParsed',
							LEVEL_SWITCHING: 'hlsLevelSwitching',
							LEVEL_SWITCHED: 'hlsLevelSwitched',
							LEVEL_LOADING: 'hlsLevelLoading',
							LEVEL_LOADED: 'hlsLevelLoaded',
							LEVEL_UPDATED: 'hlsLevelUpdated',
							LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated',
							AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated',
							AUDIO_TRACK_SWITCHING: 'hlsAudioTrackSwitching',
							AUDIO_TRACK_SWITCHED: 'hlsAudioTrackSwitched',
							AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading',
							AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded',
							SUBTITLE_TRACKS_UPDATED: 'hlsSubtitleTracksUpdated',
							SUBTITLE_TRACK_SWITCH: 'hlsSubtitleTrackSwitch',
							SUBTITLE_TRACK_LOADING: 'hlsSubtitleTrackLoading',
							SUBTITLE_TRACK_LOADED: 'hlsSubtitleTrackLoaded',
							SUBTITLE_FRAG_PROCESSED: 'hlsSubtitleFragProcessed',
							INIT_PTS_FOUND: 'hlsInitPtsFound',
							FRAG_LOADING: 'hlsFragLoading',
							FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress',
							FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted',
							FRAG_LOADED: 'hlsFragLoaded',
							FRAG_DECRYPTED: 'hlsFragDecrypted',
							FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment',
							FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata',
							FRAG_PARSING_METADATA: 'hlsFragParsingMetadata',
							FRAG_PARSING_DATA: 'hlsFragParsingData',
							FRAG_PARSED: 'hlsFragParsed',
							FRAG_BUFFERED: 'hlsFragBuffered',
							FRAG_CHANGED: 'hlsFragChanged',
							FPS_DROP: 'hlsFpsDrop',
							FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping',
							ERROR: 'hlsError',
							DESTROYING: 'hlsDestroying',
							KEY_LOADING: 'hlsKeyLoading',
							KEY_LOADED: 'hlsKeyLoaded',
							STREAM_STATE_TRANSITION: 'hlsStreamStateTransition'
						};
						__webpack_exports__["a"] = (HlsEvents)
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						__webpack_require__.d(__webpack_exports__, "b", function () {
							return ErrorTypes
						});
						__webpack_require__.d(__webpack_exports__, "a", function () {
							return ErrorDetails
						});
						var ErrorTypes = {
							NETWORK_ERROR: 'networkError',
							MEDIA_ERROR: 'mediaError',
							KEY_SYSTEM_ERROR: 'keySystemError',
							MUX_ERROR: 'muxError',
							OTHER_ERROR: 'otherError'
						};
						var ErrorDetails = {
							KEY_SYSTEM_NO_KEYS: 'keySystemNoKeys',
							KEY_SYSTEM_NO_ACCESS: 'keySystemNoAccess',
							KEY_SYSTEM_NO_SESSION: 'keySystemNoSession',
							KEY_SYSTEM_LICENSE_REQUEST_FAILED: 'keySystemLicenseRequestFailed',
							MANIFEST_LOAD_ERROR: 'manifestLoadError',
							MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut',
							MANIFEST_PARSING_ERROR: 'manifestParsingError',
							MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError',
							LEVEL_LOAD_ERROR: 'levelLoadError',
							LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut',
							LEVEL_SWITCH_ERROR: 'levelSwitchError',
							AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError',
							AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut',
							FRAG_LOAD_ERROR: 'fragLoadError',
							FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut',
							FRAG_DECRYPT_ERROR: 'fragDecryptError',
							FRAG_PARSING_ERROR: 'fragParsingError',
							REMUX_ALLOC_ERROR: 'remuxAllocError',
							KEY_LOAD_ERROR: 'keyLoadError',
							KEY_LOAD_TIMEOUT: 'keyLoadTimeOut',
							BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError',
							BUFFER_APPEND_ERROR: 'bufferAppendError',
							BUFFER_APPENDING_ERROR: 'bufferAppendingError',
							BUFFER_STALLED_ERROR: 'bufferStalledError',
							BUFFER_FULL_ERROR: 'bufferFullError',
							BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole',
							BUFFER_NUDGE_ON_STALL: 'bufferNudgeOnStall',
							INTERNAL_EXCEPTION: 'internalException'
						}
					}), (function (module, exports, __webpack_require__) {
						(function (root) {
							var URL_REGEX = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/;
							var FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/;
							var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
							var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g;
							var URLToolkit = {
								buildAbsoluteURL: function (baseURL, relativeURL, opts) {
									opts = opts || {};
									baseURL = baseURL.trim();
									relativeURL = relativeURL.trim();
									if (!relativeURL) {
										if (!opts.alwaysNormalize) {
											return baseURL
										}
										var basePartsForNormalise = URLToolkit.parseURL(baseURL);
										if (!basePartsForNormalise) {
											throw new Error('Error trying to parse base URL.');
										}
										basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
										return URLToolkit.buildURLFromParts(basePartsForNormalise)
									}
									var relativeParts = URLToolkit.parseURL(relativeURL);
									if (!relativeParts) {
										throw new Error('Error trying to parse relative URL.');
									}
									if (relativeParts.scheme) {
										if (!opts.alwaysNormalize) {
											return relativeURL
										}
										relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
										return URLToolkit.buildURLFromParts(relativeParts)
									}
									var baseParts = URLToolkit.parseURL(baseURL);
									if (!baseParts) {
										throw new Error('Error trying to parse base URL.');
									}
									if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
										var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
										baseParts.netLoc = pathParts[1];
										baseParts.path = pathParts[2]
									}
									if (baseParts.netLoc && !baseParts.path) {
										baseParts.path = '/'
									}
									var builtParts = {
										scheme: baseParts.scheme,
										netLoc: relativeParts.netLoc,
										path: null,
										params: relativeParts.params,
										query: relativeParts.query,
										fragment: relativeParts.fragment
									};
									if (!relativeParts.netLoc) {
										builtParts.netLoc = baseParts.netLoc;
										if (relativeParts.path[0] !== '/') {
											if (!relativeParts.path) {
												builtParts.path = baseParts.path;
												if (!relativeParts.params) {
													builtParts.params = baseParts.params;
													if (!relativeParts.query) {
														builtParts.query = baseParts.query
													}
												}
											} else {
												var baseURLPath = baseParts.path;
												var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) + relativeParts.path;
												builtParts.path = URLToolkit.normalizePath(newPath)
											}
										}
									}
									if (builtParts.path === null) {
										builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path
									}
									return URLToolkit.buildURLFromParts(builtParts)
								},
								parseURL: function (url) {
									var parts = URL_REGEX.exec(url);
									if (!parts) {
										return null
									}
									return {
										scheme: parts[1] || '',
										netLoc: parts[2] || '',
										path: parts[3] || '',
										params: parts[4] || '',
										query: parts[5] || '',
										fragment: parts[6] || ''
									}
								},
								normalizePath: function (path) {
									path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
									while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length) { }
									return path.split('').reverse().join('')
								},
								buildURLFromParts: function (parts) {
									return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment
								}
							};
							if (true) module.exports = URLToolkit;
							else if (typeof define === 'function' && define.amd) define([], function () {
								return URLToolkit
							});
							else if (typeof exports === 'object') exports["URLToolkit"] = URLToolkit;
							else root["URLToolkit"] = URLToolkit
						})(this)
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						__webpack_require__.d(__webpack_exports__, "b", function () {
							return utf8ArrayToStr
						});

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var ID3 = function () {
							function ID3() {
								_classCallCheck(this, ID3)
							}
							ID3.isHeader = function isHeader(data, offset) {
								if (offset + 10 <= data.length) {
									if (data[offset] === 0x49 && data[offset + 1] === 0x44 && data[offset + 2] === 0x33) {
										if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
											if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) return true
										}
									}
								}
								return false
							};
							ID3.isFooter = function isFooter(data, offset) {
								if (offset + 10 <= data.length) {
									if (data[offset] === 0x33 && data[offset + 1] === 0x44 && data[offset + 2] === 0x49) {
										if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
											if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) return true
										}
									}
								}
								return false
							};
							ID3.getID3Data = function getID3Data(data, offset) {
								var front = offset;
								var length = 0;
								while (ID3.isHeader(data, offset)) {
									length += 10;
									var size = ID3._readSize(data, offset + 6);
									length += size;
									if (ID3.isFooter(data, offset + 10)) {
										length += 10
									}
									offset += length
								}
								if (length > 0) return data.subarray(front, front + length);
								return undefined
							};
							ID3._readSize = function _readSize(data, offset) {
								var size = 0;
								size = (data[offset] & 0x7f) << 21;
								size |= (data[offset + 1] & 0x7f) << 14;
								size |= (data[offset + 2] & 0x7f) << 7;
								size |= data[offset + 3] & 0x7f;
								return size
							};
							ID3.getTimeStamp = function getTimeStamp(data) {
								var frames = ID3.getID3Frames(data);
								for (var i = 0; i < frames.length; i++) {
									var frame = frames[i];
									if (ID3.isTimeStampFrame(frame)) return ID3._readTimeStamp(frame)
								}
								return undefined
							};
							ID3.isTimeStampFrame = function isTimeStampFrame(frame) {
								return frame && frame.key === 'PRIV' && frame.info === 'com.apple.streaming.transportStreamTimestamp'
							};
							ID3._getFrameData = function _getFrameData(data) {
								var type = String.fromCharCode(data[0], data[1], data[2], data[3]);
								var size = ID3._readSize(data, 4);
								var offset = 10;
								return {
									type: type,
									size: size,
									data: data.subarray(offset, offset + size)
								}
							};
							ID3.getID3Frames = function getID3Frames(id3Data) {
								var offset = 0;
								var frames = [];
								while (ID3.isHeader(id3Data, offset)) {
									var size = ID3._readSize(id3Data, offset + 6);
									offset += 10;
									var end = offset + size;
									while (offset + 8 < end) {
										var frameData = ID3._getFrameData(id3Data.subarray(offset));
										var frame = ID3._decodeFrame(frameData);
										if (frame) frames.push(frame);
										offset += frameData.size + 10
									}
									if (ID3.isFooter(id3Data, offset)) offset += 10
								}
								return frames
							};
							ID3._decodeFrame = function _decodeFrame(frame) {
								if (frame.type === 'PRIV') return ID3._decodePrivFrame(frame);
								else if (frame.type[0] === 'T') return ID3._decodeTextFrame(frame);
								else if (frame.type[0] === 'W') return ID3._decodeURLFrame(frame);
								return undefined
							};
							ID3._readTimeStamp = function _readTimeStamp(timeStampFrame) {
								if (timeStampFrame.data.byteLength === 8) {
									var data = new Uint8Array(timeStampFrame.data);
									var pts33Bit = data[3] & 0x1;
									var timestamp = (data[4] << 23) + (data[5] << 15) + (data[6] << 7) + data[7];
									timestamp /= 45;
									if (pts33Bit) timestamp += 47721858.84;
									return Math.round(timestamp)
								}
								return undefined
							};
							ID3._decodePrivFrame = function _decodePrivFrame(frame) {
								if (frame.size < 2) return undefined;
								var owner = ID3._utf8ArrayToStr(frame.data, true);
								var privateData = new Uint8Array(frame.data.subarray(owner.length + 1));
								return {
									key: frame.type,
									info: owner,
									data: privateData.buffer
								}
							};
							ID3._decodeTextFrame = function _decodeTextFrame(frame) {
								if (frame.size < 2) return undefined;
								if (frame.type === 'TXXX') {
									var index = 1;
									var description = ID3._utf8ArrayToStr(frame.data.subarray(index));
									index += description.length + 1;
									var value = ID3._utf8ArrayToStr(frame.data.subarray(index));
									return {
										key: frame.type,
										info: description,
										data: value
									}
								} else {
									var text = ID3._utf8ArrayToStr(frame.data.subarray(1));
									return {
										key: frame.type,
										data: text
									}
								}
							};
							ID3._decodeURLFrame = function _decodeURLFrame(frame) {
								if (frame.type === 'WXXX') {
									if (frame.size < 2) return undefined;
									var index = 1;
									var description = ID3._utf8ArrayToStr(frame.data.subarray(index));
									index += description.length + 1;
									var value = ID3._utf8ArrayToStr(frame.data.subarray(index));
									return {
										key: frame.type,
										info: description,
										data: value
									}
								} else {
									var url = ID3._utf8ArrayToStr(frame.data);
									return {
										key: frame.type,
										data: url
									}
								}
							};
							ID3._utf8ArrayToStr = function _utf8ArrayToStr(array) {
								var exitOnNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
								var len = array.length;
								var c = void 0;
								var char2 = void 0;
								var char3 = void 0;
								var out = '';
								var i = 0;
								while (i < len) {
									c = array[i++];
									if (c === 0x00 && exitOnNull) {
										return out
									} else if (c === 0x00 || c === 0x03) {
										continue
									}
									switch (c >> 4) {
										case 0:
										case 1:
										case 2:
										case 3:
										case 4:
										case 5:
										case 6:
										case 7:
											out += String.fromCharCode(c);
											break;
										case 12:
										case 13:
											char2 = array[i++];
											out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
											break;
										case 14:
											char2 = array[i++];
											char3 = array[i++];
											out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
											break;
										default:
									}
								}
								return out
							};
							return ID3
						}();
						var utf8ArrayToStr = ID3._utf8ArrayToStr;
						__webpack_exports__["a"] = (ID3)
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var AESCrypto = function () {
							function AESCrypto(subtle, iv) {
								_classCallCheck(this, AESCrypto);
								this.subtle = subtle;
								this.aesIV = iv
							}
							AESCrypto.prototype.decrypt = function decrypt(data, key) {
								return this.subtle.decrypt({
									name: 'AES-CBC',
									iv: this.aesIV
								}, key, data)
							};
							return AESCrypto
						}();
						var aes_crypto = (AESCrypto);

						function fast_aes_key__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var FastAESKey = function () {
							function FastAESKey(subtle, key) {
								fast_aes_key__classCallCheck(this, FastAESKey);
								this.subtle = subtle;
								this.key = key
							}
							FastAESKey.prototype.expandKey = function expandKey() {
								return this.subtle.importKey('raw', this.key, {
									name: 'AES-CBC'
								}, false, ['encrypt', 'decrypt'])
							};
							return FastAESKey
						}();
						var fast_aes_key = (FastAESKey);

						function aes_decryptor__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function removePadding(buffer) {
							var outputBytes = buffer.byteLength;
							var paddingBytes = outputBytes && new DataView(buffer).getUint8(outputBytes - 1);
							if (paddingBytes) return buffer.slice(0, outputBytes - paddingBytes);
							else return buffer
						}
						var AESDecryptor = function () {
							function AESDecryptor() {
								aes_decryptor__classCallCheck(this, AESDecryptor);
								this.rcon = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
								this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
								this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
								this.sBox = new Uint32Array(256);
								this.invSBox = new Uint32Array(256);
								this.key = new Uint32Array(0);
								this.initTable()
							}
							AESDecryptor.prototype.uint8ArrayToUint32Array_ = function uint8ArrayToUint32Array_(arrayBuffer) {
								var view = new DataView(arrayBuffer);
								var newArray = new Uint32Array(4);
								for (var i = 0; i < 4; i++) {
									newArray[i] = view.getUint32(i * 4)
								}
								return newArray
							};
							AESDecryptor.prototype.initTable = function initTable() {
								var sBox = this.sBox;
								var invSBox = this.invSBox;
								var subMix = this.subMix;
								var subMix0 = subMix[0];
								var subMix1 = subMix[1];
								var subMix2 = subMix[2];
								var subMix3 = subMix[3];
								var invSubMix = this.invSubMix;
								var invSubMix0 = invSubMix[0];
								var invSubMix1 = invSubMix[1];
								var invSubMix2 = invSubMix[2];
								var invSubMix3 = invSubMix[3];
								var d = new Uint32Array(256);
								var x = 0;
								var xi = 0;
								var i = 0;
								for (i = 0; i < 256; i++) {
									if (i < 128) d[i] = i << 1;
									else d[i] = i << 1 ^ 0x11b
								}
								for (i = 0; i < 256; i++) {
									var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
									sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
									sBox[x] = sx;
									invSBox[sx] = x;
									var x2 = d[x];
									var x4 = d[x2];
									var x8 = d[x4];
									var t = d[sx] * 0x101 ^ sx * 0x1010100;
									subMix0[x] = t << 24 | t >>> 8;
									subMix1[x] = t << 16 | t >>> 16;
									subMix2[x] = t << 8 | t >>> 24;
									subMix3[x] = t;
									t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
									invSubMix0[sx] = t << 24 | t >>> 8;
									invSubMix1[sx] = t << 16 | t >>> 16;
									invSubMix2[sx] = t << 8 | t >>> 24;
									invSubMix3[sx] = t;
									if (!x) {
										x = xi = 1
									} else {
										x = x2 ^ d[d[d[x8 ^ x2]]];
										xi ^= d[d[xi]]
									}
								}
							};
							AESDecryptor.prototype.expandKey = function expandKey(keyBuffer) {
								var key = this.uint8ArrayToUint32Array_(keyBuffer);
								var sameKey = true;
								var offset = 0;
								while (offset < key.length && sameKey) {
									sameKey = key[offset] === this.key[offset];
									offset++
								}
								if (sameKey) return;
								this.key = key;
								var keySize = this.keySize = key.length;
								if (keySize !== 4 && keySize !== 6 && keySize !== 8) throw new Error('Invalid aes key size=' + keySize);
								var ksRows = this.ksRows = (keySize + 6 + 1) * 4;
								var ksRow = void 0;
								var invKsRow = void 0;
								var keySchedule = this.keySchedule = new Uint32Array(ksRows);
								var invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows);
								var sbox = this.sBox;
								var rcon = this.rcon;
								var invSubMix = this.invSubMix;
								var invSubMix0 = invSubMix[0];
								var invSubMix1 = invSubMix[1];
								var invSubMix2 = invSubMix[2];
								var invSubMix3 = invSubMix[3];
								var prev = void 0;
								var t = void 0;
								for (ksRow = 0; ksRow < ksRows; ksRow++) {
									if (ksRow < keySize) {
										prev = keySchedule[ksRow] = key[ksRow];
										continue
									}
									t = prev;
									if (ksRow % keySize === 0) {
										t = t << 8 | t >>> 24;
										t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff];
										t ^= rcon[ksRow / keySize | 0] << 24
									} else if (keySize > 6 && ksRow % keySize === 4) {
										t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff]
									}
									keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0
								}
								for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
									ksRow = ksRows - invKsRow;
									if (invKsRow & 3) t = keySchedule[ksRow];
									else t = keySchedule[ksRow - 4]; if (invKsRow < 4 || ksRow <= 4) invKeySchedule[invKsRow] = t;
									else invKeySchedule[invKsRow] = invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[t >>> 16 & 0xff]] ^ invSubMix2[sbox[t >>> 8 & 0xff]] ^ invSubMix3[sbox[t & 0xff]];
									invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0
								}
							};
							AESDecryptor.prototype.networkToHostOrderSwap = function networkToHostOrderSwap(word) {
								return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24
							};
							AESDecryptor.prototype.decrypt = function decrypt(inputArrayBuffer, offset, aesIV, removePKCS7Padding) {
								var nRounds = this.keySize + 6;
								var invKeySchedule = this.invKeySchedule;
								var invSBOX = this.invSBox;
								var invSubMix = this.invSubMix;
								var invSubMix0 = invSubMix[0];
								var invSubMix1 = invSubMix[1];
								var invSubMix2 = invSubMix[2];
								var invSubMix3 = invSubMix[3];
								var initVector = this.uint8ArrayToUint32Array_(aesIV);
								var initVector0 = initVector[0];
								var initVector1 = initVector[1];
								var initVector2 = initVector[2];
								var initVector3 = initVector[3];
								var inputInt32 = new Int32Array(inputArrayBuffer);
								var outputInt32 = new Int32Array(inputInt32.length);
								var t0 = void 0,
									t1 = void 0,
									t2 = void 0,
									t3 = void 0;
								var s0 = void 0,
									s1 = void 0,
									s2 = void 0,
									s3 = void 0;
								var inputWords0 = void 0,
									inputWords1 = void 0,
									inputWords2 = void 0,
									inputWords3 = void 0;
								var ksRow = void 0,
									i = void 0;
								var swapWord = this.networkToHostOrderSwap;
								while (offset < inputInt32.length) {
									inputWords0 = swapWord(inputInt32[offset]);
									inputWords1 = swapWord(inputInt32[offset + 1]);
									inputWords2 = swapWord(inputInt32[offset + 2]);
									inputWords3 = swapWord(inputInt32[offset + 3]);
									s0 = inputWords0 ^ invKeySchedule[0];
									s1 = inputWords3 ^ invKeySchedule[1];
									s2 = inputWords2 ^ invKeySchedule[2];
									s3 = inputWords1 ^ invKeySchedule[3];
									ksRow = 4;
									for (i = 1; i < nRounds; i++) {
										t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[s1 >> 16 & 0xff] ^ invSubMix2[s2 >> 8 & 0xff] ^ invSubMix3[s3 & 0xff] ^ invKeySchedule[ksRow];
										t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[s2 >> 16 & 0xff] ^ invSubMix2[s3 >> 8 & 0xff] ^ invSubMix3[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
										t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[s3 >> 16 & 0xff] ^ invSubMix2[s0 >> 8 & 0xff] ^ invSubMix3[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
										t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[s0 >> 16 & 0xff] ^ invSubMix2[s1 >> 8 & 0xff] ^ invSubMix3[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
										s0 = t0;
										s1 = t1;
										s2 = t2;
										s3 = t3;
										ksRow = ksRow + 4
									}
									t0 = invSBOX[s0 >>> 24] << 24 ^ invSBOX[s1 >> 16 & 0xff] << 16 ^ invSBOX[s2 >> 8 & 0xff] << 8 ^ invSBOX[s3 & 0xff] ^ invKeySchedule[ksRow];
									t1 = invSBOX[s1 >>> 24] << 24 ^ invSBOX[s2 >> 16 & 0xff] << 16 ^ invSBOX[s3 >> 8 & 0xff] << 8 ^ invSBOX[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
									t2 = invSBOX[s2 >>> 24] << 24 ^ invSBOX[s3 >> 16 & 0xff] << 16 ^ invSBOX[s0 >> 8 & 0xff] << 8 ^ invSBOX[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
									t3 = invSBOX[s3 >>> 24] << 24 ^ invSBOX[s0 >> 16 & 0xff] << 16 ^ invSBOX[s1 >> 8 & 0xff] << 8 ^ invSBOX[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
									ksRow = ksRow + 3;
									outputInt32[offset] = swapWord(t0 ^ initVector0);
									outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
									outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
									outputInt32[offset + 3] = swapWord(t1 ^ initVector3);
									initVector0 = inputWords0;
									initVector1 = inputWords1;
									initVector2 = inputWords2;
									initVector3 = inputWords3;
									offset = offset + 4
								}
								return removePKCS7Padding ? removePadding(outputInt32.buffer) : outputInt32.buffer
							};
							AESDecryptor.prototype.destroy = function destroy() {
								this.key = undefined;
								this.keySize = undefined;
								this.ksRows = undefined;
								this.sBox = undefined;
								this.invSBox = undefined;
								this.subMix = undefined;
								this.invSubMix = undefined;
								this.keySchedule = undefined;
								this.invKeySchedule = undefined;
								this.rcon = undefined
							};
							return AESDecryptor
						}();
						var aes_decryptor = (AESDecryptor);
						var errors = __webpack_require__(2);
						var logger = __webpack_require__(0);

						function decrypter__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var decrypter_Decrypter = function () {
							function Decrypter(observer, config) {
								var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
									_ref$removePKCS7Paddi = _ref.removePKCS7Padding,
									removePKCS7Padding = _ref$removePKCS7Paddi === undefined ? true : _ref$removePKCS7Paddi;
								decrypter__classCallCheck(this, Decrypter);
								this.logEnabled = true;
								this.observer = observer;
								this.config = config;
								this.removePKCS7Padding = removePKCS7Padding;
								if (removePKCS7Padding) {
									try {
										var browserCrypto = crypto || self.crypto;
										this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle
									} catch (e) { }
								}
								this.disableWebCrypto = !this.subtle
							}
							Decrypter.prototype.isSync = function isSync() {
								return this.disableWebCrypto && this.config.enableSoftwareAES
							};
							Decrypter.prototype.decrypt = function decrypt(data, key, iv, callback) {
								var _this = this;
								if (this.disableWebCrypto && this.config.enableSoftwareAES) {
									if (this.logEnabled) {
										logger["b"].log('JS AES decrypt');
										this.logEnabled = false
									}
									var decryptor = this.decryptor;
									if (!decryptor) this.decryptor = decryptor = new aes_decryptor();
									decryptor.expandKey(key);
									callback(decryptor.decrypt(data, 0, iv, this.removePKCS7Padding))
								} else {
									if (this.logEnabled) {
										logger["b"].log('WebCrypto AES decrypt');
										this.logEnabled = false
									}
									var subtle = this.subtle;
									if (this.key !== key) {
										this.key = key;
										this.fastAesKey = new fast_aes_key(subtle, key)
									}
									this.fastAesKey.expandKey().then(function (aesKey) {
										var crypto = new aes_crypto(subtle, iv);
										crypto.decrypt(data, aesKey).catch(function (err) {
											_this.onWebCryptoError(err, data, key, iv, callback)
										}).then(function (result) {
											callback(result)
										})
									}).catch(function (err) {
										_this.onWebCryptoError(err, data, key, iv, callback)
									})
								}
							};
							Decrypter.prototype.onWebCryptoError = function onWebCryptoError(err, data, key, iv, callback) {
								if (this.config.enableSoftwareAES) {
									logger["b"].log('WebCrypto Error, disable WebCrypto API');
									this.disableWebCrypto = true;
									this.logEnabled = true;
									this.decrypt(data, key, iv, callback)
								} else {
									logger["b"].error('decrypting error : ' + err.message);
									this.observer.trigger(Event.ERROR, {
										type: errors["b"].MEDIA_ERROR,
										details: errors["a"].FRAG_DECRYPT_ERROR,
										fatal: true,
										reason: err.message
									})
								}
							};
							Decrypter.prototype.destroy = function destroy() {
								var decryptor = this.decryptor;
								if (decryptor) {
									decryptor.destroy();
									this.decryptor = undefined
								}
							};
							return Decrypter
						}();
						var decrypter = __webpack_exports__["a"] = (decrypter_Decrypter)
					}), (function (module, exports) {
						function EventEmitter() {
							this._events = this._events || {};
							this._maxListeners = this._maxListeners || undefined
						}
						module.exports = EventEmitter;
						EventEmitter.EventEmitter = EventEmitter;
						EventEmitter.prototype._events = undefined;
						EventEmitter.prototype._maxListeners = undefined;
						EventEmitter.defaultMaxListeners = 10;
						EventEmitter.prototype.setMaxListeners = function (n) {
							if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
							this._maxListeners = n;
							return this
						};
						EventEmitter.prototype.emit = function (type) {
							var er, handler, len, args, i, listeners;
							if (!this._events) this._events = {};
							if (type === 'error') {
								if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
									er = arguments[1];
									if (er instanceof Error) {
										throw er;
									} else {
										var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
										err.context = er;
										throw err;
									}
								}
							}
							handler = this._events[type];
							if (isUndefined(handler)) return false;
							if (isFunction(handler)) {
								switch (arguments.length) {
									case 1:
										handler.call(this);
										break;
									case 2:
										handler.call(this, arguments[1]);
										break;
									case 3:
										handler.call(this, arguments[1], arguments[2]);
										break;
									default:
										args = Array.prototype.slice.call(arguments, 1);
										handler.apply(this, args)
								}
							} else if (isObject(handler)) {
								args = Array.prototype.slice.call(arguments, 1);
								listeners = handler.slice();
								len = listeners.length;
								for (i = 0; i < len; i++) listeners[i].apply(this, args)
							}
							return true
						};
						EventEmitter.prototype.addListener = function (type, listener) {
							var m;
							if (!isFunction(listener)) throw TypeError('listener must be a function');
							if (!this._events) this._events = {};
							if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
							if (!this._events[type]) this._events[type] = listener;
							else if (isObject(this._events[type])) this._events[type].push(listener);
							else this._events[type] = [this._events[type], listener]; if (isObject(this._events[type]) && !this._events[type].warned) {
								if (!isUndefined(this._maxListeners)) {
									m = this._maxListeners
								} else {
									m = EventEmitter.defaultMaxListeners
								} if (m && m > 0 && this._events[type].length > m) {
									this._events[type].warned = true;
									console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
									if (typeof console.trace === 'function') {
										console.trace()
									}
								}
							}
							return this
						};
						EventEmitter.prototype.on = EventEmitter.prototype.addListener;
						EventEmitter.prototype.once = function (type, listener) {
							if (!isFunction(listener)) throw TypeError('listener must be a function');
							var fired = false;

							function g() {
								this.removeListener(type, g);
								if (!fired) {
									fired = true;
									listener.apply(this, arguments)
								}
							}
							g.listener = listener;
							this.on(type, g);
							return this
						};
						EventEmitter.prototype.removeListener = function (type, listener) {
							var list, position, length, i;
							if (!isFunction(listener)) throw TypeError('listener must be a function');
							if (!this._events || !this._events[type]) return this;
							list = this._events[type];
							length = list.length;
							position = -1;
							if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
								delete this._events[type];
								if (this._events.removeListener) this.emit('removeListener', type, listener)
							} else if (isObject(list)) {
								for (i = length; i-- > 0;) {
									if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
										position = i;
										break
									}
								}
								if (position < 0) return this;
								if (list.length === 1) {
									list.length = 0;
									delete this._events[type]
								} else {
									list.splice(position, 1)
								} if (this._events.removeListener) this.emit('removeListener', type, listener)
							}
							return this
						};
						EventEmitter.prototype.removeAllListeners = function (type) {
							var key, listeners;
							if (!this._events) return this;
							if (!this._events.removeListener) {
								if (arguments.length === 0) this._events = {};
								else if (this._events[type]) delete this._events[type];
								return this
							}
							if (arguments.length === 0) {
								for (key in this._events) {
									if (key === 'removeListener') continue;
									this.removeAllListeners(key)
								}
								this.removeAllListeners('removeListener');
								this._events = {};
								return this
							}
							listeners = this._events[type];
							if (isFunction(listeners)) {
								this.removeListener(type, listeners)
							} else if (listeners) {
								while (listeners.length) this.removeListener(type, listeners[listeners.length - 1])
							}
							delete this._events[type];
							return this
						};
						EventEmitter.prototype.listeners = function (type) {
							var ret;
							if (!this._events || !this._events[type]) ret = [];
							else if (isFunction(this._events[type])) ret = [this._events[type]];
							else ret = this._events[type].slice();
							return ret
						};
						EventEmitter.prototype.listenerCount = function (type) {
							if (this._events) {
								var evlistener = this._events[type];
								if (isFunction(evlistener)) return 1;
								else if (evlistener) return evlistener.length
							}
							return 0
						};
						EventEmitter.listenerCount = function (emitter, type) {
							return emitter.listenerCount(type)
						};

						function isFunction(arg) {
							return typeof arg === 'function'
						}

						function isNumber(arg) {
							return typeof arg === 'number'
						}

						function isObject(arg) {
							return typeof arg === 'object' && arg !== null
						}

						function isUndefined(arg) {
							return arg === void 0
						}
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						var __WEBPACK_IMPORTED_MODULE_0__utils_logger__ = __webpack_require__(0);
						var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var UINT32_MAX = Math.pow(2, 32) - 1;
						var MP4Demuxer = function () {
							function MP4Demuxer(observer, remuxer) {
								_classCallCheck(this, MP4Demuxer);
								this.observer = observer;
								this.remuxer = remuxer
							}
							MP4Demuxer.prototype.resetTimeStamp = function resetTimeStamp(initPTS) {
								this.initPTS = initPTS
							};
							MP4Demuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
								if (initSegment && initSegment.byteLength) {
									var initData = this.initData = MP4Demuxer.parseInitSegment(initSegment);
									if (audioCodec == null) audioCodec = 'mp4a.40.5';
									if (videoCodec == null) videoCodec = 'avc1.42e01e';
									var tracks = {};
									if (initData.audio && initData.video) {
										tracks.audiovideo = {
											container: 'video/mp4',
											codec: audioCodec + ',' + videoCodec,
											initSegment: duration ? initSegment : null
										}
									} else {
										if (initData.audio) tracks.audio = {
											container: 'audio/mp4',
											codec: audioCodec,
											initSegment: duration ? initSegment : null
										};
										if (initData.video) tracks.video = {
											container: 'video/mp4',
											codec: videoCodec,
											initSegment: duration ? initSegment : null
										}
									}
									this.observer.trigger(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSING_INIT_SEGMENT, {
										tracks: tracks
									})
								} else {
									if (audioCodec) this.audioCodec = audioCodec;
									if (videoCodec) this.videoCodec = videoCodec
								}
							};
							MP4Demuxer.probe = function probe(data) {
								return MP4Demuxer.findBox({
									data: data,
									start: 0,
									end: Math.min(data.length, 16384)
								}, ['moof']).length > 0
							};
							MP4Demuxer.bin2str = function bin2str(buffer) {
								return String.fromCharCode.apply(null, buffer)
							};
							MP4Demuxer.readUint16 = function readUint16(buffer, offset) {
								if (buffer.data) {
									offset += buffer.start;
									buffer = buffer.data
								}
								var val = buffer[offset] << 8 | buffer[offset + 1];
								return val < 0 ? 65536 + val : val
							};
							MP4Demuxer.readUint32 = function readUint32(buffer, offset) {
								if (buffer.data) {
									offset += buffer.start;
									buffer = buffer.data
								}
								var val = buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
								return val < 0 ? 4294967296 + val : val
							};
							MP4Demuxer.writeUint32 = function writeUint32(buffer, offset, value) {
								if (buffer.data) {
									offset += buffer.start;
									buffer = buffer.data
								}
								buffer[offset] = value >> 24;
								buffer[offset + 1] = value >> 16 & 0xff;
								buffer[offset + 2] = value >> 8 & 0xff;
								buffer[offset + 3] = value & 0xff
							};
							MP4Demuxer.findBox = function findBox(data, path) {
								var results = [],
									i = void 0,
									size = void 0,
									type = void 0,
									end = void 0,
									subresults = void 0,
									start = void 0,
									endbox = void 0;
								if (data.data) {
									start = data.start;
									end = data.end;
									data = data.data
								} else {
									start = 0;
									end = data.byteLength
								} if (!path.length) {
									return null
								}
								for (i = start; i < end;) {
									size = MP4Demuxer.readUint32(data, i);
									type = MP4Demuxer.bin2str(data.subarray(i + 4, i + 8));
									endbox = size > 1 ? i + size : end;
									if (type === path[0]) {
										if (path.length === 1) {
											results.push({
												data: data,
												start: i + 8,
												end: endbox
											})
										} else {
											subresults = MP4Demuxer.findBox({
												data: data,
												start: i + 8,
												end: endbox
											}, path.slice(1));
											if (subresults.length) results = results.concat(subresults)
										}
									}
									i = endbox
								}
								return results
							};
							MP4Demuxer.parseSegmentIndex = function parseSegmentIndex(initSegment) {
								var moov = MP4Demuxer.findBox(initSegment, ['moov'])[0];
								var moovEndOffset = moov ? moov.end : null;
								var index = 0;
								var sidx = MP4Demuxer.findBox(initSegment, ['sidx']);
								var references = void 0;
								if (!sidx || !sidx[0]) return null;
								references = [];
								sidx = sidx[0];
								var version = sidx.data[0];
								index = version === 0 ? 8 : 16;
								var timescale = MP4Demuxer.readUint32(sidx, index);
								index += 4;
								var earliestPresentationTime = 0;
								var firstOffset = 0;
								if (version === 0) index += 8;
								else index += 16;
								index += 2;
								var startByte = sidx.end + firstOffset;
								var referencesCount = MP4Demuxer.readUint16(sidx, index);
								index += 2;
								for (var i = 0; i < referencesCount; i++) {
									var referenceIndex = index;
									var referenceInfo = MP4Demuxer.readUint32(sidx, referenceIndex);
									referenceIndex += 4;
									var referenceSize = referenceInfo & 0x7FFFFFFF;
									var referenceType = (referenceInfo & 0x80000000) >>> 31;
									if (referenceType === 1) {
										console.warn('SIDX has hierarchical references (not supported)');
										return
									}
									var subsegmentDuration = MP4Demuxer.readUint32(sidx, referenceIndex);
									referenceIndex += 4;
									references.push({
										referenceSize: referenceSize,
										subsegmentDuration: subsegmentDuration,
										info: {
											duration: subsegmentDuration / timescale,
											start: startByte,
											end: startByte + referenceSize - 1
										}
									});
									startByte += referenceSize;
									referenceIndex += 4;
									index = referenceIndex
								}
								return {
									earliestPresentationTime: earliestPresentationTime,
									timescale: timescale,
									version: version,
									referencesCount: referencesCount,
									references: references,
									moovEndOffset: moovEndOffset
								}
							};
							MP4Demuxer.parseInitSegment = function parseInitSegment(initSegment) {
								var result = [];
								var traks = MP4Demuxer.findBox(initSegment, ['moov', 'trak']);
								traks.forEach(function (trak) {
									var tkhd = MP4Demuxer.findBox(trak, ['tkhd'])[0];
									if (tkhd) {
										var version = tkhd.data[tkhd.start];
										var index = version === 0 ? 12 : 20;
										var trackId = MP4Demuxer.readUint32(tkhd, index);
										var mdhd = MP4Demuxer.findBox(trak, ['mdia', 'mdhd'])[0];
										if (mdhd) {
											version = mdhd.data[mdhd.start];
											index = version === 0 ? 12 : 20;
											var timescale = MP4Demuxer.readUint32(mdhd, index);
											var hdlr = MP4Demuxer.findBox(trak, ['mdia', 'hdlr'])[0];
											if (hdlr) {
												var hdlrType = MP4Demuxer.bin2str(hdlr.data.subarray(hdlr.start + 8, hdlr.start + 12));
												var type = {
													'soun': 'audio',
													'vide': 'video'
												}[hdlrType];
												if (type) {
													var codecBox = MP4Demuxer.findBox(trak, ['mdia', 'minf', 'stbl', 'stsd']);
													if (codecBox.length) {
														codecBox = codecBox[0];
														var codecType = MP4Demuxer.bin2str(codecBox.data.subarray(codecBox.start + 12, codecBox.start + 16));
														__WEBPACK_IMPORTED_MODULE_0__utils_logger__["b"].log('MP4Demuxer:' + type + ':' + codecType + ' found')
													}
													result[trackId] = {
														timescale: timescale,
														type: type
													};
													result[type] = {
														timescale: timescale,
														id: trackId
													}
												}
											}
										}
									}
								});
								return result
							};
							MP4Demuxer.getStartDTS = function getStartDTS(initData, fragment) {
								var trafs = void 0,
									baseTimes = void 0,
									result = void 0;
								trafs = MP4Demuxer.findBox(fragment, ['moof', 'traf']);
								baseTimes = [].concat.apply([], trafs.map(function (traf) {
									return MP4Demuxer.findBox(traf, ['tfhd']).map(function (tfhd) {
										var id = void 0,
											scale = void 0,
											baseTime = void 0;
										id = MP4Demuxer.readUint32(tfhd, 4);
										scale = initData[id].timescale || 90e3;
										baseTime = MP4Demuxer.findBox(traf, ['tfdt']).map(function (tfdt) {
											var version = void 0,
												result = void 0;
											version = tfdt.data[tfdt.start];
											result = MP4Demuxer.readUint32(tfdt, 4);
											if (version === 1) {
												result *= Math.pow(2, 32);
												result += MP4Demuxer.readUint32(tfdt, 8)
											}
											return result
										})[0];
										return baseTime / scale
									})
								}));
								result = Math.min.apply(null, baseTimes);
								return isFinite(result) ? result : 0
							};
							MP4Demuxer.offsetStartDTS = function offsetStartDTS(initData, fragment, timeOffset) {
								MP4Demuxer.findBox(fragment, ['moof', 'traf']).map(function (traf) {
									return MP4Demuxer.findBox(traf, ['tfhd']).map(function (tfhd) {
										var id = MP4Demuxer.readUint32(tfhd, 4);
										var timescale = initData[id].timescale || 90e3;
										MP4Demuxer.findBox(traf, ['tfdt']).map(function (tfdt) {
											var version = tfdt.data[tfdt.start];
											var baseMediaDecodeTime = MP4Demuxer.readUint32(tfdt, 4);
											if (version === 0) {
												MP4Demuxer.writeUint32(tfdt, 4, baseMediaDecodeTime - timeOffset * timescale)
											} else {
												baseMediaDecodeTime *= Math.pow(2, 32);
												baseMediaDecodeTime += MP4Demuxer.readUint32(tfdt, 8);
												baseMediaDecodeTime -= timeOffset * timescale;
												baseMediaDecodeTime = Math.max(baseMediaDecodeTime, 0);
												var upper = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
												var lower = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
												MP4Demuxer.writeUint32(tfdt, 4, upper);
												MP4Demuxer.writeUint32(tfdt, 8, lower)
											}
										})
									})
								})
							};
							MP4Demuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
								var initData = this.initData;
								if (!initData) {
									this.resetInitSegment(data, this.audioCodec, this.videoCodec, false);
									initData = this.initData
								}
								var startDTS = void 0,
									initPTS = this.initPTS;
								if (initPTS === undefined) {
									var _startDTS = MP4Demuxer.getStartDTS(initData, data);
									this.initPTS = initPTS = _startDTS - timeOffset;
									this.observer.trigger(__WEBPACK_IMPORTED_MODULE_1__events__["a"].INIT_PTS_FOUND, {
										initPTS: initPTS
									})
								}
								MP4Demuxer.offsetStartDTS(initData, data, initPTS);
								startDTS = MP4Demuxer.getStartDTS(initData, data);
								this.remuxer.remux(initData.audio, initData.video, null, null, startDTS, contiguous, accurateTimeOffset, data)
							};
							MP4Demuxer.prototype.destroy = function destroy() { };
							return MP4Demuxer
						}();
						__webpack_exports__["a"] = (MP4Demuxer)
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						var events = __webpack_require__(1);
						var errors = __webpack_require__(2);
						var crypt_decrypter = __webpack_require__(5);
						var logger = __webpack_require__(0);

						function getAudioConfig(observer, data, offset, audioCodec) {
							var adtsObjectType = void 0,
								adtsSampleingIndex = void 0,
								adtsExtensionSampleingIndex = void 0,
								adtsChanelConfig = void 0,
								config = void 0,
								userAgent = navigator.userAgent.toLowerCase(),
								manifestCodec = audioCodec,
								adtsSampleingRates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
							adtsObjectType = ((data[offset + 2] & 0xC0) >>> 6) + 1;
							adtsSampleingIndex = (data[offset + 2] & 0x3C) >>> 2;
							if (adtsSampleingIndex > adtsSampleingRates.length - 1) {
								observer.trigger(Event.ERROR, {
									type: errors["b"].MEDIA_ERROR,
									details: errors["a"].FRAG_PARSING_ERROR,
									fatal: true,
									reason: 'invalid ADTS sampling index:' + adtsSampleingIndex
								});
								return
							}
							adtsChanelConfig = (data[offset + 2] & 0x01) << 2;
							adtsChanelConfig |= (data[offset + 3] & 0xC0) >>> 6;
							logger["b"].log('manifest codec:' + audioCodec + ',ADTS data:type:' + adtsObjectType + ',sampleingIndex:' + adtsSampleingIndex + '[' + adtsSampleingRates[adtsSampleingIndex] + 'Hz],channelConfig:' + adtsChanelConfig);
							if (/firefox/i.test(userAgent)) {
								if (adtsSampleingIndex >= 6) {
									adtsObjectType = 5;
									config = new Array(4);
									adtsExtensionSampleingIndex = adtsSampleingIndex - 3
								} else {
									adtsObjectType = 2;
									config = new Array(2);
									adtsExtensionSampleingIndex = adtsSampleingIndex
								}
							} else if (userAgent.indexOf('android') !== -1) {
								adtsObjectType = 2;
								config = new Array(2);
								adtsExtensionSampleingIndex = adtsSampleingIndex
							} else {
								adtsObjectType = 5;
								config = new Array(4);
								if (audioCodec && (audioCodec.indexOf('mp4a.40.29') !== -1 || audioCodec.indexOf('mp4a.40.5') !== -1) || !audioCodec && adtsSampleingIndex >= 6) {
									adtsExtensionSampleingIndex = adtsSampleingIndex - 3
								} else {
									if (audioCodec && audioCodec.indexOf('mp4a.40.2') !== -1 && (adtsSampleingIndex >= 6 && adtsChanelConfig === 1 || /vivaldi/i.test(userAgent)) || !audioCodec && adtsChanelConfig === 1) {
										adtsObjectType = 2;
										config = new Array(2)
									}
									adtsExtensionSampleingIndex = adtsSampleingIndex
								}
							}
							config[0] = adtsObjectType << 3;
							config[0] |= (adtsSampleingIndex & 0x0E) >> 1;
							config[1] |= (adtsSampleingIndex & 0x01) << 7;
							config[1] |= adtsChanelConfig << 3;
							if (adtsObjectType === 5) {
								config[1] |= (adtsExtensionSampleingIndex & 0x0E) >> 1;
								config[2] = (adtsExtensionSampleingIndex & 0x01) << 7;
								config[2] |= 2 << 2;
								config[3] = 0
							}
							return {
								config: config,
								samplerate: adtsSampleingRates[adtsSampleingIndex],
								channelCount: adtsChanelConfig,
								codec: 'mp4a.40.' + adtsObjectType,
								manifestCodec: manifestCodec
							}
						}

						function isHeaderPattern(data, offset) {
							return data[offset] === 0xff && (data[offset + 1] & 0xf6) === 0xf0
						}

						function getHeaderLength(data, offset) {
							return data[offset + 1] & 0x01 ? 7 : 9
						}

						function getFullFrameLength(data, offset) {
							return (data[offset + 3] & 0x03) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 0xE0) >>> 5
						}

						function isHeader(data, offset) {
							if (offset + 1 < data.length && isHeaderPattern(data, offset)) return true;
							return false
						}

						function adts_probe(data, offset) {
							if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
								var headerLength = getHeaderLength(data, offset);
								var frameLength = headerLength;
								if (offset + 5 < data.length) frameLength = getFullFrameLength(data, offset);
								var newOffset = offset + frameLength;
								if (newOffset === data.length || newOffset + 1 < data.length && isHeaderPattern(data, newOffset)) return true
							}
							return false
						}

						function initTrackConfig(track, observer, data, offset, audioCodec) {
							if (!track.samplerate) {
								var config = getAudioConfig(observer, data, offset, audioCodec);
								track.config = config.config;
								track.samplerate = config.samplerate;
								track.channelCount = config.channelCount;
								track.codec = config.codec;
								track.manifestCodec = config.manifestCodec;
								logger["b"].log('parsed codec:' + track.codec + ',rate:' + config.samplerate + ',nb channel:' + config.channelCount)
							}
						}

						function getFrameDuration(samplerate) {
							return 1024 * 90000 / samplerate
						}

						function parseFrameHeader(data, offset, pts, frameIndex, frameDuration) {
							var headerLength = void 0,
								frameLength = void 0,
								stamp = void 0;
							var length = data.length;
							headerLength = getHeaderLength(data, offset);
							frameLength = getFullFrameLength(data, offset);
							frameLength -= headerLength;
							if (frameLength > 0 && offset + headerLength + frameLength <= length) {
								stamp = pts + frameIndex * frameDuration;
								return {
									headerLength: headerLength,
									frameLength: frameLength,
									stamp: stamp
								}
							}
							return undefined
						}

						function appendFrame(track, data, offset, pts, frameIndex) {
							var frameDuration = getFrameDuration(track.samplerate);
							var header = parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
							if (header) {
								var stamp = header.stamp;
								var headerLength = header.headerLength;
								var frameLength = header.frameLength;
								var aacSample = {
									unit: data.subarray(offset + headerLength, offset + headerLength + frameLength),
									pts: stamp,
									dts: stamp
								};
								track.samples.push(aacSample);
								track.len += frameLength;
								return {
									sample: aacSample,
									length: frameLength + headerLength
								}
							}
							return undefined
						}
						var id3 = __webpack_require__(4);

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var aacdemuxer_AACDemuxer = function () {
							function AACDemuxer(observer, remuxer, config) {
								_classCallCheck(this, AACDemuxer);
								this.observer = observer;
								this.config = config;
								this.remuxer = remuxer
							}
							AACDemuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
								this._audioTrack = {
									container: 'audio/adts',
									type: 'audio',
									id: 0,
									sequenceNumber: 0,
									isAAC: true,
									samples: [],
									len: 0,
									manifestCodec: audioCodec,
									duration: duration,
									inputTimeScale: 90000
								}
							};
							AACDemuxer.prototype.resetTimeStamp = function resetTimeStamp() { };
							AACDemuxer.probe = function probe(data) {
								if (!data) return false;
								var id3Data = id3["a"].getID3Data(data, 0) || [];
								var offset = id3Data.length;
								for (var length = data.length; offset < length; offset++) {
									if (adts_probe(data, offset)) {
										logger["b"].log('ADTS sync word found !');
										return true
									}
								}
								return false
							};
							AACDemuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
								var track = this._audioTrack;
								var id3Data = id3["a"].getID3Data(data, 0) || [];
								var timestamp = id3["a"].getTimeStamp(id3Data);
								var pts = timestamp ? 90 * timestamp : timeOffset * 90000;
								var frameIndex = 0;
								var stamp = pts;
								var length = data.length;
								var offset = id3Data.length;
								var id3Samples = [{
									pts: stamp,
									dts: stamp,
									data: id3Data
								}];
								while (offset < length - 1) {
									if (isHeader(data, offset) && offset + 5 < length) {
										initTrackConfig(track, this.observer, data, offset, track.manifestCodec);
										var frame = appendFrame(track, data, offset, pts, frameIndex);
										if (frame) {
											offset += frame.length;
											stamp = frame.sample.pts;
											frameIndex++
										} else {
											logger["b"].log('Unable to parse AAC frame');
											break
										}
									} else if (id3["a"].isHeader(data, offset)) {
										id3Data = id3["a"].getID3Data(data, offset);
										id3Samples.push({
											pts: stamp,
											dts: stamp,
											data: id3Data
										});
										offset += id3Data.length
									} else {
										offset++
									}
								}
								this.remuxer.remux(track, {
									samples: []
								}, {
									samples: id3Samples,
									inputTimeScale: 90000
								}, {
									samples: []
								}, timeOffset, contiguous, accurateTimeOffset)
							};
							AACDemuxer.prototype.destroy = function destroy() { };
							return AACDemuxer
						}();
						var aacdemuxer = (aacdemuxer_AACDemuxer);
						var mp4demuxer = __webpack_require__(7);
						var MpegAudio = {
							BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
							SamplingRateMap: [44100, 48000, 32000, 22050, 24000, 16000, 11025, 12000, 8000],
							SamplesCoefficients: [
								[0, 72, 144, 12],
								[0, 0, 0, 0],
								[0, 72, 144, 12],
								[0, 144, 144, 12]
							],
							BytesInSlot: [0, 1, 1, 4],
							appendFrame: function appendFrame(track, data, offset, pts, frameIndex) {
								if (offset + 24 > data.length) return undefined;
								var header = this.parseHeader(data, offset);
								if (header && offset + header.frameLength <= data.length) {
									var frameDuration = header.samplesPerFrame * 90000 / header.sampleRate;
									var stamp = pts + frameIndex * frameDuration;
									var sample = {
										unit: data.subarray(offset, offset + header.frameLength),
										pts: stamp,
										dts: stamp
									};
									track.config = [];
									track.channelCount = header.channelCount;
									track.samplerate = header.sampleRate;
									track.samples.push(sample);
									track.len += header.frameLength;
									return {
										sample: sample,
										length: header.frameLength
									}
								}
								return undefined
							},
							parseHeader: function parseHeader(data, offset) {
								var headerB = data[offset + 1] >> 3 & 3;
								var headerC = data[offset + 1] >> 1 & 3;
								var headerE = data[offset + 2] >> 4 & 15;
								var headerF = data[offset + 2] >> 2 & 3;
								var headerG = data[offset + 2] >> 1 & 1;
								if (headerB !== 1 && headerE !== 0 && headerE !== 15 && headerF !== 3) {
									var columnInBitrates = headerB === 3 ? 3 - headerC : headerC === 3 ? 3 : 4;
									var bitRate = MpegAudio.BitratesMap[columnInBitrates * 14 + headerE - 1] * 1000;
									var columnInSampleRates = headerB === 3 ? 0 : headerB === 2 ? 1 : 2;
									var sampleRate = MpegAudio.SamplingRateMap[columnInSampleRates * 3 + headerF];
									var channelCount = data[offset + 3] >> 6 === 3 ? 1 : 2;
									var sampleCoefficient = MpegAudio.SamplesCoefficients[headerB][headerC];
									var bytesInSlot = MpegAudio.BytesInSlot[headerC];
									var samplesPerFrame = sampleCoefficient * 8 * bytesInSlot;
									var frameLength = parseInt(sampleCoefficient * bitRate / sampleRate + headerG, 10) * bytesInSlot;
									return {
										sampleRate: sampleRate,
										channelCount: channelCount,
										frameLength: frameLength,
										samplesPerFrame: samplesPerFrame
									}
								}
								return undefined
							},
							isHeaderPattern: function isHeaderPattern(data, offset) {
								return data[offset] === 0xff && (data[offset + 1] & 0xe0) === 0xe0 && (data[offset + 1] & 0x06) !== 0x00
							},
							isHeader: function isHeader(data, offset) {
								if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) return true;
								return false
							},
							probe: function probe(data, offset) {
								if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
									var headerLength = 4;
									var header = this.parseHeader(data, offset);
									var frameLength = headerLength;
									if (header && header.frameLength) frameLength = header.frameLength;
									var newOffset = offset + frameLength;
									if (newOffset === data.length || newOffset + 1 < data.length && this.isHeaderPattern(data, newOffset)) return true
								}
								return false
							}
						};
						var mpegaudio = (MpegAudio);

						function exp_golomb__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var exp_golomb_ExpGolomb = function () {
							function ExpGolomb(data) {
								exp_golomb__classCallCheck(this, ExpGolomb);
								this.data = data;
								this.bytesAvailable = data.byteLength;
								this.word = 0;
								this.bitsAvailable = 0
							}
							ExpGolomb.prototype.loadWord = function loadWord() {
								var data = this.data,
									bytesAvailable = this.bytesAvailable,
									position = data.byteLength - bytesAvailable,
									workingBytes = new Uint8Array(4),
									availableBytes = Math.min(4, bytesAvailable);
								if (availableBytes === 0) throw new Error('no bytes available');
								workingBytes.set(data.subarray(position, position + availableBytes));
								this.word = new DataView(workingBytes.buffer).getUint32(0);
								this.bitsAvailable = availableBytes * 8;
								this.bytesAvailable -= availableBytes
							};
							ExpGolomb.prototype.skipBits = function skipBits(count) {
								var skipBytes = void 0;
								if (this.bitsAvailable > count) {
									this.word <<= count;
									this.bitsAvailable -= count
								} else {
									count -= this.bitsAvailable;
									skipBytes = count >> 3;
									count -= skipBytes >> 3;
									this.bytesAvailable -= skipBytes;
									this.loadWord();
									this.word <<= count;
									this.bitsAvailable -= count
								}
							};
							ExpGolomb.prototype.readBits = function readBits(size) {
								var bits = Math.min(this.bitsAvailable, size),
									valu = this.word >>> 32 - bits;
								if (size > 32) logger["b"].error('Cannot read more than 32 bits at a time');
								this.bitsAvailable -= bits;
								if (this.bitsAvailable > 0) this.word <<= bits;
								else if (this.bytesAvailable > 0) this.loadWord();
								bits = size - bits;
								if (bits > 0 && this.bitsAvailable) return valu << bits | this.readBits(bits);
								else return valu
							};
							ExpGolomb.prototype.skipLZ = function skipLZ() {
								var leadingZeroCount = void 0;
								for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
									if ((this.word & 0x80000000 >>> leadingZeroCount) !== 0) {
										this.word <<= leadingZeroCount;
										this.bitsAvailable -= leadingZeroCount;
										return leadingZeroCount
									}
								}
								this.loadWord();
								return leadingZeroCount + this.skipLZ()
							};
							ExpGolomb.prototype.skipUEG = function skipUEG() {
								this.skipBits(1 + this.skipLZ())
							};
							ExpGolomb.prototype.skipEG = function skipEG() {
								this.skipBits(1 + this.skipLZ())
							};
							ExpGolomb.prototype.readUEG = function readUEG() {
								var clz = this.skipLZ();
								return this.readBits(clz + 1) - 1
							};
							ExpGolomb.prototype.readEG = function readEG() {
								var valu = this.readUEG();
								if (0x01 & valu) {
									return 1 + valu >>> 1
								} else {
									return -1 * (valu >>> 1)
								}
							};
							ExpGolomb.prototype.readBoolean = function readBoolean() {
								return this.readBits(1) === 1
							};
							ExpGolomb.prototype.readUByte = function readUByte() {
								return this.readBits(8)
							};
							ExpGolomb.prototype.readUShort = function readUShort() {
								return this.readBits(16)
							};
							ExpGolomb.prototype.readUInt = function readUInt() {
								return this.readBits(32)
							};
							ExpGolomb.prototype.skipScalingList = function skipScalingList(count) {
								var lastScale = 8,
									nextScale = 8,
									j = void 0,
									deltaScale = void 0;
								for (j = 0; j < count; j++) {
									if (nextScale !== 0) {
										deltaScale = this.readEG();
										nextScale = (lastScale + deltaScale + 256) % 256
									}
									lastScale = nextScale === 0 ? lastScale : nextScale
								}
							};
							ExpGolomb.prototype.readSPS = function readSPS() {
								var frameCropLeftOffset = 0,
									frameCropRightOffset = 0,
									frameCropTopOffset = 0,
									frameCropBottomOffset = 0,
									profileIdc = void 0,
									profileCompat = void 0,
									levelIdc = void 0,
									numRefFramesInPicOrderCntCycle = void 0,
									picWidthInMbsMinus1 = void 0,
									picHeightInMapUnitsMinus1 = void 0,
									frameMbsOnlyFlag = void 0,
									scalingListCount = void 0,
									i = void 0,
									readUByte = this.readUByte.bind(this),
									readBits = this.readBits.bind(this),
									readUEG = this.readUEG.bind(this),
									readBoolean = this.readBoolean.bind(this),
									skipBits = this.skipBits.bind(this),
									skipEG = this.skipEG.bind(this),
									skipUEG = this.skipUEG.bind(this),
									skipScalingList = this.skipScalingList.bind(this);
								readUByte();
								profileIdc = readUByte();
								profileCompat = readBits(5);
								skipBits(3);
								levelIdc = readUByte();
								skipUEG();
								if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128) {
									var chromaFormatIdc = readUEG();
									if (chromaFormatIdc === 3) skipBits(1);
									skipUEG();
									skipUEG();
									skipBits(1);
									if (readBoolean()) {
										scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
										for (i = 0; i < scalingListCount; i++) {
											if (readBoolean()) {
												if (i < 6) skipScalingList(16);
												else skipScalingList(64)
											}
										}
									}
								}
								skipUEG();
								var picOrderCntType = readUEG();
								if (picOrderCntType === 0) {
									readUEG()
								} else if (picOrderCntType === 1) {
									skipBits(1);
									skipEG();
									skipEG();
									numRefFramesInPicOrderCntCycle = readUEG();
									for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
										skipEG()
									}
								}
								skipUEG();
								skipBits(1);
								picWidthInMbsMinus1 = readUEG();
								picHeightInMapUnitsMinus1 = readUEG();
								frameMbsOnlyFlag = readBits(1);
								if (frameMbsOnlyFlag === 0) skipBits(1);
								skipBits(1);
								if (readBoolean()) {
									frameCropLeftOffset = readUEG();
									frameCropRightOffset = readUEG();
									frameCropTopOffset = readUEG();
									frameCropBottomOffset = readUEG()
								}
								var pixelRatio = [1, 1];
								if (readBoolean()) {
									if (readBoolean()) {
										var aspectRatioIdc = readUByte();
										switch (aspectRatioIdc) {
											case 1:
												pixelRatio = [1, 1];
												break;
											case 2:
												pixelRatio = [12, 11];
												break;
											case 3:
												pixelRatio = [10, 11];
												break;
											case 4:
												pixelRatio = [16, 11];
												break;
											case 5:
												pixelRatio = [40, 33];
												break;
											case 6:
												pixelRatio = [24, 11];
												break;
											case 7:
												pixelRatio = [20, 11];
												break;
											case 8:
												pixelRatio = [32, 11];
												break;
											case 9:
												pixelRatio = [80, 33];
												break;
											case 10:
												pixelRatio = [18, 11];
												break;
											case 11:
												pixelRatio = [15, 11];
												break;
											case 12:
												pixelRatio = [64, 33];
												break;
											case 13:
												pixelRatio = [160, 99];
												break;
											case 14:
												pixelRatio = [4, 3];
												break;
											case 15:
												pixelRatio = [3, 2];
												break;
											case 16:
												pixelRatio = [2, 1];
												break;
											case 255:
												{
													pixelRatio = [readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte()];
													break
												}
										}
									}
								}
								return {
									width: Math.ceil((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2),
									height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
									pixelRatio: pixelRatio
								}
							};
							ExpGolomb.prototype.readSliceType = function readSliceType() {
								this.readUByte();
								this.readUEG();
								return this.readUEG()
							};
							return ExpGolomb
						}();
						var exp_golomb = (exp_golomb_ExpGolomb);

						function sample_aes__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var sample_aes_SampleAesDecrypter = function () {
							function SampleAesDecrypter(observer, config, decryptdata, discardEPB) {
								sample_aes__classCallCheck(this, SampleAesDecrypter);
								this.decryptdata = decryptdata;
								this.discardEPB = discardEPB;
								this.decrypter = new crypt_decrypter["a"](observer, config, {
									removePKCS7Padding: false
								})
							}
							SampleAesDecrypter.prototype.decryptBuffer = function decryptBuffer(encryptedData, callback) {
								this.decrypter.decrypt(encryptedData, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, callback)
							};
							SampleAesDecrypter.prototype.decryptAacSample = function decryptAacSample(samples, sampleIndex, callback, sync) {
								var curUnit = samples[sampleIndex].unit;
								var encryptedData = curUnit.subarray(16, curUnit.length - curUnit.length % 16);
								var encryptedBuffer = encryptedData.buffer.slice(encryptedData.byteOffset, encryptedData.byteOffset + encryptedData.length);
								var localthis = this;
								this.decryptBuffer(encryptedBuffer, function (decryptedData) {
									decryptedData = new Uint8Array(decryptedData);
									curUnit.set(decryptedData, 16);
									if (!sync) localthis.decryptAacSamples(samples, sampleIndex + 1, callback)
								})
							};
							SampleAesDecrypter.prototype.decryptAacSamples = function decryptAacSamples(samples, sampleIndex, callback) {
								for (; ; sampleIndex++) {
									if (sampleIndex >= samples.length) {
										callback();
										return
									}
									if (samples[sampleIndex].unit.length < 32) continue;
									var sync = this.decrypter.isSync();
									this.decryptAacSample(samples, sampleIndex, callback, sync);
									if (!sync) return
								}
							};
							SampleAesDecrypter.prototype.getAvcEncryptedData = function getAvcEncryptedData(decodedData) {
								var encryptedDataLen = Math.floor((decodedData.length - 48) / 160) * 16 + 16;
								var encryptedData = new Int8Array(encryptedDataLen);
								var outputPos = 0;
								for (var inputPos = 32; inputPos <= decodedData.length - 16; inputPos += 160, outputPos += 16) {
									encryptedData.set(decodedData.subarray(inputPos, inputPos + 16), outputPos)
								}
								return encryptedData
							};
							SampleAesDecrypter.prototype.getAvcDecryptedUnit = function getAvcDecryptedUnit(decodedData, decryptedData) {
								decryptedData = new Uint8Array(decryptedData);
								var inputPos = 0;
								for (var outputPos = 32; outputPos <= decodedData.length - 16; outputPos += 160, inputPos += 16) {
									decodedData.set(decryptedData.subarray(inputPos, inputPos + 16), outputPos)
								}
								return decodedData
							};
							SampleAesDecrypter.prototype.decryptAvcSample = function decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync) {
								var decodedData = this.discardEPB(curUnit.data);
								var encryptedData = this.getAvcEncryptedData(decodedData);
								var localthis = this;
								this.decryptBuffer(encryptedData.buffer, function (decryptedData) {
									curUnit.data = localthis.getAvcDecryptedUnit(decodedData, decryptedData);
									if (!sync) localthis.decryptAvcSamples(samples, sampleIndex, unitIndex + 1, callback)
								})
							};
							SampleAesDecrypter.prototype.decryptAvcSamples = function decryptAvcSamples(samples, sampleIndex, unitIndex, callback) {
								for (; ; sampleIndex++, unitIndex = 0) {
									if (sampleIndex >= samples.length) {
										callback();
										return
									}
									var curUnits = samples[sampleIndex].units;
									for (; ; unitIndex++) {
										if (unitIndex >= curUnits.length) break;
										var curUnit = curUnits[unitIndex];
										if (curUnit.length <= 48 || curUnit.type !== 1 && curUnit.type !== 5) continue;
										var sync = this.decrypter.isSync();
										this.decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync);
										if (!sync) return
									}
								}
							};
							return SampleAesDecrypter
						}();
						var sample_aes = (sample_aes_SampleAesDecrypter);

						function tsdemuxer__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var RemuxerTrackIdConfig = {
							video: 0,
							audio: 1,
							id3: 2,
							text: 3
						};
						var tsdemuxer_TSDemuxer = function () {
							function TSDemuxer(observer, remuxer, config, typeSupported) {
								tsdemuxer__classCallCheck(this, TSDemuxer);
								this.observer = observer;
								this.config = config;
								this.typeSupported = typeSupported;
								this.remuxer = remuxer;
								this.sampleAes = null
							}
							TSDemuxer.prototype.setDecryptData = function setDecryptData(decryptdata) {
								if (decryptdata != null && decryptdata.key != null && decryptdata.method === 'SAMPLE-AES') this.sampleAes = new sample_aes(this.observer, this.config, decryptdata, this.discardEPB);
								else this.sampleAes = null
							};
							TSDemuxer.probe = function probe(data) {
								var syncOffset = TSDemuxer._syncOffset(data);
								if (syncOffset < 0) {
									return false
								} else {
									if (syncOffset) logger["b"].warn('MPEG2-TS detected but first sync word found @ offset ' + syncOffset + ', junk ahead ?');
									return true
								}
							};
							TSDemuxer._syncOffset = function _syncOffset(data) {
								var scanwindow = Math.min(1000, data.length - 3 * 188);
								var i = 0;
								while (i < scanwindow) {
									if (data[i] === 0x47 && data[i + 188] === 0x47 && data[i + 2 * 188] === 0x47) return i;
									else i++
								}
								return -1
							};
							TSDemuxer.createTrack = function createTrack(type, duration) {
								return {
									container: type === 'video' || type === 'audio' ? 'video/mp2t' : undefined,
									type: type,
									id: RemuxerTrackIdConfig[type],
									pid: -1,
									inputTimeScale: 90000,
									sequenceNumber: 0,
									samples: [],
									len: 0,
									dropped: type === 'video' ? 0 : undefined,
									isAAC: type === 'audio' ? true : undefined,
									duration: type === 'audio' ? duration : undefined
								}
							};
							TSDemuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
								this.pmtParsed = false;
								this._pmtId = -1;
								this._avcTrack = TSDemuxer.createTrack('video', duration);
								this._audioTrack = TSDemuxer.createTrack('audio', duration);
								this._id3Track = TSDemuxer.createTrack('id3', duration);
								this._txtTrack = TSDemuxer.createTrack('text', duration);
								this.aacOverFlow = null;
								this.aacLastPTS = null;
								this.avcSample = null;
								this.audioCodec = audioCodec;
								this.videoCodec = videoCodec;
								this._duration = duration
							};
							TSDemuxer.prototype.resetTimeStamp = function resetTimeStamp() { };
							TSDemuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
								var start = void 0,
									len = data.length,
									stt = void 0,
									pid = void 0,
									atf = void 0,
									offset = void 0,
									pes = void 0,
									unknownPIDs = false;
								this.contiguous = contiguous;
								var pmtParsed = this.pmtParsed,
									avcTrack = this._avcTrack,
									audioTrack = this._audioTrack,
									id3Track = this._id3Track,
									avcId = avcTrack.pid,
									audioId = audioTrack.pid,
									id3Id = id3Track.pid,
									pmtId = this._pmtId,
									avcData = avcTrack.pesData,
									audioData = audioTrack.pesData,
									id3Data = id3Track.pesData,
									parsePAT = this._parsePAT,
									parsePMT = this._parsePMT,
									parsePES = this._parsePES,
									parseAVCPES = this._parseAVCPES.bind(this),
									parseAACPES = this._parseAACPES.bind(this),
									parseMPEGPES = this._parseMPEGPES.bind(this),
									parseID3PES = this._parseID3PES.bind(this);
								var syncOffset = TSDemuxer._syncOffset(data);
								len -= (len + syncOffset) % 188;
								for (start = syncOffset; start < len; start += 188) {
									if (data[start] === 0x47) {
										stt = !!(data[start + 1] & 0x40);
										pid = ((data[start + 1] & 0x1f) << 8) + data[start + 2];
										atf = (data[start + 3] & 0x30) >> 4;
										if (atf > 1) {
											offset = start + 5 + data[start + 4];
											if (offset === start + 188) continue
										} else {
											offset = start + 4
										}
										switch (pid) {
											case avcId:
												if (stt) {
													if (avcData && (pes = parsePES(avcData)) && pes.pts !== undefined) parseAVCPES(pes, false);
													avcData = {
														data: [],
														size: 0
													}
												}
												if (avcData) {
													avcData.data.push(data.subarray(offset, start + 188));
													avcData.size += start + 188 - offset
												}
												break;
											case audioId:
												if (stt) {
													if (audioData && (pes = parsePES(audioData)) && pes.pts !== undefined) {
														if (audioTrack.isAAC) parseAACPES(pes);
														else parseMPEGPES(pes)
													}
													audioData = {
														data: [],
														size: 0
													}
												}
												if (audioData) {
													audioData.data.push(data.subarray(offset, start + 188));
													audioData.size += start + 188 - offset
												}
												break;
											case id3Id:
												if (stt) {
													if (id3Data && (pes = parsePES(id3Data)) && pes.pts !== undefined) parseID3PES(pes);
													id3Data = {
														data: [],
														size: 0
													}
												}
												if (id3Data) {
													id3Data.data.push(data.subarray(offset, start + 188));
													id3Data.size += start + 188 - offset
												}
												break;
											case 0:
												if (stt) offset += data[offset] + 1;
												pmtId = this._pmtId = parsePAT(data, offset);
												break;
											case pmtId:
												if (stt) offset += data[offset] + 1;
												var parsedPIDs = parsePMT(data, offset, this.typeSupported.mpeg === true || this.typeSupported.mp3 === true, this.sampleAes != null);
												avcId = parsedPIDs.avc;
												if (avcId > 0) avcTrack.pid = avcId;
												audioId = parsedPIDs.audio;
												if (audioId > 0) {
													audioTrack.pid = audioId;
													audioTrack.isAAC = parsedPIDs.isAAC
												}
												id3Id = parsedPIDs.id3;
												if (id3Id > 0) id3Track.pid = id3Id;
												if (unknownPIDs && !pmtParsed) {
													logger["b"].log('reparse from beginning');
													unknownPIDs = false;
													start = syncOffset - 188
												}
												pmtParsed = this.pmtParsed = true;
												break;
											case 17:
											case 0x1fff:
												break;
											default:
												unknownPIDs = true;
												break
										}
									} else {
										this.observer.trigger(events["a"].ERROR, {
											type: errors["b"].MEDIA_ERROR,
											details: errors["a"].FRAG_PARSING_ERROR,
											fatal: false,
											reason: 'TS packet did not start with 0x47'
										})
									}
								}
								if (avcData && (pes = parsePES(avcData)) && pes.pts !== undefined) {
									parseAVCPES(pes, true);
									avcTrack.pesData = null
								} else {
									avcTrack.pesData = avcData
								} if (audioData && (pes = parsePES(audioData)) && pes.pts !== undefined) {
									if (audioTrack.isAAC) parseAACPES(pes);
									else parseMPEGPES(pes);
									audioTrack.pesData = null
								} else {
									if (audioData && audioData.size) logger["b"].log('last AAC PES packet truncated,might overlap between fragments');
									audioTrack.pesData = audioData
								} if (id3Data && (pes = parsePES(id3Data)) && pes.pts !== undefined) {
									parseID3PES(pes);
									id3Track.pesData = null
								} else {
									id3Track.pesData = id3Data
								} if (this.sampleAes == null) this.remuxer.remux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
								else this.decryptAndRemux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset)
							};
							TSDemuxer.prototype.decryptAndRemux = function decryptAndRemux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
								if (audioTrack.samples && audioTrack.isAAC) {
									var localthis = this;
									this.sampleAes.decryptAacSamples(audioTrack.samples, 0, function () {
										localthis.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset)
									})
								} else {
									this.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset)
								}
							};
							TSDemuxer.prototype.decryptAndRemuxAvc = function decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
								if (videoTrack.samples) {
									var localthis = this;
									this.sampleAes.decryptAvcSamples(videoTrack.samples, 0, 0, function () {
										localthis.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset)
									})
								} else {
									this.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset)
								}
							};
							TSDemuxer.prototype.destroy = function destroy() {
								this._initPTS = this._initDTS = undefined;
								this._duration = 0
							};
							TSDemuxer.prototype._parsePAT = function _parsePAT(data, offset) {
								return (data[offset + 10] & 0x1F) << 8 | data[offset + 11]
							};
							TSDemuxer.prototype._parsePMT = function _parsePMT(data, offset, mpegSupported, isSampleAes) {
								var sectionLength = void 0,
									tableEnd = void 0,
									programInfoLength = void 0,
									pid = void 0,
									result = {
										audio: -1,
										avc: -1,
										id3: -1,
										isAAC: true
									};
								sectionLength = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
								tableEnd = offset + 3 + sectionLength - 4;
								programInfoLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
								offset += 12 + programInfoLength;
								while (offset < tableEnd) {
									pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];
									switch (data[offset]) {
										case 0xcf:
											if (!isSampleAes) {
												logger["b"].log('unkown stream type:' + data[offset]);
												break
											}
										case 0x0f:
											if (result.audio === -1) result.audio = pid;
											break;
										case 0x15:
											if (result.id3 === -1) result.id3 = pid;
											break;
										case 0xdb:
											if (!isSampleAes) {
												logger["b"].log('unkown stream type:' + data[offset]);
												break
											}
										case 0x1b:
											if (result.avc === -1) result.avc = pid;
											break;
										case 0x03:
										case 0x04:
											if (!mpegSupported) {
												logger["b"].log('MPEG audio found, not supported in this browser for now')
											} else if (result.audio === -1) {
												result.audio = pid;
												result.isAAC = false
											}
											break;
										case 0x24:
											logger["b"].warn('HEVC stream type found, not supported for now');
											break;
										default:
											logger["b"].log('unkown stream type:' + data[offset]);
											break
									}
									offset += ((data[offset + 3] & 0x0F) << 8 | data[offset + 4]) + 5
								}
								return result
							};
							TSDemuxer.prototype._parsePES = function _parsePES(stream) {
								var i = 0,
									frag = void 0,
									pesFlags = void 0,
									pesPrefix = void 0,
									pesLen = void 0,
									pesHdrLen = void 0,
									pesData = void 0,
									pesPts = void 0,
									pesDts = void 0,
									payloadStartOffset = void 0,
									data = stream.data;
								if (!stream || stream.size === 0) return null;
								while (data[0].length < 19 && data.length > 1) {
									var newData = new Uint8Array(data[0].length + data[1].length);
									newData.set(data[0]);
									newData.set(data[1], data[0].length);
									data[0] = newData;
									data.splice(1, 1)
								}
								frag = data[0];
								pesPrefix = (frag[0] << 16) + (frag[1] << 8) + frag[2];
								if (pesPrefix === 1) {
									pesLen = (frag[4] << 8) + frag[5];
									if (pesLen && pesLen > stream.size - 6) return null;
									pesFlags = frag[7];
									if (pesFlags & 0xC0) {
										pesPts = (frag[9] & 0x0E) * 536870912 + (frag[10] & 0xFF) * 4194304 + (frag[11] & 0xFE) * 16384 + (frag[12] & 0xFF) * 128 + (frag[13] & 0xFE) / 2;
										if (pesPts > 4294967295) {
											pesPts -= 8589934592
										}
										if (pesFlags & 0x40) {
											pesDts = (frag[14] & 0x0E) * 536870912 + (frag[15] & 0xFF) * 4194304 + (frag[16] & 0xFE) * 16384 + (frag[17] & 0xFF) * 128 + (frag[18] & 0xFE) / 2;
											if (pesDts > 4294967295) {
												pesDts -= 8589934592
											}
											if (pesPts - pesDts > 60 * 90000) {
												logger["b"].warn(Math.round((pesPts - pesDts) / 90000) + 's delta between PTS and DTS, align them');
												pesPts = pesDts
											}
										} else {
											pesDts = pesPts
										}
									}
									pesHdrLen = frag[8];
									payloadStartOffset = pesHdrLen + 9;
									stream.size -= payloadStartOffset;
									pesData = new Uint8Array(stream.size);
									for (var j = 0, dataLen = data.length; j < dataLen; j++) {
										frag = data[j];
										var len = frag.byteLength;
										if (payloadStartOffset) {
											if (payloadStartOffset > len) {
												payloadStartOffset -= len;
												continue
											} else {
												frag = frag.subarray(payloadStartOffset);
												len -= payloadStartOffset;
												payloadStartOffset = 0
											}
										}
										pesData.set(frag, i);
										i += len
									}
									if (pesLen) {
										pesLen -= pesHdrLen + 3
									}
									return {
										data: pesData,
										pts: pesPts,
										dts: pesDts,
										len: pesLen
									}
								} else {
									return null
								}
							};
							TSDemuxer.prototype.pushAccesUnit = function pushAccesUnit(avcSample, avcTrack) {
								if (avcSample.units.length && avcSample.frame) {
									var samples = avcTrack.samples;
									var nbSamples = samples.length;
									if (!this.config.forceKeyFrameOnDiscontinuity || avcSample.key === true || avcTrack.sps && (nbSamples || this.contiguous)) {
										avcSample.id = nbSamples;
										samples.push(avcSample)
									} else {
										avcTrack.dropped++
									}
								}
								if (avcSample.debug.length) logger["b"].log(avcSample.pts + '/' + avcSample.dts + ':' + avcSample.debug)
							};
							TSDemuxer.prototype._parseAVCPES = function _parseAVCPES(pes, last) {
								var _this = this;
								var track = this._avcTrack,
									units = this._parseAVCNALu(pes.data),
									debug = false,
									expGolombDecoder = void 0,
									avcSample = this.avcSample,
									push = void 0,
									spsfound = false,
									i = void 0,
									pushAccesUnit = this.pushAccesUnit.bind(this),
									createAVCSample = function createAVCSample(key, pts, dts, debug) {
										return {
											key: key,
											pts: pts,
											dts: dts,
											units: [],
											debug: debug
										}
									};
								pes.data = null;
								if (avcSample && units.length && !track.audFound) {
									pushAccesUnit(avcSample, track);
									avcSample = this.avcSample = createAVCSample(false, pes.pts, pes.dts, '')
								}
								units.forEach(function (unit) {
									switch (unit.type) {
										case 1:
											push = true;
											if (!avcSample) avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
											if (debug) avcSample.debug += 'NDR ';
											avcSample.frame = true;
											var data = unit.data;
											if (spsfound && data.length > 4) {
												var sliceType = new exp_golomb(data).readSliceType();
												if (sliceType === 2 || sliceType === 4 || sliceType === 7 || sliceType === 9) avcSample.key = true
											}
											break;
										case 5:
											push = true;
											if (!avcSample) avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
											if (debug) avcSample.debug += 'IDR ';
											avcSample.key = true;
											avcSample.frame = true;
											break;
										case 6:
											push = true;
											if (debug && avcSample) avcSample.debug += 'SEI ';
											expGolombDecoder = new exp_golomb(_this.discardEPB(unit.data));
											expGolombDecoder.readUByte();
											var payloadType = 0;
											var payloadSize = 0;
											var endOfCaptions = false;
											var b = 0;
											while (!endOfCaptions && expGolombDecoder.bytesAvailable > 1) {
												payloadType = 0;
												do {
													b = expGolombDecoder.readUByte();
													payloadType += b
												} while (b === 0xFF);
												payloadSize = 0;
												do {
													b = expGolombDecoder.readUByte();
													payloadSize += b
												} while (b === 0xFF);
												if (payloadType === 4 && expGolombDecoder.bytesAvailable !== 0) {
													endOfCaptions = true;
													var countryCode = expGolombDecoder.readUByte();
													if (countryCode === 181) {
														var providerCode = expGolombDecoder.readUShort();
														if (providerCode === 49) {
															var userStructure = expGolombDecoder.readUInt();
															if (userStructure === 0x47413934) {
																var userDataType = expGolombDecoder.readUByte();
																if (userDataType === 3) {
																	var firstByte = expGolombDecoder.readUByte();
																	var secondByte = expGolombDecoder.readUByte();
																	var totalCCs = 31 & firstByte;
																	var byteArray = [firstByte, secondByte];
																	for (i = 0; i < totalCCs; i++) {
																		byteArray.push(expGolombDecoder.readUByte());
																		byteArray.push(expGolombDecoder.readUByte());
																		byteArray.push(expGolombDecoder.readUByte())
																	}
																	_this._insertSampleInOrder(_this._txtTrack.samples, {
																		type: 3,
																		pts: pes.pts,
																		bytes: byteArray
																	})
																}
															}
														}
													}
												} else if (payloadSize < expGolombDecoder.bytesAvailable) {
													for (i = 0; i < payloadSize; i++) {
														expGolombDecoder.readUByte()
													}
												}
											}
											break;
										case 7:
											push = true;
											spsfound = true;
											if (debug && avcSample) avcSample.debug += 'SPS ';
											if (!track.sps) {
												expGolombDecoder = new exp_golomb(unit.data);
												var config = expGolombDecoder.readSPS();
												track.width = config.width;
												track.height = config.height;
												track.pixelRatio = config.pixelRatio;
												track.sps = [unit.data];
												track.duration = _this._duration;
												var codecarray = unit.data.subarray(1, 4);
												var codecstring = 'avc1.';
												for (i = 0; i < 3; i++) {
													var h = codecarray[i].toString(16);
													if (h.length < 2) h = '0' + h;
													codecstring += h
												}
												track.codec = codecstring
											}
											break;
										case 8:
											push = true;
											if (debug && avcSample) avcSample.debug += 'PPS ';
											if (!track.pps) track.pps = [unit.data];
											break;
										case 9:
											push = false;
											track.audFound = true;
											if (avcSample) pushAccesUnit(avcSample, track);
											avcSample = _this.avcSample = createAVCSample(false, pes.pts, pes.dts, debug ? 'AUD ' : '');
											break;
										case 12:
											push = false;
											break;
										default:
											push = false;
											if (avcSample) avcSample.debug += 'unknown NAL ' + unit.type + ' ';
											break
									}
									if (avcSample && push) {
										var _units = avcSample.units;
										_units.push(unit)
									}
								});
								if (last && avcSample) {
									pushAccesUnit(avcSample, track);
									this.avcSample = null
								}
							};
							TSDemuxer.prototype._insertSampleInOrder = function _insertSampleInOrder(arr, data) {
								var len = arr.length;
								if (len > 0) {
									if (data.pts >= arr[len - 1].pts) {
										arr.push(data)
									} else {
										for (var pos = len - 1; pos >= 0; pos--) {
											if (data.pts < arr[pos].pts) {
												arr.splice(pos, 0, data);
												break
											}
										}
									}
								} else {
									arr.push(data)
								}
							};
							TSDemuxer.prototype._getLastNalUnit = function _getLastNalUnit() {
								var avcSample = this.avcSample,
									lastUnit = void 0;
								if (!avcSample || avcSample.units.length === 0) {
									var track = this._avcTrack,
										samples = track.samples;
									avcSample = samples[samples.length - 1]
								}
								if (avcSample) {
									var units = avcSample.units;
									lastUnit = units[units.length - 1]
								}
								return lastUnit
							};
							TSDemuxer.prototype._parseAVCNALu = function _parseAVCNALu(array) {
								var i = 0,
									len = array.byteLength,
									value = void 0,
									overflow = void 0,
									track = this._avcTrack,
									state = track.naluState || 0,
									lastState = state;
								var units = [],
									unit = void 0,
									unitType = void 0,
									lastUnitStart = -1,
									lastUnitType = void 0;
								if (state === -1) {
									lastUnitStart = 0;
									lastUnitType = array[0] & 0x1f;
									state = 0;
									i = 1
								}
								while (i < len) {
									value = array[i++];
									if (!state) {
										state = value ? 0 : 1;
										continue
									}
									if (state === 1) {
										state = value ? 0 : 2;
										continue
									}
									if (!value) {
										state = 3
									} else if (value === 1) {
										if (lastUnitStart >= 0) {
											unit = {
												data: array.subarray(lastUnitStart, i - state - 1),
												type: lastUnitType
											};
											units.push(unit)
										} else {
											var lastUnit = this._getLastNalUnit();
											if (lastUnit) {
												if (lastState && i <= 4 - lastState) {
													if (lastUnit.state) {
														lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState)
													}
												}
												overflow = i - state - 1;
												if (overflow > 0) {
													var tmp = new Uint8Array(lastUnit.data.byteLength + overflow);
													tmp.set(lastUnit.data, 0);
													tmp.set(array.subarray(0, overflow), lastUnit.data.byteLength);
													lastUnit.data = tmp
												}
											}
										} if (i < len) {
											unitType = array[i] & 0x1f;
											lastUnitStart = i;
											lastUnitType = unitType;
											state = 0
										} else {
											state = -1
										}
									} else {
										state = 0
									}
								}
								if (lastUnitStart >= 0 && state >= 0) {
									unit = {
										data: array.subarray(lastUnitStart, len),
										type: lastUnitType,
										state: state
									};
									units.push(unit)
								}
								if (units.length === 0) {
									var _lastUnit = this._getLastNalUnit();
									if (_lastUnit) {
										var _tmp = new Uint8Array(_lastUnit.data.byteLength + array.byteLength);
										_tmp.set(_lastUnit.data, 0);
										_tmp.set(array, _lastUnit.data.byteLength);
										_lastUnit.data = _tmp
									}
								}
								track.naluState = state;
								return units
							};
							TSDemuxer.prototype.discardEPB = function discardEPB(data) {
								var length = data.byteLength,
									EPBPositions = [],
									i = 1,
									newLength = void 0,
									newData = void 0;
								while (i < length - 2) {
									if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
										EPBPositions.push(i + 2);
										i += 2
									} else {
										i++
									}
								}
								if (EPBPositions.length === 0) return data;
								newLength = length - EPBPositions.length;
								newData = new Uint8Array(newLength);
								var sourceIndex = 0;
								for (i = 0; i < newLength; sourceIndex++, i++) {
									if (sourceIndex === EPBPositions[0]) {
										sourceIndex++;
										EPBPositions.shift()
									}
									newData[i] = data[sourceIndex]
								}
								return newData
							};
							TSDemuxer.prototype._parseAACPES = function _parseAACPES(pes) {
								var track = this._audioTrack,
									data = pes.data,
									pts = pes.pts,
									startOffset = 0,
									aacOverFlow = this.aacOverFlow,
									aacLastPTS = this.aacLastPTS,
									frameDuration = void 0,
									frameIndex = void 0,
									offset = void 0,
									stamp = void 0,
									len = void 0;
								if (aacOverFlow) {
									var tmp = new Uint8Array(aacOverFlow.byteLength + data.byteLength);
									tmp.set(aacOverFlow, 0);
									tmp.set(data, aacOverFlow.byteLength);
									data = tmp
								}
								for (offset = startOffset, len = data.length; offset < len - 1; offset++) {
									if (isHeader(data, offset)) break
								}
								if (offset) {
									var reason = void 0,
										fatal = void 0;
									if (offset < len - 1) {
										reason = 'AAC PES did not start with ADTS header,offset:' + offset;
										fatal = false
									} else {
										reason = 'no ADTS header found in AAC PES';
										fatal = true
									}
									logger["b"].warn('parsing error:' + reason);
									this.observer.trigger(events["a"].ERROR, {
										type: errors["b"].MEDIA_ERROR,
										details: errors["a"].FRAG_PARSING_ERROR,
										fatal: fatal,
										reason: reason
									});
									if (fatal) return
								}
								initTrackConfig(track, this.observer, data, offset, this.audioCodec);
								frameIndex = 0;
								frameDuration = getFrameDuration(track.samplerate);
								if (aacOverFlow && aacLastPTS) {
									var newPTS = aacLastPTS + frameDuration;
									if (Math.abs(newPTS - pts) > 1) {
										logger["b"].log('AAC: align PTS for overlapping frames by ' + Math.round((newPTS - pts) / 90));
										pts = newPTS
									}
								}
								while (offset < len) {
									if (isHeader(data, offset) && offset + 5 < len) {
										var frame = appendFrame(track, data, offset, pts, frameIndex);
										if (frame) {
											offset += frame.length;
											stamp = frame.sample.pts;
											frameIndex++
										} else {
											break
										}
									} else {
										offset++
									}
								}
								if (offset < len) aacOverFlow = data.subarray(offset, len);
								else aacOverFlow = null;
								this.aacOverFlow = aacOverFlow;
								this.aacLastPTS = stamp
							};
							TSDemuxer.prototype._parseMPEGPES = function _parseMPEGPES(pes) {
								var data = pes.data;
								var length = data.length;
								var frameIndex = 0;
								var offset = 0;
								var pts = pes.pts;
								while (offset < length) {
									if (mpegaudio.isHeader(data, offset)) {
										var frame = mpegaudio.appendFrame(this._audioTrack, data, offset, pts, frameIndex);
										if (frame) {
											offset += frame.length;
											frameIndex++
										} else {
											break
										}
									} else {
										offset++
									}
								}
							};
							TSDemuxer.prototype._parseID3PES = function _parseID3PES(pes) {
								this._id3Track.samples.push(pes)
							};
							return TSDemuxer
						}();
						var tsdemuxer = (tsdemuxer_TSDemuxer);

						function mp3demuxer__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var mp3demuxer_MP3Demuxer = function () {
							function MP3Demuxer(observer, remuxer, config) {
								mp3demuxer__classCallCheck(this, MP3Demuxer);
								this.observer = observer;
								this.config = config;
								this.remuxer = remuxer
							}
							MP3Demuxer.prototype.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec, duration) {
								this._audioTrack = {
									container: 'audio/mpeg',
									type: 'audio',
									id: -1,
									sequenceNumber: 0,
									isAAC: false,
									samples: [],
									len: 0,
									manifestCodec: audioCodec,
									duration: duration,
									inputTimeScale: 90000
								}
							};
							MP3Demuxer.prototype.resetTimeStamp = function resetTimeStamp() { };
							MP3Demuxer.probe = function probe(data) {
								var offset = void 0,
									length = void 0;
								var id3Data = id3["a"].getID3Data(data, 0);
								if (id3Data && id3["a"].getTimeStamp(id3Data) !== undefined) {
									for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) {
										if (mpegaudio.probe(data, offset)) {
											logger["b"].log('MPEG Audio sync word found !');
											return true
										}
									}
								}
								return false
							};
							MP3Demuxer.prototype.append = function append(data, timeOffset, contiguous, accurateTimeOffset) {
								var id3Data = id3["a"].getID3Data(data, 0);
								var timestamp = id3["a"].getTimeStamp(id3Data);
								var pts = timestamp ? 90 * timestamp : timeOffset * 90000;
								var offset = id3Data.length;
								var length = data.length;
								var frameIndex = 0,
									stamp = 0;
								var track = this._audioTrack;
								var id3Samples = [{
									pts: pts,
									dts: pts,
									data: id3Data
								}];
								while (offset < length) {
									if (mpegaudio.isHeader(data, offset)) {
										var frame = mpegaudio.appendFrame(track, data, offset, pts, frameIndex);
										if (frame) {
											offset += frame.length;
											stamp = frame.sample.pts;
											frameIndex++
										} else {
											break
										}
									} else if (id3["a"].isHeader(data, offset)) {
										id3Data = id3["a"].getID3Data(data, offset);
										id3Samples.push({
											pts: stamp,
											dts: stamp,
											data: id3Data
										});
										offset += id3Data.length
									} else {
										offset++
									}
								}
								this.remuxer.remux(track, {
									samples: []
								}, {
									samples: id3Samples,
									inputTimeScale: 90000
								}, {
									samples: []
								}, timeOffset, contiguous, accurateTimeOffset)
							};
							MP3Demuxer.prototype.destroy = function destroy() { };
							return MP3Demuxer
						}();
						var mp3demuxer = (mp3demuxer_MP3Demuxer);

						function aac__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var AAC = function () {
							function AAC() {
								aac__classCallCheck(this, AAC)
							}
							AAC.getSilentFrame = function getSilentFrame(codec, channelCount) {
								switch (codec) {
									case 'mp4a.40.2':
										if (channelCount === 1) return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
										else if (channelCount === 2) return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
										else if (channelCount === 3) return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
										else if (channelCount === 4) return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
										else if (channelCount === 5) return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
										else if (channelCount === 6) return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
										break;
									default:
										if (channelCount === 1) {
											return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e])
										} else if (channelCount === 2) {
											return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e])
										} else if (channelCount === 3) {
											return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e])
										}
										break
								}
								return null
							};
							return AAC
						}();
						var aac = (AAC);

						function mp4_generator__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var UINT32_MAX = Math.pow(2, 32) - 1;
						var MP4 = function () {
							function MP4() {
								mp4_generator__classCallCheck(this, MP4)
							}
							MP4.init = function init() {
								MP4.types = {
									avc1: [],
									avcC: [],
									btrt: [],
									dinf: [],
									dref: [],
									esds: [],
									ftyp: [],
									hdlr: [],
									mdat: [],
									mdhd: [],
									mdia: [],
									mfhd: [],
									minf: [],
									moof: [],
									moov: [],
									mp4a: [],
									'.mp3': [],
									mvex: [],
									mvhd: [],
									pasp: [],
									sdtp: [],
									stbl: [],
									stco: [],
									stsc: [],
									stsd: [],
									stsz: [],
									stts: [],
									tfdt: [],
									tfhd: [],
									traf: [],
									trak: [],
									trun: [],
									trex: [],
									tkhd: [],
									vmhd: [],
									smhd: []
								};
								var i = void 0;
								for (i in MP4.types) {
									if (MP4.types.hasOwnProperty(i)) {
										MP4.types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)]
									}
								}
								var videoHdlr = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x76, 0x69, 0x64, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
								var audioHdlr = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x73, 0x6f, 0x75, 0x6e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
								MP4.HDLR_TYPES = {
									'video': videoHdlr,
									'audio': audioHdlr
								};
								var dref = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0c, 0x75, 0x72, 0x6c, 0x20, 0x00, 0x00, 0x00, 0x01]);
								var stco = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
								MP4.STTS = MP4.STSC = MP4.STCO = stco;
								MP4.STSZ = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
								MP4.VMHD = new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
								MP4.SMHD = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
								MP4.STSD = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
								var majorBrand = new Uint8Array([105, 115, 111, 109]);
								var avc1Brand = new Uint8Array([97, 118, 99, 49]);
								var minorVersion = new Uint8Array([0, 0, 0, 1]);
								MP4.FTYP = MP4.box(MP4.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand);
								MP4.DINF = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, dref))
							};
							MP4.box = function box(type) {
								var payload = Array.prototype.slice.call(arguments, 1),
									size = 8,
									i = payload.length,
									len = i,
									result = void 0;
								while (i--) {
									size += payload[i].byteLength
								}
								result = new Uint8Array(size);
								result[0] = size >> 24 & 0xff;
								result[1] = size >> 16 & 0xff;
								result[2] = size >> 8 & 0xff;
								result[3] = size & 0xff;
								result.set(type, 4);
								for (i = 0, size = 8; i < len; i++) {
									result.set(payload[i], size);
									size += payload[i].byteLength
								}
								return result
							};
							MP4.hdlr = function hdlr(type) {
								return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[type])
							};
							MP4.mdat = function mdat(data) {
								return MP4.box(MP4.types.mdat, data)
							};
							MP4.mdhd = function mdhd(timescale, duration) {
								duration *= timescale;
								var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
								var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
								return MP4.box(MP4.types.mdhd, new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x55, 0xc4, 0x00, 0x00]))
							};
							MP4.mdia = function mdia(track) {
								return MP4.box(MP4.types.mdia, MP4.mdhd(track.timescale, track.duration), MP4.hdlr(track.type), MP4.minf(track))
							};
							MP4.mfhd = function mfhd(sequenceNumber) {
								return MP4.box(MP4.types.mfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, sequenceNumber >> 24, sequenceNumber >> 16 & 0xFF, sequenceNumber >> 8 & 0xFF, sequenceNumber & 0xFF]))
							};
							MP4.minf = function minf(track) {
								if (track.type === 'audio') return MP4.box(MP4.types.minf, MP4.box(MP4.types.smhd, MP4.SMHD), MP4.DINF, MP4.stbl(track));
								else return MP4.box(MP4.types.minf, MP4.box(MP4.types.vmhd, MP4.VMHD), MP4.DINF, MP4.stbl(track))
							};
							MP4.moof = function moof(sn, baseMediaDecodeTime, track) {
								return MP4.box(MP4.types.moof, MP4.mfhd(sn), MP4.traf(track, baseMediaDecodeTime))
							};
							MP4.moov = function moov(tracks) {
								var i = tracks.length,
									boxes = [];
								while (i--) {
									boxes[i] = MP4.trak(tracks[i])
								}
								return MP4.box.apply(null, [MP4.types.moov, MP4.mvhd(tracks[0].timescale, tracks[0].duration)].concat(boxes).concat(MP4.mvex(tracks)))
							};
							MP4.mvex = function mvex(tracks) {
								var i = tracks.length,
									boxes = [];
								while (i--) {
									boxes[i] = MP4.trex(tracks[i])
								}
								return MP4.box.apply(null, [MP4.types.mvex].concat(boxes))
							};
							MP4.mvhd = function mvhd(timescale, duration) {
								duration *= timescale;
								var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
								var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
								var bytes = new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);
								return MP4.box(MP4.types.mvhd, bytes)
							};
							MP4.sdtp = function sdtp(track) {
								var samples = track.samples || [],
									bytes = new Uint8Array(4 + samples.length),
									flags = void 0,
									i = void 0;
								for (i = 0; i < samples.length; i++) {
									flags = samples[i].flags;
									bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy
								}
								return MP4.box(MP4.types.sdtp, bytes)
							};
							MP4.stbl = function stbl(track) {
								return MP4.box(MP4.types.stbl, MP4.stsd(track), MP4.box(MP4.types.stts, MP4.STTS), MP4.box(MP4.types.stsc, MP4.STSC), MP4.box(MP4.types.stsz, MP4.STSZ), MP4.box(MP4.types.stco, MP4.STCO))
							};
							MP4.avc1 = function avc1(track) {
								var sps = [],
									pps = [],
									i = void 0,
									data = void 0,
									len = void 0;
								for (i = 0; i < track.sps.length; i++) {
									data = track.sps[i];
									len = data.byteLength;
									sps.push(len >>> 8 & 0xFF);
									sps.push(len & 0xFF);
									sps = sps.concat(Array.prototype.slice.call(data))
								}
								for (i = 0; i < track.pps.length; i++) {
									data = track.pps[i];
									len = data.byteLength;
									pps.push(len >>> 8 & 0xFF);
									pps.push(len & 0xFF);
									pps = pps.concat(Array.prototype.slice.call(data))
								}
								var avcc = MP4.box(MP4.types.avcC, new Uint8Array([0x01, sps[3], sps[4], sps[5], 0xfc | 3, 0xE0 | track.sps.length].concat(sps).concat([track.pps.length]).concat(pps))),
									width = track.width,
									height = track.height,
									hSpacing = track.pixelRatio[0],
									vSpacing = track.pixelRatio[1];
								return MP4.box(MP4.types.avc1, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, width >> 8 & 0xFF, width & 0xff, height >> 8 & 0xFF, height & 0xff, 0x00, 0x48, 0x00, 0x00, 0x00, 0x48, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x12, 0x64, 0x61, 0x69, 0x6C, 0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x11, 0x11]), avcc, MP4.box(MP4.types.btrt, new Uint8Array([0x00, 0x1c, 0x9c, 0x80, 0x00, 0x2d, 0xc6, 0xc0, 0x00, 0x2d, 0xc6, 0xc0])), MP4.box(MP4.types.pasp, new Uint8Array([hSpacing >> 24, hSpacing >> 16 & 0xFF, hSpacing >> 8 & 0xFF, hSpacing & 0xFF, vSpacing >> 24, vSpacing >> 16 & 0xFF, vSpacing >> 8 & 0xFF, vSpacing & 0xFF])))
							};
							MP4.esds = function esds(track) {
								var configlen = track.config.length;
								return new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x03, 0x17 + configlen, 0x00, 0x01, 0x00, 0x04, 0x0f + configlen, 0x40, 0x15, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05].concat([configlen]).concat(track.config).concat([0x06, 0x01, 0x02]))
							};
							MP4.mp4a = function mp4a(track) {
								var samplerate = track.samplerate;
								return MP4.box(MP4.types.mp4a, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, track.channelCount, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, samplerate >> 8 & 0xFF, samplerate & 0xff, 0x00, 0x00]), MP4.box(MP4.types.esds, MP4.esds(track)))
							};
							MP4.mp3 = function mp3(track) {
								var samplerate = track.samplerate;
								return MP4.box(MP4.types['.mp3'], new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, track.channelCount, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, samplerate >> 8 & 0xFF, samplerate & 0xff, 0x00, 0x00]))
							};
							MP4.stsd = function stsd(track) {
								if (track.type === 'audio') {
									if (!track.isAAC && track.codec === 'mp3') return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp3(track));
									return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(track))
								} else {
									return MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(track))
								}
							};
							MP4.tkhd = function tkhd(track) {
								var id = track.id,
									duration = track.duration * track.timescale,
									width = track.width,
									height = track.height,
									upperWordDuration = Math.floor(duration / (UINT32_MAX + 1)),
									lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
								return MP4.box(MP4.types.tkhd, new Uint8Array([0x01, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, id >> 24 & 0xFF, id >> 16 & 0xFF, id >> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, upperWordDuration >> 24, upperWordDuration >> 16 & 0xFF, upperWordDuration >> 8 & 0xFF, upperWordDuration & 0xFF, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xFF, lowerWordDuration >> 8 & 0xFF, lowerWordDuration & 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, width >> 8 & 0xFF, width & 0xFF, 0x00, 0x00, height >> 8 & 0xFF, height & 0xFF, 0x00, 0x00]))
							};
							MP4.traf = function traf(track, baseMediaDecodeTime) {
								var sampleDependencyTable = MP4.sdtp(track),
									id = track.id,
									upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1)),
									lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
								return MP4.box(MP4.types.traf, MP4.box(MP4.types.tfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF])), MP4.box(MP4.types.tfdt, new Uint8Array([0x01, 0x00, 0x00, 0x00, upperWordBaseMediaDecodeTime >> 24, upperWordBaseMediaDecodeTime >> 16 & 0XFF, upperWordBaseMediaDecodeTime >> 8 & 0XFF, upperWordBaseMediaDecodeTime & 0xFF, lowerWordBaseMediaDecodeTime >> 24, lowerWordBaseMediaDecodeTime >> 16 & 0XFF, lowerWordBaseMediaDecodeTime >> 8 & 0XFF, lowerWordBaseMediaDecodeTime & 0xFF])), MP4.trun(track, sampleDependencyTable.length + 16 + 20 + 8 + 16 + 8 + 8), sampleDependencyTable)
							};
							MP4.trak = function trak(track) {
								track.duration = track.duration || 0xffffffff;
								return MP4.box(MP4.types.trak, MP4.tkhd(track), MP4.mdia(track))
							};
							MP4.trex = function trex(track) {
								var id = track.id;
								return MP4.box(MP4.types.trex, new Uint8Array([0x00, 0x00, 0x00, 0x00, id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01]))
							};
							MP4.trun = function trun(track, offset) {
								var samples = track.samples || [],
									len = samples.length,
									arraylen = 12 + 16 * len,
									array = new Uint8Array(arraylen),
									i = void 0,
									sample = void 0,
									duration = void 0,
									size = void 0,
									flags = void 0,
									cts = void 0;
								offset += 8 + arraylen;
								array.set([0x00, 0x00, 0x0f, 0x01, len >>> 24 & 0xFF, len >>> 16 & 0xFF, len >>> 8 & 0xFF, len & 0xFF, offset >>> 24 & 0xFF, offset >>> 16 & 0xFF, offset >>> 8 & 0xFF, offset & 0xFF], 0);
								for (i = 0; i < len; i++) {
									sample = samples[i];
									duration = sample.duration;
									size = sample.size;
									flags = sample.flags;
									cts = sample.cts;
									array.set([duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, size >>> 24 & 0xFF, size >>> 16 & 0xFF, size >>> 8 & 0xFF, size & 0xFF, flags.isLeading << 2 | flags.dependsOn, flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync, flags.degradPrio & 0xF0 << 8, flags.degradPrio & 0x0F, cts >>> 24 & 0xFF, cts >>> 16 & 0xFF, cts >>> 8 & 0xFF, cts & 0xFF], 12 + 16 * i)
								}
								return MP4.box(MP4.types.trun, array)
							};
							MP4.initSegment = function initSegment(tracks) {
								if (!MP4.types) MP4.init();
								var movie = MP4.moov(tracks),
									result = void 0;
								result = new Uint8Array(MP4.FTYP.byteLength + movie.byteLength);
								result.set(MP4.FTYP);
								result.set(movie, MP4.FTYP.byteLength);
								return result
							};
							return MP4
						}();
						var mp4_generator = (MP4);

						function mp4_remuxer__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var MAX_SILENT_FRAME_DURATION = 10 * 1000;
						var mp4_remuxer_MP4Remuxer = function () {
							function MP4Remuxer(observer, config, typeSupported, vendor) {
								mp4_remuxer__classCallCheck(this, MP4Remuxer);
								this.observer = observer;
								this.config = config;
								this.typeSupported = typeSupported;
								var userAgent = navigator.userAgent;
								this.isSafari = vendor && vendor.indexOf('Apple') > -1 && userAgent && !userAgent.match('CriOS');
								this.ISGenerated = false
							}
							MP4Remuxer.prototype.destroy = function destroy() { };
							MP4Remuxer.prototype.resetTimeStamp = function resetTimeStamp(defaultTimeStamp) {
								this._initPTS = this._initDTS = defaultTimeStamp
							};
							MP4Remuxer.prototype.resetInitSegment = function resetInitSegment() {
								this.ISGenerated = false
							};
							MP4Remuxer.prototype.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
								if (!this.ISGenerated) this.generateIS(audioTrack, videoTrack, timeOffset);
								if (this.ISGenerated) {
									var nbAudioSamples = audioTrack.samples.length;
									var nbVideoSamples = videoTrack.samples.length;
									var audioTimeOffset = timeOffset;
									var videoTimeOffset = timeOffset;
									if (nbAudioSamples && nbVideoSamples) {
										var audiovideoDeltaDts = (audioTrack.samples[0].dts - videoTrack.samples[0].dts) / videoTrack.inputTimeScale;
										audioTimeOffset += Math.max(0, audiovideoDeltaDts);
										videoTimeOffset += Math.max(0, -audiovideoDeltaDts)
									}
									if (nbAudioSamples) {
										if (!audioTrack.timescale) {
											logger["b"].warn('regenerate InitSegment as audio detected');
											this.generateIS(audioTrack, videoTrack, timeOffset)
										}
										var audioData = this.remuxAudio(audioTrack, audioTimeOffset, contiguous, accurateTimeOffset);
										if (nbVideoSamples) {
											var audioTrackLength = void 0;
											if (audioData) audioTrackLength = audioData.endPTS - audioData.startPTS;
											if (!videoTrack.timescale) {
												logger["b"].warn('regenerate InitSegment as video detected');
												this.generateIS(audioTrack, videoTrack, timeOffset)
											}
											this.remuxVideo(videoTrack, videoTimeOffset, contiguous, audioTrackLength, accurateTimeOffset)
										}
									} else {
										if (nbVideoSamples) {
											var videoData = this.remuxVideo(videoTrack, videoTimeOffset, contiguous, 0, accurateTimeOffset);
											if (videoData && audioTrack.codec) this.remuxEmptyAudio(audioTrack, audioTimeOffset, contiguous, videoData)
										}
									}
								}
								if (id3Track.samples.length) this.remuxID3(id3Track, timeOffset);
								if (textTrack.samples.length) this.remuxText(textTrack, timeOffset);
								this.observer.trigger(events["a"].FRAG_PARSED)
							};
							MP4Remuxer.prototype.generateIS = function generateIS(audioTrack, videoTrack, timeOffset) {
								var observer = this.observer,
									audioSamples = audioTrack.samples,
									videoSamples = videoTrack.samples,
									typeSupported = this.typeSupported,
									container = 'audio/mp4',
									tracks = {},
									data = {
										tracks: tracks
									},
									computePTSDTS = this._initPTS === undefined,
									initPTS = void 0,
									initDTS = void 0;
								if (computePTSDTS) initPTS = initDTS = Infinity;
								if (audioTrack.config && audioSamples.length) {
									audioTrack.timescale = audioTrack.samplerate;
									logger["b"].log('audio sampling rate : ' + audioTrack.samplerate);
									if (!audioTrack.isAAC) {
										if (typeSupported.mpeg) {
											container = 'audio/mpeg';
											audioTrack.codec = ''
										} else if (typeSupported.mp3) {
											audioTrack.codec = 'mp3'
										}
									}
									tracks.audio = {
										container: container,
										codec: audioTrack.codec,
										initSegment: !audioTrack.isAAC && typeSupported.mpeg ? new Uint8Array() : mp4_generator.initSegment([audioTrack]),
										metadata: {
											channelCount: audioTrack.channelCount
										}
									};
									if (computePTSDTS) {
										initPTS = initDTS = audioSamples[0].pts - audioTrack.inputTimeScale * timeOffset
									}
								}
								if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
									var inputTimeScale = videoTrack.inputTimeScale;
									videoTrack.timescale = inputTimeScale;
									tracks.video = {
										container: 'video/mp4',
										codec: videoTrack.codec,
										initSegment: mp4_generator.initSegment([videoTrack]),
										metadata: {
											width: videoTrack.width,
											height: videoTrack.height
										}
									};
									if (computePTSDTS) {
										initPTS = Math.min(initPTS, videoSamples[0].pts - inputTimeScale * timeOffset);
										initDTS = Math.min(initDTS, videoSamples[0].dts - inputTimeScale * timeOffset);
										this.observer.trigger(events["a"].INIT_PTS_FOUND, {
											initPTS: initPTS
										})
									}
								}
								if (Object.keys(tracks).length) {
									observer.trigger(events["a"].FRAG_PARSING_INIT_SEGMENT, data);
									this.ISGenerated = true;
									if (computePTSDTS) {
										this._initPTS = initPTS;
										this._initDTS = initDTS
									}
								} else {
									observer.trigger(events["a"].ERROR, {
										type: errors["b"].MEDIA_ERROR,
										details: errors["a"].FRAG_PARSING_ERROR,
										fatal: false,
										reason: 'no audio/video samples found'
									})
								}
							};
							MP4Remuxer.prototype.remuxVideo = function remuxVideo(track, timeOffset, contiguous, audioTrackLength, accurateTimeOffset) {
								var offset = 8,
									timeScale = track.timescale,
									mp4SampleDuration = void 0,
									mdat = void 0,
									moof = void 0,
									firstPTS = void 0,
									firstDTS = void 0,
									nextDTS = void 0,
									lastPTS = void 0,
									lastDTS = void 0,
									inputSamples = track.samples,
									outputSamples = [],
									nbSamples = inputSamples.length,
									ptsNormalize = this._PTSNormalize,
									initDTS = this._initDTS;
								var nextAvcDts = this.nextAvcDts;
								var isSafari = this.isSafari;
								if (nbSamples === 0) return;
								if (isSafari) {
									contiguous |= inputSamples.length && nextAvcDts && (accurateTimeOffset && Math.abs(timeOffset - nextAvcDts / timeScale) < 0.1 || Math.abs(inputSamples[0].pts - nextAvcDts - initDTS) < timeScale / 5)
								}
								if (!contiguous) {
									nextAvcDts = timeOffset * timeScale
								}
								inputSamples.forEach(function (sample) {
									sample.pts = ptsNormalize(sample.pts - initDTS, nextAvcDts);
									sample.dts = ptsNormalize(sample.dts - initDTS, nextAvcDts)
								});
								inputSamples.sort(function (a, b) {
									var deltadts = a.dts - b.dts;
									var deltapts = a.pts - b.pts;
									return deltadts || deltapts || a.id - b.id
								});
								var PTSDTSshift = inputSamples.reduce(function (prev, curr) {
									return Math.max(Math.min(prev, curr.pts - curr.dts), -18000)
								}, 0);
								if (PTSDTSshift < 0) {
									logger["b"].warn('PTS < DTS detected in video samples, shifting DTS by ' + Math.round(PTSDTSshift / 90) + ' ms to overcome this issue');
									for (var i = 0; i < inputSamples.length; i++) {
										inputSamples[i].dts += PTSDTSshift
									}
								}
								var sample = inputSamples[0];
								firstDTS = Math.max(sample.dts, 0);
								firstPTS = Math.max(sample.pts, 0);
								var delta = Math.round((firstDTS - nextAvcDts) / 90);
								if (contiguous) {
									if (delta) {
										if (delta > 1) logger["b"].log('AVC:' + delta + ' ms hole between fragments detected,filling it');
										else if (delta < -1) logger["b"].log('AVC:' + -delta + ' ms overlapping between fragments detected');
										firstDTS = nextAvcDts;
										inputSamples[0].dts = firstDTS;
										firstPTS = Math.max(firstPTS - delta, nextAvcDts);
										inputSamples[0].pts = firstPTS;
										logger["b"].log('Video/PTS/DTS adjusted: ' + Math.round(firstPTS / 90) + '/' + Math.round(firstDTS / 90) + ',delta:' + delta + ' ms')
									}
								}
								nextDTS = firstDTS;
								sample = inputSamples[inputSamples.length - 1];
								lastDTS = Math.max(sample.dts, 0);
								lastPTS = Math.max(sample.pts, 0, lastDTS);
								if (isSafari) mp4SampleDuration = Math.round((lastDTS - firstDTS) / (inputSamples.length - 1));
								var nbNalu = 0,
									naluLen = 0;
								for (var _i = 0; _i < nbSamples; _i++) {
									var _sample = inputSamples[_i],
										units = _sample.units,
										nbUnits = units.length,
										sampleLen = 0;
									for (var j = 0; j < nbUnits; j++) {
										sampleLen += units[j].data.length
									}
									naluLen += sampleLen;
									nbNalu += nbUnits;
									_sample.length = sampleLen;
									if (isSafari) {
										_sample.dts = firstDTS + _i * mp4SampleDuration
									} else {
										_sample.dts = Math.max(_sample.dts, firstDTS)
									}
									_sample.pts = Math.max(_sample.pts, _sample.dts)
								}
								var mdatSize = naluLen + 4 * nbNalu + 8;
								try {
									mdat = new Uint8Array(mdatSize)
								} catch (err) {
									this.observer.trigger(events["a"].ERROR, {
										type: errors["b"].MUX_ERROR,
										details: errors["a"].REMUX_ALLOC_ERROR,
										fatal: false,
										bytes: mdatSize,
										reason: 'fail allocating video mdat ' + mdatSize
									});
									return
								}
								var view = new DataView(mdat.buffer);
								view.setUint32(0, mdatSize);
								mdat.set(mp4_generator.types.mdat, 4);
								for (var _i2 = 0; _i2 < nbSamples; _i2++) {
									var avcSample = inputSamples[_i2],
										avcSampleUnits = avcSample.units,
										mp4SampleLength = 0,
										compositionTimeOffset = void 0;
									for (var _j = 0, _nbUnits = avcSampleUnits.length; _j < _nbUnits; _j++) {
										var unit = avcSampleUnits[_j],
											unitData = unit.data,
											unitDataLen = unit.data.byteLength;
										view.setUint32(offset, unitDataLen);
										offset += 4;
										mdat.set(unitData, offset);
										offset += unitDataLen;
										mp4SampleLength += 4 + unitDataLen
									}
									if (!isSafari) {
										if (_i2 < nbSamples - 1) {
											mp4SampleDuration = inputSamples[_i2 + 1].dts - avcSample.dts
										} else {
											var config = this.config,
												lastFrameDuration = avcSample.dts - inputSamples[_i2 > 0 ? _i2 - 1 : _i2].dts;
											if (config.stretchShortVideoTrack) {
												var maxBufferHole = config.maxBufferHole,
													gapTolerance = Math.floor(maxBufferHole * timeScale),
													deltaToFrameEnd = (audioTrackLength ? firstPTS + audioTrackLength * timeScale : this.nextAudioPts) - avcSample.pts;
												if (deltaToFrameEnd > gapTolerance) {
													mp4SampleDuration = deltaToFrameEnd - lastFrameDuration;
													if (mp4SampleDuration < 0) mp4SampleDuration = lastFrameDuration;
													logger["b"].log('It is approximately ' + deltaToFrameEnd / 90 + ' ms to the next segment; using duration ' + mp4SampleDuration / 90 + ' ms for the last video frame.')
												} else {
													mp4SampleDuration = lastFrameDuration
												}
											} else {
												mp4SampleDuration = lastFrameDuration
											}
										}
										compositionTimeOffset = Math.round(avcSample.pts - avcSample.dts)
									} else {
										compositionTimeOffset = Math.max(0, mp4SampleDuration * Math.round((avcSample.pts - avcSample.dts) / mp4SampleDuration))
									}
									outputSamples.push({
										size: mp4SampleLength,
										duration: mp4SampleDuration,
										cts: compositionTimeOffset,
										flags: {
											isLeading: 0,
											isDependedOn: 0,
											hasRedundancy: 0,
											degradPrio: 0,
											dependsOn: avcSample.key ? 2 : 1,
											isNonSync: avcSample.key ? 0 : 1
										}
									})
								}
								this.nextAvcDts = lastDTS + mp4SampleDuration;
								var dropped = track.dropped;
								track.len = 0;
								track.nbNalu = 0;
								track.dropped = 0;
								if (outputSamples.length && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
									var flags = outputSamples[0].flags;
									flags.dependsOn = 2;
									flags.isNonSync = 0
								}
								track.samples = outputSamples;
								moof = mp4_generator.moof(track.sequenceNumber++, firstDTS, track);
								track.samples = [];
								var data = {
									data1: moof,
									data2: mdat,
									startPTS: firstPTS / timeScale,
									endPTS: (lastPTS + mp4SampleDuration) / timeScale,
									startDTS: firstDTS / timeScale,
									endDTS: this.nextAvcDts / timeScale,
									type: 'video',
									hasAudio: false,
									hasVideo: true,
									nb: outputSamples.length,
									dropped: dropped
								};
								this.observer.trigger(events["a"].FRAG_PARSING_DATA, data);
								return data
							};
							MP4Remuxer.prototype.remuxAudio = function remuxAudio(track, timeOffset, contiguous, accurateTimeOffset) {
								var inputTimeScale = track.inputTimeScale,
									mp4timeScale = track.timescale,
									scaleFactor = inputTimeScale / mp4timeScale,
									mp4SampleDuration = track.isAAC ? 1024 : 1152,
									inputSampleDuration = mp4SampleDuration * scaleFactor,
									ptsNormalize = this._PTSNormalize,
									initDTS = this._initDTS,
									rawMPEG = !track.isAAC && this.typeSupported.mpeg;
								var offset = void 0,
									mp4Sample = void 0,
									fillFrame = void 0,
									mdat = void 0,
									moof = void 0,
									firstPTS = void 0,
									lastPTS = void 0,
									inputSamples = track.samples,
									outputSamples = [],
									nextAudioPts = this.nextAudioPts;
								contiguous |= inputSamples.length && nextAudioPts && (accurateTimeOffset && Math.abs(timeOffset - nextAudioPts / inputTimeScale) < 0.1 || Math.abs(inputSamples[0].pts - nextAudioPts - initDTS) < 20 * inputSampleDuration);
								inputSamples.forEach(function (sample) {
									sample.pts = sample.dts = ptsNormalize(sample.pts - initDTS, timeOffset * inputTimeScale)
								});
								inputSamples = inputSamples.filter(function (sample) {
									return sample.pts >= 0
								});
								if (inputSamples.length === 0) return;
								if (!contiguous) {
									if (!accurateTimeOffset) {
										nextAudioPts = inputSamples[0].pts
									} else {
										nextAudioPts = timeOffset * inputTimeScale
									}
								}
								if (track.isAAC) {
									var maxAudioFramesDrift = this.config.maxAudioFramesDrift;
									for (var i = 0, nextPts = nextAudioPts; i < inputSamples.length;) {
										var sample = inputSamples[i],
											delta;
										var pts = sample.pts;
										delta = pts - nextPts;
										var duration = Math.abs(1000 * delta / inputTimeScale);
										if (delta <= -maxAudioFramesDrift * inputSampleDuration) {
											logger["b"].warn('Dropping 1 audio frame @ ' + (nextPts / inputTimeScale).toFixed(3) + 's due to ' + Math.round(duration) + ' ms overlap.');
											inputSamples.splice(i, 1);
											track.len -= sample.unit.length
										} else if (delta >= maxAudioFramesDrift * inputSampleDuration && duration < MAX_SILENT_FRAME_DURATION && nextPts) {
											var missing = Math.round(delta / inputSampleDuration);
											logger["b"].warn('Injecting ' + missing + ' audio frame @ ' + (nextPts / inputTimeScale).toFixed(3) + 's due to ' + Math.round(1000 * delta / inputTimeScale) + ' ms gap.');
											for (var j = 0; j < missing; j++) {
												var newStamp = Math.max(nextPts, 0);
												fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
												if (!fillFrame) {
													logger["b"].log('Unable to get silent frame for given audio codec; duplicating last frame instead.');
													fillFrame = sample.unit.subarray()
												}
												inputSamples.splice(i, 0, {
													unit: fillFrame,
													pts: newStamp,
													dts: newStamp
												});
												track.len += fillFrame.length;
												nextPts += inputSampleDuration;
												i++
											}
											sample.pts = sample.dts = nextPts;
											nextPts += inputSampleDuration;
											i++
										} else {
											if (Math.abs(delta) > 0.1 * inputSampleDuration) { }
											sample.pts = sample.dts = nextPts;
											nextPts += inputSampleDuration;
											i++
										}
									}
								}
								for (var _j2 = 0, _nbSamples = inputSamples.length; _j2 < _nbSamples; _j2++) {
									var audioSample = inputSamples[_j2];
									var unit = audioSample.unit;
									var _pts = audioSample.pts;
									if (lastPTS !== undefined) {
										mp4Sample.duration = Math.round((_pts - lastPTS) / scaleFactor)
									} else {
										var _delta = Math.round(1000 * (_pts - nextAudioPts) / inputTimeScale),
											numMissingFrames = 0;
										if (contiguous && track.isAAC) {
											if (_delta) {
												if (_delta > 0 && _delta < MAX_SILENT_FRAME_DURATION) {
													numMissingFrames = Math.round((_pts - nextAudioPts) / inputSampleDuration);
													logger["b"].log(_delta + ' ms hole between AAC samples detected,filling it');
													if (numMissingFrames > 0) {
														fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
														if (!fillFrame) fillFrame = unit.subarray();
														track.len += numMissingFrames * fillFrame.length
													}
												} else if (_delta < -12) {
													logger["b"].log('drop overlapping AAC sample, expected/parsed/delta:' + (nextAudioPts / inputTimeScale).toFixed(3) + 's/' + (_pts / inputTimeScale).toFixed(3) + 's/' + -_delta + 'ms');
													track.len -= unit.byteLength;
													continue
												}
												_pts = nextAudioPts
											}
										}
										firstPTS = _pts;
										if (track.len > 0) {
											var mdatSize = rawMPEG ? track.len : track.len + 8;
											offset = rawMPEG ? 0 : 8;
											try {
												mdat = new Uint8Array(mdatSize)
											} catch (err) {
												this.observer.trigger(events["a"].ERROR, {
													type: errors["b"].MUX_ERROR,
													details: errors["a"].REMUX_ALLOC_ERROR,
													fatal: false,
													bytes: mdatSize,
													reason: 'fail allocating audio mdat ' + mdatSize
												});
												return
											}
											if (!rawMPEG) {
												var view = new DataView(mdat.buffer);
												view.setUint32(0, mdatSize);
												mdat.set(mp4_generator.types.mdat, 4)
											}
										} else {
											return
										}
										for (var _i3 = 0; _i3 < numMissingFrames; _i3++) {
											fillFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
											if (!fillFrame) {
												logger["b"].log('Unable to get silent frame for given audio codec; duplicating this frame instead.');
												fillFrame = unit.subarray()
											}
											mdat.set(fillFrame, offset);
											offset += fillFrame.byteLength;
											mp4Sample = {
												size: fillFrame.byteLength,
												cts: 0,
												duration: 1024,
												flags: {
													isLeading: 0,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradPrio: 0,
													dependsOn: 1
												}
											};
											outputSamples.push(mp4Sample)
										}
									}
									mdat.set(unit, offset);
									var unitLen = unit.byteLength;
									offset += unitLen;
									mp4Sample = {
										size: unitLen,
										cts: 0,
										duration: 0,
										flags: {
											isLeading: 0,
											isDependedOn: 0,
											hasRedundancy: 0,
											degradPrio: 0,
											dependsOn: 1
										}
									};
									outputSamples.push(mp4Sample);
									lastPTS = _pts
								}
								var lastSampleDuration = 0;
								var nbSamples = outputSamples.length;
								if (nbSamples >= 2) {
									lastSampleDuration = outputSamples[nbSamples - 2].duration;
									mp4Sample.duration = lastSampleDuration
								}
								if (nbSamples) {
									this.nextAudioPts = nextAudioPts = lastPTS + scaleFactor * lastSampleDuration;
									track.len = 0;
									track.samples = outputSamples;
									if (rawMPEG) moof = new Uint8Array();
									else moof = mp4_generator.moof(track.sequenceNumber++, firstPTS / scaleFactor, track);
									track.samples = [];
									var start = firstPTS / inputTimeScale;
									var end = nextAudioPts / inputTimeScale;
									var audioData = {
										data1: moof,
										data2: mdat,
										startPTS: start,
										endPTS: end,
										startDTS: start,
										endDTS: end,
										type: 'audio',
										hasAudio: true,
										hasVideo: false,
										nb: nbSamples
									};
									this.observer.trigger(events["a"].FRAG_PARSING_DATA, audioData);
									return audioData
								}
								return null
							};
							MP4Remuxer.prototype.remuxEmptyAudio = function remuxEmptyAudio(track, timeOffset, contiguous, videoData) {
								var inputTimeScale = track.inputTimeScale,
									mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale,
									scaleFactor = inputTimeScale / mp4timeScale,
									nextAudioPts = this.nextAudioPts,
									startDTS = (nextAudioPts !== undefined ? nextAudioPts : videoData.startDTS * inputTimeScale) + this._initDTS,
									endDTS = videoData.endDTS * inputTimeScale + this._initDTS,
									sampleDuration = 1024,
									frameDuration = scaleFactor * sampleDuration,
									nbSamples = Math.ceil((endDTS - startDTS) / frameDuration),
									silentFrame = aac.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
								logger["b"].warn('remux empty Audio');
								if (!silentFrame) {
									logger["b"].trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!');
									return
								}
								var samples = [];
								for (var i = 0; i < nbSamples; i++) {
									var stamp = startDTS + i * frameDuration;
									samples.push({
										unit: silentFrame,
										pts: stamp,
										dts: stamp
									});
									track.len += silentFrame.length
								}
								track.samples = samples;
								this.remuxAudio(track, timeOffset, contiguous)
							};
							MP4Remuxer.prototype.remuxID3 = function remuxID3(track, timeOffset) {
								var length = track.samples.length,
									sample = void 0;
								var inputTimeScale = track.inputTimeScale;
								var initPTS = this._initPTS;
								var initDTS = this._initDTS;
								if (length) {
									for (var index = 0; index < length; index++) {
										sample = track.samples[index];
										sample.pts = (sample.pts - initPTS) / inputTimeScale;
										sample.dts = (sample.dts - initDTS) / inputTimeScale
									}
									this.observer.trigger(events["a"].FRAG_PARSING_METADATA, {
										samples: track.samples
									})
								}
								track.samples = [];
								timeOffset = timeOffset
							};
							MP4Remuxer.prototype.remuxText = function remuxText(track, timeOffset) {
								track.samples.sort(function (a, b) {
									return a.pts - b.pts
								});
								var length = track.samples.length,
									sample = void 0;
								var inputTimeScale = track.inputTimeScale;
								var initPTS = this._initPTS;
								if (length) {
									for (var index = 0; index < length; index++) {
										sample = track.samples[index];
										sample.pts = (sample.pts - initPTS) / inputTimeScale
									}
									this.observer.trigger(events["a"].FRAG_PARSING_USERDATA, {
										samples: track.samples
									})
								}
								track.samples = [];
								timeOffset = timeOffset
							};
							MP4Remuxer.prototype._PTSNormalize = function _PTSNormalize(value, reference) {
								var offset = void 0;
								if (reference === undefined) return value;
								if (reference < value) {
									offset = -8589934592
								} else {
									offset = 8589934592
								}
								while (Math.abs(value - reference) > 4294967296) {
									value += offset
								}
								return value
							};
							return MP4Remuxer
						}();
						var mp4_remuxer = (mp4_remuxer_MP4Remuxer);

						function passthrough_remuxer__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var passthrough_remuxer_PassThroughRemuxer = function () {
							function PassThroughRemuxer(observer) {
								passthrough_remuxer__classCallCheck(this, PassThroughRemuxer);
								this.observer = observer
							}
							PassThroughRemuxer.prototype.destroy = function destroy() { };
							PassThroughRemuxer.prototype.resetTimeStamp = function resetTimeStamp() { };
							PassThroughRemuxer.prototype.resetInitSegment = function resetInitSegment() { };
							PassThroughRemuxer.prototype.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset, rawData) {
								var observer = this.observer;
								var streamType = '';
								if (audioTrack) streamType += 'audio';
								if (videoTrack) streamType += 'video';
								observer.trigger(events["a"].FRAG_PARSING_DATA, {
									data1: rawData,
									startPTS: timeOffset,
									startDTS: timeOffset,
									type: streamType,
									hasAudio: !!audioTrack,
									hasVideo: !!videoTrack,
									nb: 1,
									dropped: 0
								});
								observer.trigger(events["a"].FRAG_PARSED)
							};
							return PassThroughRemuxer
						}();
						var passthrough_remuxer = (passthrough_remuxer_PassThroughRemuxer);

						function demuxer_inline__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var demuxer_inline_DemuxerInline = function () {
							function DemuxerInline(observer, typeSupported, config, vendor) {
								demuxer_inline__classCallCheck(this, DemuxerInline);
								this.observer = observer;
								this.typeSupported = typeSupported;
								this.config = config;
								this.vendor = vendor
							}
							DemuxerInline.prototype.destroy = function destroy() {
								var demuxer = this.demuxer;
								if (demuxer) demuxer.destroy()
							};
							DemuxerInline.prototype.push = function push(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
								if (data.byteLength > 0 && decryptdata != null && decryptdata.key != null && decryptdata.method === 'AES-128') {
									var decrypter = this.decrypter;
									if (decrypter == null) decrypter = this.decrypter = new crypt_decrypter["a"](this.observer, this.config);
									var localthis = this;
									var startTime = void 0;
									try {
										startTime = performance.now()
									} catch (error) {
										startTime = Date.now()
									}
									decrypter.decrypt(data, decryptdata.key.buffer, decryptdata.iv.buffer, function (decryptedData) {
										var endTime = void 0;
										try {
											endTime = performance.now()
										} catch (error) {
											endTime = Date.now()
										}
										localthis.observer.trigger(events["a"].FRAG_DECRYPTED, {
											stats: {
												tstart: startTime,
												tdecrypt: endTime
											}
										});
										localthis.pushDecrypted(new Uint8Array(decryptedData), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS)
									})
								} else {
									this.pushDecrypted(new Uint8Array(data), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS)
								}
							};
							DemuxerInline.prototype.pushDecrypted = function pushDecrypted(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
								var demuxer = this.demuxer;
								if (!demuxer || (discontinuity || trackSwitch) && !this.probe(data)) {
									var observer = this.observer;
									var typeSupported = this.typeSupported;
									var config = this.config;
									var muxConfig = [{
										demux: tsdemuxer,
										remux: mp4_remuxer
									}, {
										demux: mp4demuxer["a"],
										remux: passthrough_remuxer
									}, {
										demux: aacdemuxer,
										remux: mp4_remuxer
									}, {
										demux: mp3demuxer,
										remux: mp4_remuxer
									}];
									for (var i = 0, len = muxConfig.length; i < len; i++) {
										var mux = muxConfig[i];
										var probe = mux.demux.probe;
										if (probe(data)) {
											var _remuxer = this.remuxer = new mux.remux(observer, config, typeSupported, this.vendor);
											demuxer = new mux.demux(observer, _remuxer, config, typeSupported);
											this.probe = probe;
											break
										}
									}
									if (!demuxer) {
										observer.trigger(events["a"].ERROR, {
											type: errors["b"].MEDIA_ERROR,
											details: errors["a"].FRAG_PARSING_ERROR,
											fatal: true,
											reason: 'no demux matching with content found'
										});
										return
									}
									this.demuxer = demuxer
								}
								var remuxer = this.remuxer;
								if (discontinuity || trackSwitch) {
									demuxer.resetInitSegment(initSegment, audioCodec, videoCodec, duration);
									remuxer.resetInitSegment()
								}
								if (discontinuity) {
									demuxer.resetTimeStamp(defaultInitPTS);
									remuxer.resetTimeStamp(defaultInitPTS)
								}
								if (typeof demuxer.setDecryptData === 'function') demuxer.setDecryptData(decryptdata);
								demuxer.append(data, timeOffset, contiguous, accurateTimeOffset)
							};
							return DemuxerInline
						}();
						var demuxer_inline = __webpack_exports__["a"] = (demuxer_inline_DemuxerInline)
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						Object.defineProperty(__webpack_exports__, "__esModule", {
							value: true
						});
						var cues_namespaceObject = {};
						__webpack_require__.d(cues_namespaceObject, "newCue", function () {
							return newCue
						});
						var url_toolkit = __webpack_require__(3);
						var url_toolkit_default = __webpack_require__.n(url_toolkit);
						var errors = __webpack_require__(2);
						var events = __webpack_require__(1);
						var logger = __webpack_require__(0);
						var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
							return typeof obj
						} : function (obj) {
							return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
						};

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var FORBIDDEN_EVENT_NAMES = new Set(['hlsEventGeneric', 'hlsHandlerDestroying', 'hlsHandlerDestroyed']);
						var event_handler_EventHandler = function () {
							function EventHandler(hls) {
								_classCallCheck(this, EventHandler);
								this.hls = hls;
								this.onEvent = this.onEvent.bind(this);
								for (var _len = arguments.length, events = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									events[_key - 1] = arguments[_key]
								}
								this.handledEvents = events;
								this.useGenericHandler = true;
								this.registerListeners()
							}
							EventHandler.prototype.destroy = function destroy() {
								this.onHandlerDestroying();
								this.unregisterListeners();
								this.onHandlerDestroyed()
							};
							EventHandler.prototype.onHandlerDestroying = function onHandlerDestroying() { };
							EventHandler.prototype.onHandlerDestroyed = function onHandlerDestroyed() { };
							EventHandler.prototype.isEventHandler = function isEventHandler() {
								return _typeof(this.handledEvents) === 'object' && this.handledEvents.length && typeof this.onEvent === 'function'
							};
							EventHandler.prototype.registerListeners = function registerListeners() {
								if (this.isEventHandler()) {
									this.handledEvents.forEach(function (event) {
										if (FORBIDDEN_EVENT_NAMES.has(event)) throw new Error('Forbidden event-name: ' + event);
										this.hls.on(event, this.onEvent)
									}, this)
								}
							};
							EventHandler.prototype.unregisterListeners = function unregisterListeners() {
								if (this.isEventHandler()) {
									this.handledEvents.forEach(function (event) {
										this.hls.off(event, this.onEvent)
									}, this)
								}
							};
							EventHandler.prototype.onEvent = function onEvent(event, data) {
								this.onEventGeneric(event, data)
							};
							EventHandler.prototype.onEventGeneric = function onEventGeneric(event, data) {
								var eventToFunction = function eventToFunction(event, data) {
									var funcName = 'on' + event.replace('hls', '');
									if (typeof this[funcName] !== 'function') throw new Error('Event ' + event + ' has no generic handler in this ' + this.constructor.name + ' class (tried ' + funcName + ')');
									return this[funcName].bind(this, data)
								};
								try {
									eventToFunction.call(this, event, data).call()
								} catch (err) {
									logger["b"].error('An internal error happened while handling event ' + event + '. Error message: "' + err.message + '". Here is a stacktrace:', err);
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].OTHER_ERROR,
										details: errors["a"].INTERNAL_EXCEPTION,
										fatal: false,
										event: event,
										err: err
									})
								}
							};
							return EventHandler
						}();
						var event_handler = (event_handler_EventHandler);
						var mp4demuxer = __webpack_require__(7);
						var _createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function level_key__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var level_key_LevelKey = function () {
							function LevelKey() {
								level_key__classCallCheck(this, LevelKey);
								this.method = null;
								this.key = null;
								this.iv = null;
								this._uri = null
							}
							_createClass(LevelKey, [{
								key: 'uri',
								get: function get() {
									if (!this._uri && this.reluri) this._uri = url_toolkit_default.a.buildAbsoluteURL(this.baseuri, this.reluri, {
										alwaysNormalize: true
									});
									return this._uri
								}
							}]);
							return LevelKey
						}();
						var level_key = (level_key_LevelKey);
						var fragment__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function fragment__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var fragment_Fragment = function () {
							function Fragment() {
								var _elementaryStreams;
								fragment__classCallCheck(this, Fragment);
								this._url = null;
								this._byteRange = null;
								this._decryptdata = null;
								this.tagList = [];
								this._elementaryStreams = (_elementaryStreams = {}, _elementaryStreams[Fragment.ElementaryStreamTypes.AUDIO] = false, _elementaryStreams[Fragment.ElementaryStreamTypes.VIDEO] = false, _elementaryStreams)
							}
							Fragment.prototype.addElementaryStream = function addElementaryStream(type) {
								this._elementaryStreams[type] = true
							};
							Fragment.prototype.hasElementaryStream = function hasElementaryStream(type) {
								return this._elementaryStreams[type] === true
							};
							Fragment.prototype.createInitializationVector = function createInitializationVector(segmentNumber) {
								var uint8View = new Uint8Array(16);
								for (var i = 12; i < 16; i++) {
									uint8View[i] = segmentNumber >> 8 * (15 - i) & 0xff
								}
								return uint8View
							};
							Fragment.prototype.fragmentDecryptdataFromLevelkey = function fragmentDecryptdataFromLevelkey(levelkey, segmentNumber) {
								var decryptdata = levelkey;
								if (levelkey && levelkey.method && levelkey.uri && !levelkey.iv) {
									decryptdata = new level_key();
									decryptdata.method = levelkey.method;
									decryptdata.baseuri = levelkey.baseuri;
									decryptdata.reluri = levelkey.reluri;
									decryptdata.iv = this.createInitializationVector(segmentNumber)
								}
								return decryptdata
							};
							fragment__createClass(Fragment, [{
								key: 'url',
								get: function get() {
									if (!this._url && this.relurl) this._url = url_toolkit_default.a.buildAbsoluteURL(this.baseurl, this.relurl, {
										alwaysNormalize: true
									});
									return this._url
								},
								set: function set(value) {
									this._url = value
								}
							}, {
								key: 'programDateTime',
								get: function get() {
									if (!this._programDateTime && this.rawProgramDateTime) this._programDateTime = new Date(Date.parse(this.rawProgramDateTime));
									return this._programDateTime
								}
							}, {
								key: 'byteRange',
								get: function get() {
									if (!this._byteRange && !this.rawByteRange) return [];
									if (this._byteRange) return this._byteRange;
									var byteRange = [];
									if (this.rawByteRange) {
										var params = this.rawByteRange.split('@', 2);
										if (params.length === 1) {
											var lastByteRangeEndOffset = this.lastByteRangeEndOffset;
											byteRange[0] = lastByteRangeEndOffset || 0
										} else {
											byteRange[0] = parseInt(params[1])
										}
										byteRange[1] = parseInt(params[0]) + byteRange[0];
										this._byteRange = byteRange
									}
									return byteRange
								}
							}, {
								key: 'byteRangeStartOffset',
								get: function get() {
									return this.byteRange[0]
								}
							}, {
								key: 'byteRangeEndOffset',
								get: function get() {
									return this.byteRange[1]
								}
							}, {
								key: 'decryptdata',
								get: function get() {
									if (!this._decryptdata) this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn);
									return this._decryptdata
								}
							}], [{
								key: 'ElementaryStreamTypes',
								get: function get() {
									return {
										AUDIO: 'audio',
										VIDEO: 'video'
									}
								}
							}]);
							return Fragment
						}();
						var loader_fragment = (fragment_Fragment);

						function attr_list__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var DECIMAL_RESOLUTION_REGEX = /^(\d+)x(\d+)$/;
						var ATTR_LIST_REGEX = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
						var AttrList = function () {
							function AttrList(attrs) {
								attr_list__classCallCheck(this, AttrList);
								if (typeof attrs === 'string') attrs = AttrList.parseAttrList(attrs);
								for (var attr in attrs) {
									if (attrs.hasOwnProperty(attr)) this[attr] = attrs[attr]
								}
							}
							AttrList.prototype.decimalInteger = function decimalInteger(attrName) {
								var intValue = parseInt(this[attrName], 10);
								if (intValue > Number.MAX_SAFE_INTEGER) return Infinity;
								return intValue
							};
							AttrList.prototype.hexadecimalInteger = function hexadecimalInteger(attrName) {
								if (this[attrName]) {
									var stringValue = (this[attrName] || '0x').slice(2);
									stringValue = (stringValue.length & 1 ? '0' : '') + stringValue;
									var value = new Uint8Array(stringValue.length / 2);
									for (var i = 0; i < stringValue.length / 2; i++) {
										value[i] = parseInt(stringValue.slice(i * 2, i * 2 + 2), 16)
									}
									return value
								} else {
									return null
								}
							};
							AttrList.prototype.hexadecimalIntegerAsNumber = function hexadecimalIntegerAsNumber(attrName) {
								var intValue = parseInt(this[attrName], 16);
								if (intValue > Number.MAX_SAFE_INTEGER) return Infinity;
								return intValue
							};
							AttrList.prototype.decimalFloatingPoint = function decimalFloatingPoint(attrName) {
								return parseFloat(this[attrName])
							};
							AttrList.prototype.enumeratedString = function enumeratedString(attrName) {
								return this[attrName]
							};
							AttrList.prototype.decimalResolution = function decimalResolution(attrName) {
								var res = DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
								if (res === null) return undefined;
								return {
									width: parseInt(res[1], 10),
									height: parseInt(res[2], 10)
								}
							};
							AttrList.parseAttrList = function parseAttrList(input) {
								var match = void 0,
									attrs = {};
								ATTR_LIST_REGEX.lastIndex = 0;
								while ((match = ATTR_LIST_REGEX.exec(input)) !== null) {
									var value = match[2],
										quote = '"';
									if (value.indexOf(quote) === 0 && value.lastIndexOf(quote) === value.length - 1) value = value.slice(1, -1);
									attrs[match[1]] = value
								}
								return attrs
							};
							return AttrList
						}();
						var attr_list = (AttrList);
						var sampleEntryCodesISO = {
							audio: {
								'a3ds': true,
								'ac-3': true,
								'ac-4': true,
								'alac': true,
								'alaw': true,
								'dra1': true,
								'dts+': true,
								'dts-': true,
								'dtsc': true,
								'dtse': true,
								'dtsh': true,
								'ec-3': true,
								'enca': true,
								'g719': true,
								'g726': true,
								'm4ae': true,
								'mha1': true,
								'mha2': true,
								'mhm1': true,
								'mhm2': true,
								'mlpa': true,
								'mp4a': true,
								'raw ': true,
								'Opus': true,
								'samr': true,
								'sawb': true,
								'sawp': true,
								'sevc': true,
								'sqcp': true,
								'ssmv': true,
								'twos': true,
								'ulaw': true
							},
							video: {
								'avc1': true,
								'avc2': true,
								'avc3': true,
								'avc4': true,
								'avcp': true,
								'drac': true,
								'dvav': true,
								'dvhe': true,
								'encv': true,
								'hev1': true,
								'hvc1': true,
								'mjp2': true,
								'mp4v': true,
								'mvc1': true,
								'mvc2': true,
								'mvc3': true,
								'mvc4': true,
								'resv': true,
								'rv60': true,
								's263': true,
								'svc1': true,
								'svc2': true,
								'vc-1': true,
								'vp08': true,
								'vp09': true
							}
						};

						function isCodecType(codec, type) {
							var typeCodes = sampleEntryCodesISO[type];
							return !!typeCodes && typeCodes[codec.slice(0, 4)] === true
						}

						function isCodecSupportedInMp4(codec, type) {
							return MediaSource.isTypeSupported((type || 'video') + '/mp4;codecs="' + codec + '"')
						}

						function m3u8_parser__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
						var MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g;
						var LEVEL_PLAYLIST_REGEX_FAST = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
						/|(?!#)(\S+)/.source,
						/|#EXT-X-BYTERANGE:*(.+)/.source,
						/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
						/|#.*/.source
						].join(''), 'g');
						var LEVEL_PLAYLIST_REGEX_SLOW = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;
						var m3u8_parser_M3U8Parser = function () {
							function M3U8Parser() {
								m3u8_parser__classCallCheck(this, M3U8Parser)
							}
							M3U8Parser.findGroup = function findGroup(groups, mediaGroupId) {
								if (!groups) return null;
								var matchingGroup = null;
								for (var i = 0; i < groups.length; i++) {
									var group = groups[i];
									if (group.id === mediaGroupId) matchingGroup = group
								}
								return matchingGroup
							};
							M3U8Parser.convertAVC1ToAVCOTI = function convertAVC1ToAVCOTI(codec) {
								var result = void 0,
									avcdata = codec.split('.');
								if (avcdata.length > 2) {
									result = avcdata.shift() + '.';
									result += parseInt(avcdata.shift()).toString(16);
									result += ('000' + parseInt(avcdata.shift()).toString(16)).substr(-4)
								} else {
									result = codec
								}
								return result
							};
							M3U8Parser.resolve = function resolve(url, baseUrl) {
								return url_toolkit_default.a.buildAbsoluteURL(baseUrl, url, {
									alwaysNormalize: true
								})
							};
							M3U8Parser.parseMasterPlaylist = function parseMasterPlaylist(string, baseurl) {
								var levels = [],
									result = void 0;
								MASTER_PLAYLIST_REGEX.lastIndex = 0;

								function setCodecs(codecs, level) {
									['video', 'audio'].forEach(function (type) {
										var filtered = codecs.filter(function (codec) {
											return isCodecType(codec, type)
										});
										if (filtered.length) {
											var preferred = filtered.filter(function (codec) {
												return codec.lastIndexOf('avc1', 0) === 0 || codec.lastIndexOf('mp4a', 0) === 0
											});
											level[type + 'Codec'] = preferred.length > 0 ? preferred[0] : filtered[0];
											codecs = codecs.filter(function (codec) {
												return filtered.indexOf(codec) === -1
											})
										}
									});
									level.unknownCodecs = codecs
								}
								while ((result = MASTER_PLAYLIST_REGEX.exec(string)) != null) {
									var level = {};
									var attrs = level.attrs = new attr_list(result[1]);
									level.url = M3U8Parser.resolve(result[2], baseurl);
									var resolution = attrs.decimalResolution('RESOLUTION');
									if (resolution) {
										level.width = resolution.width;
										level.height = resolution.height
									}
									level.bitrate = attrs.decimalInteger('AVERAGE-BANDWIDTH') || attrs.decimalInteger('BANDWIDTH');
									level.name = attrs.NAME;
									setCodecs([].concat((attrs.CODECS || '').split(/[ ,]+/)), level);
									if (level.videoCodec && level.videoCodec.indexOf('avc1') !== -1) level.videoCodec = M3U8Parser.convertAVC1ToAVCOTI(level.videoCodec);
									levels.push(level)
								}
								return levels
							};
							M3U8Parser.parseMasterPlaylistMedia = function parseMasterPlaylistMedia(string, baseurl, type) {
								var audioGroups = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
								var result = void 0;
								var medias = [];
								var id = 0;
								MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0;
								while ((result = MASTER_PLAYLIST_MEDIA_REGEX.exec(string)) !== null) {
									var media = {};
									var attrs = new attr_list(result[1]);
									if (attrs.TYPE === type) {
										media.groupId = attrs['GROUP-ID'];
										media.name = attrs.NAME;
										media.type = type;
										media.default = attrs.DEFAULT === 'YES';
										media.autoselect = attrs.AUTOSELECT === 'YES';
										media.forced = attrs.FORCED === 'YES';
										if (attrs.URI) media.url = M3U8Parser.resolve(attrs.URI, baseurl);
										media.lang = attrs.LANGUAGE;
										if (!media.name) media.name = media.lang;
										if (audioGroups.length) {
											var groupCodec = M3U8Parser.findGroup(audioGroups, media.groupId);
											media.audioCodec = groupCodec ? groupCodec.codec : audioGroups[0].codec
										}
										media.id = id++;
										medias.push(media)
									}
								}
								return medias
							};
							M3U8Parser.parseLevelPlaylist = function parseLevelPlaylist(string, baseurl, id, type) {
								var currentSN = 0,
									totalduration = 0,
									level = {
										type: null,
										version: null,
										url: baseurl,
										fragments: [],
										live: true,
										startSN: 0
									},
									levelkey = new level_key(),
									cc = 0,
									prevFrag = null,
									frag = new loader_fragment(),
									result = void 0,
									i = void 0;
								LEVEL_PLAYLIST_REGEX_FAST.lastIndex = 0;
								while ((result = LEVEL_PLAYLIST_REGEX_FAST.exec(string)) !== null) {
									var duration = result[1];
									if (duration) {
										frag.duration = parseFloat(duration);
										var title = (' ' + result[2]).slice(1);
										frag.title = title || null;
										frag.tagList.push(title ? ['INF', duration, title] : ['INF', duration])
									} else if (result[3]) {
										if (!isNaN(frag.duration)) {
											var sn = currentSN++;
											frag.type = type;
											frag.start = totalduration;
											frag.levelkey = levelkey;
											frag.sn = sn;
											frag.level = id;
											frag.cc = cc;
											frag.baseurl = baseurl;
											frag.relurl = (' ' + result[3]).slice(1);
											if (level.programDateTime) {
												if (prevFrag) {
													if (frag.rawProgramDateTime) {
														frag.pdt = Date.parse(frag.rawProgramDateTime)
													} else {
														frag.pdt = prevFrag.pdt + prevFrag.duration * 1000
													}
												} else {
													frag.pdt = Date.parse(level.programDateTime)
												}
												frag.endPdt = frag.pdt + frag.duration * 1000
											}
											level.fragments.push(frag);
											prevFrag = frag;
											totalduration += frag.duration;
											frag = new loader_fragment()
										}
									} else if (result[4]) {
										frag.rawByteRange = (' ' + result[4]).slice(1);
										if (prevFrag) {
											var lastByteRangeEndOffset = prevFrag.byteRangeEndOffset;
											if (lastByteRangeEndOffset) frag.lastByteRangeEndOffset = lastByteRangeEndOffset
										}
									} else if (result[5]) {
										frag.rawProgramDateTime = (' ' + result[5]).slice(1);
										frag.tagList.push(['PROGRAM-DATE-TIME', frag.rawProgramDateTime]);
										if (level.programDateTime === undefined) level.programDateTime = new Date(new Date(Date.parse(result[5])) - 1000 * totalduration)
									} else {
										result = result[0].match(LEVEL_PLAYLIST_REGEX_SLOW);
										for (i = 1; i < result.length; i++) {
											if (result[i] !== undefined) break
										}
										var value1 = (' ' + result[i + 1]).slice(1);
										var value2 = (' ' + result[i + 2]).slice(1);
										switch (result[i]) {
											case '#':
												frag.tagList.push(value2 ? [value1, value2] : [value1]);
												break;
											case 'PLAYLIST-TYPE':
												level.type = value1.toUpperCase();
												break;
											case 'MEDIA-SEQUENCE':
												currentSN = level.startSN = parseInt(value1);
												break;
											case 'TARGETDURATION':
												level.targetduration = parseFloat(value1);
												break;
											case 'VERSION':
												level.version = parseInt(value1);
												break;
											case 'EXTM3U':
												break;
											case 'ENDLIST':
												level.live = false;
												break;
											case 'DIS':
												cc++;
												frag.tagList.push(['DIS']);
												break;
											case 'DISCONTINUITY-SEQ':
												cc = parseInt(value1);
												break;
											case 'KEY':
												var decryptparams = value1;
												var keyAttrs = new attr_list(decryptparams);
												var decryptmethod = keyAttrs.enumeratedString('METHOD'),
													decrypturi = keyAttrs.URI,
													decryptiv = keyAttrs.hexadecimalInteger('IV');
												if (decryptmethod) {
													levelkey = new level_key();
													if (decrypturi && ['AES-128', 'SAMPLE-AES', 'SAMPLE-AES-CENC'].indexOf(decryptmethod) >= 0) {
														levelkey.method = decryptmethod;
														levelkey.baseuri = baseurl;
														levelkey.reluri = decrypturi;
														levelkey.key = null;
														levelkey.iv = decryptiv
													}
												}
												break;
											case 'START':
												var startParams = value1;
												var startAttrs = new attr_list(startParams);
												var startTimeOffset = startAttrs.decimalFloatingPoint('TIME-OFFSET');
												if (!isNaN(startTimeOffset)) level.startTimeOffset = startTimeOffset;
												break;
											case 'MAP':
												var mapAttrs = new attr_list(value1);
												frag.relurl = mapAttrs.URI;
												frag.rawByteRange = mapAttrs.BYTERANGE;
												frag.baseurl = baseurl;
												frag.level = id;
												frag.type = type;
												frag.sn = 'initSegment';
												level.initSegment = frag;
												frag = new loader_fragment();
												break;
											default:
												logger["b"].warn('line parsed but not handled: ' + result);
												break
										}
									}
								}
								frag = prevFrag;
								if (frag && !frag.relurl) {
									level.fragments.pop();
									totalduration -= frag.duration
								}
								level.totalduration = totalduration;
								level.averagetargetduration = totalduration / level.fragments.length;
								level.endSN = currentSN - 1;
								level.startCC = level.fragments[0] ? level.fragments[0].cc : 0;
								level.endCC = cc;
								if (!level.initSegment && level.fragments.length) {
									if (level.fragments.every(function (frag) {
										return frag.relurl.endsWith('.mp4')
									})) {
										logger["b"].warn('MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX');
										frag = new loader_fragment();
										frag.relurl = level.fragments[0].relurl;
										frag.baseurl = baseurl;
										frag.level = id;
										frag.type = type;
										frag.sn = 'initSegment';
										level.initSegment = frag;
										level.needSidxRanges = true
									}
								}
								return level
							};
							return M3U8Parser
						}();
						var m3u8_parser = (m3u8_parser_M3U8Parser);
						var playlist_loader__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function playlist_loader__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function _possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function _inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var ContextType = {
							MANIFEST: 'manifest',
							LEVEL: 'level',
							AUDIO_TRACK: 'audioTrack',
							SUBTITLE_TRACK: 'subtitleTrack'
						};
						var LevelType = {
							MAIN: 'main',
							AUDIO: 'audio',
							SUBTITLE: 'subtitle'
						};
						var playlist_loader_PlaylistLoader = function (_EventHandler) {
							_inherits(PlaylistLoader, _EventHandler);

							function PlaylistLoader(hls) {
								playlist_loader__classCallCheck(this, PlaylistLoader);
								var _this = _possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MANIFEST_LOADING, events["a"].LEVEL_LOADING, events["a"].AUDIO_TRACK_LOADING, events["a"].SUBTITLE_TRACK_LOADING));
								_this.loaders = {};
								return _this
							}
							PlaylistLoader.canHaveQualityLevels = function canHaveQualityLevels(type) {
								return type !== ContextType.AUDIO_TRACK && type !== ContextType.SUBTITLE_TRACK
							};
							PlaylistLoader.mapContextToLevelType = function mapContextToLevelType(context) {
								var type = context.type;
								switch (type) {
									case ContextType.AUDIO_TRACK:
										return LevelType.AUDIO;
									case ContextType.SUBTITLE_TRACK:
										return LevelType.SUBTITLE;
									default:
										return LevelType.MAIN
								}
							};
							PlaylistLoader.getResponseUrl = function getResponseUrl(response, context) {
								var url = response.url;
								if (url === undefined || url.indexOf('data:') === 0) {
									url = context.url
								}
								return url
							};
							PlaylistLoader.prototype.createInternalLoader = function createInternalLoader(context) {
								var config = this.hls.config;
								var PLoader = config.pLoader;
								var Loader = config.loader;
								var InternalLoader = PLoader || Loader;
								var loader = new InternalLoader(config);
								context.loader = loader;
								this.loaders[context.type] = loader;
								return loader
							};
							PlaylistLoader.prototype.getInternalLoader = function getInternalLoader(context) {
								return this.loaders[context.type]
							};
							PlaylistLoader.prototype.resetInternalLoader = function resetInternalLoader(contextType) {
								if (this.loaders[contextType]) delete this.loaders[contextType]
							};
							PlaylistLoader.prototype.destroyInternalLoaders = function destroyInternalLoaders() {
								for (var contextType in this.loaders) {
									var loader = this.loaders[contextType];
									if (loader) loader.destroy();
									this.resetInternalLoader(contextType)
								}
							};
							PlaylistLoader.prototype.destroy = function destroy() {
								this.destroyInternalLoaders();
								_EventHandler.prototype.destroy.call(this)
							};
							PlaylistLoader.prototype.onManifestLoading = function onManifestLoading(data) {
								this.load(data.url, {
									type: ContextType.MANIFEST
								})
							};
							PlaylistLoader.prototype.onLevelLoading = function onLevelLoading(data) {
								this.load(data.url, {
									type: ContextType.LEVEL,
									level: data.level,
									id: data.id
								})
							};
							PlaylistLoader.prototype.onAudioTrackLoading = function onAudioTrackLoading(data) {
								this.load(data.url, {
									type: ContextType.AUDIO_TRACK,
									id: data.id
								})
							};
							PlaylistLoader.prototype.onSubtitleTrackLoading = function onSubtitleTrackLoading(data) {
								this.load(data.url, {
									type: ContextType.SUBTITLE_TRACK,
									id: data.id
								})
							};
							PlaylistLoader.prototype.load = function load(url, context) {
								var config = this.hls.config;
								var loader = this.getInternalLoader(context);
								if (loader) {
									var loaderContext = loader.context;
									if (loaderContext && loaderContext.url === url) {
										logger["b"].trace('playlist request ongoing');
										return false
									} else {
										logger["b"].warn('aborting previous loader for type: ' + context.type);
										loader.abort()
									}
								}
								var maxRetry = void 0,
									timeout = void 0,
									retryDelay = void 0,
									maxRetryDelay = void 0;
								switch (context.type) {
									case ContextType.MANIFEST:
										maxRetry = config.manifestLoadingMaxRetry;
										timeout = config.manifestLoadingTimeOut;
										retryDelay = config.manifestLoadingRetryDelay;
										maxRetryDelay = config.manifestLoadingMaxRetryTimeout;
										break;
									case ContextType.LEVEL:
										maxRetry = 0;
										timeout = config.levelLoadingTimeOut;
										break;
									default:
										maxRetry = config.levelLoadingMaxRetry;
										timeout = config.levelLoadingTimeOut;
										retryDelay = config.levelLoadingRetryDelay;
										maxRetryDelay = config.levelLoadingMaxRetryTimeout;
										logger["b"].log('Playlist loader for ' + context.type + ' ' + (context.level || context.id));
										break
								}
								loader = this.createInternalLoader(context);
								context.url = url;
								context.responseType = context.responseType || '';
								var loaderConfig = void 0,
									loaderCallbacks = void 0;
								loaderConfig = {
									timeout: timeout,
									maxRetry: maxRetry,
									retryDelay: retryDelay,
									maxRetryDelay: maxRetryDelay
								};
								loaderCallbacks = {
									onSuccess: this.loadsuccess.bind(this),
									onError: this.loaderror.bind(this),
									onTimeout: this.loadtimeout.bind(this)
								};
								loader.load(context, loaderConfig, loaderCallbacks);
								return true
							};
							PlaylistLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
								var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
								if (context.isSidxRequest) {
									this._handleSidxRequest(response, context);
									this._handlePlaylistLoaded(response, stats, context, networkDetails);
									return
								}
								this.resetInternalLoader(context.type);
								var string = response.data;
								stats.tload = performance.now();
								if (string.indexOf('#EXTM3U') !== 0) {
									this._handleManifestParsingError(response, context, 'no EXTM3U delimiter', networkDetails);
									return
								}
								if (string.indexOf('#EXTINF:') > 0 || string.indexOf('#EXT-X-TARGETDURATION:') > 0) this._handleTrackOrLevelPlaylist(response, stats, context, networkDetails);
								else this._handleMasterPlaylist(response, stats, context, networkDetails)
							};
							PlaylistLoader.prototype.loaderror = function loaderror(response, context) {
								var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
								this._handleNetworkError(context, networkDetails)
							};
							PlaylistLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
								var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
								this._handleNetworkError(context, networkDetails, true)
							};
							PlaylistLoader.prototype._handleMasterPlaylist = function _handleMasterPlaylist(response, stats, context, networkDetails) {
								var hls = this.hls;
								var string = response.data;
								var url = PlaylistLoader.getResponseUrl(response, context);
								var levels = m3u8_parser.parseMasterPlaylist(string, url);
								if (!levels.length) {
									this._handleManifestParsingError(response, context, 'no level found in manifest', networkDetails);
									return
								}
								var audioGroups = levels.map(function (level) {
									return {
										id: level.attrs.AUDIO,
										codec: level.audioCodec
									}
								});
								var audioTracks = m3u8_parser.parseMasterPlaylistMedia(string, url, 'AUDIO', audioGroups);
								var subtitles = m3u8_parser.parseMasterPlaylistMedia(string, url, 'SUBTITLES');
								if (audioTracks.length) {
									var embeddedAudioFound = false;
									audioTracks.forEach(function (audioTrack) {
										if (!audioTrack.url) embeddedAudioFound = true
									});
									if (embeddedAudioFound === false && levels[0].audioCodec && !levels[0].attrs.AUDIO) {
										logger["b"].log('audio codec signaled in quality level, but no embedded audio track signaled, create one');
										audioTracks.unshift({
											type: 'main',
											name: 'main'
										})
									}
								}
								hls.trigger(events["a"].MANIFEST_LOADED, {
									levels: levels,
									audioTracks: audioTracks,
									subtitles: subtitles,
									url: url,
									stats: stats,
									networkDetails: networkDetails
								})
							};
							PlaylistLoader.prototype._handleTrackOrLevelPlaylist = function _handleTrackOrLevelPlaylist(response, stats, context, networkDetails) {
								var hls = this.hls;
								var id = context.id,
									level = context.level,
									type = context.type;
								var url = PlaylistLoader.getResponseUrl(response, context);
								var levelId = !isNaN(level) ? level : !isNaN(id) ? id : 0;
								var levelType = PlaylistLoader.mapContextToLevelType(context);
								var levelDetails = m3u8_parser.parseLevelPlaylist(response.data, url, levelId, levelType);
								levelDetails.tload = stats.tload;
								if (type === ContextType.MANIFEST) {
									var singleLevel = {
										url: url,
										details: levelDetails
									};
									hls.trigger(events["a"].MANIFEST_LOADED, {
										levels: [singleLevel],
										audioTracks: [],
										url: url,
										stats: stats,
										networkDetails: networkDetails
									})
								}
								stats.tparsed = performance.now();
								if (levelDetails.needSidxRanges) {
									var sidxUrl = levelDetails.initSegment.url;
									this.load(sidxUrl, {
										isSidxRequest: true,
										type: type,
										level: level,
										levelDetails: levelDetails,
										id: id,
										rangeStart: 0,
										rangeEnd: 2048,
										responseType: 'arraybuffer'
									});
									return
								}
								context.levelDetails = levelDetails;
								this._handlePlaylistLoaded(response, stats, context, networkDetails)
							};
							PlaylistLoader.prototype._handleSidxRequest = function _handleSidxRequest(response, context) {
								var sidxInfo = mp4demuxer["a"].parseSegmentIndex(new Uint8Array(response.data));
								sidxInfo.references.forEach(function (segmentRef, index) {
									var segRefInfo = segmentRef.info;
									var frag = context.levelDetails.fragments[index];
									if (frag.byteRange.length === 0) frag.rawByteRange = String(1 + segRefInfo.end - segRefInfo.start) + '@' + String(segRefInfo.start)
								});
								context.levelDetails.initSegment.rawByteRange = String(sidxInfo.moovEndOffset) + '@0'
							};
							PlaylistLoader.prototype._handleManifestParsingError = function _handleManifestParsingError(response, context, reason, networkDetails) {
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: errors["a"].MANIFEST_PARSING_ERROR,
									fatal: true,
									url: response.url,
									reason: reason,
									networkDetails: networkDetails
								})
							};
							PlaylistLoader.prototype._handleNetworkError = function _handleNetworkError(context, networkDetails) {
								var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
								var details = void 0;
								var fatal = void 0;
								var loader = this.getInternalLoader(context);
								switch (context.type) {
									case ContextType.MANIFEST:
										details = timeout ? errors["a"].MANIFEST_LOAD_TIMEOUT : errors["a"].MANIFEST_LOAD_ERROR;
										fatal = true;
										break;
									case ContextType.LEVEL:
										details = timeout ? errors["a"].LEVEL_LOAD_TIMEOUT : errors["a"].LEVEL_LOAD_ERROR;
										fatal = false;
										break;
									case ContextType.AUDIO_TRACK:
										details = timeout ? errors["a"].AUDIO_TRACK_LOAD_TIMEOUT : errors["a"].AUDIO_TRACK_LOAD_ERROR;
										fatal = false;
										break;
									default:
										fatal = false
								}
								if (loader) {
									loader.abort();
									this.resetInternalLoader(context.type)
								}
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: details,
									fatal: fatal,
									url: loader.url,
									loader: loader,
									context: context,
									networkDetails: networkDetails
								})
							};
							PlaylistLoader.prototype._handlePlaylistLoaded = function _handlePlaylistLoaded(response, stats, context, networkDetails) {
								var type = context.type,
									level = context.level,
									id = context.id,
									levelDetails = context.levelDetails;
								if (!levelDetails.targetduration) {
									this._handleManifestParsingError(response, context, 'invalid target duration', networkDetails);
									return
								}
								var canHaveLevels = PlaylistLoader.canHaveQualityLevels(context.type);
								if (canHaveLevels) {
									this.hls.trigger(events["a"].LEVEL_LOADED, {
										details: levelDetails,
										level: level || 0,
										id: id || 0,
										stats: stats,
										networkDetails: networkDetails
									})
								} else {
									switch (type) {
										case ContextType.AUDIO_TRACK:
											this.hls.trigger(events["a"].AUDIO_TRACK_LOADED, {
												details: levelDetails,
												id: id,
												stats: stats,
												networkDetails: networkDetails
											});
											break;
										case ContextType.SUBTITLE_TRACK:
											this.hls.trigger(events["a"].SUBTITLE_TRACK_LOADED, {
												details: levelDetails,
												id: id,
												stats: stats,
												networkDetails: networkDetails
											});
											break
									}
								}
							};
							playlist_loader__createClass(PlaylistLoader, null, [{
								key: 'ContextType',
								get: function get() {
									return ContextType
								}
							}, {
								key: 'LevelType',
								get: function get() {
									return LevelType
								}
							}]);
							return PlaylistLoader
						}(event_handler);
						var playlist_loader = (playlist_loader_PlaylistLoader);

						function fragment_loader__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function fragment_loader__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function fragment_loader__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var fragment_loader_FragmentLoader = function (_EventHandler) {
							fragment_loader__inherits(FragmentLoader, _EventHandler);

							function FragmentLoader(hls) {
								fragment_loader__classCallCheck(this, FragmentLoader);
								var _this = fragment_loader__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].FRAG_LOADING));
								_this.loaders = {};
								return _this
							}
							FragmentLoader.prototype.destroy = function destroy() {
								var loaders = this.loaders;
								for (var loaderName in loaders) {
									var loader = loaders[loaderName];
									if (loader) loader.destroy()
								}
								this.loaders = {};
								_EventHandler.prototype.destroy.call(this)
							};
							FragmentLoader.prototype.onFragLoading = function onFragLoading(data) {
								var frag = data.frag,
									type = frag.type,
									loaders = this.loaders,
									config = this.hls.config,
									FragmentILoader = config.fLoader,
									DefaultILoader = config.loader;
								frag.loaded = 0;
								var loader = loaders[type];
								if (loader) {
									logger["b"].warn('abort previous fragment loader for type: ' + type);
									loader.abort()
								}
								loader = loaders[type] = frag.loader = config.fLoader ? new FragmentILoader(config) : new DefaultILoader(config);
								var loaderContext = void 0,
									loaderConfig = void 0,
									loaderCallbacks = void 0;
								loaderContext = {
									url: frag.url,
									frag: frag,
									responseType: 'arraybuffer',
									progressData: false
								};
								var start = frag.byteRangeStartOffset,
									end = frag.byteRangeEndOffset;
								if (!isNaN(start) && !isNaN(end)) {
									loaderContext.rangeStart = start;
									loaderContext.rangeEnd = end
								}
								loaderConfig = {
									timeout: config.fragLoadingTimeOut,
									maxRetry: 0,
									retryDelay: 0,
									maxRetryDelay: config.fragLoadingMaxRetryTimeout
								};
								loaderCallbacks = {
									onSuccess: this.loadsuccess.bind(this),
									onError: this.loaderror.bind(this),
									onTimeout: this.loadtimeout.bind(this),
									onProgress: this.loadprogress.bind(this)
								};
								loader.load(loaderContext, loaderConfig, loaderCallbacks)
							};
							FragmentLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
								var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
								var payload = response.data,
									frag = context.frag;
								frag.loader = undefined;
								this.loaders[frag.type] = undefined;
								this.hls.trigger(events["a"].FRAG_LOADED, {
									payload: payload,
									frag: frag,
									stats: stats,
									networkDetails: networkDetails
								})
							};
							FragmentLoader.prototype.loaderror = function loaderror(response, context) {
								var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
								var loader = context.loader;
								if (loader) loader.abort();
								this.loaders[context.type] = undefined;
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: errors["a"].FRAG_LOAD_ERROR,
									fatal: false,
									frag: context.frag,
									response: response,
									networkDetails: networkDetails
								})
							};
							FragmentLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
								var networkDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
								var loader = context.loader;
								if (loader) loader.abort();
								this.loaders[context.type] = undefined;
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: errors["a"].FRAG_LOAD_TIMEOUT,
									fatal: false,
									frag: context.frag,
									networkDetails: networkDetails
								})
							};
							FragmentLoader.prototype.loadprogress = function loadprogress(stats, context, data) {
								var networkDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
								var frag = context.frag;
								frag.loaded = stats.loaded;
								this.hls.trigger(events["a"].FRAG_LOAD_PROGRESS, {
									frag: frag,
									stats: stats,
									networkDetails: networkDetails
								})
							};
							return FragmentLoader
						}(event_handler);
						var fragment_loader = (fragment_loader_FragmentLoader);

						function key_loader__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function key_loader__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function key_loader__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var key_loader_KeyLoader = function (_EventHandler) {
							key_loader__inherits(KeyLoader, _EventHandler);

							function KeyLoader(hls) {
								key_loader__classCallCheck(this, KeyLoader);
								var _this = key_loader__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].KEY_LOADING));
								_this.loaders = {};
								_this.decryptkey = null;
								_this.decrypturl = null;
								return _this
							}
							KeyLoader.prototype.destroy = function destroy() {
								for (var loaderName in this.loaders) {
									var loader = this.loaders[loaderName];
									if (loader) loader.destroy()
								}
								this.loaders = {};
								event_handler.prototype.destroy.call(this)
							};
							KeyLoader.prototype.onKeyLoading = function onKeyLoading(data) {
								var frag = data.frag,
									type = frag.type,
									loader = this.loaders[type],
									decryptdata = frag.decryptdata,
									uri = decryptdata.uri;
								if (uri !== this.decrypturl || this.decryptkey === null) {
									var config = this.hls.config;
									if (loader) {
										logger["b"].warn('abort previous key loader for type:' + type);
										loader.abort()
									}
									frag.loader = this.loaders[type] = new config.loader(config);
									this.decrypturl = uri;
									this.decryptkey = null;
									var loaderContext = void 0,
										loaderConfig = void 0,
										loaderCallbacks = void 0;
									loaderContext = {
										url: uri,
										frag: frag,
										responseType: 'arraybuffer'
									};
									loaderConfig = {
										timeout: config.fragLoadingTimeOut,
										maxRetry: config.fragLoadingMaxRetry,
										retryDelay: config.fragLoadingRetryDelay,
										maxRetryDelay: config.fragLoadingMaxRetryTimeout
									};
									loaderCallbacks = {
										onSuccess: this.loadsuccess.bind(this),
										onError: this.loaderror.bind(this),
										onTimeout: this.loadtimeout.bind(this)
									};
									frag.loader.load(loaderContext, loaderConfig, loaderCallbacks)
								} else if (this.decryptkey) {
									decryptdata.key = this.decryptkey;
									this.hls.trigger(events["a"].KEY_LOADED, {
										frag: frag
									})
								}
							};
							KeyLoader.prototype.loadsuccess = function loadsuccess(response, stats, context) {
								var frag = context.frag;
								this.decryptkey = frag.decryptdata.key = new Uint8Array(response.data);
								frag.loader = undefined;
								this.loaders[frag.type] = undefined;
								this.hls.trigger(events["a"].KEY_LOADED, {
									frag: frag
								})
							};
							KeyLoader.prototype.loaderror = function loaderror(response, context) {
								var frag = context.frag,
									loader = frag.loader;
								if (loader) loader.abort();
								this.loaders[context.type] = undefined;
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: errors["a"].KEY_LOAD_ERROR,
									fatal: false,
									frag: frag,
									response: response
								})
							};
							KeyLoader.prototype.loadtimeout = function loadtimeout(stats, context) {
								var frag = context.frag,
									loader = frag.loader;
								if (loader) loader.abort();
								this.loaders[context.type] = undefined;
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].NETWORK_ERROR,
									details: errors["a"].KEY_LOAD_TIMEOUT,
									fatal: false,
									frag: frag
								})
							};
							return KeyLoader
						}(event_handler);
						var key_loader = (key_loader_KeyLoader);
						var BinarySearch = {
							search: function search(list, comparisonFunction) {
								var minIndex = 0;
								var maxIndex = list.length - 1;
								var currentIndex = null;
								var currentElement = null;
								while (minIndex <= maxIndex) {
									currentIndex = (minIndex + maxIndex) / 2 | 0;
									currentElement = list[currentIndex];
									var comparisonResult = comparisonFunction(currentElement);
									if (comparisonResult > 0) minIndex = currentIndex + 1;
									else if (comparisonResult < 0) maxIndex = currentIndex - 1;
									else return currentElement
								}
								return null
							}
						};
						var binary_search = (BinarySearch);
						var BufferHelper = {
							isBuffered: function isBuffered(media, position) {
								try {
									if (media) {
										var buffered = media.buffered;
										for (var i = 0; i < buffered.length; i++) {
											if (position >= buffered.start(i) && position <= buffered.end(i)) return true
										}
									}
								} catch (error) { }
								return false
							},
							bufferInfo: function bufferInfo(media, pos, maxHoleDuration) {
								try {
									if (media) {
										var vbuffered = media.buffered,
											buffered = [],
											i = void 0;
										for (i = 0; i < vbuffered.length; i++) {
											buffered.push({
												start: vbuffered.start(i),
												end: vbuffered.end(i)
											})
										}
										return this.bufferedInfo(buffered, pos, maxHoleDuration)
									}
								} catch (error) { }
								return {
									len: 0,
									start: pos,
									end: pos,
									nextStart: undefined
								}
							},
							bufferedInfo: function bufferedInfo(buffered, pos, maxHoleDuration) {
								var buffered2 = [],
									bufferLen = void 0,
									bufferStart = void 0,
									bufferEnd = void 0,
									bufferStartNext = void 0,
									i = void 0;
								buffered.sort(function (a, b) {
									var diff = a.start - b.start;
									if (diff) return diff;
									else return b.end - a.end
								});
								for (i = 0; i < buffered.length; i++) {
									var buf2len = buffered2.length;
									if (buf2len) {
										var buf2end = buffered2[buf2len - 1].end;
										if (buffered[i].start - buf2end < maxHoleDuration) {
											if (buffered[i].end > buf2end) buffered2[buf2len - 1].end = buffered[i].end
										} else {
											buffered2.push(buffered[i])
										}
									} else {
										buffered2.push(buffered[i])
									}
								}
								for (i = 0, bufferLen = 0, bufferStart = bufferEnd = pos; i < buffered2.length; i++) {
									var start = buffered2[i].start,
										end = buffered2[i].end;
									if (pos + maxHoleDuration >= start && pos < end) {
										bufferStart = start;
										bufferEnd = end;
										bufferLen = bufferEnd - pos
									} else if (pos + maxHoleDuration < start) {
										bufferStartNext = start;
										break
									}
								}
								return {
									len: bufferLen,
									start: bufferStart,
									end: bufferEnd,
									nextStart: bufferStartNext
								}
							}
						};
						var buffer_helper = (BufferHelper);
						var demuxer_inline = __webpack_require__(8);
						var events_events = __webpack_require__(6);
						var events_default = __webpack_require__.n(events_events);
						var webworkify_webpack = __webpack_require__(10);
						var webworkify_webpack_default = __webpack_require__.n(webworkify_webpack);

						function getMediaSource() {
							if (typeof window !== 'undefined') return window.MediaSource || window.WebKitMediaSource
						}

						function demuxer__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var demuxer_MediaSource = getMediaSource();
						var demuxer_Demuxer = function () {
							function Demuxer(hls, id) {
								demuxer__classCallCheck(this, Demuxer);
								this.hls = hls;
								this.id = id;
								var observer = this.observer = new events_default.a();
								var config = hls.config;
								observer.trigger = function trigger(event) {
									for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
										data[_key - 1] = arguments[_key]
									}
									observer.emit.apply(observer, [event, event].concat(data))
								};
								observer.off = function off(event) {
									for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
										data[_key2 - 1] = arguments[_key2]
									}
									observer.removeListener.apply(observer, [event].concat(data))
								};
								var forwardMessage = function (ev, data) {
									data = data || {};
									data.frag = this.frag;
									data.id = this.id;
									hls.trigger(ev, data)
								}.bind(this);
								observer.on(events["a"].FRAG_DECRYPTED, forwardMessage);
								observer.on(events["a"].FRAG_PARSING_INIT_SEGMENT, forwardMessage);
								observer.on(events["a"].FRAG_PARSING_DATA, forwardMessage);
								observer.on(events["a"].FRAG_PARSED, forwardMessage);
								observer.on(events["a"].ERROR, forwardMessage);
								observer.on(events["a"].FRAG_PARSING_METADATA, forwardMessage);
								observer.on(events["a"].FRAG_PARSING_USERDATA, forwardMessage);
								observer.on(events["a"].INIT_PTS_FOUND, forwardMessage);
								var typeSupported = {
									mp4: demuxer_MediaSource.isTypeSupported('video/mp4'),
									mpeg: demuxer_MediaSource.isTypeSupported('audio/mpeg'),
									mp3: demuxer_MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')
								};
								var vendor = navigator.vendor;
								if (config.enableWorker && typeof Worker !== 'undefined') {
									logger["b"].log('demuxing in webworker');
									var w = void 0;
									try {
										w = this.w = webworkify_webpack_default()((11));
										this.onwmsg = this.onWorkerMessage.bind(this);
										w.addEventListener('message', this.onwmsg);
										w.onerror = function (event) {
											hls.trigger(events["a"].ERROR, {
												type: errors["b"].OTHER_ERROR,
												details: errors["a"].INTERNAL_EXCEPTION,
												fatal: true,
												event: 'demuxerWorker',
												err: {
													message: event.message + ' (' + event.filename + ':' + event.lineno + ')'
												}
											})
										};
										w.postMessage({
											cmd: 'init',
											typeSupported: typeSupported,
											vendor: vendor,
											id: id,
											config: JSON.stringify(config)
										})
									} catch (err) {
										logger["b"].error('error while initializing DemuxerWorker, fallback on DemuxerInline');
										if (w) {
											URL.revokeObjectURL(w.objectURL)
										}
										this.demuxer = new demuxer_inline["a"](observer, typeSupported, config, vendor);
										this.w = undefined
									}
								} else {
									this.demuxer = new demuxer_inline["a"](observer, typeSupported, config, vendor)
								}
							}
							Demuxer.prototype.destroy = function destroy() {
								var w = this.w;
								if (w) {
									w.removeEventListener('message', this.onwmsg);
									w.terminate();
									this.w = null
								} else {
									var demuxer = this.demuxer;
									if (demuxer) {
										demuxer.destroy();
										this.demuxer = null
									}
								}
								var observer = this.observer;
								if (observer) {
									observer.removeAllListeners();
									this.observer = null
								}
							};
							Demuxer.prototype.push = function push(data, initSegment, audioCodec, videoCodec, frag, duration, accurateTimeOffset, defaultInitPTS) {
								var w = this.w;
								var timeOffset = !isNaN(frag.startDTS) ? frag.startDTS : frag.start;
								var decryptdata = frag.decryptdata;
								var lastFrag = this.frag;
								var discontinuity = !(lastFrag && frag.cc === lastFrag.cc);
								var trackSwitch = !(lastFrag && frag.level === lastFrag.level);
								var nextSN = lastFrag && frag.sn === lastFrag.sn + 1;
								var contiguous = !trackSwitch && nextSN;
								if (discontinuity) logger["b"].log(this.id + ':discontinuity detected');
								if (trackSwitch) logger["b"].log(this.id + ':switch detected');
								this.frag = frag;
								if (w) {
									w.postMessage({
										cmd: 'demux',
										data: data,
										decryptdata: decryptdata,
										initSegment: initSegment,
										audioCodec: audioCodec,
										videoCodec: videoCodec,
										timeOffset: timeOffset,
										discontinuity: discontinuity,
										trackSwitch: trackSwitch,
										contiguous: contiguous,
										duration: duration,
										accurateTimeOffset: accurateTimeOffset,
										defaultInitPTS: defaultInitPTS
									}, data instanceof ArrayBuffer ? [data] : [])
								} else {
									var demuxer = this.demuxer;
									if (demuxer) demuxer.push(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS)
								}
							};
							Demuxer.prototype.onWorkerMessage = function onWorkerMessage(ev) {
								var data = ev.data,
									hls = this.hls;
								switch (data.event) {
									case 'init':
										URL.revokeObjectURL(this.w.objectURL);
										break;
									case events["a"].FRAG_PARSING_DATA:
										data.data.data1 = new Uint8Array(data.data1);
										if (data.data2) data.data.data2 = new Uint8Array(data.data2);
									default:
										data.data = data.data || {};
										data.data.frag = this.frag;
										data.data.id = this.id;
										hls.trigger(data.event, data.data);
										break
								}
							};
							return Demuxer
						}();
						var demux_demuxer = (demuxer_Demuxer);

						function fragment_tracker__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function fragment_tracker__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function fragment_tracker__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var FragmentState = {
							NOT_LOADED: 'NOT_LOADED',
							APPENDING: 'APPENDING',
							PARTIAL: 'PARTIAL',
							OK: 'OK'
						};
						var fragment_tracker_FragmentTracker = function (_EventHandler) {
							fragment_tracker__inherits(FragmentTracker, _EventHandler);

							function FragmentTracker(hls) {
								fragment_tracker__classCallCheck(this, FragmentTracker);
								var _this = fragment_tracker__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].BUFFER_APPENDED, events["a"].FRAG_BUFFERED, events["a"].FRAG_LOADED));
								_this.bufferPadding = 0.2;
								_this.fragments = Object.create(null);
								_this.timeRanges = Object.create(null);
								_this.config = hls.config;
								return _this
							}
							FragmentTracker.prototype.destroy = function destroy() {
								this.fragments = null;
								this.timeRanges = null;
								this.config = null;
								event_handler.prototype.destroy.call(this);
								_EventHandler.prototype.destroy.call(this)
							};
							FragmentTracker.prototype.getBufferedFrag = function getBufferedFrag(position, levelType) {
								var fragments = this.fragments;
								var bufferedFrags = Object.keys(fragments).filter(function (key) {
									var fragmentEntity = fragments[key];
									if (fragmentEntity.body.type !== levelType) return false;
									if (!fragmentEntity.buffered) return false;
									var frag = fragmentEntity.body;
									return frag.startPTS <= position && position <= frag.endPTS
								});
								if (bufferedFrags.length === 0) {
									return null
								} else {
									var bufferedFragKey = bufferedFrags.pop();
									return fragments[bufferedFragKey].body
								}
							};
							FragmentTracker.prototype.detectEvictedFragments = function detectEvictedFragments(elementaryStream, timeRange) {
								var _this2 = this;
								var fragmentTimes = void 0,
									time = void 0;
								Object.keys(this.fragments).forEach(function (key) {
									var fragmentEntity = _this2.fragments[key];
									if (fragmentEntity.buffered === true) {
										var esData = fragmentEntity.range[elementaryStream];
										if (esData) {
											fragmentTimes = esData.time;
											for (var i = 0; i < fragmentTimes.length; i++) {
												time = fragmentTimes[i];
												if (_this2.isTimeBuffered(time.startPTS, time.endPTS, timeRange) === false) {
													_this2.removeFragment(fragmentEntity.body);
													break
												}
											}
										}
									}
								})
							};
							FragmentTracker.prototype.detectPartialFragments = function detectPartialFragments(fragment) {
								var _this3 = this;
								var fragKey = this.getFragmentKey(fragment);
								var fragmentEntity = this.fragments[fragKey];
								if (fragmentEntity) {
									fragmentEntity.buffered = true;
									Object.keys(this.timeRanges).forEach(function (elementaryStream) {
										if (fragment.hasElementaryStream(elementaryStream) === true) {
											var timeRange = _this3.timeRanges[elementaryStream];
											fragmentEntity.range[elementaryStream] = _this3.getBufferedTimes(fragment.startPTS, fragment.endPTS, timeRange)
										}
									})
								}
							};
							FragmentTracker.prototype.getBufferedTimes = function getBufferedTimes(startPTS, endPTS, timeRange) {
								var fragmentTimes = [];
								var startTime = void 0,
									endTime = void 0;
								var fragmentPartial = false;
								for (var i = 0; i < timeRange.length; i++) {
									startTime = timeRange.start(i) - this.bufferPadding;
									endTime = timeRange.end(i) + this.bufferPadding;
									if (startPTS >= startTime && endPTS <= endTime) {
										fragmentTimes.push({
											startPTS: Math.max(startPTS, timeRange.start(i)),
											endPTS: Math.min(endPTS, timeRange.end(i))
										});
										break
									} else if (startPTS < endTime && endPTS > startTime) {
										fragmentTimes.push({
											startPTS: Math.max(startPTS, timeRange.start(i)),
											endPTS: Math.min(endPTS, timeRange.end(i))
										});
										fragmentPartial = true
									} else if (endPTS <= startTime) {
										break
									}
								}
								return {
									time: fragmentTimes,
									partial: fragmentPartial
								}
							};
							FragmentTracker.prototype.getFragmentKey = function getFragmentKey(fragment) {
								return fragment.type + '_' + fragment.level + '_' + fragment.sn
							};
							FragmentTracker.prototype.getPartialFragment = function getPartialFragment(time) {
								var _this4 = this;
								var timePadding = void 0,
									startTime = void 0,
									endTime = void 0;
								var bestFragment = null;
								var bestOverlap = 0;
								Object.keys(this.fragments).forEach(function (key) {
									var fragmentEntity = _this4.fragments[key];
									if (_this4.isPartial(fragmentEntity)) {
										startTime = fragmentEntity.body.startPTS - _this4.bufferPadding;
										endTime = fragmentEntity.body.endPTS + _this4.bufferPadding;
										if (time >= startTime && time <= endTime) {
											timePadding = Math.min(time - startTime, endTime - time);
											if (bestOverlap <= timePadding) {
												bestFragment = fragmentEntity.body;
												bestOverlap = timePadding
											}
										}
									}
								});
								return bestFragment
							};
							FragmentTracker.prototype.getState = function getState(fragment) {
								var fragKey = this.getFragmentKey(fragment);
								var fragmentEntity = this.fragments[fragKey];
								var state = FragmentState.NOT_LOADED;
								if (fragmentEntity !== undefined) {
									if (!fragmentEntity.buffered) state = FragmentState.APPENDING;
									else if (this.isPartial(fragmentEntity) === true) state = FragmentState.PARTIAL;
									else state = FragmentState.OK
								}
								return state
							};
							FragmentTracker.prototype.isPartial = function isPartial(fragmentEntity) {
								return fragmentEntity.buffered === true && (fragmentEntity.range.video !== undefined && fragmentEntity.range.video.partial === true || fragmentEntity.range.audio !== undefined && fragmentEntity.range.audio.partial === true)
							};
							FragmentTracker.prototype.isTimeBuffered = function isTimeBuffered(startPTS, endPTS, timeRange) {
								var startTime = void 0,
									endTime = void 0;
								for (var i = 0; i < timeRange.length; i++) {
									startTime = timeRange.start(i) - this.bufferPadding;
									endTime = timeRange.end(i) + this.bufferPadding;
									if (startPTS >= startTime && endPTS <= endTime) return true;
									if (endPTS <= startTime) {
										return false
									}
								}
								return false
							};
							FragmentTracker.prototype.onFragLoaded = function onFragLoaded(e) {
								var fragment = e.frag;
								if (!isNaN(fragment.sn)) {
									var fragKey = this.getFragmentKey(fragment);
									var fragmentEntity = {
										body: fragment,
										range: Object.create(null),
										buffered: false
									};
									this.fragments[fragKey] = fragmentEntity
								}
							};
							FragmentTracker.prototype.onBufferAppended = function onBufferAppended(e) {
								var _this5 = this;
								this.timeRanges = e.timeRanges;
								Object.keys(this.timeRanges).forEach(function (elementaryStream) {
									var timeRange = _this5.timeRanges[elementaryStream];
									_this5.detectEvictedFragments(elementaryStream, timeRange)
								})
							};
							FragmentTracker.prototype.onFragBuffered = function onFragBuffered(e) {
								this.detectPartialFragments(e.frag)
							};
							FragmentTracker.prototype.hasFragment = function hasFragment(fragment) {
								var fragKey = this.getFragmentKey(fragment);
								return this.fragments[fragKey] !== undefined
							};
							FragmentTracker.prototype.removeFragment = function removeFragment(fragment) {
								var fragKey = this.getFragmentKey(fragment);
								delete this.fragments[fragKey]
							};
							FragmentTracker.prototype.removeAllFragments = function removeAllFragments() {
								this.fragments = Object.create(null)
							};
							return FragmentTracker
						}(event_handler);

						function updatePTS(fragments, fromIdx, toIdx) {
							var fragFrom = fragments[fromIdx],
								fragTo = fragments[toIdx],
								fragToPTS = fragTo.startPTS;
							if (!isNaN(fragToPTS)) {
								if (toIdx > fromIdx) {
									fragFrom.duration = fragToPTS - fragFrom.start;
									if (fragFrom.duration < 0) logger["b"].warn('negative duration computed for frag ' + fragFrom.sn + ',level ' + fragFrom.level + ', there should be some duration drift between playlist and fragment!')
								} else {
									fragTo.duration = fragFrom.start - fragToPTS;
									if (fragTo.duration < 0) logger["b"].warn('negative duration computed for frag ' + fragTo.sn + ',level ' + fragTo.level + ', there should be some duration drift between playlist and fragment!')
								}
							} else {
								if (toIdx > fromIdx) fragTo.start = fragFrom.start + fragFrom.duration;
								else fragTo.start = Math.max(fragFrom.start - fragTo.duration, 0)
							}
						}

						function updateFragPTSDTS(details, frag, startPTS, endPTS, startDTS, endDTS) {
							var maxStartPTS = startPTS;
							if (!isNaN(frag.startPTS)) {
								var deltaPTS = Math.abs(frag.startPTS - startPTS);
								if (isNaN(frag.deltaPTS)) frag.deltaPTS = deltaPTS;
								else frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS);
								maxStartPTS = Math.max(startPTS, frag.startPTS);
								startPTS = Math.min(startPTS, frag.startPTS);
								endPTS = Math.max(endPTS, frag.endPTS);
								startDTS = Math.min(startDTS, frag.startDTS);
								endDTS = Math.max(endDTS, frag.endDTS)
							}
							var drift = startPTS - frag.start;
							frag.start = frag.startPTS = startPTS;
							frag.maxStartPTS = maxStartPTS;
							frag.endPTS = endPTS;
							frag.startDTS = startDTS;
							frag.endDTS = endDTS;
							frag.duration = endPTS - startPTS;
							var sn = frag.sn;
							if (!details || sn < details.startSN || sn > details.endSN) return 0;
							var fragIdx = void 0,
								fragments = void 0,
								i = void 0;
							fragIdx = sn - details.startSN;
							fragments = details.fragments;
							fragments[fragIdx] = frag;
							for (i = fragIdx; i > 0; i--) {
								updatePTS(fragments, i, i - 1)
							}
							for (i = fragIdx; i < fragments.length - 1; i++) {
								updatePTS(fragments, i, i + 1)
							}
							details.PTSKnown = true;
							return drift
						}

						function mergeDetails(oldDetails, newDetails) {
							var start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN,
								end = Math.min(oldDetails.endSN, newDetails.endSN) - newDetails.startSN,
								delta = newDetails.startSN - oldDetails.startSN,
								oldfragments = oldDetails.fragments,
								newfragments = newDetails.fragments,
								ccOffset = 0,
								PTSFrag = void 0;
							if (newDetails.initSegment && oldDetails.initSegment) newDetails.initSegment = oldDetails.initSegment;
							if (end < start) {
								newDetails.PTSKnown = false;
								return
							}
							for (var i = start; i <= end; i++) {
								var oldFrag = oldfragments[delta + i],
									newFrag = newfragments[i];
								if (newFrag && oldFrag) {
									ccOffset = oldFrag.cc - newFrag.cc;
									if (!isNaN(oldFrag.startPTS)) {
										newFrag.start = newFrag.startPTS = oldFrag.startPTS;
										newFrag.endPTS = oldFrag.endPTS;
										newFrag.duration = oldFrag.duration;
										newFrag.backtracked = oldFrag.backtracked;
										newFrag.dropped = oldFrag.dropped;
										PTSFrag = newFrag
									}
								}
							}
							if (ccOffset) {
								logger["b"].log('discontinuity sliding from playlist, take drift into account');
								for (i = 0; i < newfragments.length; i++) {
									newfragments[i].cc += ccOffset
								}
							}
							if (PTSFrag) {
								updateFragPTSDTS(newDetails, PTSFrag, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS)
							} else {
								if (delta >= 0 && delta < oldfragments.length) {
									var sliding = oldfragments[delta].start;
									for (i = 0; i < newfragments.length; i++) {
										newfragments[i].start += sliding
									}
								}
							}
							newDetails.PTSKnown = oldDetails.PTSKnown
						}
						var TimeRanges = {
							toString: function toString(r) {
								var log = '',
									len = r.length;
								for (var i = 0; i < len; i++) {
									log += '[' + r.start(i).toFixed(3) + ',' + r.end(i).toFixed(3) + ']'
								}
								return log
							}
						};
						var time_ranges = (TimeRanges);

						function findFirstFragWithCC(fragments, cc) {
							var firstFrag = null;
							for (var i = 0; i < fragments.length; i += 1) {
								var currentFrag = fragments[i];
								if (currentFrag && currentFrag.cc === cc) {
									firstFrag = currentFrag;
									break
								}
							}
							return firstFrag
						}

						function findFragWithCC(fragments, CC) {
							return binary_search.search(fragments, function (candidate) {
								if (candidate.cc < CC) return 1;
								else if (candidate.cc > CC) return -1;
								else return 0
							})
						}

						function shouldAlignOnDiscontinuities(lastFrag, lastLevel, details) {
							var shouldAlign = false;
							if (lastLevel && lastLevel.details && details) {
								if (details.endCC > details.startCC || lastFrag && lastFrag.cc < details.startCC) shouldAlign = true
							}
							return shouldAlign
						}

						function findDiscontinuousReferenceFrag(prevDetails, curDetails) {
							var prevFrags = prevDetails.fragments;
							var curFrags = curDetails.fragments;
							if (!curFrags.length || !prevFrags.length) {
								logger["b"].log('No fragments to align');
								return
							}
							var prevStartFrag = findFirstFragWithCC(prevFrags, curFrags[0].cc);
							if (!prevStartFrag || prevStartFrag && !prevStartFrag.startPTS) {
								logger["b"].log('No frag in previous level to align on');
								return
							}
							return prevStartFrag
						}

						function adjustPts(sliding, details) {
							details.fragments.forEach(function (frag) {
								if (frag) {
									var start = frag.start + sliding;
									frag.start = frag.startPTS = start;
									frag.endPTS = start + frag.duration
								}
							});
							details.PTSKnown = true
						}

						function alignDiscontinuities(lastFrag, lastLevel, details) {
							if (shouldAlignOnDiscontinuities(lastFrag, lastLevel, details)) {
								var referenceFrag = findDiscontinuousReferenceFrag(lastLevel.details, details);
								if (referenceFrag) {
									logger["b"].log('Adjusting PTS using last level due to CC increase within current level');
									adjustPts(referenceFrag.start, details)
								}
							}
							if (details.PTSKnown === false && lastLevel && lastLevel.details && lastLevel.details.fragments && lastLevel.details.fragments.length) {
								var lastPDT = lastLevel.details.programDateTime;
								var newPDT = details.programDateTime;
								var sliding = (newPDT - lastPDT) / 1000 + lastLevel.details.fragments[0].start;
								if (!isNaN(sliding)) {
									logger["b"].log('adjusting PTS using programDateTime delta, sliding:' + sliding.toFixed(3));
									adjustPts(sliding, details)
								}
							}
						}

						function task_loop__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function task_loop__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function task_loop__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var TaskLoop = function (_EventHandler) {
							task_loop__inherits(TaskLoop, _EventHandler);

							function TaskLoop(hls) {
								task_loop__classCallCheck(this, TaskLoop);
								for (var _len = arguments.length, events = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									events[_key - 1] = arguments[_key]
								}
								var _this = task_loop__possibleConstructorReturn(this, _EventHandler.call.apply(_EventHandler, [this, hls].concat(events)));
								_this._tickInterval = null;
								_this._tickCallCount = 0;
								return _this
							}
							TaskLoop.prototype.destroy = function destroy() {
								this.clearInterval();
								_EventHandler.prototype.destroy.call(this)
							};
							TaskLoop.prototype.hasInterval = function hasInterval() {
								return this._tickInterval !== null
							};
							TaskLoop.prototype.setInterval = function (_setInterval) {
								function setInterval(_x) {
									return _setInterval.apply(this, arguments)
								}
								setInterval.toString = function () {
									return _setInterval.toString()
								};
								return setInterval
							}(function (millis) {
								if (!this._tickInterval) {
									this._tickInterval = setInterval(this.tick.bind(this, false), millis);
									return true
								}
								return false
							});
							TaskLoop.prototype.clearInterval = function (_clearInterval) {
								function clearInterval() {
									return _clearInterval.apply(this, arguments)
								}
								clearInterval.toString = function () {
									return _clearInterval.toString()
								};
								return clearInterval
							}(function () {
								if (this._tickInterval) {
									clearInterval(this._tickInterval);
									this._tickInterval = null;
									return true
								}
								return false
							});
							TaskLoop.prototype.tick = function tick() {
								this._tickCallCount++;
								if (this._tickCallCount === 1) {
									this.doTick();
									if (this._tickCallCount > 1) setTimeout(this.tick.bind(this), 0);
									this._tickCallCount = 0
								}
							};
							TaskLoop.prototype.doTick = function doTick() {
								throw new Error('TaskLoop is abstract and `doLoop` must be implemented');
							};
							return TaskLoop
						}(event_handler);
						var task_loop = (TaskLoop);
						var stream_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function stream_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function stream_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function stream_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var State = {
							STOPPED: 'STOPPED',
							IDLE: 'IDLE',
							KEY_LOADING: 'KEY_LOADING',
							FRAG_LOADING: 'FRAG_LOADING',
							FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
							WAITING_LEVEL: 'WAITING_LEVEL',
							PARSING: 'PARSING',
							PARSED: 'PARSED',
							BUFFER_FLUSHING: 'BUFFER_FLUSHING',
							ENDED: 'ENDED',
							ERROR: 'ERROR'
						};
						var stream_controller_StreamController = function (_TaskLoop) {
							stream_controller__inherits(StreamController, _TaskLoop);

							function StreamController(hls, fragmentTracker) {
								stream_controller__classCallCheck(this, StreamController);
								var _this = stream_controller__possibleConstructorReturn(this, _TaskLoop.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].MEDIA_DETACHING, events["a"].MANIFEST_LOADING, events["a"].MANIFEST_PARSED, events["a"].LEVEL_LOADED, events["a"].KEY_LOADED, events["a"].FRAG_LOADED, events["a"].FRAG_LOAD_EMERGENCY_ABORTED, events["a"].FRAG_PARSING_INIT_SEGMENT, events["a"].FRAG_PARSING_DATA, events["a"].FRAG_PARSED, events["a"].ERROR, events["a"].AUDIO_TRACK_SWITCHING, events["a"].AUDIO_TRACK_SWITCHED, events["a"].BUFFER_CREATED, events["a"].BUFFER_APPENDED, events["a"].BUFFER_FLUSHED));
								_this.fragmentTracker = fragmentTracker;
								_this.config = hls.config;
								_this.audioCodecSwap = false;
								_this._state = State.STOPPED;
								return _this
							}
							StreamController.prototype.onHandlerDestroying = function onHandlerDestroying() {
								this.stopLoad()
							};
							StreamController.prototype.onHandlerDestroyed = function onHandlerDestroyed() {
								this.state = State.STOPPED;
								this.fragmentTracker = null
							};
							StreamController.prototype.startLoad = function startLoad(startPosition) {
								if (this.levels) {
									var lastCurrentTime = this.lastCurrentTime,
										hls = this.hls;
									this.stopLoad();
									this.setInterval(100);
									this.level = -1;
									this.fragLoadError = 0;
									if (!this.startFragRequested) {
										var startLevel = hls.startLevel;
										if (startLevel === -1) {
											startLevel = 0;
											this.bitrateTest = true
										}
										this.level = hls.nextLoadLevel = startLevel;
										this.loadedmetadata = false
									}
									if (lastCurrentTime > 0 && startPosition === -1) {
										logger["b"].log('override startPosition with lastCurrentTime @' + lastCurrentTime.toFixed(3));
										startPosition = lastCurrentTime
									}
									this.state = State.IDLE;
									this.nextLoadPosition = this.startPosition = this.lastCurrentTime = startPosition;
									this.tick()
								} else {
									this.forceStartLoad = true;
									this.state = State.STOPPED
								}
							};
							StreamController.prototype.stopLoad = function stopLoad() {
								var frag = this.fragCurrent;
								if (frag) {
									if (frag.loader) frag.loader.abort();
									this.fragmentTracker.removeFragment(frag);
									this.fragCurrent = null
								}
								this.fragPrevious = null;
								if (this.demuxer) {
									this.demuxer.destroy();
									this.demuxer = null
								}
								this.clearInterval();
								this.state = State.STOPPED;
								this.forceStartLoad = false
							};
							StreamController.prototype.doTick = function doTick() {
								switch (this.state) {
									case State.BUFFER_FLUSHING:
										this.fragLoadError = 0;
										break;
									case State.IDLE:
										this._doTickIdle();
										break;
									case State.WAITING_LEVEL:
										var level = this.levels[this.level];
										if (level && level.details) this.state = State.IDLE;
										break;
									case State.FRAG_LOADING_WAITING_RETRY:
										var now = performance.now();
										var retryDate = this.retryDate;
										if (!retryDate || now >= retryDate || this.media && this.media.seeking) {
											logger["b"].log('mediaController: retryDate reached, switch back to IDLE state');
											this.state = State.IDLE
										}
										break;
									case State.ERROR:
									case State.STOPPED:
									case State.FRAG_LOADING:
									case State.PARSING:
									case State.PARSED:
									case State.ENDED:
										break;
									default:
										break
								}
								this._checkBuffer();
								this._checkFragmentChanged()
							};
							StreamController.prototype._doTickIdle = function _doTickIdle() {
								var hls = this.hls,
									config = hls.config,
									media = this.media;
								if (this.levelLastLoaded === undefined || !media && (this.startFragRequested || !config.startFragPrefetch)) return;
								var pos = void 0;
								if (this.loadedmetadata) pos = media.currentTime;
								else pos = this.nextLoadPosition;
								var level = hls.nextLoadLevel,
									levelInfo = this.levels[level];
								if (!levelInfo) return;
								var levelBitrate = levelInfo.bitrate,
									maxBufLen = void 0;
								if (levelBitrate) maxBufLen = Math.max(8 * config.maxBufferSize / levelBitrate, config.maxBufferLength);
								else maxBufLen = config.maxBufferLength;
								maxBufLen = Math.min(maxBufLen, config.maxMaxBufferLength);
								var bufferInfo = buffer_helper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : media, pos, config.maxBufferHole),
									bufferLen = bufferInfo.len;
								if (bufferLen >= maxBufLen) return;
								logger["b"].trace('buffer length of ' + bufferLen.toFixed(3) + ' is below max of ' + maxBufLen.toFixed(3) + '. checking for more payload ...');
								this.level = hls.nextLoadLevel = level;
								var levelDetails = levelInfo.details;
								if (levelDetails === undefined || levelDetails.live === true && this.levelLastLoaded !== level) {
									this.state = State.WAITING_LEVEL;
									return
								}
								var fragPrevious = this.fragPrevious;
								if (!levelDetails.live && fragPrevious && !fragPrevious.backtracked && fragPrevious.sn === levelDetails.endSN && !bufferInfo.nextStart) {
									var duration = Math.min(media.duration, fragPrevious.start + fragPrevious.duration);
									if (duration - Math.max(bufferInfo.end, fragPrevious.start) <= Math.max(0.2, fragPrevious.duration)) {
										var data = {};
										if (this.altAudio) data.type = 'video';
										this.hls.trigger(events["a"].BUFFER_EOS, data);
										this.state = State.ENDED;
										return
									}
								}
								this._fetchPayloadOrEos(pos, bufferInfo, levelDetails)
							};
							StreamController.prototype._fetchPayloadOrEos = function _fetchPayloadOrEos(pos, bufferInfo, levelDetails) {
								var fragPrevious = this.fragPrevious,
									level = this.level,
									fragments = levelDetails.fragments,
									fragLen = fragments.length;
								if (fragLen === 0) return;
								var start = fragments[0].start,
									end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
									bufferEnd = bufferInfo.end,
									frag = void 0;
								if (levelDetails.initSegment && !levelDetails.initSegment.data) {
									frag = levelDetails.initSegment
								} else {
									if (levelDetails.live) {
										var initialLiveManifestSize = this.config.initialLiveManifestSize;
										if (fragLen < initialLiveManifestSize) {
											logger["b"].warn('Can not start playback of a level, reason: not enough fragments ' + fragLen + ' < ' + initialLiveManifestSize);
											return
										}
										frag = this._ensureFragmentAtLivePoint(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen);
										if (frag === null) return
									} else {
										if (bufferEnd < start) frag = fragments[0]
									}
								} if (!frag) frag = this._findFragment(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails);
								if (frag) this._loadFragmentOrKey(frag, level, levelDetails, pos, bufferEnd)
							};
							StreamController.prototype._ensureFragmentAtLivePoint = function _ensureFragmentAtLivePoint(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen) {
								var config = this.hls.config,
									media = this.media;
								var frag = void 0;
								var maxLatency = config.liveMaxLatencyDuration !== undefined ? config.liveMaxLatencyDuration : config.liveMaxLatencyDurationCount * levelDetails.targetduration;
								if (bufferEnd < Math.max(start - config.maxFragLookUpTolerance, end - maxLatency)) {
									var liveSyncPosition = this.liveSyncPosition = this.computeLivePosition(start, levelDetails);
									logger["b"].log('buffer end: ' + bufferEnd.toFixed(3) + ' is located too far from the end of live sliding playlist, reset currentTime to : ' + liveSyncPosition.toFixed(3));
									bufferEnd = liveSyncPosition;
									if (media && media.readyState && media.duration > liveSyncPosition) media.currentTime = liveSyncPosition;
									this.nextLoadPosition = liveSyncPosition
								}
								if (levelDetails.PTSKnown && bufferEnd > end && media && media.readyState) return null;
								if (this.startFragRequested && !levelDetails.PTSKnown) {
									if (fragPrevious) {
										if (!levelDetails.programDateTime) {
											var targetSN = fragPrevious.sn + 1;
											if (targetSN >= levelDetails.startSN && targetSN <= levelDetails.endSN) {
												var fragNext = fragments[targetSN - levelDetails.startSN];
												if (fragPrevious.cc === fragNext.cc) {
													frag = fragNext;
													logger["b"].log('live playlist, switching playlist, load frag with next SN: ' + frag.sn)
												}
											}
											if (!frag) {
												frag = binary_search.search(fragments, function (frag) {
													return fragPrevious.cc - frag.cc
												});
												if (frag) logger["b"].log('live playlist, switching playlist, load frag with same CC: ' + frag.sn)
											}
										} else {
											frag = this._findFragmentByPDT(fragments, fragPrevious.endPdt + 1)
										}
									}
									if (!frag) {
										frag = fragments[Math.min(fragLen - 1, Math.round(fragLen / 2))];
										logger["b"].log('live playlist, switching playlist, unknown, load middle frag : ' + frag.sn)
									}
								}
								return frag
							};
							StreamController.prototype._findFragmentByPDT = function _findFragmentByPDT(fragments, PDTValue) {
								if (!fragments || PDTValue === undefined) return null;
								var firstSegment = fragments[0];
								if (PDTValue < firstSegment.pdt) return null;
								var lastSegment = fragments[fragments.length - 1];
								if (PDTValue >= lastSegment.endPdt) return null;
								for (var seg = 0; seg < fragments.length; ++seg) {
									var frag = fragments[seg];
									if (PDTValue < frag.endPdt) return frag
								}
								return null
							};
							StreamController.prototype._findFragmentBySN = function _findFragmentBySN(fragPrevious, fragments, bufferEnd, end) {
								var config = this.hls.config;
								var foundFrag = void 0;
								var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
								var fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : undefined;
								var fragmentWithinToleranceTest = function fragmentWithinToleranceTest(candidate) {
									var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration + (candidate.deltaPTS ? candidate.deltaPTS : 0));
									if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) return 1;
									else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) return -1;
									return 0
								};
								if (bufferEnd < end) {
									if (bufferEnd > end - maxFragLookUpTolerance) maxFragLookUpTolerance = 0;
									if (fragNext && !fragmentWithinToleranceTest(fragNext)) foundFrag = fragNext;
									else foundFrag = binary_search.search(fragments, fragmentWithinToleranceTest)
								}
								return foundFrag
							};
							StreamController.prototype._findFragment = function _findFragment(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails) {
								var config = this.hls.config;
								var frag = void 0;
								var foundFrag = void 0;
								if (bufferEnd < end) {
									if (!levelDetails.programDateTime) {
										foundFrag = this._findFragmentBySN(fragPrevious, fragments, bufferEnd, end)
									} else {
										foundFrag = this._findFragmentByPDT(fragments, bufferEnd * 1000 + (levelDetails.programDateTime ? Date.parse(levelDetails.programDateTime) : 0) - 1000 * start)
									}
								} else {
									foundFrag = fragments[fragLen - 1]
								} if (foundFrag) {
									frag = foundFrag;
									var curSNIdx = frag.sn - levelDetails.startSN;
									var sameLevel = fragPrevious && frag.level === fragPrevious.level;
									var prevFrag = fragments[curSNIdx - 1];
									var nextFrag = fragments[curSNIdx + 1];
									if (fragPrevious && frag.sn === fragPrevious.sn) {
										if (sameLevel && !frag.backtracked) {
											if (frag.sn < levelDetails.endSN) {
												var deltaPTS = fragPrevious.deltaPTS;
												if (deltaPTS && deltaPTS > config.maxBufferHole && fragPrevious.dropped && curSNIdx) {
													frag = prevFrag;
													logger["b"].warn('SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this')
												} else {
													frag = nextFrag;
													logger["b"].log('SN just loaded, load next one: ' + frag.sn)
												}
											} else {
												frag = null
											}
										} else if (frag.backtracked) {
											if (nextFrag && nextFrag.backtracked) {
												logger["b"].warn('Already backtracked from fragment ' + nextFrag.sn + ', will not backtrack to fragment ' + frag.sn + '. Loading fragment ' + nextFrag.sn);
												frag = nextFrag
											} else {
												logger["b"].warn('Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe');
												frag.dropped = 0;
												if (prevFrag) {
													frag = prevFrag;
													frag.backtracked = true
												} else if (curSNIdx) {
													frag = null
												}
											}
										}
									}
								}
								return frag
							};
							StreamController.prototype._loadFragmentOrKey = function _loadFragmentOrKey(frag, level, levelDetails, pos, bufferEnd) {
								if (frag.decryptdata && frag.decryptdata.uri != null && frag.decryptdata.key == null) {
									logger["b"].log('Loading key for ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level);
									this.state = State.KEY_LOADING;
									this.hls.trigger(events["a"].KEY_LOADING, {
										frag: frag
									})
								} else {
									logger["b"].log('Loading ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level + ', currentTime:' + pos.toFixed(3) + ',bufferEnd:' + bufferEnd.toFixed(3));
									var fragState = this.fragmentTracker.getState(frag);
									this.fragCurrent = frag;
									this.startFragRequested = true;
									if (!isNaN(frag.sn) && !frag.bitrateTest) this.nextLoadPosition = frag.start + frag.duration;
									if (frag.backtracked || fragState === FragmentState.NOT_LOADED) {
										frag.autoLevel = this.hls.autoLevelEnabled;
										frag.bitrateTest = this.bitrateTest;
										this.hls.trigger(events["a"].FRAG_LOADING, {
											frag: frag
										});
										if (!this.demuxer) this.demuxer = new demux_demuxer(this.hls, 'main');
										this.state = State.FRAG_LOADING
									} else if (fragState === FragmentState.APPENDING) {
										if (this._reduceMaxBufferLength(frag.duration)) this.fragmentTracker.removeFragment(frag)
									}
								}
							};
							StreamController.prototype.getBufferedFrag = function getBufferedFrag(position) {
								return this.fragmentTracker.getBufferedFrag(position, playlist_loader.LevelType.MAIN)
							};
							StreamController.prototype.followingBufferedFrag = function followingBufferedFrag(frag) {
								if (frag) {
									return this.getBufferedFrag(frag.endPTS + 0.5)
								}
								return null
							};
							StreamController.prototype._checkFragmentChanged = function _checkFragmentChanged() {
								var fragPlayingCurrent = void 0,
									currentTime = void 0,
									video = this.media;
								if (video && video.readyState && video.seeking === false) {
									currentTime = video.currentTime;
									if (currentTime > video.playbackRate * this.lastCurrentTime) this.lastCurrentTime = currentTime;
									if (buffer_helper.isBuffered(video, currentTime)) {
										fragPlayingCurrent = this.getBufferedFrag(currentTime)
									} else if (buffer_helper.isBuffered(video, currentTime + 0.1)) {
										fragPlayingCurrent = this.getBufferedFrag(currentTime + 0.1)
									}
									if (fragPlayingCurrent) {
										var fragPlaying = fragPlayingCurrent;
										if (fragPlaying !== this.fragPlaying) {
											this.hls.trigger(events["a"].FRAG_CHANGED, {
												frag: fragPlaying
											});
											var fragPlayingLevel = fragPlaying.level;
											if (!this.fragPlaying || this.fragPlaying.level !== fragPlayingLevel) this.hls.trigger(events["a"].LEVEL_SWITCHED, {
												level: fragPlayingLevel
											});
											this.fragPlaying = fragPlaying
										}
									}
								}
							};
							StreamController.prototype.immediateLevelSwitch = function immediateLevelSwitch() {
								logger["b"].log('immediateLevelSwitch');
								if (!this.immediateSwitch) {
									this.immediateSwitch = true;
									var media = this.media,
										previouslyPaused = void 0;
									if (media) {
										previouslyPaused = media.paused;
										media.pause()
									} else {
										previouslyPaused = true
									}
									this.previouslyPaused = previouslyPaused
								}
								var fragCurrent = this.fragCurrent;
								if (fragCurrent && fragCurrent.loader) fragCurrent.loader.abort();
								this.fragCurrent = null;
								this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
							};
							StreamController.prototype.immediateLevelSwitchEnd = function immediateLevelSwitchEnd() {
								var media = this.media;
								if (media && media.buffered.length) {
									this.immediateSwitch = false;
									if (buffer_helper.isBuffered(media, media.currentTime)) {
										media.currentTime -= 0.0001
									}
									if (!this.previouslyPaused) media.play()
								}
							};
							StreamController.prototype.nextLevelSwitch = function nextLevelSwitch() {
								var media = this.media;
								if (media && media.readyState) {
									var fetchdelay = void 0,
										fragPlayingCurrent = void 0,
										nextBufferedFrag = void 0;
									fragPlayingCurrent = this.getBufferedFrag(media.currentTime);
									if (fragPlayingCurrent && fragPlayingCurrent.startPTS > 1) {
										this.flushMainBuffer(0, fragPlayingCurrent.startPTS - 1)
									}
									if (!media.paused) {
										var nextLevelId = this.hls.nextLoadLevel,
											nextLevel = this.levels[nextLevelId],
											fragLastKbps = this.fragLastKbps;
										if (fragLastKbps && this.fragCurrent) fetchdelay = this.fragCurrent.duration * nextLevel.bitrate / (1000 * fragLastKbps) + 1;
										else fetchdelay = 0
									} else {
										fetchdelay = 0
									}
									nextBufferedFrag = this.getBufferedFrag(media.currentTime + fetchdelay);
									if (nextBufferedFrag) {
										nextBufferedFrag = this.followingBufferedFrag(nextBufferedFrag);
										if (nextBufferedFrag) {
											var fragCurrent = this.fragCurrent;
											if (fragCurrent && fragCurrent.loader) fragCurrent.loader.abort();
											this.fragCurrent = null;
											this.flushMainBuffer(nextBufferedFrag.maxStartPTS, Number.POSITIVE_INFINITY)
										}
									}
								}
							};
							StreamController.prototype.flushMainBuffer = function flushMainBuffer(startOffset, endOffset) {
								this.state = State.BUFFER_FLUSHING;
								var flushScope = {
									startOffset: startOffset,
									endOffset: endOffset
								};
								if (this.altAudio) flushScope.type = 'video';
								this.hls.trigger(events["a"].BUFFER_FLUSHING, flushScope)
							};
							StreamController.prototype.onMediaAttached = function onMediaAttached(data) {
								var media = this.media = this.mediaBuffer = data.media;
								this.onvseeking = this.onMediaSeeking.bind(this);
								this.onvseeked = this.onMediaSeeked.bind(this);
								this.onvended = this.onMediaEnded.bind(this);
								media.addEventListener('seeking', this.onvseeking);
								media.addEventListener('seeked', this.onvseeked);
								media.addEventListener('ended', this.onvended);
								var config = this.config;
								if (this.levels && config.autoStartLoad) this.hls.startLoad(config.startPosition)
							};
							StreamController.prototype.onMediaDetaching = function onMediaDetaching() {
								var media = this.media;
								if (media && media.ended) {
									logger["b"].log('MSE detaching and video ended, reset startPosition');
									this.startPosition = this.lastCurrentTime = 0
								}
								var levels = this.levels;
								if (levels) {
									levels.forEach(function (level) {
										if (level.details) {
											level.details.fragments.forEach(function (fragment) {
												fragment.backtracked = undefined
											})
										}
									})
								}
								if (media) {
									media.removeEventListener('seeking', this.onvseeking);
									media.removeEventListener('seeked', this.onvseeked);
									media.removeEventListener('ended', this.onvended);
									this.onvseeking = this.onvseeked = this.onvended = null
								}
								this.media = this.mediaBuffer = null;
								this.loadedmetadata = false;
								this.stopLoad()
							};
							StreamController.prototype.onMediaSeeking = function onMediaSeeking() {
								var media = this.media,
									currentTime = media ? media.currentTime : undefined,
									config = this.config;
								if (!isNaN(currentTime)) logger["b"].log('media seeking to ' + currentTime.toFixed(3));
								var mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media;
								var bufferInfo = buffer_helper.bufferInfo(mediaBuffer, currentTime, this.config.maxBufferHole);
								if (this.state === State.FRAG_LOADING) {
									var fragCurrent = this.fragCurrent;
									if (bufferInfo.len === 0 && fragCurrent) {
										var tolerance = config.maxFragLookUpTolerance,
											fragStartOffset = fragCurrent.start - tolerance,
											fragEndOffset = fragCurrent.start + fragCurrent.duration + tolerance;
										if (currentTime < fragStartOffset || currentTime > fragEndOffset) {
											if (fragCurrent.loader) {
												logger["b"].log('seeking outside of buffer while fragment load in progress, cancel fragment load');
												fragCurrent.loader.abort()
											}
											this.fragCurrent = null;
											this.fragPrevious = null;
											this.state = State.IDLE
										} else {
											logger["b"].log('seeking outside of buffer but within currently loaded fragment range')
										}
									}
								} else if (this.state === State.ENDED) {
									if (bufferInfo.len === 0) this.fragPrevious = 0;
									this.state = State.IDLE
								}
								if (media) this.lastCurrentTime = currentTime;
								if (!this.loadedmetadata) this.nextLoadPosition = this.startPosition = currentTime;
								this.tick()
							};
							StreamController.prototype.onMediaSeeked = function onMediaSeeked() {
								var media = this.media,
									currentTime = media ? media.currentTime : undefined;
								if (!isNaN(currentTime)) logger["b"].log('media seeked to ' + currentTime.toFixed(3));
								this.tick()
							};
							StreamController.prototype.onMediaEnded = function onMediaEnded() {
								logger["b"].log('media ended');
								this.startPosition = this.lastCurrentTime = 0
							};
							StreamController.prototype.onManifestLoading = function onManifestLoading() {
								logger["b"].log('trigger BUFFER_RESET');
								this.hls.trigger(events["a"].BUFFER_RESET);
								this.fragmentTracker.removeAllFragments();
								this.stalled = false;
								this.startPosition = this.lastCurrentTime = 0
							};
							StreamController.prototype.onManifestParsed = function onManifestParsed(data) {
								var aac = false,
									heaac = false,
									codec = void 0;
								data.levels.forEach(function (level) {
									codec = level.audioCodec;
									if (codec) {
										if (codec.indexOf('mp4a.40.2') !== -1) aac = true;
										if (codec.indexOf('mp4a.40.5') !== -1) heaac = true
									}
								});
								this.audioCodecSwitch = aac && heaac;
								if (this.audioCodecSwitch) logger["b"].log('both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC');
								this.levels = data.levels;
								this.startFragRequested = false;
								var config = this.config;
								if (config.autoStartLoad || this.forceStartLoad) this.hls.startLoad(config.startPosition)
							};
							StreamController.prototype.onLevelLoaded = function onLevelLoaded(data) {
								var newDetails = data.details;
								var newLevelId = data.level;
								var lastLevel = this.levels[this.levelLastLoaded];
								var curLevel = this.levels[newLevelId];
								var duration = newDetails.totalduration;
								var sliding = 0;
								logger["b"].log('level ' + newLevelId + ' loaded [' + newDetails.startSN + ',' + newDetails.endSN + '],duration:' + duration);
								if (newDetails.live) {
									var curDetails = curLevel.details;
									if (curDetails && newDetails.fragments.length > 0) {
										mergeDetails(curDetails, newDetails);
										sliding = newDetails.fragments[0].start;
										this.liveSyncPosition = this.computeLivePosition(sliding, curDetails);
										if (newDetails.PTSKnown && !isNaN(sliding)) {
											logger["b"].log('live playlist sliding:' + sliding.toFixed(3))
										} else {
											logger["b"].log('live playlist - outdated PTS, unknown sliding');
											alignDiscontinuities(this.fragPrevious, lastLevel, newDetails)
										}
									} else {
										logger["b"].log('live playlist - first load, unknown sliding');
										newDetails.PTSKnown = false;
										alignDiscontinuities(this.fragPrevious, lastLevel, newDetails)
									}
								} else {
									newDetails.PTSKnown = false
								}
								curLevel.details = newDetails;
								this.levelLastLoaded = newLevelId;
								this.hls.trigger(events["a"].LEVEL_UPDATED, {
									details: newDetails,
									level: newLevelId
								});
								if (this.startFragRequested === false) {
									if (this.startPosition === -1 || this.lastCurrentTime === -1) {
										var startTimeOffset = newDetails.startTimeOffset;
										if (!isNaN(startTimeOffset)) {
											if (startTimeOffset < 0) {
												logger["b"].log('negative start time offset ' + startTimeOffset + ', count from end of last fragment');
												startTimeOffset = sliding + duration + startTimeOffset
											}
											logger["b"].log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
											this.startPosition = startTimeOffset
										} else {
											if (newDetails.live) {
												this.startPosition = this.computeLivePosition(sliding, newDetails);
												logger["b"].log('configure startPosition to ' + this.startPosition)
											} else {
												this.startPosition = 0
											}
										}
										this.lastCurrentTime = this.startPosition
									}
									this.nextLoadPosition = this.startPosition
								}
								if (this.state === State.WAITING_LEVEL) this.state = State.IDLE;
								this.tick()
							};
							StreamController.prototype.onKeyLoaded = function onKeyLoaded() {
								if (this.state === State.KEY_LOADING) {
									this.state = State.IDLE;
									this.tick()
								}
							};
							StreamController.prototype.onFragLoaded = function onFragLoaded(data) {
								var fragCurrent = this.fragCurrent,
									fragLoaded = data.frag;
								if (this.state === State.FRAG_LOADING && fragCurrent && fragLoaded.type === 'main' && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
									var stats = data.stats,
										currentLevel = this.levels[fragCurrent.level],
										details = currentLevel.details;
									logger["b"].log('Loaded  ' + fragCurrent.sn + ' of [' + details.startSN + ' ,' + details.endSN + '],level ' + fragCurrent.level);
									this.bitrateTest = false;
									this.stats = stats;
									if (fragLoaded.bitrateTest === true && this.hls.nextLoadLevel) {
										this.state = State.IDLE;
										this.startFragRequested = false;
										stats.tparsed = stats.tbuffered = performance.now();
										this.hls.trigger(events["a"].FRAG_BUFFERED, {
											stats: stats,
											frag: fragCurrent,
											id: 'main'
										});
										this.tick()
									} else if (fragLoaded.sn === 'initSegment') {
										this.state = State.IDLE;
										stats.tparsed = stats.tbuffered = performance.now();
										details.initSegment.data = data.payload;
										this.hls.trigger(events["a"].FRAG_BUFFERED, {
											stats: stats,
											frag: fragCurrent,
											id: 'main'
										});
										this.tick()
									} else {
										this.state = State.PARSING;
										var duration = details.totalduration,
											level = fragCurrent.level,
											sn = fragCurrent.sn,
											audioCodec = this.config.defaultAudioCodec || currentLevel.audioCodec;
										if (this.audioCodecSwap) {
											logger["b"].log('swapping playlist audio codec');
											if (audioCodec === undefined) audioCodec = this.lastAudioCodec;
											if (audioCodec) {
												if (audioCodec.indexOf('mp4a.40.5') !== -1) audioCodec = 'mp4a.40.2';
												else audioCodec = 'mp4a.40.5'
											}
										}
										this.pendingBuffering = true;
										this.appended = false;
										logger["b"].log('Parsing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],level ' + level + ', cc ' + fragCurrent.cc);
										var demuxer = this.demuxer;
										if (!demuxer) demuxer = this.demuxer = new demux_demuxer(this.hls, 'main');
										var media = this.media;
										var mediaSeeking = media && media.seeking;
										var accurateTimeOffset = !mediaSeeking && (details.PTSKnown || !details.live);
										var initSegmentData = details.initSegment ? details.initSegment.data : [];
										demuxer.push(data.payload, initSegmentData, audioCodec, currentLevel.videoCodec, fragCurrent, duration, accurateTimeOffset, undefined)
									}
								}
								this.fragLoadError = 0
							};
							StreamController.prototype.onFragParsingInitSegment = function onFragParsingInitSegment(data) {
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
									var tracks = data.tracks,
										trackName = void 0,
										track = void 0;
									if (tracks.audio && this.altAudio) delete tracks.audio;
									track = tracks.audio;
									if (track) {
										var audioCodec = this.levels[this.level].audioCodec,
											ua = navigator.userAgent.toLowerCase();
										if (audioCodec && this.audioCodecSwap) {
											logger["b"].log('swapping playlist audio codec');
											if (audioCodec.indexOf('mp4a.40.5') !== -1) audioCodec = 'mp4a.40.2';
											else audioCodec = 'mp4a.40.5'
										}
										if (this.audioCodecSwitch) {
											if (track.metadata.channelCount !== 1 && ua.indexOf('firefox') === -1) audioCodec = 'mp4a.40.5'
										}
										if (ua.indexOf('android') !== -1 && track.container !== 'audio/mpeg') {
											audioCodec = 'mp4a.40.2';
											logger["b"].log('Android: force audio codec to ' + audioCodec)
										}
										track.levelCodec = audioCodec;
										track.id = data.id
									}
									track = tracks.video;
									if (track) {
										track.levelCodec = this.levels[this.level].videoCodec;
										track.id = data.id
									}
									this.hls.trigger(events["a"].BUFFER_CODECS, tracks);
									for (trackName in tracks) {
										track = tracks[trackName];
										logger["b"].log('main track:' + trackName + ',container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
										var initSegment = track.initSegment;
										if (initSegment) {
											this.appended = true;
											this.pendingBuffering = true;
											this.hls.trigger(events["a"].BUFFER_APPENDING, {
												type: trackName,
												data: initSegment,
												parent: 'main',
												content: 'initSegment'
											})
										}
									}
									this.tick()
								}
							};
							StreamController.prototype.onFragParsingData = function onFragParsingData(data) {
								var _this2 = this;
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && !(data.type === 'audio' && this.altAudio) && this.state === State.PARSING) {
									var level = this.levels[this.level],
										frag = fragCurrent;
									if (isNaN(data.endPTS)) {
										data.endPTS = data.startPTS + fragCurrent.duration;
										data.endDTS = data.startDTS + fragCurrent.duration
									}
									if (data.hasAudio === true) frag.addElementaryStream(loader_fragment.ElementaryStreamTypes.AUDIO);
									if (data.hasVideo === true) frag.addElementaryStream(loader_fragment.ElementaryStreamTypes.VIDEO);
									logger["b"].log('Parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb + ',dropped:' + (data.dropped || 0));
									if (data.type === 'video') {
										frag.dropped = data.dropped;
										if (frag.dropped) {
											if (!frag.backtracked) {
												var levelDetails = level.details;
												if (levelDetails && frag.sn === levelDetails.startSN) {
													logger["b"].warn('missing video frame(s) on first frag, appending with gap')
												} else {
													logger["b"].warn('missing video frame(s), backtracking fragment');
													this.fragmentTracker.removeFragment(frag);
													frag.backtracked = true;
													this.nextLoadPosition = data.startPTS;
													this.state = State.IDLE;
													this.fragPrevious = frag;
													this.tick();
													return
												}
											} else {
												logger["b"].warn('Already backtracked on this fragment, appending with the gap')
											}
										} else {
											frag.backtracked = false
										}
									}
									var drift = updateFragPTSDTS(level.details, frag, data.startPTS, data.endPTS, data.startDTS, data.endDTS),
										hls = this.hls;
									hls.trigger(events["a"].LEVEL_PTS_UPDATED, {
										details: level.details,
										level: this.level,
										drift: drift,
										type: data.type,
										start: data.startPTS,
										end: data.endPTS
									});
									[data.data1, data.data2].forEach(function (buffer) {
										if (buffer && buffer.length && _this2.state === State.PARSING) {
											_this2.appended = true;
											_this2.pendingBuffering = true;
											hls.trigger(events["a"].BUFFER_APPENDING, {
												type: data.type,
												data: buffer,
												parent: 'main',
												content: 'data'
											})
										}
									});
									this.tick()
								}
							};
							StreamController.prototype.onFragParsed = function onFragParsed(data) {
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'main' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
									this.stats.tparsed = performance.now();
									this.state = State.PARSED;
									this._checkAppendedParsed()
								}
							};
							StreamController.prototype.onAudioTrackSwitching = function onAudioTrackSwitching(data) {
								var altAudio = !!data.url,
									trackId = data.id;
								if (!altAudio) {
									if (this.mediaBuffer !== this.media) {
										logger["b"].log('switching on main audio, use media.buffered to schedule main fragment loading');
										this.mediaBuffer = this.media;
										var fragCurrent = this.fragCurrent;
										if (fragCurrent.loader) {
											logger["b"].log('switching to main audio track, cancel main fragment load');
											fragCurrent.loader.abort()
										}
										this.fragCurrent = null;
										this.fragPrevious = null;
										if (this.demuxer) {
											this.demuxer.destroy();
											this.demuxer = null
										}
										this.state = State.IDLE
									}
									var hls = this.hls;
									hls.trigger(events["a"].BUFFER_FLUSHING, {
										startOffset: 0,
										endOffset: Number.POSITIVE_INFINITY,
										type: 'audio'
									});
									hls.trigger(events["a"].AUDIO_TRACK_SWITCHED, {
										id: trackId
									});
									this.altAudio = false
								}
							};
							StreamController.prototype.onAudioTrackSwitched = function onAudioTrackSwitched(data) {
								var trackId = data.id,
									altAudio = !!this.hls.audioTracks[trackId].url;
								if (altAudio) {
									var videoBuffer = this.videoBuffer;
									if (videoBuffer && this.mediaBuffer !== videoBuffer) {
										logger["b"].log('switching on alternate audio, use video.buffered to schedule main fragment loading');
										this.mediaBuffer = videoBuffer
									}
								}
								this.altAudio = altAudio;
								this.tick()
							};
							StreamController.prototype.onBufferCreated = function onBufferCreated(data) {
								var tracks = data.tracks,
									mediaTrack = void 0,
									name = void 0,
									alternate = false;
								for (var type in tracks) {
									var track = tracks[type];
									if (track.id === 'main') {
										name = type;
										mediaTrack = track;
										if (type === 'video') this.videoBuffer = tracks[type].buffer
									} else {
										alternate = true
									}
								}
								if (alternate && mediaTrack) {
									logger["b"].log('alternate track found, use ' + name + '.buffered to schedule main fragment loading');
									this.mediaBuffer = mediaTrack.buffer
								} else {
									this.mediaBuffer = this.media
								}
							};
							StreamController.prototype.onBufferAppended = function onBufferAppended(data) {
								if (data.parent === 'main') {
									var state = this.state;
									if (state === State.PARSING || state === State.PARSED) {
										this.pendingBuffering = data.pending > 0;
										this._checkAppendedParsed()
									}
								}
							};
							StreamController.prototype._checkAppendedParsed = function _checkAppendedParsed() {
								if (this.state === State.PARSED && (!this.appended || !this.pendingBuffering)) {
									var frag = this.fragCurrent;
									if (frag) {
										var media = this.mediaBuffer ? this.mediaBuffer : this.media;
										logger["b"].log('main buffered : ' + time_ranges.toString(media.buffered));
										this.fragPrevious = frag;
										var stats = this.stats;
										stats.tbuffered = performance.now();
										this.fragLastKbps = Math.round(8 * stats.total / (stats.tbuffered - stats.tfirst));
										this.hls.trigger(events["a"].FRAG_BUFFERED, {
											stats: stats,
											frag: frag,
											id: 'main'
										});
										this.state = State.IDLE
									}
									this.tick()
								}
							};
							StreamController.prototype.onError = function onError(data) {
								var frag = data.frag || this.fragCurrent;
								if (frag && frag.type !== 'main') return;
								var mediaBuffered = !!this.media && buffer_helper.isBuffered(this.media, this.media.currentTime) && buffer_helper.isBuffered(this.media, this.media.currentTime + 0.5);
								switch (data.details) {
									case errors["a"].FRAG_LOAD_ERROR:
									case errors["a"].FRAG_LOAD_TIMEOUT:
									case errors["a"].KEY_LOAD_ERROR:
									case errors["a"].KEY_LOAD_TIMEOUT:
										if (!data.fatal) {
											if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
												var delay = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
												logger["b"].warn('mediaController: frag loading failed, retry in ' + delay + ' ms');
												this.retryDate = performance.now() + delay;
												if (!this.loadedmetadata) {
													this.startFragRequested = false;
													this.nextLoadPosition = this.startPosition
												}
												this.fragLoadError++;
												this.state = State.FRAG_LOADING_WAITING_RETRY
											} else {
												logger["b"].error('mediaController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
												data.fatal = true;
												this.state = State.ERROR
											}
										}
										break;
									case errors["a"].LEVEL_LOAD_ERROR:
									case errors["a"].LEVEL_LOAD_TIMEOUT:
										if (this.state !== State.ERROR) {
											if (data.fatal) {
												this.state = State.ERROR;
												logger["b"].warn('streamController: ' + data.details + ',switch to ' + this.state + ' state ...')
											} else {
												if (!data.levelRetry && this.state === State.WAITING_LEVEL) this.state = State.IDLE
											}
										}
										break;
									case errors["a"].BUFFER_FULL_ERROR:
										if (data.parent === 'main' && (this.state === State.PARSING || this.state === State.PARSED)) {
											if (mediaBuffered) {
												this._reduceMaxBufferLength(this.config.maxBufferLength);
												this.state = State.IDLE
											} else {
												logger["b"].warn('buffer full error also media.currentTime is not buffered, flush everything');
												this.fragCurrent = null;
												this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
											}
										}
										break;
									default:
										break
								}
							};
							StreamController.prototype._reduceMaxBufferLength = function _reduceMaxBufferLength(minLength) {
								var config = this.config;
								if (config.maxMaxBufferLength >= minLength) {
									config.maxMaxBufferLength /= 2;
									logger["b"].warn('main:reduce max buffer length to ' + config.maxMaxBufferLength + 's');
									return true
								}
								return false
							};
							StreamController.prototype._checkBuffer = function _checkBuffer() {
								var media = this.media,
									config = this.config;
								if (media && media.readyState) {
									var currentTime = media.currentTime,
										mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media,
										buffered = mediaBuffer.buffered;
									if (!this.loadedmetadata && buffered.length) {
										this.loadedmetadata = true;
										var startPosition = media.seeking ? currentTime : this.startPosition;
										if (currentTime !== startPosition) {
											logger["b"].log('target start position not buffered, seek to buffered.start(0) ' + startPosition + ' from current time' + currentTime + ' ');
											media.currentTime = startPosition
										}
									} else if (this.immediateSwitch) {
										this.immediateLevelSwitchEnd()
									} else {
										var bufferInfo = buffer_helper.bufferInfo(media, currentTime, config.maxBufferHole),
											expectedPlaying = !(media.paused && media.readyState > 1 || media.ended || media.buffered.length === 0),
											jumpThreshold = 0.5,
											playheadMoving = currentTime !== this.lastCurrentTime;
										if (playheadMoving) {
											if (this.stallReported) {
												logger["b"].warn('playback not stuck anymore @' + currentTime + ', after ' + Math.round(performance.now() - this.stalled) + 'ms');
												this.stallReported = false
											}
											this.stalled = undefined;
											this.nudgeRetry = 0
										} else {
											if (expectedPlaying) {
												var tnow = performance.now();
												var hls = this.hls;
												if (!this.stalled) {
													this.stalled = tnow;
													this.stallReported = false
												} else {
													var stalledDuration = tnow - this.stalled;
													var bufferLen = bufferInfo.len;
													var nudgeRetry = this.nudgeRetry || 0;
													var partial = this.fragmentTracker.getPartialFragment(currentTime);
													if (partial !== null) {
														var lastEndTime = 0;
														for (var i = 0; i < media.buffered.length; i++) {
															var startTime = media.buffered.start(i);
															if (currentTime >= lastEndTime && currentTime < startTime) {
																media.currentTime = Math.max(startTime, media.currentTime + 0.1);
																logger["b"].warn('skipping hole, adjusting currentTime from ' + currentTime + ' to ' + media.currentTime);
																this.stalled = undefined;
																hls.trigger(events["a"].ERROR, {
																	type: errors["b"].MEDIA_ERROR,
																	details: errors["a"].BUFFER_SEEK_OVER_HOLE,
																	fatal: false,
																	reason: 'fragment loaded with buffer holes, seeking from ' + currentTime + ' to ' + media.currentTime,
																	frag: partial
																});
																return
															}
															lastEndTime = media.buffered.end(i)
														}
													}
													if (bufferLen > jumpThreshold && stalledDuration > config.highBufferWatchdogPeriod * 1000) {
														if (!this.stallReported) {
															this.stallReported = true;
															logger["b"].warn('playback stalling in high buffer @' + currentTime);
															hls.trigger(events["a"].ERROR, {
																type: errors["b"].MEDIA_ERROR,
																details: errors["a"].BUFFER_STALLED_ERROR,
																fatal: false,
																buffer: bufferLen
															})
														}
														this.stalled = undefined;
														this.nudgeRetry = ++nudgeRetry;
														if (nudgeRetry < config.nudgeMaxRetry) {
															var _currentTime = media.currentTime;
															var targetTime = _currentTime + nudgeRetry * config.nudgeOffset;
															logger["b"].log('adjust currentTime from ' + _currentTime + ' to ' + targetTime);
															media.currentTime = targetTime;
															hls.trigger(events["a"].ERROR, {
																type: errors["b"].MEDIA_ERROR,
																details: errors["a"].BUFFER_NUDGE_ON_STALL,
																fatal: false
															})
														} else {
															logger["b"].error('still stuck in high buffer @' + currentTime + ' after ' + config.nudgeMaxRetry + ', raise fatal error');
															hls.trigger(events["a"].ERROR, {
																type: errors["b"].MEDIA_ERROR,
																details: errors["a"].BUFFER_STALLED_ERROR,
																fatal: true
															})
														}
													}
												}
											}
										}
									}
								}
							};
							StreamController.prototype.onFragLoadEmergencyAborted = function onFragLoadEmergencyAborted() {
								this.state = State.IDLE;
								if (!this.loadedmetadata) {
									this.startFragRequested = false;
									this.nextLoadPosition = this.startPosition
								}
								this.tick()
							};
							StreamController.prototype.onBufferFlushed = function onBufferFlushed() {
								var media = this.mediaBuffer ? this.mediaBuffer : this.media;
								this.fragmentTracker.detectEvictedFragments(loader_fragment.ElementaryStreamTypes.VIDEO, media.buffered);
								this.state = State.IDLE;
								this.fragPrevious = null
							};
							StreamController.prototype.swapAudioCodec = function swapAudioCodec() {
								this.audioCodecSwap = !this.audioCodecSwap
							};
							StreamController.prototype.computeLivePosition = function computeLivePosition(sliding, levelDetails) {
								var targetLatency = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * levelDetails.targetduration;
								return sliding + Math.max(0, levelDetails.totalduration - targetLatency)
							};
							stream_controller__createClass(StreamController, [{
								key: 'state',
								set: function set(nextState) {
									if (this.state !== nextState) {
										var previousState = this.state;
										this._state = nextState;
										logger["b"].log('main stream:' + previousState + '->' + nextState);
										this.hls.trigger(events["a"].STREAM_STATE_TRANSITION, {
											previousState: previousState,
											nextState: nextState
										})
									}
								},
								get: function get() {
									return this._state
								}
							}, {
								key: 'currentLevel',
								get: function get() {
									var media = this.media;
									if (media) {
										var frag = this.getBufferedFrag(media.currentTime);
										if (frag) return frag.level
									}
									return -1
								}
							}, {
								key: 'nextBufferedFrag',
								get: function get() {
									var media = this.media;
									if (media) {
										return this.followingBufferedFrag(this.getBufferedFrag(media.currentTime))
									} else {
										return null
									}
								}
							}, {
								key: 'nextLevel',
								get: function get() {
									var frag = this.nextBufferedFrag;
									if (frag) return frag.level;
									else return -1
								}
							}, {
								key: 'liveSyncPosition',
								get: function get() {
									return this._liveSyncPosition
								},
								set: function set(value) {
									this._liveSyncPosition = value
								}
							}]);
							return StreamController
						}(task_loop);
						var stream_controller = (stream_controller_StreamController);
						var level_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function level_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function level_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function level_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var level_controller_LevelController = function (_EventHandler) {
							level_controller__inherits(LevelController, _EventHandler);

							function LevelController(hls) {
								level_controller__classCallCheck(this, LevelController);
								var _this = level_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MANIFEST_LOADED, events["a"].LEVEL_LOADED, events["a"].FRAG_LOADED, events["a"].ERROR));
								_this.canload = false;
								_this.currentLevelIndex = null;
								_this.manualLevelIndex = -1;
								_this.timer = null;
								return _this
							}
							LevelController.prototype.onHandlerDestroying = function onHandlerDestroying() {
								this.cleanTimer();
								this.manualLevelIndex = -1
							};
							LevelController.prototype.cleanTimer = function cleanTimer() {
								if (this.timer !== null) {
									clearTimeout(this.timer);
									this.timer = null
								}
							};
							LevelController.prototype.startLoad = function startLoad() {
								var levels = this._levels;
								this.canload = true;
								this.levelRetryCount = 0;
								if (levels) {
									levels.forEach(function (level) {
										level.loadError = 0;
										var levelDetails = level.details;
										if (levelDetails && levelDetails.live) level.details = undefined
									})
								}
								if (this.timer !== null) this.loadLevel()
							};
							LevelController.prototype.stopLoad = function stopLoad() {
								this.canload = false
							};
							LevelController.prototype.onManifestLoaded = function onManifestLoaded(data) {
								var levels = [];
								var bitrateStart = void 0;
								var levelSet = {};
								var levelFromSet = null;
								var videoCodecFound = false;
								var audioCodecFound = false;
								var chromeOrFirefox = /chrome|firefox/.test(navigator.userAgent.toLowerCase());
								var audioTracks = [];
								data.levels.forEach(function (level) {
									level.loadError = 0;
									level.fragmentError = false;
									videoCodecFound = videoCodecFound || !!level.videoCodec;
									audioCodecFound = audioCodecFound || !!level.audioCodec || !!(level.attrs && level.attrs.AUDIO);
									if (chromeOrFirefox === true && level.audioCodec && level.audioCodec.indexOf('mp4a.40.34') !== -1) level.audioCodec = undefined;
									levelFromSet = levelSet[level.bitrate];
									if (levelFromSet === undefined) {
										level.url = [level.url];
										level.urlId = 0;
										levelSet[level.bitrate] = level;
										levels.push(level)
									} else {
										levelFromSet.url.push(level.url)
									}
								});
								if (videoCodecFound === true && audioCodecFound === true) levels = levels.filter(function (_ref) {
									var videoCodec = _ref.videoCodec;
									return !!videoCodec
								});
								levels = levels.filter(function (_ref2) {
									var audioCodec = _ref2.audioCodec,
										videoCodec = _ref2.videoCodec;
									return (!audioCodec || isCodecSupportedInMp4(audioCodec)) && (!videoCodec || isCodecSupportedInMp4(videoCodec))
								});
								if (data.audioTracks) audioTracks = data.audioTracks.filter(function (track) {
									return !track.audioCodec || isCodecSupportedInMp4(track.audioCodec, 'audio')
								});
								if (levels.length > 0) {
									bitrateStart = levels[0].bitrate;
									levels.sort(function (a, b) {
										return a.bitrate - b.bitrate
									});
									this._levels = levels;
									for (var i = 0; i < levels.length; i++) {
										if (levels[i].bitrate === bitrateStart) {
											this._firstLevel = i;
											logger["b"].log('manifest loaded,' + levels.length + ' level(s) found, first bitrate:' + bitrateStart);
											break
										}
									}
									this.hls.trigger(events["a"].MANIFEST_PARSED, {
										levels: levels,
										audioTracks: audioTracks,
										firstLevel: this._firstLevel,
										stats: data.stats,
										audio: audioCodecFound,
										video: videoCodecFound,
										altAudio: audioTracks.length > 0
									})
								} else {
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].MEDIA_ERROR,
										details: errors["a"].MANIFEST_INCOMPATIBLE_CODECS_ERROR,
										fatal: true,
										url: this.hls.url,
										reason: 'no level with compatible codecs found in manifest'
									})
								}
							};
							LevelController.prototype.setLevelInternal = function setLevelInternal(newLevel) {
								var levels = this._levels;
								var hls = this.hls;
								if (newLevel >= 0 && newLevel < levels.length) {
									this.cleanTimer();
									if (this.currentLevelIndex !== newLevel) {
										logger["b"].log('switching to level ' + newLevel);
										this.currentLevelIndex = newLevel;
										var levelProperties = levels[newLevel];
										levelProperties.level = newLevel;
										hls.trigger(events["a"].LEVEL_SWITCHING, levelProperties)
									}
									var level = levels[newLevel],
										levelDetails = level.details;
									if (!levelDetails || levelDetails.live === true) {
										var urlId = level.urlId;
										hls.trigger(events["a"].LEVEL_LOADING, {
											url: level.url[urlId],
											level: newLevel,
											id: urlId
										})
									}
								} else {
									hls.trigger(events["a"].ERROR, {
										type: errors["b"].OTHER_ERROR,
										details: errors["a"].LEVEL_SWITCH_ERROR,
										level: newLevel,
										fatal: false,
										reason: 'invalid level idx'
									})
								}
							};
							LevelController.prototype.onError = function onError(data) {
								if (data.fatal === true) {
									if (data.type === errors["b"].NETWORK_ERROR) this.cleanTimer();
									return
								}
								var levelError = false,
									fragmentError = false;
								var levelIndex = void 0;
								switch (data.details) {
									case errors["a"].FRAG_LOAD_ERROR:
									case errors["a"].FRAG_LOAD_TIMEOUT:
									case errors["a"].KEY_LOAD_ERROR:
									case errors["a"].KEY_LOAD_TIMEOUT:
										levelIndex = data.frag.level;
										fragmentError = true;
										break;
									case errors["a"].LEVEL_LOAD_ERROR:
									case errors["a"].LEVEL_LOAD_TIMEOUT:
										levelIndex = data.context.level;
										levelError = true;
										break;
									case errors["a"].REMUX_ALLOC_ERROR:
										levelIndex = data.level;
										levelError = true;
										break
								}
								if (levelIndex !== undefined) this.recoverLevel(data, levelIndex, levelError, fragmentError)
							};
							LevelController.prototype.recoverLevel = function recoverLevel(errorEvent, levelIndex, levelError, fragmentError) {
								var _this2 = this;
								var config = this.hls.config;
								var errorDetails = errorEvent.details;
								var level = this._levels[levelIndex];
								var redundantLevels = void 0,
									delay = void 0,
									nextLevel = void 0;
								level.loadError++;
								level.fragmentError = fragmentError;
								if (levelError === true) {
									if (this.levelRetryCount + 1 <= config.levelLoadingMaxRetry) {
										delay = Math.min(Math.pow(2, this.levelRetryCount) * config.levelLoadingRetryDelay, config.levelLoadingMaxRetryTimeout);
										this.timer = setTimeout(function () {
											return _this2.loadLevel()
										}, delay);
										errorEvent.levelRetry = true;
										this.levelRetryCount++;
										logger["b"].warn('level controller, ' + errorDetails + ', retry in ' + delay + ' ms, current retry count is ' + this.levelRetryCount)
									} else {
										logger["b"].error('level controller, cannot recover from ' + errorDetails + ' error');
										this.currentLevelIndex = null;
										this.cleanTimer();
										errorEvent.fatal = true;
										return
									}
								}
								if (levelError === true || fragmentError === true) {
									redundantLevels = level.url.length;
									if (redundantLevels > 1 && level.loadError < redundantLevels) {
										logger["b"].warn('level controller, ' + errorDetails + ' for level ' + levelIndex + ': switching to redundant stream id ' + level.urlId);
										level.urlId = (level.urlId + 1) % redundantLevels;
										level.details = undefined
									} else {
										if (this.manualLevelIndex === -1) {
											nextLevel = levelIndex === 0 ? this._levels.length - 1 : levelIndex - 1;
											logger["b"].warn('level controller, ' + errorDetails + ': switch to ' + nextLevel);
											this.hls.nextAutoLevel = this.currentLevelIndex = nextLevel
										} else if (fragmentError === true) {
											logger["b"].warn('level controller, ' + errorDetails + ': reload a fragment');
											this.currentLevelIndex = null
										}
									}
								}
							};
							LevelController.prototype.onFragLoaded = function onFragLoaded(_ref3) {
								var frag = _ref3.frag;
								if (frag !== undefined && frag.type === 'main') {
									var level = this._levels[frag.level];
									if (level !== undefined) {
										level.fragmentError = false;
										level.loadError = 0;
										this.levelRetryCount = 0
									}
								}
							};
							LevelController.prototype.onLevelLoaded = function onLevelLoaded(data) {
								var _this3 = this;
								var levelId = data.level;
								if (levelId === this.currentLevelIndex) {
									var curLevel = this._levels[levelId];
									if (curLevel.fragmentError === false) {
										curLevel.loadError = 0;
										this.levelRetryCount = 0
									}
									var newDetails = data.details;
									if (newDetails.live) {
										var targetdurationMs = 1000 * (newDetails.averagetargetduration ? newDetails.averagetargetduration : newDetails.targetduration);
										var reloadInterval = targetdurationMs,
											curDetails = curLevel.details;
										if (curDetails && newDetails.endSN === curDetails.endSN) {
											reloadInterval /= 2;
											logger["b"].log('same live playlist, reload twice faster')
										}
										reloadInterval -= performance.now() - data.stats.trequest;
										reloadInterval = Math.max(targetdurationMs / 2, Math.round(reloadInterval));
										logger["b"].log('live playlist, reload in ' + Math.round(reloadInterval) + ' ms');
										this.timer = setTimeout(function () {
											return _this3.loadLevel()
										}, reloadInterval)
									} else {
										this.cleanTimer()
									}
								}
							};
							LevelController.prototype.loadLevel = function loadLevel() {
								var level = void 0,
									urlIndex = void 0;
								if (this.currentLevelIndex !== null && this.canload === true) {
									level = this._levels[this.currentLevelIndex];
									if (level !== undefined && level.url.length > 0) {
										urlIndex = level.urlId;
										this.hls.trigger(events["a"].LEVEL_LOADING, {
											url: level.url[urlIndex],
											level: this.currentLevelIndex,
											id: urlIndex
										})
									}
								}
							};
							level_controller__createClass(LevelController, [{
								key: 'levels',
								get: function get() {
									return this._levels
								}
							}, {
								key: 'level',
								get: function get() {
									return this.currentLevelIndex
								},
								set: function set(newLevel) {
									var levels = this._levels;
									if (levels) {
										newLevel = Math.min(newLevel, levels.length - 1);
										if (this.currentLevelIndex !== newLevel || levels[newLevel].details === undefined) this.setLevelInternal(newLevel)
									}
								}
							}, {
								key: 'manualLevel',
								get: function get() {
									return this.manualLevelIndex
								},
								set: function set(newLevel) {
									this.manualLevelIndex = newLevel;
									if (this._startLevel === undefined) this._startLevel = newLevel;
									if (newLevel !== -1) this.level = newLevel
								}
							}, {
								key: 'firstLevel',
								get: function get() {
									return this._firstLevel
								},
								set: function set(newLevel) {
									this._firstLevel = newLevel
								}
							}, {
								key: 'startLevel',
								get: function get() {
									if (this._startLevel === undefined) {
										var configStartLevel = this.hls.config.startLevel;
										if (configStartLevel !== undefined) return configStartLevel;
										else return this._firstLevel
									} else {
										return this._startLevel
									}
								},
								set: function set(newLevel) {
									this._startLevel = newLevel
								}
							}, {
								key: 'nextLoadLevel',
								get: function get() {
									if (this.manualLevelIndex !== -1) return this.manualLevelIndex;
									else return this.hls.nextAutoLevel
								},
								set: function set(nextLevel) {
									this.level = nextLevel;
									if (this.manualLevelIndex === -1) this.hls.nextAutoLevel = nextLevel
								}
							}]);
							return LevelController
						}(event_handler);
						var level_controller = (level_controller_LevelController);
						var id3 = __webpack_require__(4);

						function sendAddTrackEvent(track, videoEl) {
							var event = null;
							try {
								event = new window.Event('addtrack')
							} catch (err) {
								event = document.createEvent('Event');
								event.initEvent('addtrack', false, false)
							}
							event.track = track;
							videoEl.dispatchEvent(event)
						}

						function clearCurrentCues(track) {
							if (track && track.cues) {
								while (track.cues.length > 0) {
									track.removeCue(track.cues[0])
								}
							}
						}

						function id3_track_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function id3_track_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function id3_track_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var id3_track_controller_ID3TrackController = function (_EventHandler) {
							id3_track_controller__inherits(ID3TrackController, _EventHandler);

							function ID3TrackController(hls) {
								id3_track_controller__classCallCheck(this, ID3TrackController);
								var _this = id3_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].MEDIA_DETACHING, events["a"].FRAG_PARSING_METADATA));
								_this.id3Track = undefined;
								_this.media = undefined;
								return _this
							}
							ID3TrackController.prototype.destroy = function destroy() {
								event_handler.prototype.destroy.call(this)
							};
							ID3TrackController.prototype.onMediaAttached = function onMediaAttached(data) {
								this.media = data.media;
								if (!this.media) { }
							};
							ID3TrackController.prototype.onMediaDetaching = function onMediaDetaching() {
								clearCurrentCues(this.id3Track);
								this.id3Track = undefined;
								this.media = undefined
							};
							ID3TrackController.prototype.getID3Track = function getID3Track(textTracks) {
								for (var i = 0; i < textTracks.length; i++) {
									var textTrack = textTracks[i];
									if (textTrack.kind === 'metadata' && textTrack.label === 'id3') {
										sendAddTrackEvent(textTrack, this.media);
										return textTrack
									}
								}
								return this.media.addTextTrack('metadata', 'id3')
							};
							ID3TrackController.prototype.onFragParsingMetadata = function onFragParsingMetadata(data) {
								var fragment = data.frag;
								var samples = data.samples;
								if (!this.id3Track) {
									this.id3Track = this.getID3Track(this.media.textTracks);
									this.id3Track.mode = 'hidden'
								}
								var Cue = window.WebKitDataCue || window.VTTCue || window.TextTrackCue;
								for (var i = 0; i < samples.length; i++) {
									var frames = id3["a"].getID3Frames(samples[i].data);
									if (frames) {
										var startTime = samples[i].pts;
										var endTime = i < samples.length - 1 ? samples[i + 1].pts : fragment.endPTS;
										if (startTime === endTime) endTime += 0.0001;
										for (var j = 0; j < frames.length; j++) {
											var frame = frames[j];
											if (!id3["a"].isTimeStampFrame(frame)) {
												var cue = new Cue(startTime, endTime, '');
												cue.value = frame;
												this.id3Track.addCue(cue)
											}
										}
									}
								}
							};
							return ID3TrackController
						}(event_handler);
						var id3_track_controller = (id3_track_controller_ID3TrackController);

						function is_supported_isSupported() {
							var mediaSource = getMediaSource();
							var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
							var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
							var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
							return !!isTypeSupported && !!sourceBufferValidAPI
						}

						function ewma__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var EWMA = function () {
							function EWMA(halfLife) {
								ewma__classCallCheck(this, EWMA);
								this.alpha_ = halfLife ? Math.exp(Math.log(0.5) / halfLife) : 0;
								this.estimate_ = 0;
								this.totalWeight_ = 0
							}
							EWMA.prototype.sample = function sample(weight, value) {
								var adjAlpha = Math.pow(this.alpha_, weight);
								this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_;
								this.totalWeight_ += weight
							};
							EWMA.prototype.getTotalWeight = function getTotalWeight() {
								return this.totalWeight_
							};
							EWMA.prototype.getEstimate = function getEstimate() {
								if (this.alpha_) {
									var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
									return this.estimate_ / zeroFactor
								} else {
									return this.estimate_
								}
							};
							return EWMA
						}();
						var ewma = (EWMA);

						function ewma_bandwidth_estimator__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var ewma_bandwidth_estimator_EwmaBandWidthEstimator = function () {
							function EwmaBandWidthEstimator(hls, slow, fast, defaultEstimate) {
								ewma_bandwidth_estimator__classCallCheck(this, EwmaBandWidthEstimator);
								this.hls = hls;
								this.defaultEstimate_ = defaultEstimate;
								this.minWeight_ = 0.001;
								this.minDelayMs_ = 50;
								this.slow_ = new ewma(slow);
								this.fast_ = new ewma(fast)
							}
							EwmaBandWidthEstimator.prototype.sample = function sample(durationMs, numBytes) {
								durationMs = Math.max(durationMs, this.minDelayMs_);
								var bandwidth = 8000 * numBytes / durationMs,
									weight = durationMs / 1000;
								this.fast_.sample(weight, bandwidth);
								this.slow_.sample(weight, bandwidth)
							};
							EwmaBandWidthEstimator.prototype.canEstimate = function canEstimate() {
								var fast = this.fast_;
								return fast && fast.getTotalWeight() >= this.minWeight_
							};
							EwmaBandWidthEstimator.prototype.getEstimate = function getEstimate() {
								if (this.canEstimate()) {
									return Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
								} else {
									return this.defaultEstimate_
								}
							};
							EwmaBandWidthEstimator.prototype.destroy = function destroy() { };
							return EwmaBandWidthEstimator
						}();
						var ewma_bandwidth_estimator = (ewma_bandwidth_estimator_EwmaBandWidthEstimator);
						var abr_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function abr_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function abr_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function abr_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var abr_controller_AbrController = function (_EventHandler) {
							abr_controller__inherits(AbrController, _EventHandler);

							function AbrController(hls) {
								abr_controller__classCallCheck(this, AbrController);
								var _this = abr_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].FRAG_LOADING, events["a"].FRAG_LOADED, events["a"].FRAG_BUFFERED, events["a"].ERROR));
								_this.lastLoadedFragLevel = 0;
								_this._nextAutoLevel = -1;
								_this.hls = hls;
								_this.timer = null;
								_this._bwEstimator = null;
								_this.onCheck = _this._abandonRulesCheck.bind(_this);
								return _this
							}
							AbrController.prototype.destroy = function destroy() {
								this.clearTimer();
								event_handler.prototype.destroy.call(this)
							};
							AbrController.prototype.onFragLoading = function onFragLoading(data) {
								var frag = data.frag;
								if (frag.type === 'main') {
									if (!this.timer) this.timer = setInterval(this.onCheck, 100);
									if (!this._bwEstimator) {
										var hls = this.hls,
											level = data.frag.level,
											isLive = hls.levels[level].details.live,
											config = hls.config,
											ewmaFast = void 0,
											ewmaSlow = void 0;
										if (isLive) {
											ewmaFast = config.abrEwmaFastLive;
											ewmaSlow = config.abrEwmaSlowLive
										} else {
											ewmaFast = config.abrEwmaFastVoD;
											ewmaSlow = config.abrEwmaSlowVoD
										}
										this._bwEstimator = new ewma_bandwidth_estimator(hls, ewmaSlow, ewmaFast, config.abrEwmaDefaultEstimate)
									}
									this.fragCurrent = frag
								}
							};
							AbrController.prototype._abandonRulesCheck = function _abandonRulesCheck() {
								var hls = this.hls,
									v = hls.media,
									frag = this.fragCurrent,
									loader = frag.loader,
									minAutoLevel = hls.minAutoLevel;
								if (!loader || loader.stats && loader.stats.aborted) {
									logger["b"].warn('frag loader destroy or aborted, disarm abandonRules');
									this.clearTimer();
									this._nextAutoLevel = -1;
									return
								}
								var stats = loader.stats;
								if (v && stats && (!v.paused && v.playbackRate !== 0 || !v.readyState) && frag.autoLevel && frag.level) {
									var requestDelay = performance.now() - stats.trequest,
										playbackRate = Math.abs(v.playbackRate);
									if (requestDelay > 500 * frag.duration / playbackRate) {
										var levels = hls.levels,
											loadRate = Math.max(1, stats.bw ? stats.bw / 8 : stats.loaded * 1000 / requestDelay),
											level = levels[frag.level],
											levelBitrate = level.realBitrate ? Math.max(level.realBitrate, level.bitrate) : level.bitrate,
											expectedLen = stats.total ? stats.total : Math.max(stats.loaded, Math.round(frag.duration * levelBitrate / 8)),
											pos = v.currentTime,
											fragLoadedDelay = (expectedLen - stats.loaded) / loadRate,
											bufferStarvationDelay = (buffer_helper.bufferInfo(v, pos, hls.config.maxBufferHole).end - pos) / playbackRate;
										if (bufferStarvationDelay < 2 * frag.duration / playbackRate && fragLoadedDelay > bufferStarvationDelay) {
											var fragLevelNextLoadedDelay = void 0,
												nextLoadLevel = void 0;
											for (nextLoadLevel = frag.level - 1; nextLoadLevel > minAutoLevel; nextLoadLevel--) {
												var levelNextBitrate = levels[nextLoadLevel].realBitrate ? Math.max(levels[nextLoadLevel].realBitrate, levels[nextLoadLevel].bitrate) : levels[nextLoadLevel].bitrate;
												fragLevelNextLoadedDelay = frag.duration * levelNextBitrate / (8 * 0.8 * loadRate);
												if (fragLevelNextLoadedDelay < bufferStarvationDelay) {
													break
												}
											}
											if (fragLevelNextLoadedDelay < fragLoadedDelay) {
												logger["b"].warn('loading too slow, abort fragment loading and switch to level ' + nextLoadLevel + ':fragLoadedDelay[' + nextLoadLevel + ']<fragLoadedDelay[' + (frag.level - 1) + '];bufferStarvationDelay:' + fragLevelNextLoadedDelay.toFixed(1) + '<' + fragLoadedDelay.toFixed(1) + ':' + bufferStarvationDelay.toFixed(1));
												hls.nextLoadLevel = nextLoadLevel;
												this._bwEstimator.sample(requestDelay, stats.loaded);
												loader.abort();
												this.clearTimer();
												hls.trigger(events["a"].FRAG_LOAD_EMERGENCY_ABORTED, {
													frag: frag,
													stats: stats
												})
											}
										}
									}
								}
							};
							AbrController.prototype.onFragLoaded = function onFragLoaded(data) {
								var frag = data.frag;
								if (frag.type === 'main' && !isNaN(frag.sn)) {
									this.clearTimer();
									this.lastLoadedFragLevel = frag.level;
									this._nextAutoLevel = -1;
									if (this.hls.config.abrMaxWithRealBitrate) {
										var level = this.hls.levels[frag.level];
										var loadedBytes = (level.loaded ? level.loaded.bytes : 0) + data.stats.loaded;
										var loadedDuration = (level.loaded ? level.loaded.duration : 0) + data.frag.duration;
										level.loaded = {
											bytes: loadedBytes,
											duration: loadedDuration
										};
										level.realBitrate = Math.round(8 * loadedBytes / loadedDuration)
									}
									if (data.frag.bitrateTest) {
										var stats = data.stats;
										stats.tparsed = stats.tbuffered = stats.tload;
										this.onFragBuffered(data)
									}
								}
							};
							AbrController.prototype.onFragBuffered = function onFragBuffered(data) {
								var stats = data.stats,
									frag = data.frag;
								if (stats.aborted !== true && frag.type === 'main' && !isNaN(frag.sn) && (!frag.bitrateTest || stats.tload === stats.tbuffered)) {
									var fragLoadingProcessingMs = stats.tparsed - stats.trequest;
									logger["b"].log('latency/loading/parsing/append/kbps:' + Math.round(stats.tfirst - stats.trequest) + '/' + Math.round(stats.tload - stats.tfirst) + '/' + Math.round(stats.tparsed - stats.tload) + '/' + Math.round(stats.tbuffered - stats.tparsed) + '/' + Math.round(8 * stats.loaded / (stats.tbuffered - stats.trequest)));
									this._bwEstimator.sample(fragLoadingProcessingMs, stats.loaded);
									stats.bwEstimate = this._bwEstimator.getEstimate();
									if (frag.bitrateTest) this.bitrateTestDelay = fragLoadingProcessingMs / 1000;
									else this.bitrateTestDelay = 0
								}
							};
							AbrController.prototype.onError = function onError(data) {
								switch (data.details) {
									case errors["a"].FRAG_LOAD_ERROR:
									case errors["a"].FRAG_LOAD_TIMEOUT:
										this.clearTimer();
										break;
									default:
										break
								}
							};
							AbrController.prototype.clearTimer = function clearTimer() {
								clearInterval(this.timer);
								this.timer = null
							};
							AbrController.prototype._findBestLevel = function _findBestLevel(currentLevel, currentFragDuration, currentBw, minAutoLevel, maxAutoLevel, maxFetchDuration, bwFactor, bwUpFactor, levels) {
								for (var i = maxAutoLevel; i >= minAutoLevel; i--) {
									var levelInfo = levels[i],
										levelDetails = levelInfo.details,
										avgDuration = levelDetails ? levelDetails.totalduration / levelDetails.fragments.length : currentFragDuration,
										live = levelDetails ? levelDetails.live : false,
										adjustedbw = void 0;
									if (i <= currentLevel) adjustedbw = bwFactor * currentBw;
									else adjustedbw = bwUpFactor * currentBw;
									var bitrate = levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate,
										fetchDuration = bitrate * avgDuration / adjustedbw;
									logger["b"].trace('level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' + i + '/' + Math.round(adjustedbw) + '/' + bitrate + '/' + avgDuration + '/' + maxFetchDuration + '/' + fetchDuration);
									if (adjustedbw > bitrate && (!fetchDuration || live && !this.bitrateTestDelay || fetchDuration < maxFetchDuration)) {
										return i
									}
								}
								return -1
							};
							abr_controller__createClass(AbrController, [{
								key: 'nextAutoLevel',
								get: function get() {
									var forcedAutoLevel = this._nextAutoLevel;
									var bwEstimator = this._bwEstimator;
									if (forcedAutoLevel !== -1 && (!bwEstimator || !bwEstimator.canEstimate())) return forcedAutoLevel;
									var nextABRAutoLevel = this._nextABRAutoLevel;
									if (forcedAutoLevel !== -1) nextABRAutoLevel = Math.min(forcedAutoLevel, nextABRAutoLevel);
									return nextABRAutoLevel
								},
								set: function set(nextLevel) {
									this._nextAutoLevel = nextLevel
								}
							}, {
								key: '_nextABRAutoLevel',
								get: function get() {
									var hls = this.hls,
										maxAutoLevel = hls.maxAutoLevel,
										levels = hls.levels,
										config = hls.config,
										minAutoLevel = hls.minAutoLevel;
									var v = hls.media,
										currentLevel = this.lastLoadedFragLevel,
										currentFragDuration = this.fragCurrent ? this.fragCurrent.duration : 0,
										pos = v ? v.currentTime : 0,
										playbackRate = v && v.playbackRate !== 0 ? Math.abs(v.playbackRate) : 1.0,
										avgbw = this._bwEstimator ? this._bwEstimator.getEstimate() : config.abrEwmaDefaultEstimate,
										bufferStarvationDelay = (buffer_helper.bufferInfo(v, pos, config.maxBufferHole).end - pos) / playbackRate;
									var bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, config.abrBandWidthFactor, config.abrBandWidthUpFactor, levels);
									if (bestLevel >= 0) {
										return bestLevel
									} else {
										logger["b"].trace('rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering');
										var maxStarvationDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxStarvationDelay) : config.maxStarvationDelay,
											bwFactor = config.abrBandWidthFactor,
											bwUpFactor = config.abrBandWidthUpFactor;
										if (bufferStarvationDelay === 0) {
											var bitrateTestDelay = this.bitrateTestDelay;
											if (bitrateTestDelay) {
												var maxLoadingDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxLoadingDelay) : config.maxLoadingDelay;
												maxStarvationDelay = maxLoadingDelay - bitrateTestDelay;
												logger["b"].trace('bitrate test took ' + Math.round(1000 * bitrateTestDelay) + 'ms, set first fragment max fetchDuration to ' + Math.round(1000 * maxStarvationDelay) + ' ms');
												bwFactor = bwUpFactor = 1
											}
										}
										bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay + maxStarvationDelay, bwFactor, bwUpFactor, levels);
										return Math.max(bestLevel, 0)
									}
								}
							}]);
							return AbrController
						}(event_handler);
						var abr_controller = (abr_controller_AbrController);

						function buffer_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function buffer_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function buffer_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var buffer_controller_MediaSource = getMediaSource();
						var buffer_controller_BufferController = function (_EventHandler) {
							buffer_controller__inherits(BufferController, _EventHandler);

							function BufferController(hls) {
								buffer_controller__classCallCheck(this, BufferController);
								var _this = buffer_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHING, events["a"].MEDIA_DETACHING, events["a"].MANIFEST_PARSED, events["a"].BUFFER_RESET, events["a"].BUFFER_APPENDING, events["a"].BUFFER_CODECS, events["a"].BUFFER_EOS, events["a"].BUFFER_FLUSHING, events["a"].LEVEL_PTS_UPDATED, events["a"].LEVEL_UPDATED));
								_this._msDuration = null;
								_this._levelDuration = null;
								_this._live = null;
								_this._objectUrl = null;
								_this.onsbue = _this.onSBUpdateEnd.bind(_this);
								_this.onsbe = _this.onSBUpdateError.bind(_this);
								_this.pendingTracks = {};
								_this.tracks = {};
								return _this
							}
							BufferController.prototype.destroy = function destroy() {
								event_handler.prototype.destroy.call(this)
							};
							BufferController.prototype.onLevelPtsUpdated = function onLevelPtsUpdated(data) {
								var type = data.type;
								var audioTrack = this.tracks.audio;
								if (type === 'audio' && audioTrack && audioTrack.container === 'audio/mpeg') {
									var audioBuffer = this.sourceBuffer.audio;
									var delta = Math.abs(audioBuffer.timestampOffset - data.start);
									if (delta > 0.1) {
										var updating = audioBuffer.updating;
										try {
											audioBuffer.abort()
										} catch (err) {
											updating = true;
											logger["b"].warn('can not abort audio buffer: ' + err)
										}
										if (!updating) {
											logger["b"].warn('change mpeg audio timestamp offset from ' + audioBuffer.timestampOffset + ' to ' + data.start);
											audioBuffer.timestampOffset = data.start
										} else {
											this.audioTimestampOffset = data.start
										}
									}
								}
							};
							BufferController.prototype.onManifestParsed = function onManifestParsed(data) {
								var audioExpected = data.audio,
									videoExpected = data.video || data.levels.length && data.audio,
									sourceBufferNb = 0;
								if (data.altAudio && (audioExpected || videoExpected)) {
									sourceBufferNb = (audioExpected ? 1 : 0) + (videoExpected ? 1 : 0);
									logger["b"].log(sourceBufferNb + ' sourceBuffer(s) expected')
								}
								this.sourceBufferNb = sourceBufferNb
							};
							BufferController.prototype.onMediaAttaching = function onMediaAttaching(data) {
								var media = this.media = data.media;
								if (media) {
									var ms = this.mediaSource = new buffer_controller_MediaSource();
									this.onmso = this.onMediaSourceOpen.bind(this);
									this.onmse = this.onMediaSourceEnded.bind(this);
									this.onmsc = this.onMediaSourceClose.bind(this);
									ms.addEventListener('sourceopen', this.onmso);
									ms.addEventListener('sourceended', this.onmse);
									ms.addEventListener('sourceclose', this.onmsc);
									media.src = URL.createObjectURL(ms);
									this._objectUrl = media.src
								}
							};
							BufferController.prototype.onMediaDetaching = function onMediaDetaching() {
								logger["b"].log('media source detaching');
								var ms = this.mediaSource;
								if (ms) {
									if (ms.readyState === 'open') {
										try {
											ms.endOfStream()
										} catch (err) {
											logger["b"].warn('onMediaDetaching:' + err.message + ' while calling endOfStream')
										}
									}
									ms.removeEventListener('sourceopen', this.onmso);
									ms.removeEventListener('sourceended', this.onmse);
									ms.removeEventListener('sourceclose', this.onmsc);
									if (this.media) {
										URL.revokeObjectURL(this._objectUrl);
										if (this.media.src === this._objectUrl) {
											this.media.removeAttribute('src');
											this.media.load()
										} else {
											logger["b"].warn('media.src was changed by a third party - skip cleanup')
										}
									}
									this.mediaSource = null;
									this.media = null;
									this._objectUrl = null;
									this.pendingTracks = {};
									this.tracks = {};
									this.sourceBuffer = {};
									this.flushRange = [];
									this.segments = [];
									this.appended = 0
								}
								this.onmso = this.onmse = this.onmsc = null;
								this.hls.trigger(events["a"].MEDIA_DETACHED)
							};
							BufferController.prototype.onMediaSourceOpen = function onMediaSourceOpen() {
								logger["b"].log('media source opened');
								this.hls.trigger(events["a"].MEDIA_ATTACHED, {
									media: this.media
								});
								var mediaSource = this.mediaSource;
								if (mediaSource) {
									mediaSource.removeEventListener('sourceopen', this.onmso)
								}
								this.checkPendingTracks()
							};
							BufferController.prototype.checkPendingTracks = function checkPendingTracks() {
								var pendingTracks = this.pendingTracks,
									pendingTracksNb = Object.keys(pendingTracks).length;
								if (pendingTracksNb && (this.sourceBufferNb <= pendingTracksNb || this.sourceBufferNb === 0)) {
									this.createSourceBuffers(pendingTracks);
									this.pendingTracks = {};
									this.doAppending()
								}
							};
							BufferController.prototype.onMediaSourceClose = function onMediaSourceClose() {
								logger["b"].log('media source closed')
							};
							BufferController.prototype.onMediaSourceEnded = function onMediaSourceEnded() {
								logger["b"].log('media source ended')
							};
							BufferController.prototype.onSBUpdateEnd = function onSBUpdateEnd() {
								if (this.audioTimestampOffset) {
									var audioBuffer = this.sourceBuffer.audio;
									logger["b"].warn('change mpeg audio timestamp offset from ' + audioBuffer.timestampOffset + ' to ' + this.audioTimestampOffset);
									audioBuffer.timestampOffset = this.audioTimestampOffset;
									delete this.audioTimestampOffset
								}
								if (this._needsFlush) this.doFlush();
								if (this._needsEos) this.checkEos();
								this.appending = false;
								var parent = this.parent;
								var pending = this.segments.reduce(function (counter, segment) {
									return segment.parent === parent ? counter + 1 : counter
								}, 0);
								var timeRanges = {};
								var sourceBuffer = this.sourceBuffer;
								for (var streamType in sourceBuffer) {
									timeRanges[streamType] = sourceBuffer[streamType].buffered
								}
								this.hls.trigger(events["a"].BUFFER_APPENDED, {
									parent: parent,
									pending: pending,
									timeRanges: timeRanges
								});
								if (!this._needsFlush) this.doAppending();
								this.updateMediaElementDuration()
							};
							BufferController.prototype.onSBUpdateError = function onSBUpdateError(event) {
								logger["b"].error('sourceBuffer error:', event);
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].MEDIA_ERROR,
									details: errors["a"].BUFFER_APPENDING_ERROR,
									fatal: false
								})
							};
							BufferController.prototype.onBufferReset = function onBufferReset() {
								var sourceBuffer = this.sourceBuffer;
								for (var type in sourceBuffer) {
									var sb = sourceBuffer[type];
									try {
										this.mediaSource.removeSourceBuffer(sb);
										sb.removeEventListener('updateend', this.onsbue);
										sb.removeEventListener('error', this.onsbe)
									} catch (err) { }
								}
								this.sourceBuffer = {};
								this.flushRange = [];
								this.segments = [];
								this.appended = 0
							};
							BufferController.prototype.onBufferCodecs = function onBufferCodecs(tracks) {
								if (Object.keys(this.sourceBuffer).length === 0) {
									for (var trackName in tracks) {
										this.pendingTracks[trackName] = tracks[trackName]
									}
									var mediaSource = this.mediaSource;
									if (mediaSource && mediaSource.readyState === 'open') {
										this.checkPendingTracks()
									}
								}
							};
							BufferController.prototype.createSourceBuffers = function createSourceBuffers(tracks) {
								var sourceBuffer = this.sourceBuffer,
									mediaSource = this.mediaSource;
								for (var trackName in tracks) {
									if (!sourceBuffer[trackName]) {
										var track = tracks[trackName];
										var codec = track.levelCodec || track.codec;
										var mimeType = track.container + ';codecs=' + codec;
										logger["b"].log('creating sourceBuffer(' + mimeType + ')');
										try {
											var sb = sourceBuffer[trackName] = mediaSource.addSourceBuffer(mimeType);
											sb.addEventListener('updateend', this.onsbue);
											sb.addEventListener('error', this.onsbe);
											this.tracks[trackName] = {
												codec: codec,
												container: track.container
											};
											track.buffer = sb
										} catch (err) {
											logger["b"].error('error while trying to add sourceBuffer:' + err.message);
											this.hls.trigger(events["a"].ERROR, {
												type: errors["b"].MEDIA_ERROR,
												details: errors["a"].BUFFER_ADD_CODEC_ERROR,
												fatal: false,
												err: err,
												mimeType: mimeType
											})
										}
									}
								}
								this.hls.trigger(events["a"].BUFFER_CREATED, {
									tracks: tracks
								})
							};
							BufferController.prototype.onBufferAppending = function onBufferAppending(data) {
								if (!this._needsFlush) {
									if (!this.segments) this.segments = [data];
									else this.segments.push(data);
									this.doAppending()
								}
							};
							BufferController.prototype.onBufferAppendFail = function onBufferAppendFail(data) {
								logger["b"].error('sourceBuffer error:', data.event);
								this.hls.trigger(events["a"].ERROR, {
									type: errors["b"].MEDIA_ERROR,
									details: errors["a"].BUFFER_APPENDING_ERROR,
									fatal: false
								})
							};
							BufferController.prototype.onBufferEos = function onBufferEos(data) {
								var sb = this.sourceBuffer;
								var dataType = data.type;
								for (var type in sb) {
									if (!dataType || type === dataType) {
										if (!sb[type].ended) {
											sb[type].ended = true;
											logger["b"].log(type + ' sourceBuffer now EOS')
										}
									}
								}
								this.checkEos()
							};
							BufferController.prototype.checkEos = function checkEos() {
								var sb = this.sourceBuffer,
									mediaSource = this.mediaSource;
								if (!mediaSource || mediaSource.readyState !== 'open') {
									this._needsEos = false;
									return
								}
								for (var type in sb) {
									var sbobj = sb[type];
									if (!sbobj.ended) return;
									if (sbobj.updating) {
										this._needsEos = true;
										return
									}
								}
								logger["b"].log('all media data available, signal endOfStream() to MediaSource and stop loading fragment');
								try {
									mediaSource.endOfStream()
								} catch (e) {
									logger["b"].warn('exception while calling mediaSource.endOfStream()')
								}
								this._needsEos = false
							};
							BufferController.prototype.onBufferFlushing = function onBufferFlushing(data) {
								this.flushRange.push({
									start: data.startOffset,
									end: data.endOffset,
									type: data.type
								});
								this.flushBufferCounter = 0;
								this.doFlush()
							};
							BufferController.prototype.onLevelUpdated = function onLevelUpdated(_ref) {
								var details = _ref.details;
								if (details.fragments.length > 0) {
									this._levelDuration = details.totalduration + details.fragments[0].start;
									this._live = details.live;
									this.updateMediaElementDuration()
								}
							};
							BufferController.prototype.updateMediaElementDuration = function updateMediaElementDuration() {
								var config = this.hls.config;
								var duration = void 0;
								if (this._levelDuration === null || !this.media || !this.mediaSource || !this.sourceBuffer || this.media.readyState === 0 || this.mediaSource.readyState !== 'open') return;
								for (var type in this.sourceBuffer) {
									if (this.sourceBuffer[type].updating === true) {
										return
									}
								}
								duration = this.media.duration;
								if (this._msDuration === null) this._msDuration = this.mediaSource.duration;
								if (this._live === true && config.liveDurationInfinity === true) {
									logger["b"].log('Media Source duration is set to Infinity');
									this._msDuration = this.mediaSource.duration = Infinity
								} else if (this._levelDuration > this._msDuration && this._levelDuration > duration || duration === Infinity || isNaN(duration)) {
									logger["b"].log('Updating Media Source duration to ' + this._levelDuration.toFixed(3));
									this._msDuration = this.mediaSource.duration = this._levelDuration
								}
							};
							BufferController.prototype.doFlush = function doFlush() {
								while (this.flushRange.length) {
									var range = this.flushRange[0];
									if (this.flushBuffer(range.start, range.end, range.type)) {
										this.flushRange.shift();
										this.flushBufferCounter = 0
									} else {
										this._needsFlush = true;
										return
									}
								}
								if (this.flushRange.length === 0) {
									this._needsFlush = false;
									var appended = 0;
									var sourceBuffer = this.sourceBuffer;
									try {
										for (var type in sourceBuffer) {
											appended += sourceBuffer[type].buffered.length
										}
									} catch (error) {
										logger["b"].error('error while accessing sourceBuffer.buffered')
									}
									this.appended = appended;
									this.hls.trigger(events["a"].BUFFER_FLUSHED)
								}
							};
							BufferController.prototype.doAppending = function doAppending() {
								var hls = this.hls,
									sourceBuffer = this.sourceBuffer,
									segments = this.segments;
								if (Object.keys(sourceBuffer).length) {
									if (this.media.error) {
										this.segments = [];
										logger["b"].error('trying to append although a media error occured, flush segment and abort');
										return
									}
									if (this.appending) {
										return
									}
									if (segments && segments.length) {
										var segment = segments.shift();
										try {
											var type = segment.type,
												sb = sourceBuffer[type];
											if (sb) {
												if (!sb.updating) {
													sb.ended = false;
													this.parent = segment.parent;
													sb.appendBuffer(segment.data);
													this.appendError = 0;
													this.appended++;
													this.appending = true
												} else {
													segments.unshift(segment)
												}
											} else {
												this.onSBUpdateEnd()
											}
										} catch (err) {
											logger["b"].error('error while trying to append buffer:' + err.message);
											segments.unshift(segment);
											var event = {
												type: errors["b"].MEDIA_ERROR,
												parent: segment.parent
											};
											if (err.code !== 22) {
												if (this.appendError) this.appendError++;
												else this.appendError = 1;
												event.details = errors["a"].BUFFER_APPEND_ERROR;
												if (this.appendError > hls.config.appendErrorMaxRetry) {
													logger["b"].log('fail ' + hls.config.appendErrorMaxRetry + ' times to append segment in sourceBuffer');
													segments = [];
													event.fatal = true;
													hls.trigger(events["a"].ERROR, event)
												} else {
													event.fatal = false;
													hls.trigger(events["a"].ERROR, event)
												}
											} else {
												this.segments = [];
												event.details = errors["a"].BUFFER_FULL_ERROR;
												event.fatal = false;
												hls.trigger(events["a"].ERROR, event)
											}
										}
									}
								}
							};
							BufferController.prototype.flushBuffer = function flushBuffer(startOffset, endOffset, typeIn) {
								var sb = void 0,
									i = void 0,
									bufStart = void 0,
									bufEnd = void 0,
									flushStart = void 0,
									flushEnd = void 0,
									sourceBuffer = this.sourceBuffer;
								if (Object.keys(sourceBuffer).length) {
									logger["b"].log('flushBuffer,pos/start/end: ' + this.media.currentTime.toFixed(3) + '/' + startOffset + '/' + endOffset);
									if (this.flushBufferCounter < this.appended) {
										for (var type in sourceBuffer) {
											if (typeIn && type !== typeIn) continue;
											sb = sourceBuffer[type];
											sb.ended = false;
											if (!sb.updating) {
												try {
													for (i = 0; i < sb.buffered.length; i++) {
														bufStart = sb.buffered.start(i);
														bufEnd = sb.buffered.end(i);
														if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 && endOffset === Number.POSITIVE_INFINITY) {
															flushStart = startOffset;
															flushEnd = endOffset
														} else {
															flushStart = Math.max(bufStart, startOffset);
															flushEnd = Math.min(bufEnd, endOffset)
														} if (Math.min(flushEnd, bufEnd) - flushStart > 0.5) {
															this.flushBufferCounter++;
															logger["b"].log('flush ' + type + ' [' + flushStart + ',' + flushEnd + '], of [' + bufStart + ',' + bufEnd + '], pos:' + this.media.currentTime);
															sb.remove(flushStart, flushEnd);
															return false
														}
													}
												} catch (e) {
													logger["b"].warn('exception while accessing sourcebuffer, it might have been removed from MediaSource')
												}
											} else {
												logger["b"].warn('cannot flush, sb updating in progress');
												return false
											}
										}
									} else {
										logger["b"].warn('abort flushing too many retries')
									}
									logger["b"].log('buffer flushed')
								}
								return true
							};
							return BufferController
						}(event_handler);
						var buffer_controller = (buffer_controller_BufferController);
						var cap_level_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function cap_level_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function cap_level_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function cap_level_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var cap_level_controller_CapLevelController = function (_EventHandler) {
							cap_level_controller__inherits(CapLevelController, _EventHandler);

							function CapLevelController(hls) {
								cap_level_controller__classCallCheck(this, CapLevelController);
								return cap_level_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].FPS_DROP_LEVEL_CAPPING, events["a"].MEDIA_ATTACHING, events["a"].MANIFEST_PARSED))
							}
							CapLevelController.prototype.destroy = function destroy() {
								if (this.hls.config.capLevelToPlayerSize) {
									this.media = this.restrictedLevels = null;
									this.autoLevelCapping = Number.POSITIVE_INFINITY;
									if (this.timer) this.timer = clearInterval(this.timer)
								}
							};
							CapLevelController.prototype.onFpsDropLevelCapping = function onFpsDropLevelCapping(data) {
								if (CapLevelController.isLevelAllowed(data.droppedLevel, this.restrictedLevels)) this.restrictedLevels.push(data.droppedLevel)
							};
							CapLevelController.prototype.onMediaAttaching = function onMediaAttaching(data) {
								this.media = data.media instanceof HTMLVideoElement ? data.media : null
							};
							CapLevelController.prototype.onManifestParsed = function onManifestParsed(data) {
								var hls = this.hls;
								this.restrictedLevels = [];
								if (hls.config.capLevelToPlayerSize) {
									this.autoLevelCapping = Number.POSITIVE_INFINITY;
									this.levels = data.levels;
									hls.firstLevel = this.getMaxLevel(data.firstLevel);
									clearInterval(this.timer);
									this.timer = setInterval(this.detectPlayerSize.bind(this), 1000);
									this.detectPlayerSize()
								}
							};
							CapLevelController.prototype.detectPlayerSize = function detectPlayerSize() {
								if (this.media) {
									var levelsLength = this.levels ? this.levels.length : 0;
									if (levelsLength) {
										var hls = this.hls;
										hls.autoLevelCapping = this.getMaxLevel(levelsLength - 1);
										if (hls.autoLevelCapping > this.autoLevelCapping) {
											hls.streamController.nextLevelSwitch()
										}
										this.autoLevelCapping = hls.autoLevelCapping
									}
								}
							};
							CapLevelController.prototype.getMaxLevel = function getMaxLevel(capLevelIndex) {
								var _this2 = this;
								if (!this.levels) return -1;
								var validLevels = this.levels.filter(function (level, index) {
									return CapLevelController.isLevelAllowed(index, _this2.restrictedLevels) && index <= capLevelIndex
								});
								return CapLevelController.getMaxLevelByMediaSize(validLevels, this.mediaWidth, this.mediaHeight)
							};
							CapLevelController.isLevelAllowed = function isLevelAllowed(level) {
								var restrictedLevels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
								return restrictedLevels.indexOf(level) === -1
							};
							CapLevelController.getMaxLevelByMediaSize = function getMaxLevelByMediaSize(levels, width, height) {
								if (!levels || levels && !levels.length) return -1;
								var atGreatestBandiwdth = function atGreatestBandiwdth(curLevel, nextLevel) {
									if (!nextLevel) return true;
									return curLevel.width !== nextLevel.width || curLevel.height !== nextLevel.height
								};
								var maxLevelIndex = levels.length - 1;
								for (var i = 0; i < levels.length; i += 1) {
									var level = levels[i];
									if ((level.width >= width || level.height >= height) && atGreatestBandiwdth(level, levels[i + 1])) {
										maxLevelIndex = i;
										break
									}
								}
								return maxLevelIndex
							};
							cap_level_controller__createClass(CapLevelController, [{
								key: 'mediaWidth',
								get: function get() {
									var width = void 0;
									var media = this.media;
									if (media) {
										width = media.width || media.clientWidth || media.offsetWidth;
										width *= CapLevelController.contentScaleFactor
									}
									return width
								}
							}, {
								key: 'mediaHeight',
								get: function get() {
									var height = void 0;
									var media = this.media;
									if (media) {
										height = media.height || media.clientHeight || media.offsetHeight;
										height *= CapLevelController.contentScaleFactor
									}
									return height
								}
							}], [{
								key: 'contentScaleFactor',
								get: function get() {
									var pixelRatio = 1;
									try {
										pixelRatio = window.devicePixelRatio
									} catch (e) { }
									return pixelRatio
								}
							}]);
							return CapLevelController
						}(event_handler);
						var cap_level_controller = (cap_level_controller_CapLevelController);

						function fps_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function fps_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function fps_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var fps_controller_FPSController = function (_EventHandler) {
							fps_controller__inherits(FPSController, _EventHandler);

							function FPSController(hls) {
								fps_controller__classCallCheck(this, FPSController);
								return fps_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHING))
							}
							FPSController.prototype.destroy = function destroy() {
								if (this.timer) clearInterval(this.timer);
								this.isVideoPlaybackQualityAvailable = false
							};
							FPSController.prototype.onMediaAttaching = function onMediaAttaching(data) {
								var config = this.hls.config;
								if (config.capLevelOnFPSDrop) {
									var video = this.video = data.media instanceof HTMLVideoElement ? data.media : null;
									if (typeof video.getVideoPlaybackQuality === 'function') this.isVideoPlaybackQualityAvailable = true;
									clearInterval(this.timer);
									this.timer = setInterval(this.checkFPSInterval.bind(this), config.fpsDroppedMonitoringPeriod)
								}
							};
							FPSController.prototype.checkFPS = function checkFPS(video, decodedFrames, droppedFrames) {
								var currentTime = performance.now();
								if (decodedFrames) {
									if (this.lastTime) {
										var currentPeriod = currentTime - this.lastTime,
											currentDropped = droppedFrames - this.lastDroppedFrames,
											currentDecoded = decodedFrames - this.lastDecodedFrames,
											droppedFPS = 1000 * currentDropped / currentPeriod,
											hls = this.hls;
										hls.trigger(events["a"].FPS_DROP, {
											currentDropped: currentDropped,
											currentDecoded: currentDecoded,
											totalDroppedFrames: droppedFrames
										});
										if (droppedFPS > 0) {
											if (currentDropped > hls.config.fpsDroppedMonitoringThreshold * currentDecoded) {
												var currentLevel = hls.currentLevel;
												logger["b"].warn('drop FPS ratio greater than max allowed value for currentLevel: ' + currentLevel);
												if (currentLevel > 0 && (hls.autoLevelCapping === -1 || hls.autoLevelCapping >= currentLevel)) {
													currentLevel = currentLevel - 1;
													hls.trigger(events["a"].FPS_DROP_LEVEL_CAPPING, {
														level: currentLevel,
														droppedLevel: hls.currentLevel
													});
													hls.autoLevelCapping = currentLevel;
													hls.streamController.nextLevelSwitch()
												}
											}
										}
									}
									this.lastTime = currentTime;
									this.lastDroppedFrames = droppedFrames;
									this.lastDecodedFrames = decodedFrames
								}
							};
							FPSController.prototype.checkFPSInterval = function checkFPSInterval() {
								var video = this.video;
								if (video) {
									if (this.isVideoPlaybackQualityAvailable) {
										var videoPlaybackQuality = video.getVideoPlaybackQuality();
										this.checkFPS(video, videoPlaybackQuality.totalVideoFrames, videoPlaybackQuality.droppedVideoFrames)
									} else {
										this.checkFPS(video, video.webkitDecodedFrameCount, video.webkitDroppedFrameCount)
									}
								}
							};
							return FPSController
						}(event_handler);
						var fps_controller = (fps_controller_FPSController);

						function xhr_loader__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var xhr_loader_XhrLoader = function () {
							function XhrLoader(config) {
								xhr_loader__classCallCheck(this, XhrLoader);
								if (config && config.xhrSetup) this.xhrSetup = config.xhrSetup
							}
							XhrLoader.prototype.destroy = function destroy() {
								this.abort();
								this.loader = null
							};
							XhrLoader.prototype.abort = function abort() {
								var loader = this.loader;
								if (loader && loader.readyState !== 4) {
									this.stats.aborted = true;
									loader.abort()
								}
								window.clearTimeout(this.requestTimeout);
								this.requestTimeout = null;
								window.clearTimeout(this.retryTimeout);
								this.retryTimeout = null
							};
							XhrLoader.prototype.load = function load(context, config, callbacks) {
								this.context = context;
								this.config = config;
								this.callbacks = callbacks;
								this.stats = {
									trequest: performance.now(),
									retry: 0
								};
								this.retryDelay = config.retryDelay;
								this.loadInternal()
							};
							XhrLoader.prototype.loadInternal = function loadInternal() {
								var xhr = void 0,
									context = this.context;
								xhr = this.loader = new XMLHttpRequest();
								var stats = this.stats;
								stats.tfirst = 0;
								stats.loaded = 0;
								var xhrSetup = this.xhrSetup;
								try {
									if (xhrSetup) {
										try {
											xhrSetup(xhr, context.url)
										} catch (e) {
											xhr.open('GET', context.url, true);
											xhrSetup(xhr, context.url)
										}
									}
									if (!xhr.readyState) xhr.open('GET', context.url, true)
								} catch (e) {
									this.callbacks.onError({
										code: xhr.status,
										text: e.message
									}, context, xhr);
									return
								}
								if (context.rangeEnd) xhr.setRequestHeader('Range', 'bytes=' + context.rangeStart + '-' + (context.rangeEnd - 1));
								xhr.onreadystatechange = this.readystatechange.bind(this);
								xhr.onprogress = this.loadprogress.bind(this);
								xhr.responseType = context.responseType;
								this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout);
								xhr.send()
							};
							XhrLoader.prototype.readystatechange = function readystatechange(event) {
								var xhr = event.currentTarget,
									readyState = xhr.readyState,
									stats = this.stats,
									context = this.context,
									config = this.config;
								if (stats.aborted) return;
								if (readyState >= 2) {
									window.clearTimeout(this.requestTimeout);
									if (stats.tfirst === 0) stats.tfirst = Math.max(performance.now(), stats.trequest);
									if (readyState === 4) {
										var status = xhr.status;
										if (status >= 200 && status < 300) {
											stats.tload = Math.max(stats.tfirst, performance.now());
											var data = void 0,
												len = void 0;
											if (context.responseType === 'arraybuffer') {
												data = xhr.response;
												len = data.byteLength
											} else {
												data = xhr.responseText;
												len = data.length
											}
											stats.loaded = stats.total = len;
											var response = {
												url: xhr.responseURL,
												data: data
											};
											this.callbacks.onSuccess(response, stats, context, xhr)
										} else {
											if (stats.retry >= config.maxRetry || status >= 400 && status < 499) {
												logger["b"].error(status + ' while loading ' + context.url);
												this.callbacks.onError({
													code: status,
													text: xhr.statusText
												}, context, xhr)
											} else {
												logger["b"].warn(status + ' while loading ' + context.url + ', retrying in ' + this.retryDelay + '...');
												this.destroy();
												this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay);
												this.retryDelay = Math.min(2 * this.retryDelay, config.maxRetryDelay);
												stats.retry++
											}
										}
									} else {
										this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), config.timeout)
									}
								}
							};
							XhrLoader.prototype.loadtimeout = function loadtimeout() {
								logger["b"].warn('timeout while loading ' + this.context.url);
								this.callbacks.onTimeout(this.stats, this.context, null)
							};
							XhrLoader.prototype.loadprogress = function loadprogress(event) {
								var xhr = event.currentTarget,
									stats = this.stats;
								stats.loaded = event.loaded;
								if (event.lengthComputable) stats.total = event.total;
								var onProgress = this.callbacks.onProgress;
								if (onProgress) {
									onProgress(stats, this.context, null, xhr)
								}
							};
							return XhrLoader
						}();
						var xhr_loader = (xhr_loader_XhrLoader);
						var audio_track_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function audio_track_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function audio_track_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function audio_track_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var audio_track_controller_AudioTrackController = function (_EventHandler) {
							audio_track_controller__inherits(AudioTrackController, _EventHandler);

							function AudioTrackController(hls) {
								audio_track_controller__classCallCheck(this, AudioTrackController);
								var _this = audio_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MANIFEST_LOADING, events["a"].MANIFEST_PARSED, events["a"].AUDIO_TRACK_LOADED, events["a"].ERROR));
								_this.ticks = 0;
								_this.ontick = _this.tick.bind(_this);
								return _this
							}
							AudioTrackController.prototype.destroy = function destroy() {
								this.cleanTimer();
								event_handler.prototype.destroy.call(this)
							};
							AudioTrackController.prototype.cleanTimer = function cleanTimer() {
								if (this.timer) {
									clearTimeout(this.timer);
									this.timer = null
								}
							};
							AudioTrackController.prototype.tick = function tick() {
								this.ticks++;
								if (this.ticks === 1) {
									this.doTick();
									if (this.ticks > 1) setTimeout(this.tick, 1);
									this.ticks = 0
								}
							};
							AudioTrackController.prototype.doTick = function doTick() {
								this.updateTrack(this.trackId)
							};
							AudioTrackController.prototype.onError = function onError(data) {
								if (data.fatal && data.type === errors["b"].NETWORK_ERROR) this.cleanTimer()
							};
							AudioTrackController.prototype.onManifestLoading = function onManifestLoading() {
								this.tracks = [];
								this.trackId = -1
							};
							AudioTrackController.prototype.onManifestParsed = function onManifestParsed(data) {
								var _this2 = this;
								var tracks = data.audioTracks || [];
								var defaultFound = false;
								this.tracks = tracks;
								this.hls.trigger(events["a"].AUDIO_TRACKS_UPDATED, {
									audioTracks: tracks
								});
								var id = 0;
								tracks.forEach(function (track) {
									if (track.default && !defaultFound) {
										_this2.audioTrack = id;
										defaultFound = true;
										return
									}
									id++
								});
								if (defaultFound === false && tracks.length) {
									logger["b"].log('no default audio track defined, use first audio track as default');
									this.audioTrack = 0
								}
							};
							AudioTrackController.prototype.onAudioTrackLoaded = function onAudioTrackLoaded(data) {
								if (data.id < this.tracks.length) {
									logger["b"].log('audioTrack ' + data.id + ' loaded');
									this.tracks[data.id].details = data.details;
									if (data.details.live && !this.timer) {
										this.timer = setInterval(this.ontick, 1000 * data.details.targetduration)
									}
									if (!data.details.live && this.timer) {
										this.cleanTimer()
									}
								}
							};
							AudioTrackController.prototype.setAudioTrackInternal = function setAudioTrackInternal(newId) {
								if (newId >= 0 && newId < this.tracks.length) {
									this.cleanTimer();
									this.trackId = newId;
									logger["b"].log('switching to audioTrack ' + newId);
									var audioTrack = this.tracks[newId],
										hls = this.hls,
										type = audioTrack.type,
										url = audioTrack.url,
										eventObj = {
											id: newId,
											type: type,
											url: url
										};
									hls.trigger(events["a"].AUDIO_TRACK_SWITCHING, eventObj);
									var details = audioTrack.details;
									if (url && (details === undefined || details.live === true)) {
										logger["b"].log('(re)loading playlist for audioTrack ' + newId);
										hls.trigger(events["a"].AUDIO_TRACK_LOADING, {
											url: url,
											id: newId
										})
									}
								}
							};
							AudioTrackController.prototype.updateTrack = function updateTrack(newId) {
								if (newId >= 0 && newId < this.tracks.length) {
									this.cleanTimer();
									this.trackId = newId;
									logger["b"].log('updating audioTrack ' + newId);
									var audioTrack = this.tracks[newId],
										url = audioTrack.url;
									var details = audioTrack.details;
									if (url && (details === undefined || details.live === true)) {
										logger["b"].log('(re)loading playlist for audioTrack ' + newId);
										this.hls.trigger(events["a"].AUDIO_TRACK_LOADING, {
											url: url,
											id: newId
										})
									}
								}
							};
							audio_track_controller__createClass(AudioTrackController, [{
								key: 'audioTracks',
								get: function get() {
									return this.tracks
								}
							}, {
								key: 'audioTrack',
								get: function get() {
									return this.trackId
								},
								set: function set(audioTrackId) {
									if (this.trackId !== audioTrackId || this.tracks[audioTrackId].details === undefined) this.setAudioTrackInternal(audioTrackId)
								}
							}]);
							return AudioTrackController
						}(event_handler);
						var audio_track_controller = (audio_track_controller_AudioTrackController);
						var audio_stream_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function audio_stream_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function audio_stream_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function audio_stream_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var audio_stream_controller_State = {
							STOPPED: 'STOPPED',
							STARTING: 'STARTING',
							IDLE: 'IDLE',
							PAUSED: 'PAUSED',
							KEY_LOADING: 'KEY_LOADING',
							FRAG_LOADING: 'FRAG_LOADING',
							FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
							WAITING_TRACK: 'WAITING_TRACK',
							PARSING: 'PARSING',
							PARSED: 'PARSED',
							BUFFER_FLUSHING: 'BUFFER_FLUSHING',
							ENDED: 'ENDED',
							ERROR: 'ERROR',
							WAITING_INIT_PTS: 'WAITING_INIT_PTS'
						};
						var audio_stream_controller_AudioStreamController = function (_TaskLoop) {
							audio_stream_controller__inherits(AudioStreamController, _TaskLoop);

							function AudioStreamController(hls, fragmentTracker) {
								audio_stream_controller__classCallCheck(this, AudioStreamController);
								var _this = audio_stream_controller__possibleConstructorReturn(this, _TaskLoop.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].MEDIA_DETACHING, events["a"].AUDIO_TRACKS_UPDATED, events["a"].AUDIO_TRACK_SWITCHING, events["a"].AUDIO_TRACK_LOADED, events["a"].KEY_LOADED, events["a"].FRAG_LOADED, events["a"].FRAG_PARSING_INIT_SEGMENT, events["a"].FRAG_PARSING_DATA, events["a"].FRAG_PARSED, events["a"].ERROR, events["a"].BUFFER_RESET, events["a"].BUFFER_CREATED, events["a"].BUFFER_APPENDED, events["a"].BUFFER_FLUSHED, events["a"].INIT_PTS_FOUND));
								_this.fragmentTracker = fragmentTracker;
								_this.config = hls.config;
								_this.audioCodecSwap = false;
								_this._state = audio_stream_controller_State.STOPPED;
								_this.initPTS = [];
								_this.waitingFragment = null;
								_this.videoTrackCC = null;
								return _this
							}
							AudioStreamController.prototype.onHandlerDestroying = function onHandlerDestroying() {
								this.stopLoad()
							};
							AudioStreamController.prototype.onHandlerDestroyed = function onHandlerDestroyed() {
								this.state = audio_stream_controller_State.STOPPED;
								this.fragmentTracker = null
							};
							AudioStreamController.prototype.onInitPtsFound = function onInitPtsFound(data) {
								var demuxerId = data.id,
									cc = data.frag.cc,
									initPTS = data.initPTS;
								if (demuxerId === 'main') {
									this.initPTS[cc] = initPTS;
									this.videoTrackCC = cc;
									logger["b"].log('InitPTS for cc: ' + cc + ' found from video track: ' + initPTS);
									if (this.state === audio_stream_controller_State.WAITING_INIT_PTS) this.tick()
								}
							};
							AudioStreamController.prototype.startLoad = function startLoad(startPosition) {
								if (this.tracks) {
									var lastCurrentTime = this.lastCurrentTime;
									this.stopLoad();
									this.setInterval(100);
									this.fragLoadError = 0;
									if (lastCurrentTime > 0 && startPosition === -1) {
										logger["b"].log('audio:override startPosition with lastCurrentTime @' + lastCurrentTime.toFixed(3));
										this.state = audio_stream_controller_State.IDLE
									} else {
										this.lastCurrentTime = this.startPosition ? this.startPosition : startPosition;
										this.state = audio_stream_controller_State.STARTING
									}
									this.nextLoadPosition = this.startPosition = this.lastCurrentTime;
									this.tick()
								} else {
									this.startPosition = startPosition;
									this.state = audio_stream_controller_State.STOPPED
								}
							};
							AudioStreamController.prototype.stopLoad = function stopLoad() {
								var frag = this.fragCurrent;
								if (frag) {
									if (frag.loader) frag.loader.abort();
									this.fragmentTracker.removeFragment(frag);
									this.fragCurrent = null
								}
								this.fragPrevious = null;
								if (this.demuxer) {
									this.demuxer.destroy();
									this.demuxer = null
								}
								this.state = audio_stream_controller_State.STOPPED
							};
							AudioStreamController.prototype.doTick = function doTick() {
								var pos = void 0,
									track = void 0,
									trackDetails = void 0,
									hls = this.hls,
									config = hls.config;
								switch (this.state) {
									case audio_stream_controller_State.ERROR:
									case audio_stream_controller_State.PAUSED:
									case audio_stream_controller_State.BUFFER_FLUSHING:
										break;
									case audio_stream_controller_State.STARTING:
										this.state = audio_stream_controller_State.WAITING_TRACK;
										this.loadedmetadata = false;
										break;
									case audio_stream_controller_State.IDLE:
										var tracks = this.tracks;
										if (!tracks) break;
										if (!this.media && (this.startFragRequested || !config.startFragPrefetch)) break;
										if (this.loadedmetadata) {
											pos = this.media.currentTime
										} else {
											pos = this.nextLoadPosition;
											if (pos === undefined) break
										}
										var media = this.mediaBuffer ? this.mediaBuffer : this.media,
											videoBuffer = this.videoBuffer ? this.videoBuffer : this.media,
											bufferInfo = buffer_helper.bufferInfo(media, pos, config.maxBufferHole),
											mainBufferInfo = buffer_helper.bufferInfo(videoBuffer, pos, config.maxBufferHole),
											bufferLen = bufferInfo.len,
											bufferEnd = bufferInfo.end,
											fragPrevious = this.fragPrevious,
											maxConfigBuffer = Math.min(config.maxBufferLength, config.maxMaxBufferLength),
											maxBufLen = Math.max(maxConfigBuffer, mainBufferInfo.len),
											audioSwitch = this.audioSwitch,
											trackId = this.trackId;
										if ((bufferLen < maxBufLen || audioSwitch) && trackId < tracks.length) {
											trackDetails = tracks[trackId].details;
											if (typeof trackDetails === 'undefined') {
												this.state = audio_stream_controller_State.WAITING_TRACK;
												break
											}
											if (!audioSwitch && !trackDetails.live && fragPrevious && fragPrevious.sn === trackDetails.endSN && !bufferInfo.nextStart) {
												if (!this.media.seeking || this.media.duration - bufferEnd < fragPrevious.duration / 2) {
													this.hls.trigger(events["a"].BUFFER_EOS, {
														type: 'audio'
													});
													this.state = audio_stream_controller_State.ENDED;
													break
												}
											}
											var fragments = trackDetails.fragments,
												fragLen = fragments.length,
												start = fragments[0].start,
												end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
												frag = void 0;
											if (audioSwitch) {
												if (trackDetails.live && !trackDetails.PTSKnown) {
													logger["b"].log('switching audiotrack, live stream, unknown PTS,load first fragment');
													bufferEnd = 0
												} else {
													bufferEnd = pos;
													if (trackDetails.PTSKnown && pos < start) {
														if (bufferInfo.end > start || bufferInfo.nextStart) {
															logger["b"].log('alt audio track ahead of main track, seek to start of alt audio track');
															this.media.currentTime = start + 0.05
														} else {
															return
														}
													}
												}
											}
											if (trackDetails.initSegment && !trackDetails.initSegment.data) {
												frag = trackDetails.initSegment
											} else if (bufferEnd <= start) {
												frag = fragments[0];
												if (this.videoTrackCC !== null && frag.cc !== this.videoTrackCC) {
													frag = findFragWithCC(fragments, this.videoTrackCC)
												}
												if (trackDetails.live && frag.loadIdx && frag.loadIdx === this.fragLoadIdx) {
													var nextBuffered = bufferInfo.nextStart ? bufferInfo.nextStart : start;
													logger["b"].log('no alt audio available @currentTime:' + this.media.currentTime + ', seeking @' + (nextBuffered + 0.05));
													this.media.currentTime = nextBuffered + 0.05;
													return
												}
											} else {
												var foundFrag = void 0;
												var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
												var fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : undefined;
												var fragmentWithinToleranceTest = function fragmentWithinToleranceTest(candidate) {
													var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration);
													if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) return 1;
													else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) return -1;
													return 0
												};
												if (bufferEnd < end) {
													if (bufferEnd > end - maxFragLookUpTolerance) maxFragLookUpTolerance = 0;
													if (fragNext && !fragmentWithinToleranceTest(fragNext)) foundFrag = fragNext;
													else foundFrag = binary_search.search(fragments, fragmentWithinToleranceTest)
												} else {
													foundFrag = fragments[fragLen - 1]
												} if (foundFrag) {
													frag = foundFrag;
													start = foundFrag.start;
													if (fragPrevious && frag.level === fragPrevious.level && frag.sn === fragPrevious.sn) {
														if (frag.sn < trackDetails.endSN) {
															frag = fragments[frag.sn + 1 - trackDetails.startSN];
															logger["b"].log('SN just loaded, load next one: ' + frag.sn)
														} else {
															frag = null
														}
													}
												}
											} if (frag) {
												if (frag.decryptdata && frag.decryptdata.uri != null && frag.decryptdata.key == null) {
													logger["b"].log('Loading key for ' + frag.sn + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + trackId);
													this.state = audio_stream_controller_State.KEY_LOADING;
													hls.trigger(events["a"].KEY_LOADING, {
														frag: frag
													})
												} else {
													logger["b"].log('Loading ' + frag.sn + ', cc: ' + frag.cc + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + trackId + ', currentTime:' + pos + ',bufferEnd:' + bufferEnd.toFixed(3));
													if (this.fragmentTracker.getState(frag) === FragmentState.NOT_LOADED) {
														this.fragCurrent = frag;
														this.startFragRequested = true;
														if (!isNaN(frag.sn)) this.nextLoadPosition = frag.start + frag.duration;
														hls.trigger(events["a"].FRAG_LOADING, {
															frag: frag
														});
														this.state = audio_stream_controller_State.FRAG_LOADING
													}
												}
											}
										}
										break;
									case audio_stream_controller_State.WAITING_TRACK:
										track = this.tracks[this.trackId];
										if (track && track.details) this.state = audio_stream_controller_State.IDLE;
										break;
									case audio_stream_controller_State.FRAG_LOADING_WAITING_RETRY:
										var now = performance.now();
										var retryDate = this.retryDate;
										media = this.media;
										var isSeeking = media && media.seeking;
										if (!retryDate || now >= retryDate || isSeeking) {
											logger["b"].log('audioStreamController: retryDate reached, switch back to IDLE state');
											this.state = audio_stream_controller_State.IDLE
										}
										break;
									case audio_stream_controller_State.WAITING_INIT_PTS:
										var videoTrackCC = this.videoTrackCC;
										if (this.initPTS[videoTrackCC] === undefined) break;
										var waitingFrag = this.waitingFragment;
										if (waitingFrag) {
											var waitingFragCC = waitingFrag.frag.cc;
											if (videoTrackCC !== waitingFragCC) {
												track = this.tracks[this.trackId];
												if (track.details && track.details.live) {
													logger["b"].warn('Waiting fragment CC (' + waitingFragCC + ') does not match video track CC (' + videoTrackCC + ')');
													this.waitingFragment = null;
													this.state = audio_stream_controller_State.IDLE
												}
											} else {
												this.state = audio_stream_controller_State.FRAG_LOADING;
												this.onFragLoaded(this.waitingFragment);
												this.waitingFragment = null
											}
										} else {
											this.state = audio_stream_controller_State.IDLE
										}
										break;
									case audio_stream_controller_State.STOPPED:
									case audio_stream_controller_State.FRAG_LOADING:
									case audio_stream_controller_State.PARSING:
									case audio_stream_controller_State.PARSED:
									case audio_stream_controller_State.ENDED:
										break;
									default:
										break
								}
							};
							AudioStreamController.prototype.onMediaAttached = function onMediaAttached(data) {
								var media = this.media = this.mediaBuffer = data.media;
								this.onvseeking = this.onMediaSeeking.bind(this);
								this.onvended = this.onMediaEnded.bind(this);
								media.addEventListener('seeking', this.onvseeking);
								media.addEventListener('ended', this.onvended);
								var config = this.config;
								if (this.tracks && config.autoStartLoad) this.startLoad(config.startPosition)
							};
							AudioStreamController.prototype.onMediaDetaching = function onMediaDetaching() {
								var media = this.media;
								if (media && media.ended) {
									logger["b"].log('MSE detaching and video ended, reset startPosition');
									this.startPosition = this.lastCurrentTime = 0
								}
								if (media) {
									media.removeEventListener('seeking', this.onvseeking);
									media.removeEventListener('ended', this.onvended);
									this.onvseeking = this.onvseeked = this.onvended = null
								}
								this.media = this.mediaBuffer = this.videoBuffer = null;
								this.loadedmetadata = false;
								this.stopLoad()
							};
							AudioStreamController.prototype.onMediaSeeking = function onMediaSeeking() {
								if (this.state === audio_stream_controller_State.ENDED) {
									this.state = audio_stream_controller_State.IDLE
								}
								if (this.media) this.lastCurrentTime = this.media.currentTime;
								this.tick()
							};
							AudioStreamController.prototype.onMediaEnded = function onMediaEnded() {
								this.startPosition = this.lastCurrentTime = 0
							};
							AudioStreamController.prototype.onAudioTracksUpdated = function onAudioTracksUpdated(data) {
								logger["b"].log('audio tracks updated');
								this.tracks = data.audioTracks
							};
							AudioStreamController.prototype.onAudioTrackSwitching = function onAudioTrackSwitching(data) {
								var altAudio = !!data.url;
								this.trackId = data.id;
								this.fragCurrent = null;
								this.state = audio_stream_controller_State.PAUSED;
								this.waitingFragment = null;
								if (!altAudio) {
									if (this.demuxer) {
										this.demuxer.destroy();
										this.demuxer = null
									}
								} else {
									this.setInterval(100)
								} if (altAudio) {
									this.audioSwitch = true;
									this.state = audio_stream_controller_State.IDLE
								}
								this.tick()
							};
							AudioStreamController.prototype.onAudioTrackLoaded = function onAudioTrackLoaded(data) {
								var newDetails = data.details,
									trackId = data.id,
									track = this.tracks[trackId],
									duration = newDetails.totalduration,
									sliding = 0;
								logger["b"].log('track ' + trackId + ' loaded [' + newDetails.startSN + ',' + newDetails.endSN + '],duration:' + duration);
								if (newDetails.live) {
									var curDetails = track.details;
									if (curDetails && newDetails.fragments.length > 0) {
										mergeDetails(curDetails, newDetails);
										sliding = newDetails.fragments[0].start;
										if (newDetails.PTSKnown) logger["b"].log('live audio playlist sliding:' + sliding.toFixed(3));
										else logger["b"].log('live audio playlist - outdated PTS, unknown sliding')
									} else {
										newDetails.PTSKnown = false;
										logger["b"].log('live audio playlist - first load, unknown sliding')
									}
								} else {
									newDetails.PTSKnown = false
								}
								track.details = newDetails;
								if (!this.startFragRequested) {
									if (this.startPosition === -1) {
										var startTimeOffset = newDetails.startTimeOffset;
										if (!isNaN(startTimeOffset)) {
											logger["b"].log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
											this.startPosition = startTimeOffset
										} else {
											this.startPosition = 0
										}
									}
									this.nextLoadPosition = this.startPosition
								}
								if (this.state === audio_stream_controller_State.WAITING_TRACK) this.state = audio_stream_controller_State.IDLE;
								this.tick()
							};
							AudioStreamController.prototype.onKeyLoaded = function onKeyLoaded() {
								if (this.state === audio_stream_controller_State.KEY_LOADING) {
									this.state = audio_stream_controller_State.IDLE;
									this.tick()
								}
							};
							AudioStreamController.prototype.onFragLoaded = function onFragLoaded(data) {
								var fragCurrent = this.fragCurrent,
									fragLoaded = data.frag;
								if (this.state === audio_stream_controller_State.FRAG_LOADING && fragCurrent && fragLoaded.type === 'audio' && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
									var track = this.tracks[this.trackId],
										details = track.details,
										duration = details.totalduration,
										trackId = fragCurrent.level,
										sn = fragCurrent.sn,
										cc = fragCurrent.cc,
										audioCodec = this.config.defaultAudioCodec || track.audioCodec || 'mp4a.40.2',
										stats = this.stats = data.stats;
									if (sn === 'initSegment') {
										this.state = audio_stream_controller_State.IDLE;
										stats.tparsed = stats.tbuffered = performance.now();
										details.initSegment.data = data.payload;
										this.hls.trigger(events["a"].FRAG_BUFFERED, {
											stats: stats,
											frag: fragCurrent,
											id: 'audio'
										});
										this.tick()
									} else {
										this.state = audio_stream_controller_State.PARSING;
										this.appended = false;
										if (!this.demuxer) this.demuxer = new demux_demuxer(this.hls, 'audio');
										var initPTS = this.initPTS[cc];
										var initSegmentData = details.initSegment ? details.initSegment.data : [];
										if (details.initSegment || initPTS !== undefined) {
											this.pendingBuffering = true;
											logger["b"].log('Demuxing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],track ' + trackId);
											var accurateTimeOffset = false;
											this.demuxer.push(data.payload, initSegmentData, audioCodec, null, fragCurrent, duration, accurateTimeOffset, initPTS)
										} else {
											logger["b"].log('unknown video PTS for continuity counter ' + cc + ', waiting for video PTS before demuxing audio frag ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],track ' + trackId);
											this.waitingFragment = data;
											this.state = audio_stream_controller_State.WAITING_INIT_PTS
										}
									}
								}
								this.fragLoadError = 0
							};
							AudioStreamController.prototype.onFragParsingInitSegment = function onFragParsingInitSegment(data) {
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
									var tracks = data.tracks,
										track = void 0;
									if (tracks.video) delete tracks.video;
									track = tracks.audio;
									if (track) {
										track.levelCodec = track.codec;
										track.id = data.id;
										this.hls.trigger(events["a"].BUFFER_CODECS, tracks);
										logger["b"].log('audio track:audio,container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
										var initSegment = track.initSegment;
										if (initSegment) {
											var appendObj = {
												type: 'audio',
												data: initSegment,
												parent: 'audio',
												content: 'initSegment'
											};
											if (this.audioSwitch) {
												this.pendingData = [appendObj]
											} else {
												this.appended = true;
												this.pendingBuffering = true;
												this.hls.trigger(events["a"].BUFFER_APPENDING, appendObj)
											}
										}
										this.tick()
									}
								}
							};
							AudioStreamController.prototype.onFragParsingData = function onFragParsingData(data) {
								var _this2 = this;
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'audio' && data.type === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
									var trackId = this.trackId,
										track = this.tracks[trackId],
										hls = this.hls;
									if (isNaN(data.endPTS)) {
										data.endPTS = data.startPTS + fragCurrent.duration;
										data.endDTS = data.startDTS + fragCurrent.duration
									}
									fragCurrent.addElementaryStream(loader_fragment.ElementaryStreamTypes.AUDIO);
									logger["b"].log('parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb);
									updateFragPTSDTS(track.details, fragCurrent, data.startPTS, data.endPTS);
									var audioSwitch = this.audioSwitch,
										media = this.media,
										appendOnBufferFlush = false;
									if (audioSwitch && media) {
										if (media.readyState) {
											var currentTime = media.currentTime;
											logger["b"].log('switching audio track : currentTime:' + currentTime);
											if (currentTime >= data.startPTS) {
												logger["b"].log('switching audio track : flushing all audio');
												this.state = audio_stream_controller_State.BUFFER_FLUSHING;
												hls.trigger(events["a"].BUFFER_FLUSHING, {
													startOffset: 0,
													endOffset: Number.POSITIVE_INFINITY,
													type: 'audio'
												});
												appendOnBufferFlush = true;
												this.audioSwitch = false;
												hls.trigger(events["a"].AUDIO_TRACK_SWITCHED, {
													id: trackId
												})
											}
										} else {
											this.audioSwitch = false;
											hls.trigger(events["a"].AUDIO_TRACK_SWITCHED, {
												id: trackId
											})
										}
									}
									var pendingData = this.pendingData;
									if (!pendingData) {
										console.warn('Apparently attempt to enqueue media payload without codec initialization data upfront');
										hls.trigger(events["a"].ERROR, {
											type: errors["b"].MEDIA_ERROR,
											details: null,
											fatal: true
										});
										return
									}
									if (!this.audioSwitch) {
										[data.data1, data.data2].forEach(function (buffer) {
											if (buffer && buffer.length) pendingData.push({
												type: data.type,
												data: buffer,
												parent: 'audio',
												content: 'data'
											})
										});
										if (!appendOnBufferFlush && pendingData.length) {
											pendingData.forEach(function (appendObj) {
												if (_this2.state === audio_stream_controller_State.PARSING) {
													_this2.pendingBuffering = true;
													_this2.hls.trigger(events["a"].BUFFER_APPENDING, appendObj)
												}
											});
											this.pendingData = [];
											this.appended = true
										}
									}
									this.tick()
								}
							};
							AudioStreamController.prototype.onFragParsed = function onFragParsed(data) {
								var fragCurrent = this.fragCurrent;
								var fragNew = data.frag;
								if (fragCurrent && data.id === 'audio' && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === audio_stream_controller_State.PARSING) {
									this.stats.tparsed = performance.now();
									this.state = audio_stream_controller_State.PARSED;
									this._checkAppendedParsed()
								}
							};
							AudioStreamController.prototype.onBufferReset = function onBufferReset() {
								this.mediaBuffer = this.videoBuffer = null;
								this.loadedmetadata = false
							};
							AudioStreamController.prototype.onBufferCreated = function onBufferCreated(data) {
								var audioTrack = data.tracks.audio;
								if (audioTrack) {
									this.mediaBuffer = audioTrack.buffer;
									this.loadedmetadata = true
								}
								if (data.tracks.video) this.videoBuffer = data.tracks.video.buffer
							};
							AudioStreamController.prototype.onBufferAppended = function onBufferAppended(data) {
								if (data.parent === 'audio') {
									var state = this.state;
									if (state === audio_stream_controller_State.PARSING || state === audio_stream_controller_State.PARSED) {
										this.pendingBuffering = data.pending > 0;
										this._checkAppendedParsed()
									}
								}
							};
							AudioStreamController.prototype._checkAppendedParsed = function _checkAppendedParsed() {
								if (this.state === audio_stream_controller_State.PARSED && (!this.appended || !this.pendingBuffering)) {
									var frag = this.fragCurrent,
										stats = this.stats,
										hls = this.hls;
									if (frag) {
										this.fragPrevious = frag;
										stats.tbuffered = performance.now();
										hls.trigger(events["a"].FRAG_BUFFERED, {
											stats: stats,
											frag: frag,
											id: 'audio'
										});
										var media = this.mediaBuffer ? this.mediaBuffer : this.media;
										logger["b"].log('audio buffered : ' + time_ranges.toString(media.buffered));
										if (this.audioSwitch && this.appended) {
											this.audioSwitch = false;
											hls.trigger(events["a"].AUDIO_TRACK_SWITCHED, {
												id: this.trackId
											})
										}
										this.state = audio_stream_controller_State.IDLE
									}
									this.tick()
								}
							};
							AudioStreamController.prototype.onError = function onError(data) {
								var frag = data.frag;
								if (frag && frag.type !== 'audio') return;
								switch (data.details) {
									case errors["a"].FRAG_LOAD_ERROR:
									case errors["a"].FRAG_LOAD_TIMEOUT:
										if (!data.fatal) {
											var loadError = this.fragLoadError;
											if (loadError) loadError++;
											else loadError = 1;
											var config = this.config;
											if (loadError <= config.fragLoadingMaxRetry) {
												this.fragLoadError = loadError;
												var delay = Math.min(Math.pow(2, loadError - 1) * config.fragLoadingRetryDelay, config.fragLoadingMaxRetryTimeout);
												logger["b"].warn('audioStreamController: frag loading failed, retry in ' + delay + ' ms');
												this.retryDate = performance.now() + delay;
												this.state = audio_stream_controller_State.FRAG_LOADING_WAITING_RETRY
											} else {
												logger["b"].error('audioStreamController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
												data.fatal = true;
												this.state = audio_stream_controller_State.ERROR
											}
										}
										break;
									case errors["a"].AUDIO_TRACK_LOAD_ERROR:
									case errors["a"].AUDIO_TRACK_LOAD_TIMEOUT:
									case errors["a"].KEY_LOAD_ERROR:
									case errors["a"].KEY_LOAD_TIMEOUT:
										if (this.state !== audio_stream_controller_State.ERROR) {
											this.state = data.fatal ? audio_stream_controller_State.ERROR : audio_stream_controller_State.IDLE;
											logger["b"].warn('audioStreamController: ' + data.details + ' while loading frag,switch to ' + this.state + ' state ...')
										}
										break;
									case errors["a"].BUFFER_FULL_ERROR:
										if (data.parent === 'audio' && (this.state === audio_stream_controller_State.PARSING || this.state === audio_stream_controller_State.PARSED)) {
											var media = this.mediaBuffer,
												currentTime = this.media.currentTime,
												mediaBuffered = media && buffer_helper.isBuffered(media, currentTime) && buffer_helper.isBuffered(media, currentTime + 0.5);
											if (mediaBuffered) {
												var _config = this.config;
												if (_config.maxMaxBufferLength >= _config.maxBufferLength) {
													_config.maxMaxBufferLength /= 2;
													logger["b"].warn('audio:reduce max buffer length to ' + _config.maxMaxBufferLength + 's')
												}
												this.state = audio_stream_controller_State.IDLE
											} else {
												logger["b"].warn('buffer full error also media.currentTime is not buffered, flush audio buffer');
												this.fragCurrent = null;
												this.state = audio_stream_controller_State.BUFFER_FLUSHING;
												this.hls.trigger(events["a"].BUFFER_FLUSHING, {
													startOffset: 0,
													endOffset: Number.POSITIVE_INFINITY,
													type: 'audio'
												})
											}
										}
										break;
									default:
										break
								}
							};
							AudioStreamController.prototype.onBufferFlushed = function onBufferFlushed() {
								var _this3 = this;
								var pendingData = this.pendingData;
								if (pendingData && pendingData.length) {
									logger["b"].log('appending pending audio data on Buffer Flushed');
									pendingData.forEach(function (appendObj) {
										_this3.hls.trigger(events["a"].BUFFER_APPENDING, appendObj)
									});
									this.appended = true;
									this.pendingData = [];
									this.state = audio_stream_controller_State.PARSED
								} else {
									this.state = audio_stream_controller_State.IDLE;
									this.fragPrevious = null;
									this.tick()
								}
							};
							audio_stream_controller__createClass(AudioStreamController, [{
								key: 'state',
								set: function set(nextState) {
									if (this.state !== nextState) {
										var previousState = this.state;
										this._state = nextState;
										logger["b"].log('audio stream:' + previousState + '->' + nextState)
									}
								},
								get: function get() {
									return this._state
								}
							}]);
							return AudioStreamController
						}(task_loop);
						var audio_stream_controller = (audio_stream_controller_AudioStreamController);
						var vttcue = ((function () {
							if (typeof window !== 'undefined' && window.VTTCue) return window.VTTCue;
							var autoKeyword = 'auto';
							var directionSetting = {
								'': true,
								lr: true,
								rl: true
							};
							var alignSetting = {
								start: true,
								middle: true,
								end: true,
								left: true,
								right: true
							};

							function findDirectionSetting(value) {
								if (typeof value !== 'string') return false;
								var dir = directionSetting[value.toLowerCase()];
								return dir ? value.toLowerCase() : false
							}

							function findAlignSetting(value) {
								if (typeof value !== 'string') return false;
								var align = alignSetting[value.toLowerCase()];
								return align ? value.toLowerCase() : false
							}

							function extend(obj) {
								var i = 1;
								for (; i < arguments.length; i++) {
									var cobj = arguments[i];
									for (var p in cobj) {
										obj[p] = cobj[p]
									}
								}
								return obj
							}

							function VTTCue(startTime, endTime, text) {
								var cue = this;
								var isIE8 = function () {
									if (typeof navigator === 'undefined') return;
									return (/MSIE\s8\.0/.test(navigator.userAgent))
								}();
								var baseObj = {};
								if (isIE8) cue = document.createElement('custom');
								else baseObj.enumerable = true;
								cue.hasBeenReset = false;
								var _id = '';
								var _pauseOnExit = false;
								var _startTime = startTime;
								var _endTime = endTime;
								var _text = text;
								var _region = null;
								var _vertical = '';
								var _snapToLines = true;
								var _line = 'auto';
								var _lineAlign = 'start';
								var _position = 50;
								var _positionAlign = 'middle';
								var _size = 50;
								var _align = 'middle';
								Object.defineProperty(cue, 'id', extend({}, baseObj, {
									get: function get() {
										return _id
									},
									set: function set(value) {
										_id = '' + value
									}
								}));
								Object.defineProperty(cue, 'pauseOnExit', extend({}, baseObj, {
									get: function get() {
										return _pauseOnExit
									},
									set: function set(value) {
										_pauseOnExit = !!value
									}
								}));
								Object.defineProperty(cue, 'startTime', extend({}, baseObj, {
									get: function get() {
										return _startTime
									},
									set: function set(value) {
										if (typeof value !== 'number') throw new TypeError('Start time must be set to a number.');
										_startTime = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'endTime', extend({}, baseObj, {
									get: function get() {
										return _endTime
									},
									set: function set(value) {
										if (typeof value !== 'number') throw new TypeError('End time must be set to a number.');
										_endTime = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'text', extend({}, baseObj, {
									get: function get() {
										return _text
									},
									set: function set(value) {
										_text = '' + value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'region', extend({}, baseObj, {
									get: function get() {
										return _region
									},
									set: function set(value) {
										_region = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'vertical', extend({}, baseObj, {
									get: function get() {
										return _vertical
									},
									set: function set(value) {
										var setting = findDirectionSetting(value);
										if (setting === false) throw new SyntaxError('An invalid or illegal string was specified.');
										_vertical = setting;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'snapToLines', extend({}, baseObj, {
									get: function get() {
										return _snapToLines
									},
									set: function set(value) {
										_snapToLines = !!value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'line', extend({}, baseObj, {
									get: function get() {
										return _line
									},
									set: function set(value) {
										if (typeof value !== 'number' && value !== autoKeyword) throw new SyntaxError('An invalid number or illegal string was specified.');
										_line = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'lineAlign', extend({}, baseObj, {
									get: function get() {
										return _lineAlign
									},
									set: function set(value) {
										var setting = findAlignSetting(value);
										if (!setting) throw new SyntaxError('An invalid or illegal string was specified.');
										_lineAlign = setting;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'position', extend({}, baseObj, {
									get: function get() {
										return _position
									},
									set: function set(value) {
										if (value < 0 || value > 100) throw new Error('Position must be between 0 and 100.');
										_position = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'positionAlign', extend({}, baseObj, {
									get: function get() {
										return _positionAlign
									},
									set: function set(value) {
										var setting = findAlignSetting(value);
										if (!setting) throw new SyntaxError('An invalid or illegal string was specified.');
										_positionAlign = setting;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'size', extend({}, baseObj, {
									get: function get() {
										return _size
									},
									set: function set(value) {
										if (value < 0 || value > 100) throw new Error('Size must be between 0 and 100.');
										_size = value;
										this.hasBeenReset = true
									}
								}));
								Object.defineProperty(cue, 'align', extend({}, baseObj, {
									get: function get() {
										return _align
									},
									set: function set(value) {
										var setting = findAlignSetting(value);
										if (!setting) throw new SyntaxError('An invalid or illegal string was specified.');
										_align = setting;
										this.hasBeenReset = true
									}
								}));
								cue.displayState = undefined;
								if (isIE8) return cue
							}
							VTTCue.prototype.getCueAsHTML = function () {
								var WebVTT = window.WebVTT;
								return WebVTT.convertCueToDOMTree(window, this.text)
							};
							return VTTCue
						})());
						var StringDecoder = function StringDecoder() {
							return {
								decode: function decode(data) {
									if (!data) return '';
									if (typeof data !== 'string') throw new Error('Error - expected string data.');
									return decodeURIComponent(encodeURIComponent(data))
								}
							}
						};

						function VTTParser() {
							this.window = window;
							this.state = 'INITIAL';
							this.buffer = '';
							this.decoder = new StringDecoder();
							this.regionList = []
						}

						function parseTimeStamp(input) {
							function computeSeconds(h, m, s, f) {
								return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000
							}
							var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
							if (!m) return null;
							if (m[3]) {
								return computeSeconds(m[1], m[2], m[3].replace(':', ''), m[4])
							} else if (m[1] > 59) {
								return computeSeconds(m[1], m[2], 0, m[4])
							} else {
								return computeSeconds(0, m[1], m[2], m[4])
							}
						}

						function Settings() {
							this.values = Object.create(null)
						}
						Settings.prototype = {
							set: function set(k, v) {
								if (!this.get(k) && v !== '') this.values[k] = v
							},
							get: function get(k, dflt, defaultKey) {
								if (defaultKey) return this.has(k) ? this.values[k] : dflt[defaultKey];
								return this.has(k) ? this.values[k] : dflt
							},
							has: function has(k) {
								return k in this.values
							},
							alt: function alt(k, v, a) {
								for (var n = 0; n < a.length; ++n) {
									if (v === a[n]) {
										this.set(k, v);
										break
									}
								}
							},
							integer: function integer(k, v) {
								if (/^-?\d+$/.test(v)) {
									this.set(k, parseInt(v, 10))
								}
							},
							percent: function percent(k, v) {
								var m = void 0;
								if (m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
									v = parseFloat(v);
									if (v >= 0 && v <= 100) {
										this.set(k, v);
										return true
									}
								}
								return false
							}
						};

						function parseOptions(input, callback, keyValueDelim, groupDelim) {
							var groups = groupDelim ? input.split(groupDelim) : [input];
							for (var i in groups) {
								if (typeof groups[i] !== 'string') continue;
								var kv = groups[i].split(keyValueDelim);
								if (kv.length !== 2) continue;
								var k = kv[0];
								var v = kv[1];
								callback(k, v)
							}
						}
						var defaults = new vttcue(0, 0, 0);
						var center = defaults.align === 'middle' ? 'middle' : 'center';

						function parseCue(input, cue, regionList) {
							var oInput = input;

							function consumeTimeStamp() {
								var ts = parseTimeStamp(input);
								if (ts === null) throw new Error('Malformed timestamp: ' + oInput);
								input = input.replace(/^[^\sa-zA-Z-]+/, '');
								return ts
							}

							function consumeCueSettings(input, cue) {
								var settings = new Settings();
								parseOptions(input, function (k, v) {
									switch (k) {
										case 'region':
											for (var i = regionList.length - 1; i >= 0; i--) {
												if (regionList[i].id === v) {
													settings.set(k, regionList[i].region);
													break
												}
											}
											break;
										case 'vertical':
											settings.alt(k, v, ['rl', 'lr']);
											break;
										case 'line':
											var vals = v.split(','),
												vals0 = vals[0];
											settings.integer(k, vals0);
											if (settings.percent(k, vals0)) settings.set('snapToLines', false);
											settings.alt(k, vals0, ['auto']);
											if (vals.length === 2) settings.alt('lineAlign', vals[1], ['start', center, 'end']);
											break;
										case 'position':
											vals = v.split(',');
											settings.percent(k, vals[0]);
											if (vals.length === 2) settings.alt('positionAlign', vals[1], ['start', center, 'end', 'line-left', 'line-right', 'auto']);
											break;
										case 'size':
											settings.percent(k, v);
											break;
										case 'align':
											settings.alt(k, v, ['start', center, 'end', 'left', 'right']);
											break
									}
								}, /:/, /\s/);
								cue.region = settings.get('region', null);
								cue.vertical = settings.get('vertical', '');
								var line = settings.get('line', 'auto');
								if (line === 'auto' && defaults.line === -1) {
									line = -1
								}
								cue.line = line;
								cue.lineAlign = settings.get('lineAlign', 'start');
								cue.snapToLines = settings.get('snapToLines', true);
								cue.size = settings.get('size', 100);
								cue.align = settings.get('align', center);
								var position = settings.get('position', 'auto');
								if (position === 'auto' && defaults.position === 50) {
									position = cue.align === 'start' || cue.align === 'left' ? 0 : cue.align === 'end' || cue.align === 'right' ? 100 : 50
								}
								cue.position = position
							}

							function skipWhitespace() {
								input = input.replace(/^\s+/, '')
							}
							skipWhitespace();
							cue.startTime = consumeTimeStamp();
							skipWhitespace();
							if (input.substr(0, 3) !== '-->') {
								throw new Error('Malformed time stamp (time stamps must be separated by \'-->\'): ' + oInput);
							}
							input = input.substr(3);
							skipWhitespace();
							cue.endTime = consumeTimeStamp();
							skipWhitespace();
							consumeCueSettings(input, cue)
						}

						function fixLineBreaks(input) {
							return input.replace(/<br(?: \/)?>/gi, '\n')
						}
						VTTParser.prototype = {
							parse: function parse(data) {
								var self = this;
								if (data) {
									self.buffer += self.decoder.decode(data, {
										stream: true
									})
								}

								function collectNextLine() {
									var buffer = self.buffer;
									var pos = 0;
									buffer = fixLineBreaks(buffer);
									while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
										++pos
									}
									var line = buffer.substr(0, pos);
									if (buffer[pos] === '\r') ++pos;
									if (buffer[pos] === '\n') ++pos;
									self.buffer = buffer.substr(pos);
									return line
								}

								function parseHeader(input) {
									parseOptions(input, function (k, v) {
										switch (k) {
											case 'Region':
												console.log('parse region', v);
												break
										}
									}, /:/)
								}
								try {
									var line = void 0;
									if (self.state === 'INITIAL') {
										if (!/\r\n|\n/.test(self.buffer)) return this;
										line = collectNextLine();
										var m = line.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
										if (!m || !m[0]) throw new Error('Malformed WebVTT signature.');
										self.state = 'HEADER'
									}
									var alreadyCollectedLine = false;
									while (self.buffer) {
										if (!/\r\n|\n/.test(self.buffer)) return this;
										if (!alreadyCollectedLine) line = collectNextLine();
										else alreadyCollectedLine = false;
										switch (self.state) {
											case 'HEADER':
												if (/:/.test(line)) {
													parseHeader(line)
												} else if (!line) {
													self.state = 'ID'
												}
												continue;
											case 'NOTE':
												if (!line) self.state = 'ID';
												continue;
											case 'ID':
												if (/^NOTE($|[ \t])/.test(line)) {
													self.state = 'NOTE';
													break
												}
												if (!line) continue;
												self.cue = new vttcue(0, 0, '');
												self.state = 'CUE';
												if (line.indexOf('-->') === -1) {
													self.cue.id = line;
													continue
												}
											case 'CUE':
												try {
													parseCue(line, self.cue, self.regionList)
												} catch (e) {
													self.cue = null;
													self.state = 'BADCUE';
													continue
												}
												self.state = 'CUETEXT';
												continue;
											case 'CUETEXT':
												var hasSubstring = line.indexOf('-->') !== -1;
												if (!line || hasSubstring && (alreadyCollectedLine = true)) {
													if (self.oncue) self.oncue(self.cue);
													self.cue = null;
													self.state = 'ID';
													continue
												}
												if (self.cue.text) self.cue.text += '\n';
												self.cue.text += line;
												continue;
											case 'BADCUE':
												if (!line) self.state = 'ID';
												continue
										}
									}
								} catch (e) {
									if (self.state === 'CUETEXT' && self.cue && self.oncue) self.oncue(self.cue);
									self.cue = null;
									self.state = self.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE'
								}
								return this
							},
							flush: function flush() {
								var self = this;
								try {
									self.buffer += self.decoder.decode();
									if (self.cue || self.state === 'HEADER') {
										self.buffer += '\n\n';
										self.parse()
									}
									if (self.state === 'INITIAL') throw new Error('Malformed WebVTT signature.');
								} catch (e) {
									throw e;
								}
								if (self.onflush) self.onflush();
								return this
							}
						};
						var vttparser = (VTTParser);

						function newCue(track, startTime, endTime, captionScreen) {
							var row = void 0;
							var cue = void 0;
							var indenting = void 0;
							var indent = void 0;
							var text = void 0;
							var VTTCue = window.VTTCue || window.TextTrackCue;
							for (var r = 0; r < captionScreen.rows.length; r++) {
								row = captionScreen.rows[r];
								indenting = true;
								indent = 0;
								text = '';
								if (!row.isEmpty()) {
									for (var c = 0; c < row.chars.length; c++) {
										if (row.chars[c].uchar.match(/\s/) && indenting) {
											indent++
										} else {
											text += row.chars[c].uchar;
											indenting = false
										}
									}
									row.cueStartTime = startTime;
									if (startTime === endTime) endTime += 0.0001;
									cue = new VTTCue(startTime, endTime, fixLineBreaks(text.trim()));
									if (indent >= 16) indent--;
									else indent++; if (navigator.userAgent.match(/Firefox\//)) cue.line = r + 1;
									else cue.line = r > 7 ? r - 2 : r + 1;
									cue.align = 'left';
									cue.position = Math.max(0, Math.min(100, 100 * (indent / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0)));
									track.addCue(cue)
								}
							}
						}

						function cea_608_parser__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var specialCea608CharsCodes = {
							0x2a: 0xe1,
							0x5c: 0xe9,
							0x5e: 0xed,
							0x5f: 0xf3,
							0x60: 0xfa,
							0x7b: 0xe7,
							0x7c: 0xf7,
							0x7d: 0xd1,
							0x7e: 0xf1,
							0x7f: 0x2588,
							0x80: 0xae,
							0x81: 0xb0,
							0x82: 0xbd,
							0x83: 0xbf,
							0x84: 0x2122,
							0x85: 0xa2,
							0x86: 0xa3,
							0x87: 0x266a,
							0x88: 0xe0,
							0x89: 0x20,
							0x8a: 0xe8,
							0x8b: 0xe2,
							0x8c: 0xea,
							0x8d: 0xee,
							0x8e: 0xf4,
							0x8f: 0xfb,
							0x90: 0xc1,
							0x91: 0xc9,
							0x92: 0xd3,
							0x93: 0xda,
							0x94: 0xdc,
							0x95: 0xfc,
							0x96: 0x2018,
							0x97: 0xa1,
							0x98: 0x2a,
							0x99: 0x2019,
							0x9a: 0x2501,
							0x9b: 0xa9,
							0x9c: 0x2120,
							0x9d: 0x2022,
							0x9e: 0x201c,
							0x9f: 0x201d,
							0xa0: 0xc0,
							0xa1: 0xc2,
							0xa2: 0xc7,
							0xa3: 0xc8,
							0xa4: 0xca,
							0xa5: 0xcb,
							0xa6: 0xeb,
							0xa7: 0xce,
							0xa8: 0xcf,
							0xa9: 0xef,
							0xaa: 0xd4,
							0xab: 0xd9,
							0xac: 0xf9,
							0xad: 0xdb,
							0xae: 0xab,
							0xaf: 0xbb,
							0xb0: 0xc3,
							0xb1: 0xe3,
							0xb2: 0xcd,
							0xb3: 0xcc,
							0xb4: 0xec,
							0xb5: 0xd2,
							0xb6: 0xf2,
							0xb7: 0xd5,
							0xb8: 0xf5,
							0xb9: 0x7b,
							0xba: 0x7d,
							0xbb: 0x5c,
							0xbc: 0x5e,
							0xbd: 0x5f,
							0xbe: 0x7c,
							0xbf: 0x223c,
							0xc0: 0xc4,
							0xc1: 0xe4,
							0xc2: 0xd6,
							0xc3: 0xf6,
							0xc4: 0xdf,
							0xc5: 0xa5,
							0xc6: 0xa4,
							0xc7: 0x2503,
							0xc8: 0xc5,
							0xc9: 0xe5,
							0xca: 0xd8,
							0xcb: 0xf8,
							0xcc: 0x250f,
							0xcd: 0x2513,
							0xce: 0x2517,
							0xcf: 0x251b
						};
						var getCharForByte = function getCharForByte(byte) {
							var charCode = byte;
							if (specialCea608CharsCodes.hasOwnProperty(byte)) charCode = specialCea608CharsCodes[byte];
							return String.fromCharCode(charCode)
						};
						var NR_ROWS = 15,
							NR_COLS = 100;
						var rowsLowCh1 = {
							0x11: 1,
							0x12: 3,
							0x15: 5,
							0x16: 7,
							0x17: 9,
							0x10: 11,
							0x13: 12,
							0x14: 14
						};
						var rowsHighCh1 = {
							0x11: 2,
							0x12: 4,
							0x15: 6,
							0x16: 8,
							0x17: 10,
							0x13: 13,
							0x14: 15
						};
						var rowsLowCh2 = {
							0x19: 1,
							0x1A: 3,
							0x1D: 5,
							0x1E: 7,
							0x1F: 9,
							0x18: 11,
							0x1B: 12,
							0x1C: 14
						};
						var rowsHighCh2 = {
							0x19: 2,
							0x1A: 4,
							0x1D: 6,
							0x1E: 8,
							0x1F: 10,
							0x1B: 13,
							0x1C: 15
						};
						var backgroundColors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'];
						var cea_608_parser_logger = {
							verboseFilter: {
								'DATA': 3,
								'DEBUG': 3,
								'INFO': 2,
								'WARNING': 2,
								'TEXT': 1,
								'ERROR': 0
							},
							time: null,
							verboseLevel: 0,
							setTime: function setTime(newTime) {
								this.time = newTime
							},
							log: function log(severity, msg) {
								var minLevel = this.verboseFilter[severity];
								if (this.verboseLevel >= minLevel) console.log(this.time + ' [' + severity + '] ' + msg)
							}
						};
						var numArrayToHexArray = function numArrayToHexArray(numArray) {
							var hexArray = [];
							for (var j = 0; j < numArray.length; j++) {
								hexArray.push(numArray[j].toString(16))
							}
							return hexArray
						};
						var PenState = function () {
							function PenState(foreground, underline, italics, background, flash) {
								cea_608_parser__classCallCheck(this, PenState);
								this.foreground = foreground || 'white';
								this.underline = underline || false;
								this.italics = italics || false;
								this.background = background || 'black';
								this.flash = flash || false
							}
							PenState.prototype.reset = function reset() {
								this.foreground = 'white';
								this.underline = false;
								this.italics = false;
								this.background = 'black';
								this.flash = false
							};
							PenState.prototype.setStyles = function setStyles(styles) {
								var attribs = ['foreground', 'underline', 'italics', 'background', 'flash'];
								for (var i = 0; i < attribs.length; i++) {
									var style = attribs[i];
									if (styles.hasOwnProperty(style)) this[style] = styles[style]
								}
							};
							PenState.prototype.isDefault = function isDefault() {
								return this.foreground === 'white' && !this.underline && !this.italics && this.background === 'black' && !this.flash
							};
							PenState.prototype.equals = function equals(other) {
								return this.foreground === other.foreground && this.underline === other.underline && this.italics === other.italics && this.background === other.background && this.flash === other.flash
							};
							PenState.prototype.copy = function copy(newPenState) {
								this.foreground = newPenState.foreground;
								this.underline = newPenState.underline;
								this.italics = newPenState.italics;
								this.background = newPenState.background;
								this.flash = newPenState.flash
							};
							PenState.prototype.toString = function toString() {
								return 'color=' + this.foreground + ', underline=' + this.underline + ', italics=' + this.italics + ', background=' + this.background + ', flash=' + this.flash
							};
							return PenState
						}();
						var StyledUnicodeChar = function () {
							function StyledUnicodeChar(uchar, foreground, underline, italics, background, flash) {
								cea_608_parser__classCallCheck(this, StyledUnicodeChar);
								this.uchar = uchar || ' ';
								this.penState = new PenState(foreground, underline, italics, background, flash)
							}
							StyledUnicodeChar.prototype.reset = function reset() {
								this.uchar = ' ';
								this.penState.reset()
							};
							StyledUnicodeChar.prototype.setChar = function setChar(uchar, newPenState) {
								this.uchar = uchar;
								this.penState.copy(newPenState)
							};
							StyledUnicodeChar.prototype.setPenState = function setPenState(newPenState) {
								this.penState.copy(newPenState)
							};
							StyledUnicodeChar.prototype.equals = function equals(other) {
								return this.uchar === other.uchar && this.penState.equals(other.penState)
							};
							StyledUnicodeChar.prototype.copy = function copy(newChar) {
								this.uchar = newChar.uchar;
								this.penState.copy(newChar.penState)
							};
							StyledUnicodeChar.prototype.isEmpty = function isEmpty() {
								return this.uchar === ' ' && this.penState.isDefault()
							};
							return StyledUnicodeChar
						}();
						var Row = function () {
							function Row() {
								cea_608_parser__classCallCheck(this, Row);
								this.chars = [];
								for (var i = 0; i < NR_COLS; i++) {
									this.chars.push(new StyledUnicodeChar())
								}
								this.pos = 0;
								this.currPenState = new PenState()
							}
							Row.prototype.equals = function equals(other) {
								var equal = true;
								for (var i = 0; i < NR_COLS; i++) {
									if (!this.chars[i].equals(other.chars[i])) {
										equal = false;
										break
									}
								}
								return equal
							};
							Row.prototype.copy = function copy(other) {
								for (var i = 0; i < NR_COLS; i++) {
									this.chars[i].copy(other.chars[i])
								}
							};
							Row.prototype.isEmpty = function isEmpty() {
								var empty = true;
								for (var i = 0; i < NR_COLS; i++) {
									if (!this.chars[i].isEmpty()) {
										empty = false;
										break
									}
								}
								return empty
							};
							Row.prototype.setCursor = function setCursor(absPos) {
								if (this.pos !== absPos) this.pos = absPos;
								if (this.pos < 0) {
									cea_608_parser_logger.log('ERROR', 'Negative cursor position ' + this.pos);
									this.pos = 0
								} else if (this.pos > NR_COLS) {
									cea_608_parser_logger.log('ERROR', 'Too large cursor position ' + this.pos);
									this.pos = NR_COLS
								}
							};
							Row.prototype.moveCursor = function moveCursor(relPos) {
								var newPos = this.pos + relPos;
								if (relPos > 1) {
									for (var i = this.pos + 1; i < newPos + 1; i++) {
										this.chars[i].setPenState(this.currPenState)
									}
								}
								this.setCursor(newPos)
							};
							Row.prototype.backSpace = function backSpace() {
								this.moveCursor(-1);
								this.chars[this.pos].setChar(' ', this.currPenState)
							};
							Row.prototype.insertChar = function insertChar(byte) {
								if (byte >= 0x90) {
									this.backSpace()
								}
								var char = getCharForByte(byte);
								if (this.pos >= NR_COLS) {
									cea_608_parser_logger.log('ERROR', 'Cannot insert ' + byte.toString(16) + ' (' + char + ') at position ' + this.pos + '. Skipping it!');
									return
								}
								this.chars[this.pos].setChar(char, this.currPenState);
								this.moveCursor(1)
							};
							Row.prototype.clearFromPos = function clearFromPos(startPos) {
								var i = void 0;
								for (i = startPos; i < NR_COLS; i++) {
									this.chars[i].reset()
								}
							};
							Row.prototype.clear = function clear() {
								this.clearFromPos(0);
								this.pos = 0;
								this.currPenState.reset()
							};
							Row.prototype.clearToEndOfRow = function clearToEndOfRow() {
								this.clearFromPos(this.pos)
							};
							Row.prototype.getTextString = function getTextString() {
								var chars = [];
								var empty = true;
								for (var i = 0; i < NR_COLS; i++) {
									var char = this.chars[i].uchar;
									if (char !== ' ') empty = false;
									chars.push(char)
								}
								if (empty) return '';
								else return chars.join('')
							};
							Row.prototype.setPenStyles = function setPenStyles(styles) {
								this.currPenState.setStyles(styles);
								var currChar = this.chars[this.pos];
								currChar.setPenState(this.currPenState)
							};
							return Row
						}();
						var CaptionScreen = function () {
							function CaptionScreen() {
								cea_608_parser__classCallCheck(this, CaptionScreen);
								this.rows = [];
								for (var i = 0; i < NR_ROWS; i++) {
									this.rows.push(new Row())
								}
								this.currRow = NR_ROWS - 1;
								this.nrRollUpRows = null;
								this.reset()
							}
							CaptionScreen.prototype.reset = function reset() {
								for (var i = 0; i < NR_ROWS; i++) {
									this.rows[i].clear()
								}
								this.currRow = NR_ROWS - 1
							};
							CaptionScreen.prototype.equals = function equals(other) {
								var equal = true;
								for (var i = 0; i < NR_ROWS; i++) {
									if (!this.rows[i].equals(other.rows[i])) {
										equal = false;
										break
									}
								}
								return equal
							};
							CaptionScreen.prototype.copy = function copy(other) {
								for (var i = 0; i < NR_ROWS; i++) {
									this.rows[i].copy(other.rows[i])
								}
							};
							CaptionScreen.prototype.isEmpty = function isEmpty() {
								var empty = true;
								for (var i = 0; i < NR_ROWS; i++) {
									if (!this.rows[i].isEmpty()) {
										empty = false;
										break
									}
								}
								return empty
							};
							CaptionScreen.prototype.backSpace = function backSpace() {
								var row = this.rows[this.currRow];
								row.backSpace()
							};
							CaptionScreen.prototype.clearToEndOfRow = function clearToEndOfRow() {
								var row = this.rows[this.currRow];
								row.clearToEndOfRow()
							};
							CaptionScreen.prototype.insertChar = function insertChar(char) {
								var row = this.rows[this.currRow];
								row.insertChar(char)
							};
							CaptionScreen.prototype.setPen = function setPen(styles) {
								var row = this.rows[this.currRow];
								row.setPenStyles(styles)
							};
							CaptionScreen.prototype.moveCursor = function moveCursor(relPos) {
								var row = this.rows[this.currRow];
								row.moveCursor(relPos)
							};
							CaptionScreen.prototype.setCursor = function setCursor(absPos) {
								cea_608_parser_logger.log('INFO', 'setCursor: ' + absPos);
								var row = this.rows[this.currRow];
								row.setCursor(absPos)
							};
							CaptionScreen.prototype.setPAC = function setPAC(pacData) {
								cea_608_parser_logger.log('INFO', 'pacData = ' + JSON.stringify(pacData));
								var newRow = pacData.row - 1;
								if (this.nrRollUpRows && newRow < this.nrRollUpRows - 1) newRow = this.nrRollUpRows - 1;
								if (this.nrRollUpRows && this.currRow !== newRow) {
									for (var i = 0; i < NR_ROWS; i++) {
										this.rows[i].clear()
									}
									var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
									var lastOutputScreen = this.lastOutputScreen;
									if (lastOutputScreen) {
										var prevLineTime = lastOutputScreen.rows[topRowIndex].cueStartTime;
										if (prevLineTime && prevLineTime < cea_608_parser_logger.time) {
											for (var _i = 0; _i < this.nrRollUpRows; _i++) {
												this.rows[newRow - this.nrRollUpRows + _i + 1].copy(lastOutputScreen.rows[topRowIndex + _i])
											}
										}
									}
								}
								this.currRow = newRow;
								var row = this.rows[this.currRow];
								if (pacData.indent !== null) {
									var indent = pacData.indent;
									var prevPos = Math.max(indent - 1, 0);
									row.setCursor(pacData.indent);
									pacData.color = row.chars[prevPos].penState.foreground
								}
								var styles = {
									foreground: pacData.color,
									underline: pacData.underline,
									italics: pacData.italics,
									background: 'black',
									flash: false
								};
								this.setPen(styles)
							};
							CaptionScreen.prototype.setBkgData = function setBkgData(bkgData) {
								cea_608_parser_logger.log('INFO', 'bkgData = ' + JSON.stringify(bkgData));
								this.backSpace();
								this.setPen(bkgData);
								this.insertChar(0x20)
							};
							CaptionScreen.prototype.setRollUpRows = function setRollUpRows(nrRows) {
								this.nrRollUpRows = nrRows
							};
							CaptionScreen.prototype.rollUp = function rollUp() {
								if (this.nrRollUpRows === null) {
									cea_608_parser_logger.log('DEBUG', 'roll_up but nrRollUpRows not set yet');
									return
								}
								cea_608_parser_logger.log('TEXT', this.getDisplayText());
								var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
								var topRow = this.rows.splice(topRowIndex, 1)[0];
								topRow.clear();
								this.rows.splice(this.currRow, 0, topRow);
								cea_608_parser_logger.log('INFO', 'Rolling up')
							};
							CaptionScreen.prototype.getDisplayText = function getDisplayText(asOneRow) {
								asOneRow = asOneRow || false;
								var displayText = [];
								var text = '';
								var rowNr = -1;
								for (var i = 0; i < NR_ROWS; i++) {
									var rowText = this.rows[i].getTextString();
									if (rowText) {
										rowNr = i + 1;
										if (asOneRow) displayText.push('Row ' + rowNr + ': \'' + rowText + '\'');
										else displayText.push(rowText.trim())
									}
								}
								if (displayText.length > 0) {
									if (asOneRow) text = '[' + displayText.join(' | ') + ']';
									else text = displayText.join('\n')
								}
								return text
							};
							CaptionScreen.prototype.getTextAndFormat = function getTextAndFormat() {
								return this.rows
							};
							return CaptionScreen
						}();
						var Cea608Channel = function () {
							function Cea608Channel(channelNumber, outputFilter) {
								cea_608_parser__classCallCheck(this, Cea608Channel);
								this.chNr = channelNumber;
								this.outputFilter = outputFilter;
								this.mode = null;
								this.verbose = 0;
								this.displayedMemory = new CaptionScreen();
								this.nonDisplayedMemory = new CaptionScreen();
								this.lastOutputScreen = new CaptionScreen();
								this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
								this.writeScreen = this.displayedMemory;
								this.mode = null;
								this.cueStartTime = null
							}
							Cea608Channel.prototype.reset = function reset() {
								this.mode = null;
								this.displayedMemory.reset();
								this.nonDisplayedMemory.reset();
								this.lastOutputScreen.reset();
								this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
								this.writeScreen = this.displayedMemory;
								this.mode = null;
								this.cueStartTime = null;
								this.lastCueEndTime = null
							};
							Cea608Channel.prototype.getHandler = function getHandler() {
								return this.outputFilter
							};
							Cea608Channel.prototype.setHandler = function setHandler(newHandler) {
								this.outputFilter = newHandler
							};
							Cea608Channel.prototype.setPAC = function setPAC(pacData) {
								this.writeScreen.setPAC(pacData)
							};
							Cea608Channel.prototype.setBkgData = function setBkgData(bkgData) {
								this.writeScreen.setBkgData(bkgData)
							};
							Cea608Channel.prototype.setMode = function setMode(newMode) {
								if (newMode === this.mode) return;
								this.mode = newMode;
								cea_608_parser_logger.log('INFO', 'MODE=' + newMode);
								if (this.mode === 'MODE_POP-ON') {
									this.writeScreen = this.nonDisplayedMemory
								} else {
									this.writeScreen = this.displayedMemory;
									this.writeScreen.reset()
								} if (this.mode !== 'MODE_ROLL-UP') {
									this.displayedMemory.nrRollUpRows = null;
									this.nonDisplayedMemory.nrRollUpRows = null
								}
								this.mode = newMode
							};
							Cea608Channel.prototype.insertChars = function insertChars(chars) {
								for (var i = 0; i < chars.length; i++) {
									this.writeScreen.insertChar(chars[i])
								}
								var screen = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
								cea_608_parser_logger.log('INFO', screen + ': ' + this.writeScreen.getDisplayText(true));
								if (this.mode === 'MODE_PAINT-ON' || this.mode === 'MODE_ROLL-UP') {
									cea_608_parser_logger.log('TEXT', 'DISPLAYED: ' + this.displayedMemory.getDisplayText(true));
									this.outputDataUpdate()
								}
							};
							Cea608Channel.prototype.ccRCL = function ccRCL() {
								cea_608_parser_logger.log('INFO', 'RCL - Resume Caption Loading');
								this.setMode('MODE_POP-ON')
							};
							Cea608Channel.prototype.ccBS = function ccBS() {
								cea_608_parser_logger.log('INFO', 'BS - BackSpace');
								if (this.mode === 'MODE_TEXT') return;
								this.writeScreen.backSpace();
								if (this.writeScreen === this.displayedMemory) this.outputDataUpdate()
							};
							Cea608Channel.prototype.ccAOF = function ccAOF() { };
							Cea608Channel.prototype.ccAON = function ccAON() { };
							Cea608Channel.prototype.ccDER = function ccDER() {
								cea_608_parser_logger.log('INFO', 'DER- Delete to End of Row');
								this.writeScreen.clearToEndOfRow();
								this.outputDataUpdate()
							};
							Cea608Channel.prototype.ccRU = function ccRU(nrRows) {
								cea_608_parser_logger.log('INFO', 'RU(' + nrRows + ') - Roll Up');
								this.writeScreen = this.displayedMemory;
								this.setMode('MODE_ROLL-UP');
								this.writeScreen.setRollUpRows(nrRows)
							};
							Cea608Channel.prototype.ccFON = function ccFON() {
								cea_608_parser_logger.log('INFO', 'FON - Flash On');
								this.writeScreen.setPen({
									flash: true
								})
							};
							Cea608Channel.prototype.ccRDC = function ccRDC() {
								cea_608_parser_logger.log('INFO', 'RDC - Resume Direct Captioning');
								this.setMode('MODE_PAINT-ON')
							};
							Cea608Channel.prototype.ccTR = function ccTR() {
								cea_608_parser_logger.log('INFO', 'TR');
								this.setMode('MODE_TEXT')
							};
							Cea608Channel.prototype.ccRTD = function ccRTD() {
								cea_608_parser_logger.log('INFO', 'RTD');
								this.setMode('MODE_TEXT')
							};
							Cea608Channel.prototype.ccEDM = function ccEDM() {
								cea_608_parser_logger.log('INFO', 'EDM - Erase Displayed Memory');
								this.displayedMemory.reset();
								this.outputDataUpdate(true)
							};
							Cea608Channel.prototype.ccCR = function ccCR() {
								cea_608_parser_logger.log('CR - Carriage Return');
								this.writeScreen.rollUp();
								this.outputDataUpdate(true)
							};
							Cea608Channel.prototype.ccENM = function ccENM() {
								cea_608_parser_logger.log('INFO', 'ENM - Erase Non-displayed Memory');
								this.nonDisplayedMemory.reset()
							};
							Cea608Channel.prototype.ccEOC = function ccEOC() {
								cea_608_parser_logger.log('INFO', 'EOC - End Of Caption');
								if (this.mode === 'MODE_POP-ON') {
									var tmp = this.displayedMemory;
									this.displayedMemory = this.nonDisplayedMemory;
									this.nonDisplayedMemory = tmp;
									this.writeScreen = this.nonDisplayedMemory;
									cea_608_parser_logger.log('TEXT', 'DISP: ' + this.displayedMemory.getDisplayText())
								}
								this.outputDataUpdate(true)
							};
							Cea608Channel.prototype.ccTO = function ccTO(nrCols) {
								cea_608_parser_logger.log('INFO', 'TO(' + nrCols + ') - Tab Offset');
								this.writeScreen.moveCursor(nrCols)
							};
							Cea608Channel.prototype.ccMIDROW = function ccMIDROW(secondByte) {
								var styles = {
									flash: false
								};
								styles.underline = secondByte % 2 === 1;
								styles.italics = secondByte >= 0x2e;
								if (!styles.italics) {
									var colorIndex = Math.floor(secondByte / 2) - 0x10;
									var colors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'];
									styles.foreground = colors[colorIndex]
								} else {
									styles.foreground = 'white'
								}
								cea_608_parser_logger.log('INFO', 'MIDROW: ' + JSON.stringify(styles));
								this.writeScreen.setPen(styles)
							};
							Cea608Channel.prototype.outputDataUpdate = function outputDataUpdate() {
								var dispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
								var t = cea_608_parser_logger.time;
								if (t === null) return;
								if (this.outputFilter) {
									if (this.cueStartTime === null && !this.displayedMemory.isEmpty()) {
										this.cueStartTime = t
									} else {
										if (!this.displayedMemory.equals(this.lastOutputScreen)) {
											if (this.outputFilter.newCue) {
												this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen);
												if (dispatch === true && this.outputFilter.dispatchCue) this.outputFilter.dispatchCue()
											}
											this.cueStartTime = this.displayedMemory.isEmpty() ? null : t
										}
									}
									this.lastOutputScreen.copy(this.displayedMemory)
								}
							};
							Cea608Channel.prototype.cueSplitAtTime = function cueSplitAtTime(t) {
								if (this.outputFilter) {
									if (!this.displayedMemory.isEmpty()) {
										if (this.outputFilter.newCue) this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory);
										this.cueStartTime = t
									}
								}
							};
							return Cea608Channel
						}();
						var Cea608Parser = function () {
							function Cea608Parser(field, out1, out2) {
								cea_608_parser__classCallCheck(this, Cea608Parser);
								this.field = field || 1;
								this.outputs = [out1, out2];
								this.channels = [new Cea608Channel(1, out1), new Cea608Channel(2, out2)];
								this.currChNr = -1;
								this.lastCmdA = null;
								this.lastCmdB = null;
								this.bufferedData = [];
								this.startTime = null;
								this.lastTime = null;
								this.dataCounters = {
									'padding': 0,
									'char': 0,
									'cmd': 0,
									'other': 0
								}
							}
							Cea608Parser.prototype.getHandler = function getHandler(index) {
								return this.channels[index].getHandler()
							};
							Cea608Parser.prototype.setHandler = function setHandler(index, newHandler) {
								this.channels[index].setHandler(newHandler)
							};
							Cea608Parser.prototype.addData = function addData(t, byteList) {
								var cmdFound = void 0,
									a = void 0,
									b = void 0,
									charsFound = false;
								this.lastTime = t;
								cea_608_parser_logger.setTime(t);
								for (var i = 0; i < byteList.length; i += 2) {
									a = byteList[i] & 0x7f;
									b = byteList[i + 1] & 0x7f;
									if (a === 0 && b === 0) {
										this.dataCounters.padding += 2;
										continue
									} else {
										cea_608_parser_logger.log('DATA', '[' + numArrayToHexArray([byteList[i], byteList[i + 1]]) + '] -> (' + numArrayToHexArray([a, b]) + ')')
									}
									cmdFound = this.parseCmd(a, b);
									if (!cmdFound) cmdFound = this.parseMidrow(a, b);
									if (!cmdFound) cmdFound = this.parsePAC(a, b);
									if (!cmdFound) cmdFound = this.parseBackgroundAttributes(a, b);
									if (!cmdFound) {
										charsFound = this.parseChars(a, b);
										if (charsFound) {
											if (this.currChNr && this.currChNr >= 0) {
												var channel = this.channels[this.currChNr - 1];
												channel.insertChars(charsFound)
											} else {
												cea_608_parser_logger.log('WARNING', 'No channel found yet. TEXT-MODE?')
											}
										}
									}
									if (cmdFound) {
										this.dataCounters.cmd += 2
									} else if (charsFound) {
										this.dataCounters.char += 2
									} else {
										this.dataCounters.other += 2;
										cea_608_parser_logger.log('WARNING', 'Couldn\'t parse cleaned data ' + numArrayToHexArray([a, b]) + ' orig: ' + numArrayToHexArray([byteList[i], byteList[i + 1]]))
									}
								}
							};
							Cea608Parser.prototype.parseCmd = function parseCmd(a, b) {
								var chNr = null;
								var cond1 = (a === 0x14 || a === 0x1C) && b >= 0x20 && b <= 0x2F;
								var cond2 = (a === 0x17 || a === 0x1F) && b >= 0x21 && b <= 0x23;
								if (!(cond1 || cond2)) return false;
								if (a === this.lastCmdA && b === this.lastCmdB) {
									this.lastCmdA = null;
									this.lastCmdB = null;
									cea_608_parser_logger.log('DEBUG', 'Repeated command (' + numArrayToHexArray([a, b]) + ') is dropped');
									return true
								}
								if (a === 0x14 || a === 0x17) chNr = 1;
								else chNr = 2;
								var channel = this.channels[chNr - 1];
								if (a === 0x14 || a === 0x1C) {
									if (b === 0x20) channel.ccRCL();
									else if (b === 0x21) channel.ccBS();
									else if (b === 0x22) channel.ccAOF();
									else if (b === 0x23) channel.ccAON();
									else if (b === 0x24) channel.ccDER();
									else if (b === 0x25) channel.ccRU(2);
									else if (b === 0x26) channel.ccRU(3);
									else if (b === 0x27) channel.ccRU(4);
									else if (b === 0x28) channel.ccFON();
									else if (b === 0x29) channel.ccRDC();
									else if (b === 0x2A) channel.ccTR();
									else if (b === 0x2B) channel.ccRTD();
									else if (b === 0x2C) channel.ccEDM();
									else if (b === 0x2D) channel.ccCR();
									else if (b === 0x2E) channel.ccENM();
									else if (b === 0x2F) channel.ccEOC()
								} else {
									channel.ccTO(b - 0x20)
								}
								this.lastCmdA = a;
								this.lastCmdB = b;
								this.currChNr = chNr;
								return true
							};
							Cea608Parser.prototype.parseMidrow = function parseMidrow(a, b) {
								var chNr = null;
								if ((a === 0x11 || a === 0x19) && b >= 0x20 && b <= 0x2f) {
									if (a === 0x11) chNr = 1;
									else chNr = 2; if (chNr !== this.currChNr) {
										cea_608_parser_logger.log('ERROR', 'Mismatch channel in midrow parsing');
										return false
									}
									var channel = this.channels[chNr - 1];
									channel.ccMIDROW(b);
									cea_608_parser_logger.log('DEBUG', 'MIDROW (' + numArrayToHexArray([a, b]) + ')');
									return true
								}
								return false
							};
							Cea608Parser.prototype.parsePAC = function parsePAC(a, b) {
								var chNr = null;
								var row = null;
								var case1 = (a >= 0x11 && a <= 0x17 || a >= 0x19 && a <= 0x1F) && b >= 0x40 && b <= 0x7F;
								var case2 = (a === 0x10 || a === 0x18) && b >= 0x40 && b <= 0x5F;
								if (!(case1 || case2)) return false;
								if (a === this.lastCmdA && b === this.lastCmdB) {
									this.lastCmdA = null;
									this.lastCmdB = null;
									return true
								}
								chNr = a <= 0x17 ? 1 : 2;
								if (b >= 0x40 && b <= 0x5F) {
									row = chNr === 1 ? rowsLowCh1[a] : rowsLowCh2[a]
								} else {
									row = chNr === 1 ? rowsHighCh1[a] : rowsHighCh2[a]
								}
								var pacData = this.interpretPAC(row, b);
								var channel = this.channels[chNr - 1];
								channel.setPAC(pacData);
								this.lastCmdA = a;
								this.lastCmdB = b;
								this.currChNr = chNr;
								return true
							};
							Cea608Parser.prototype.interpretPAC = function interpretPAC(row, byte) {
								var pacIndex = byte;
								var pacData = {
									color: null,
									italics: false,
									indent: null,
									underline: false,
									row: row
								};
								if (byte > 0x5F) pacIndex = byte - 0x60;
								else pacIndex = byte - 0x40;
								pacData.underline = (pacIndex & 1) === 1;
								if (pacIndex <= 0xd) {
									pacData.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][Math.floor(pacIndex / 2)]
								} else if (pacIndex <= 0xf) {
									pacData.italics = true;
									pacData.color = 'white'
								} else {
									pacData.indent = Math.floor((pacIndex - 0x10) / 2) * 4
								}
								return pacData
							};
							Cea608Parser.prototype.parseChars = function parseChars(a, b) {
								var channelNr = null,
									charCodes = null,
									charCode1 = null;
								if (a >= 0x19) {
									channelNr = 2;
									charCode1 = a - 8
								} else {
									channelNr = 1;
									charCode1 = a
								} if (charCode1 >= 0x11 && charCode1 <= 0x13) {
									var oneCode = b;
									if (charCode1 === 0x11) oneCode = b + 0x50;
									else if (charCode1 === 0x12) oneCode = b + 0x70;
									else oneCode = b + 0x90;
									cea_608_parser_logger.log('INFO', 'Special char \'' + getCharForByte(oneCode) + '\' in channel ' + channelNr);
									charCodes = [oneCode]
								} else if (a >= 0x20 && a <= 0x7f) {
									charCodes = b === 0 ? [a] : [a, b]
								}
								if (charCodes) {
									var hexCodes = numArrayToHexArray(charCodes);
									cea_608_parser_logger.log('DEBUG', 'Char codes =  ' + hexCodes.join(','));
									this.lastCmdA = null;
									this.lastCmdB = null
								}
								return charCodes
							};
							Cea608Parser.prototype.parseBackgroundAttributes = function parseBackgroundAttributes(a, b) {
								var bkgData = void 0,
									index = void 0,
									chNr = void 0,
									channel = void 0;
								var case1 = (a === 0x10 || a === 0x18) && b >= 0x20 && b <= 0x2f;
								var case2 = (a === 0x17 || a === 0x1f) && b >= 0x2d && b <= 0x2f;
								if (!(case1 || case2)) return false;
								bkgData = {};
								if (a === 0x10 || a === 0x18) {
									index = Math.floor((b - 0x20) / 2);
									bkgData.background = backgroundColors[index];
									if (b % 2 === 1) bkgData.background = bkgData.background + '_semi'
								} else if (b === 0x2d) {
									bkgData.background = 'transparent'
								} else {
									bkgData.foreground = 'black';
									if (b === 0x2f) bkgData.underline = true
								}
								chNr = a < 0x18 ? 1 : 2;
								channel = this.channels[chNr - 1];
								channel.setBkgData(bkgData);
								this.lastCmdA = null;
								this.lastCmdB = null;
								return true
							};
							Cea608Parser.prototype.reset = function reset() {
								for (var i = 0; i < this.channels.length; i++) {
									if (this.channels[i]) this.channels[i].reset()
								}
								this.lastCmdA = null;
								this.lastCmdB = null
							};
							Cea608Parser.prototype.cueSplitAtTime = function cueSplitAtTime(t) {
								for (var i = 0; i < this.channels.length; i++) {
									if (this.channels[i]) this.channels[i].cueSplitAtTime(t)
								}
							};
							return Cea608Parser
						}();
						var cea_608_parser = (Cea608Parser);

						function output_filter__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						var OutputFilter = function () {
							function OutputFilter(timelineController, track) {
								output_filter__classCallCheck(this, OutputFilter);
								this.timelineController = timelineController;
								this.track = track;
								this.startTime = null;
								this.endTime = null;
								this.screen = null
							}
							OutputFilter.prototype.dispatchCue = function dispatchCue() {
								if (this.startTime === null) return;
								this.timelineController.addCues('textTrack' + this.track, this.startTime, this.endTime, this.screen);
								this.startTime = null
							};
							OutputFilter.prototype.newCue = function newCue(startTime, endTime, screen) {
								if (this.startTime === null || this.startTime > startTime) this.startTime = startTime;
								this.endTime = endTime;
								this.screen = screen;
								this.timelineController.createCaptionsTrack(this.track)
							};
							return OutputFilter
						}();
						var output_filter = (OutputFilter);
						var startsWith = function startsWith(inputString, searchString, position) {
							return inputString.substr(position || 0, searchString.length) === searchString
						};
						var cueString2millis = function cueString2millis(timeString) {
							var ts = parseInt(timeString.substr(-3));
							var secs = parseInt(timeString.substr(-6, 2));
							var mins = parseInt(timeString.substr(-9, 2));
							var hours = timeString.length > 9 ? parseInt(timeString.substr(0, timeString.indexOf(':'))) : 0;
							if (isNaN(ts) || isNaN(secs) || isNaN(mins) || isNaN(hours)) return -1;
							ts += 1000 * secs;
							ts += 60 * 1000 * mins;
							ts += 60 * 60 * 1000 * hours;
							return ts
						};
						var hash = function hash(text) {
							var hash = 5381;
							var i = text.length;
							while (i) {
								hash = hash * 33 ^ text.charCodeAt(--i)
							}
							return (hash >>> 0).toString()
						};
						var calculateOffset = function calculateOffset(vttCCs, cc, presentationTime) {
							var currCC = vttCCs[cc];
							var prevCC = vttCCs[currCC.prevCC];
							if (!prevCC || !prevCC.new && currCC.new) {
								vttCCs.ccOffset = vttCCs.presentationOffset = currCC.start;
								currCC.new = false;
								return
							}
							while (prevCC && prevCC.new) {
								vttCCs.ccOffset += currCC.start - prevCC.start;
								currCC.new = false;
								currCC = prevCC;
								prevCC = vttCCs[currCC.prevCC]
							}
							vttCCs.presentationOffset = presentationTime
						};
						var WebVTTParser = {
							parse: function parse(vttByteArray, syncPTS, vttCCs, cc, callBack, errorCallBack) {
								var re = /\r\n|\n\r|\n|\r/g;
								var vttLines = Object(id3["b"])(new Uint8Array(vttByteArray)).trim().replace(re, '\n').split('\n');
								var cueTime = '00:00.000';
								var mpegTs = 0;
								var localTime = 0;
								var presentationTime = 0;
								var cues = [];
								var parsingError = void 0;
								var inHeader = true;
								var parser = new vttparser();
								parser.oncue = function (cue) {
									var currCC = vttCCs[cc];
									var cueOffset = vttCCs.ccOffset;
									if (currCC && currCC.new) {
										if (localTime !== undefined) {
											cueOffset = vttCCs.ccOffset = currCC.start
										} else {
											calculateOffset(vttCCs, cc, presentationTime)
										}
									}
									if (presentationTime) {
										cueOffset = presentationTime + vttCCs.ccOffset - vttCCs.presentationOffset
									}
									cue.startTime += cueOffset - localTime;
									cue.endTime += cueOffset - localTime;
									cue.id = hash(cue.startTime.toString()) + hash(cue.endTime.toString()) + hash(cue.text);
									cue.text = decodeURIComponent(encodeURIComponent(cue.text));
									if (cue.endTime > 0) cues.push(cue)
								};
								parser.onparsingerror = function (e) {
									parsingError = e
								};
								parser.onflush = function () {
									if (parsingError && errorCallBack) {
										errorCallBack(parsingError);
										return
									}
									callBack(cues)
								};
								vttLines.forEach(function (line) {
									if (inHeader) {
										if (startsWith(line, 'X-TIMESTAMP-MAP=')) {
											inHeader = false;
											line.substr(16).split(',').forEach(function (timestamp) {
												if (startsWith(timestamp, 'LOCAL:')) cueTime = timestamp.substr(6);
												else if (startsWith(timestamp, 'MPEGTS:')) mpegTs = parseInt(timestamp.substr(7))
											});
											try {
												syncPTS = syncPTS < 0 ? syncPTS + 8589934592 : syncPTS;
												mpegTs -= syncPTS;
												localTime = cueString2millis(cueTime) / 1000;
												presentationTime = mpegTs / 90000;
												if (localTime === -1) parsingError = new Error('Malformed X-TIMESTAMP-MAP: ' + line)
											} catch (e) {
												parsingError = new Error('Malformed X-TIMESTAMP-MAP: ' + line)
											}
											return
										} else if (line === '') {
											inHeader = false
										}
									}
									parser.parse(line + '\n')
								});
								parser.flush()
							}
						};
						var webvtt_parser = (WebVTTParser);

						function timeline_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function timeline_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function timeline_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}

						function reuseVttTextTrack(inUseTrack, manifestTrack) {
							return inUseTrack && inUseTrack.label === manifestTrack.name && !(inUseTrack.textTrack1 || inUseTrack.textTrack2)
						}

						function intersection(x1, x2, y1, y2) {
							return Math.min(x2, y2) - Math.max(x1, y1)
						}
						var timeline_controller_TimelineController = function (_EventHandler) {
							timeline_controller__inherits(TimelineController, _EventHandler);

							function TimelineController(hls) {
								timeline_controller__classCallCheck(this, TimelineController);
								var _this = timeline_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHING, events["a"].MEDIA_DETACHING, events["a"].FRAG_PARSING_USERDATA, events["a"].FRAG_DECRYPTED, events["a"].MANIFEST_LOADING, events["a"].MANIFEST_LOADED, events["a"].FRAG_LOADED, events["a"].LEVEL_SWITCHING, events["a"].INIT_PTS_FOUND));
								_this.hls = hls;
								_this.config = hls.config;
								_this.enabled = true;
								_this.Cues = hls.config.cueHandler;
								_this.textTracks = [];
								_this.tracks = [];
								_this.unparsedVttFrags = [];
								_this.initPTS = undefined;
								_this.cueRanges = [];
								if (_this.config.enableCEA708Captions) {
									var channel1 = new output_filter(_this, 1);
									var channel2 = new output_filter(_this, 2);
									_this.cea608Parser = new cea_608_parser(0, channel1, channel2)
								}
								return _this
							}
							TimelineController.prototype.addCues = function addCues(channel, startTime, endTime, screen) {
								var ranges = this.cueRanges;
								var merged = false;
								for (var i = ranges.length; i--;) {
									var cueRange = ranges[i];
									var overlap = intersection(cueRange[0], cueRange[1], startTime, endTime);
									if (overlap >= 0) {
										cueRange[0] = Math.min(cueRange[0], startTime);
										cueRange[1] = Math.max(cueRange[1], endTime);
										merged = true;
										if (overlap / (endTime - startTime) > 0.5) return
									}
								}
								if (!merged) ranges.push([startTime, endTime]);
								this.Cues.newCue(this[channel], startTime, endTime, screen)
							};
							TimelineController.prototype.onInitPtsFound = function onInitPtsFound(data) {
								var _this2 = this;
								if (typeof this.initPTS === 'undefined') this.initPTS = data.initPTS;
								if (this.unparsedVttFrags.length) {
									this.unparsedVttFrags.forEach(function (frag) {
										_this2.onFragLoaded(frag)
									});
									this.unparsedVttFrags = []
								}
							};
							TimelineController.prototype.getExistingTrack = function getExistingTrack(channelNumber) {
								var media = this.media;
								if (media) {
									for (var i = 0; i < media.textTracks.length; i++) {
										var textTrack = media.textTracks[i];
										var propName = 'textTrack' + channelNumber;
										if (textTrack[propName] === true) return textTrack
									}
								}
								return null
							};
							TimelineController.prototype.createCaptionsTrack = function createCaptionsTrack(track) {
								var trackVar = 'textTrack' + track;
								if (!this[trackVar]) {
									var existingTrack = this.getExistingTrack(track);
									if (!existingTrack) {
										var textTrack = this.createTextTrack('captions', this.config['captionsTextTrack' + track + 'Label'], this.config['captionsTextTrack' + track + 'LanguageCode']);
										if (textTrack) {
											textTrack[trackVar] = true;
											this[trackVar] = textTrack
										}
									} else {
										this[trackVar] = existingTrack;
										clearCurrentCues(this[trackVar]);
										sendAddTrackEvent(this[trackVar], this.media)
									}
								}
							};
							TimelineController.prototype.createTextTrack = function createTextTrack(kind, label, lang) {
								var media = this.media;
								if (media) return media.addTextTrack(kind, label, lang)
							};
							TimelineController.prototype.destroy = function destroy() {
								event_handler.prototype.destroy.call(this)
							};
							TimelineController.prototype.onMediaAttaching = function onMediaAttaching(data) {
								this.media = data.media;
								this._cleanTracks()
							};
							TimelineController.prototype.onMediaDetaching = function onMediaDetaching() {
								clearCurrentCues(this.textTrack1);
								clearCurrentCues(this.textTrack2)
							};
							TimelineController.prototype.onManifestLoading = function onManifestLoading() {
								this.lastSn = -1;
								this.prevCC = -1;
								this.vttCCs = {
									ccOffset: 0,
									presentationOffset: 0
								};
								this._cleanTracks()
							};
							TimelineController.prototype._cleanTracks = function _cleanTracks() {
								var media = this.media;
								if (media) {
									var textTracks = media.textTracks;
									if (textTracks) {
										for (var i = 0; i < textTracks.length; i++) {
											clearCurrentCues(textTracks[i])
										}
									}
								}
							};
							TimelineController.prototype.onManifestLoaded = function onManifestLoaded(data) {
								var _this3 = this;
								this.textTracks = [];
								this.unparsedVttFrags = this.unparsedVttFrags || [];
								this.initPTS = undefined;
								this.cueRanges = [];
								if (this.config.enableWebVTT) {
									this.tracks = data.subtitles || [];
									var inUseTracks = this.media ? this.media.textTracks : [];
									this.tracks.forEach(function (track, index) {
										var textTrack = void 0;
										if (index < inUseTracks.length) {
											var inUseTrack = inUseTracks[index];
											if (reuseVttTextTrack(inUseTrack, track)) textTrack = inUseTrack
										}
										if (!textTrack) textTrack = _this3.createTextTrack('subtitles', track.name, track.lang);
										if (track.default) textTrack.mode = _this3.hls.subtitleDisplay ? 'showing' : 'hidden';
										else textTrack.mode = 'disabled';
										_this3.textTracks.push(textTrack)
									})
								}
							};
							TimelineController.prototype.onLevelSwitching = function onLevelSwitching() {
								this.enabled = this.hls.currentLevel.closedCaptions !== 'NONE'
							};
							TimelineController.prototype.onFragLoaded = function onFragLoaded(data) {
								var frag = data.frag,
									payload = data.payload;
								if (frag.type === 'main') {
									var sn = frag.sn;
									if (sn !== this.lastSn + 1) {
										var cea608Parser = this.cea608Parser;
										if (cea608Parser) cea608Parser.reset()
									}
									this.lastSn = sn
								} else if (frag.type === 'subtitle') {
									if (payload.byteLength) {
										if (typeof this.initPTS === 'undefined') {
											this.unparsedVttFrags.push(data);
											return
										}
										var decryptData = frag.decryptdata;
										if (decryptData == null || decryptData.key == null || decryptData.method !== 'AES-128') this._parseVTTs(frag, payload)
									} else {
										this.hls.trigger(events["a"].SUBTITLE_FRAG_PROCESSED, {
											success: false,
											frag: frag
										})
									}
								}
							};
							TimelineController.prototype._parseVTTs = function _parseVTTs(frag, payload) {
								var vttCCs = this.vttCCs;
								if (!vttCCs[frag.cc]) {
									vttCCs[frag.cc] = {
										start: frag.start,
										prevCC: this.prevCC,
										new: true
									};
									this.prevCC = frag.cc
								}
								var textTracks = this.textTracks,
									hls = this.hls;
								webvtt_parser.parse(payload, this.initPTS, vttCCs, frag.cc, function (cues) {
									var currentTrack = textTracks[frag.trackId];
									if (currentTrack.mode === 'disabled') {
										hls.trigger(events["a"].SUBTITLE_FRAG_PROCESSED, {
											success: false,
											frag: frag
										});
										return
									}
									cues.forEach(function (cue) {
										if (!currentTrack.cues.getCueById(cue.id)) {
											try {
												currentTrack.addCue(cue)
											} catch (err) {
												var textTrackCue = new window.TextTrackCue(cue.startTime, cue.endTime, cue.text);
												textTrackCue.id = cue.id;
												currentTrack.addCue(textTrackCue)
											}
										}
									});
									hls.trigger(events["a"].SUBTITLE_FRAG_PROCESSED, {
										success: true,
										frag: frag
									})
								}, function (e) {
									logger["b"].log('Failed to parse VTT cue: ' + e);
									hls.trigger(events["a"].SUBTITLE_FRAG_PROCESSED, {
										success: false,
										frag: frag
									})
								})
							};
							TimelineController.prototype.onFragDecrypted = function onFragDecrypted(data) {
								var decryptedData = data.payload,
									frag = data.frag;
								if (frag.type === 'subtitle') {
									if (typeof this.initPTS === 'undefined') {
										this.unparsedVttFrags.push(data);
										return
									}
									this._parseVTTs(frag, decryptedData)
								}
							};
							TimelineController.prototype.onFragParsingUserdata = function onFragParsingUserdata(data) {
								if (this.enabled && this.config.enableCEA708Captions) {
									for (var i = 0; i < data.samples.length; i++) {
										var ccdatas = this.extractCea608Data(data.samples[i].bytes);
										this.cea608Parser.addData(data.samples[i].pts, ccdatas)
									}
								}
							};
							TimelineController.prototype.extractCea608Data = function extractCea608Data(byteArray) {
								var count = byteArray[0] & 31;
								var position = 2;
								var tmpByte = void 0,
									ccbyte1 = void 0,
									ccbyte2 = void 0,
									ccValid = void 0,
									ccType = void 0;
								var actualCCBytes = [];
								for (var j = 0; j < count; j++) {
									tmpByte = byteArray[position++];
									ccbyte1 = 0x7F & byteArray[position++];
									ccbyte2 = 0x7F & byteArray[position++];
									ccValid = (4 & tmpByte) !== 0;
									ccType = 3 & tmpByte;
									if (ccbyte1 === 0 && ccbyte2 === 0) continue;
									if (ccValid) {
										if (ccType === 0) {
											actualCCBytes.push(ccbyte1);
											actualCCBytes.push(ccbyte2)
										}
									}
								}
								return actualCCBytes
							};
							return TimelineController
						}(event_handler);
						var timeline_controller = (timeline_controller_TimelineController);
						var subtitle_track_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function subtitle_track_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function subtitle_track_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function subtitle_track_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}

						function filterSubtitleTracks(textTrackList) {
							var tracks = [];
							for (var i = 0; i < textTrackList.length; i++) {
								if (textTrackList[i].kind === 'subtitles') tracks.push(textTrackList[i])
							}
							return tracks
						}
						var subtitle_track_controller_SubtitleTrackController = function (_EventHandler) {
							subtitle_track_controller__inherits(SubtitleTrackController, _EventHandler);

							function SubtitleTrackController(hls) {
								subtitle_track_controller__classCallCheck(this, SubtitleTrackController);
								var _this = subtitle_track_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].MEDIA_DETACHING, events["a"].MANIFEST_LOADING, events["a"].MANIFEST_LOADED, events["a"].SUBTITLE_TRACK_LOADED));
								_this.tracks = [];
								_this.trackId = -1;
								_this.media = undefined;
								_this.subtitleDisplay = false;
								return _this
							}
							SubtitleTrackController.prototype._onTextTracksChanged = function _onTextTracksChanged() {
								if (!this.media) return;
								var trackId = -1;
								var tracks = filterSubtitleTracks(this.media.textTracks);
								for (var id = 0; id < tracks.length; id++) {
									if (tracks[id].mode === 'hidden') {
										trackId = id
									} else if (tracks[id].mode === 'showing') {
										trackId = id;
										break
									}
								}
								this.subtitleTrack = trackId
							};
							SubtitleTrackController.prototype.destroy = function destroy() {
								event_handler.prototype.destroy.call(this)
							};
							SubtitleTrackController.prototype.onMediaAttached = function onMediaAttached(data) {
								var _this2 = this;
								this.media = data.media;
								if (!this.media) return;
								if (this.queuedDefaultTrack !== undefined) {
									this.subtitleTrack = this.queuedDefaultTrack;
									delete this.queuedDefaultTrack
								}
								this.trackChangeListener = this._onTextTracksChanged.bind(this);
								this.useTextTrackPolling = !(this.media.textTracks && 'onchange' in this.media.textTracks);
								if (this.useTextTrackPolling) {
									this.subtitlePollingInterval = setInterval(function () {
										_this2.trackChangeListener()
									}, 500)
								} else {
									this.media.textTracks.addEventListener('change', this.trackChangeListener)
								}
							};
							SubtitleTrackController.prototype.onMediaDetaching = function onMediaDetaching() {
								if (!this.media) return;
								if (this.useTextTrackPolling) clearInterval(this.subtitlePollingInterval);
								else this.media.textTracks.removeEventListener('change', this.trackChangeListener);
								this.media = undefined
							};
							SubtitleTrackController.prototype.onManifestLoading = function onManifestLoading() {
								this.tracks = [];
								this.trackId = -1
							};
							SubtitleTrackController.prototype.onManifestLoaded = function onManifestLoaded(data) {
								var _this3 = this;
								var tracks = data.subtitles || [];
								this.tracks = tracks;
								this.trackId = -1;
								this.hls.trigger(events["a"].SUBTITLE_TRACKS_UPDATED, {
									subtitleTracks: tracks
								});
								tracks.forEach(function (track) {
									if (track.default) {
										if (_this3.media) _this3.subtitleTrack = track.id;
										else _this3.queuedDefaultTrack = track.id
									}
								})
							};
							SubtitleTrackController.prototype.onTick = function onTick() {
								var trackId = this.trackId;
								var subtitleTrack = this.tracks[trackId];
								if (!subtitleTrack) return;
								var details = subtitleTrack.details;
								if (details === undefined || details.live === true) {
									logger["b"].log('(re)loading playlist for subtitle track ' + trackId);
									this.hls.trigger(events["a"].SUBTITLE_TRACK_LOADING, {
										url: subtitleTrack.url,
										id: trackId
									})
								}
							};
							SubtitleTrackController.prototype.onSubtitleTrackLoaded = function onSubtitleTrackLoaded(data) {
								var _this4 = this;
								if (data.id < this.tracks.length) {
									logger["b"].log('subtitle track ' + data.id + ' loaded');
									this.tracks[data.id].details = data.details;
									if (data.details.live && !this.timer) {
										this.timer = setInterval(function () {
											_this4.onTick()
										}, 1000 * data.details.targetduration, this)
									}
									if (!data.details.live && this.timer) {
										clearInterval(this.timer);
										this.timer = null
									}
								}
							};
							SubtitleTrackController.prototype.setSubtitleTrackInternal = function setSubtitleTrackInternal(newId) {
								if (newId < -1 || newId >= this.tracks.length) return;
								if (this.timer) {
									clearInterval(this.timer);
									this.timer = null
								}
								var textTracks = filterSubtitleTracks(this.media.textTracks);
								if (this.trackId !== -1) textTracks[this.trackId].mode = 'disabled';
								this.trackId = newId;
								logger["b"].log('switching to subtitle track ' + newId);
								this.hls.trigger(events["a"].SUBTITLE_TRACK_SWITCH, {
									id: newId
								});
								if (newId === -1) return;
								var subtitleTrack = this.tracks[newId];
								if (newId < textTracks.length) textTracks[newId].mode = this.subtitleDisplay ? 'showing' : 'hidden';
								var details = subtitleTrack.details;
								if (details === undefined || details.live === true) {
									logger["b"].log('(re)loading playlist for subtitle track ' + newId);
									this.hls.trigger(events["a"].SUBTITLE_TRACK_LOADING, {
										url: subtitleTrack.url,
										id: newId
									})
								}
							};
							subtitle_track_controller__createClass(SubtitleTrackController, [{
								key: 'subtitleTracks',
								get: function get() {
									return this.tracks
								}
							}, {
								key: 'subtitleTrack',
								get: function get() {
									return this.trackId
								},
								set: function set(subtitleTrackId) {
									if (this.trackId !== subtitleTrackId) {
										this.setSubtitleTrackInternal(subtitleTrackId)
									}
								}
							}]);
							return SubtitleTrackController
						}(event_handler);
						var subtitle_track_controller = (subtitle_track_controller_SubtitleTrackController);
						var decrypter = __webpack_require__(5);

						function subtitle_stream_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function subtitle_stream_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function subtitle_stream_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var subtitle_stream_controller_State = {
							STOPPED: 'STOPPED',
							IDLE: 'IDLE',
							KEY_LOADING: 'KEY_LOADING',
							FRAG_LOADING: 'FRAG_LOADING'
						};
						var subtitle_stream_controller_SubtitleStreamController = function (_TaskLoop) {
							subtitle_stream_controller__inherits(SubtitleStreamController, _TaskLoop);

							function SubtitleStreamController(hls) {
								subtitle_stream_controller__classCallCheck(this, SubtitleStreamController);
								var _this = subtitle_stream_controller__possibleConstructorReturn(this, _TaskLoop.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].ERROR, events["a"].KEY_LOADED, events["a"].FRAG_LOADED, events["a"].SUBTITLE_TRACKS_UPDATED, events["a"].SUBTITLE_TRACK_SWITCH, events["a"].SUBTITLE_TRACK_LOADED, events["a"].SUBTITLE_FRAG_PROCESSED));
								_this.config = hls.config;
								_this.vttFragSNsProcessed = {};
								_this.vttFragQueues = undefined;
								_this.currentlyProcessing = null;
								_this.state = subtitle_stream_controller_State.STOPPED;
								_this.currentTrackId = -1;
								_this.decrypter = new decrypter["a"](hls.observer, hls.config);
								return _this
							}
							SubtitleStreamController.prototype.onHandlerDestroyed = function onHandlerDestroyed() {
								this.state = subtitle_stream_controller_State.STOPPED
							};
							SubtitleStreamController.prototype.clearVttFragQueues = function clearVttFragQueues() {
								var _this2 = this;
								this.vttFragQueues = {};
								this.tracks.forEach(function (track) {
									_this2.vttFragQueues[track.id] = []
								})
							};
							SubtitleStreamController.prototype.nextFrag = function nextFrag() {
								if (this.currentlyProcessing === null && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
									var frag = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
									this.fragCurrent = frag;
									this.hls.trigger(events["a"].FRAG_LOADING, {
										frag: frag
									});
									this.state = subtitle_stream_controller_State.FRAG_LOADING
								}
							};
							SubtitleStreamController.prototype.onSubtitleFragProcessed = function onSubtitleFragProcessed(data) {
								if (data.success) this.vttFragSNsProcessed[data.frag.trackId].push(data.frag.sn);
								this.currentlyProcessing = null;
								this.state = subtitle_stream_controller_State.IDLE;
								this.nextFrag()
							};
							SubtitleStreamController.prototype.onMediaAttached = function onMediaAttached() {
								this.state = subtitle_stream_controller_State.IDLE
							};
							SubtitleStreamController.prototype.onError = function onError(data) {
								var frag = data.frag;
								if (frag && frag.type !== 'subtitle') return;
								if (this.currentlyProcessing) {
									this.currentlyProcessing = null;
									this.nextFrag()
								}
							};
							SubtitleStreamController.prototype.doTick = function doTick() {
								var _this3 = this;
								switch (this.state) {
									case subtitle_stream_controller_State.IDLE:
										var tracks = this.tracks;
										var trackId = this.currentTrackId;
										var processedFragSNs = this.vttFragSNsProcessed[trackId],
											fragQueue = this.vttFragQueues[trackId],
											currentFragSN = this.currentlyProcessing ? this.currentlyProcessing.sn : -1;
										var alreadyProcessed = function alreadyProcessed(frag) {
											return processedFragSNs.indexOf(frag.sn) > -1
										};
										var alreadyInQueue = function alreadyInQueue(frag) {
											return fragQueue.some(function (fragInQueue) {
												return fragInQueue.sn === frag.sn
											})
										};
										if (!tracks) break;
										var trackDetails;
										if (trackId < tracks.length) trackDetails = tracks[trackId].details;
										if (typeof trackDetails === 'undefined') break;
										trackDetails.fragments.forEach(function (frag) {
											if (!(alreadyProcessed(frag) || frag.sn === currentFragSN || alreadyInQueue(frag))) {
												if (frag.decryptdata && frag.decryptdata.uri != null && frag.decryptdata.key == null) {
													logger["b"].log('Loading key for ' + frag.sn);
													_this3.state = subtitle_stream_controller_State.KEY_LOADING;
													_this3.hls.trigger(events["a"].KEY_LOADING, {
														frag: frag
													})
												} else {
													frag.trackId = trackId;
													fragQueue.push(frag);
													_this3.nextFrag()
												}
											}
										})
								}
							};
							SubtitleStreamController.prototype.onSubtitleTracksUpdated = function onSubtitleTracksUpdated(data) {
								var _this4 = this;
								logger["b"].log('subtitle tracks updated');
								this.tracks = data.subtitleTracks;
								this.clearVttFragQueues();
								this.vttFragSNsProcessed = {};
								this.tracks.forEach(function (track) {
									_this4.vttFragSNsProcessed[track.id] = []
								})
							};
							SubtitleStreamController.prototype.onSubtitleTrackSwitch = function onSubtitleTrackSwitch(data) {
								this.currentTrackId = data.id;
								if (this.currentTrackId === -1) return;
								var currentTrack = this.tracks[this.currentTrackId];
								var details = currentTrack.details;
								if (details !== undefined) this.tick()
							};
							SubtitleStreamController.prototype.onSubtitleTrackLoaded = function onSubtitleTrackLoaded() {
								this.tick()
							};
							SubtitleStreamController.prototype.onKeyLoaded = function onKeyLoaded() {
								if (this.state === subtitle_stream_controller_State.KEY_LOADING) {
									this.state = subtitle_stream_controller_State.IDLE;
									this.tick()
								}
							};
							SubtitleStreamController.prototype.onFragLoaded = function onFragLoaded(data) {
								var fragCurrent = this.fragCurrent,
									decryptData = data.frag.decryptdata;
								var fragLoaded = data.frag,
									hls = this.hls;
								if (this.state === subtitle_stream_controller_State.FRAG_LOADING && fragCurrent && data.frag.type === 'subtitle' && fragCurrent.sn === data.frag.sn) {
									if (data.payload.byteLength > 0 && decryptData != null && decryptData.key != null && decryptData.method === 'AES-128') {
										var startTime = void 0;
										try {
											startTime = performance.now()
										} catch (error) {
											startTime = Date.now()
										}
										this.decrypter.decrypt(data.payload, decryptData.key.buffer, decryptData.iv.buffer, function (decryptedData) {
											var endTime = void 0;
											try {
												endTime = performance.now()
											} catch (error) {
												endTime = Date.now()
											}
											hls.trigger(events["a"].FRAG_DECRYPTED, {
												frag: fragLoaded,
												payload: decryptedData,
												stats: {
													tstart: startTime,
													tdecrypt: endTime
												}
											})
										})
									}
								}
							};
							return SubtitleStreamController
						}(task_loop);
						var subtitle_stream_controller = (subtitle_stream_controller_SubtitleStreamController);
						var eme_controller__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function eme_controller__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function eme_controller__possibleConstructorReturn(self, call) {
							if (!self) {
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							}
							return call && (typeof call === "object" || typeof call === "function") ? call : self
						}

						function eme_controller__inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}
							subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: {
									value: subClass,
									enumerable: false,
									writable: true,
									configurable: true
								}
							});
							if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
						}
						var MAX_LICENSE_REQUEST_FAILURES = 3;
						var KeySystems = {
							WIDEVINE: 'com.widevine.alpha',
							PLAYREADY: 'com.microsoft.playready'
						};
						var createWidevineMediaKeySystemConfigurations = function createWidevineMediaKeySystemConfigurations(audioCodecs, videoCodecs, drmSystemOptions) {
							var baseConfig = {
								videoCapabilities: []
							};
							videoCodecs.forEach(function (codec) {
								baseConfig.videoCapabilities.push({
									contentType: 'video/mp4; codecs="' + codec + '"'
								})
							});
							return [baseConfig]
						};
						var getSupportedMediaKeySystemConfigurations = function getSupportedMediaKeySystemConfigurations(keySystem, audioCodecs, videoCodecs) {
							switch (keySystem) {
								case KeySystems.WIDEVINE:
									return createWidevineMediaKeySystemConfigurations(audioCodecs, videoCodecs);
								default:
									throw Error('Unknown key-system: ' + keySystem);
							}
						};
						var eme_controller_EMEController = function (_EventHandler) {
							eme_controller__inherits(EMEController, _EventHandler);

							function EMEController(hls) {
								eme_controller__classCallCheck(this, EMEController);
								var _this = eme_controller__possibleConstructorReturn(this, _EventHandler.call(this, hls, events["a"].MEDIA_ATTACHED, events["a"].MANIFEST_PARSED));
								_this._widevineLicenseUrl = hls.config.widevineLicenseUrl;
								_this._licenseXhrSetup = hls.config.licenseXhrSetup;
								_this._emeEnabled = hls.config.emeEnabled;
								_this._requestMediaKeySystemAccess = hls.config.requestMediaKeySystemAccessFunc;
								_this._mediaKeysList = [];
								_this._media = null;
								_this._hasSetMediaKeys = false;
								_this._isMediaEncrypted = false;
								_this._requestLicenseFailureCount = 0;
								return _this
							}
							EMEController.prototype.getLicenseServerUrl = function getLicenseServerUrl(keySystem) {
								var url = void 0;
								switch (keySystem) {
									case KeySystems.WIDEVINE:
										url = this._widevineLicenseUrl;
										break;
									default:
										url = null;
										break
								}
								if (!url) {
									logger["b"].error('No license server URL configured for key-system "' + keySystem + '"');
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: true
									})
								}
								return url
							};
							EMEController.prototype._attemptKeySystemAccess = function _attemptKeySystemAccess(keySystem, audioCodecs, videoCodecs) {
								var _this2 = this;
								var mediaKeySystemConfigs = getSupportedMediaKeySystemConfigurations(keySystem, audioCodecs, videoCodecs);
								if (!mediaKeySystemConfigs) {
									logger["b"].warn('Can not create config for key-system (maybe because platform is not supported):', keySystem);
									return
								}
								logger["b"].log('Requesting encrypted media key-system access');
								this.requestMediaKeySystemAccess(keySystem, mediaKeySystemConfigs).then(function (mediaKeySystemAccess) {
									_this2._onMediaKeySystemAccessObtained(keySystem, mediaKeySystemAccess)
								}).catch(function (err) {
									logger["b"].error('Failed to obtain key-system "' + keySystem + '" access:', err)
								})
							};
							EMEController.prototype._onMediaKeySystemAccessObtained = function _onMediaKeySystemAccessObtained(keySystem, mediaKeySystemAccess) {
								var _this3 = this;
								logger["b"].log('Access for key-system "' + keySystem + '" obtained');
								var mediaKeysListItem = {
									mediaKeys: null,
									mediaKeysSession: null,
									mediaKeysSessionInitialized: false,
									mediaKeySystemAccess: mediaKeySystemAccess,
									mediaKeySystemDomain: keySystem
								};
								this._mediaKeysList.push(mediaKeysListItem);
								mediaKeySystemAccess.createMediaKeys().then(function (mediaKeys) {
									mediaKeysListItem.mediaKeys = mediaKeys;
									logger["b"].log('Media-keys created for key-system "' + keySystem + '"');
									_this3._onMediaKeysCreated()
								}).catch(function (err) {
									logger["b"].error('Failed to create media-keys:', err)
								})
							};
							EMEController.prototype._onMediaKeysCreated = function _onMediaKeysCreated() {
								var _this4 = this;
								this._mediaKeysList.forEach(function (mediaKeysListItem) {
									if (!mediaKeysListItem.mediaKeysSession) {
										mediaKeysListItem.mediaKeysSession = mediaKeysListItem.mediaKeys.createSession();
										_this4._onNewMediaKeySession(mediaKeysListItem.mediaKeysSession)
									}
								})
							};
							EMEController.prototype._onNewMediaKeySession = function _onNewMediaKeySession(keySession) {
								var _this5 = this;
								logger["b"].log('New key-system session ' + keySession.sessionId);
								keySession.addEventListener('message', function (event) {
									_this5._onKeySessionMessage(keySession, event.message)
								}, false)
							};
							EMEController.prototype._onKeySessionMessage = function _onKeySessionMessage(keySession, message) {
								logger["b"].log('Got EME message event, creating license request');
								this._requestLicense(message, function (data) {
									logger["b"].log('Received license data, updating key-session');
									keySession.update(data)
								})
							};
							EMEController.prototype._onMediaEncrypted = function _onMediaEncrypted(initDataType, initData) {
								logger["b"].log('Media is encrypted using "' + initDataType + '" init data type');
								this._isMediaEncrypted = true;
								this._mediaEncryptionInitDataType = initDataType;
								this._mediaEncryptionInitData = initData;
								this._attemptSetMediaKeys();
								this._generateRequestWithPreferredKeySession()
							};
							EMEController.prototype._attemptSetMediaKeys = function _attemptSetMediaKeys() {
								if (!this._hasSetMediaKeys) {
									var keysListItem = this._mediaKeysList[0];
									if (!keysListItem || !keysListItem.mediaKeys) {
										logger["b"].error('Fatal: Media is encrypted but no CDM access or no keys have been obtained yet');
										this.hls.trigger(events["a"].ERROR, {
											type: errors["b"].KEY_SYSTEM_ERROR,
											details: errors["a"].KEY_SYSTEM_NO_KEYS,
											fatal: true
										});
										return
									}
									logger["b"].log('Setting keys for encrypted media');
									this._media.setMediaKeys(keysListItem.mediaKeys);
									this._hasSetMediaKeys = true
								}
							};
							EMEController.prototype._generateRequestWithPreferredKeySession = function _generateRequestWithPreferredKeySession() {
								var _this6 = this;
								var keysListItem = this._mediaKeysList[0];
								if (!keysListItem) {
									logger["b"].error('Fatal: Media is encrypted but not any key-system access has been obtained yet');
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_NO_ACCESS,
										fatal: true
									});
									return
								}
								if (keysListItem.mediaKeysSessionInitialized) {
									logger["b"].warn('Key-Session already initialized but requested again');
									return
								}
								var keySession = keysListItem.mediaKeysSession;
								if (!keySession) {
									logger["b"].error('Fatal: Media is encrypted but no key-session existing');
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_NO_SESSION,
										fatal: true
									})
								}
								var initDataType = this._mediaEncryptionInitDataType;
								var initData = this._mediaEncryptionInitData;
								logger["b"].log('Generating key-session request for "' + initDataType + '" init data type');
								keysListItem.mediaKeysSessionInitialized = true;
								keySession.generateRequest(initDataType, initData).then(function () {
									logger["b"].debug('Key-session generation succeeded')
								}).catch(function (err) {
									logger["b"].error('Error generating key-session request:', err);
									_this6.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_NO_SESSION,
										fatal: false
									})
								})
							};
							EMEController.prototype._createLicenseXhr = function _createLicenseXhr(url, keyMessage, callback) {
								var xhr = new XMLHttpRequest();
								var licenseXhrSetup = this._licenseXhrSetup;
								try {
									if (licenseXhrSetup) {
										try {
											licenseXhrSetup(xhr, url)
										} catch (e) {
											xhr.open('POST', url, true);
											licenseXhrSetup(xhr, url)
										}
									}
									if (!xhr.readyState) xhr.open('POST', url, true)
								} catch (e) {
									logger["b"].error('Error setting up key-system license XHR', e);
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: true
									});
									return
								}
								xhr.responseType = 'arraybuffer';
								xhr.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, xhr, url, keyMessage, callback);
								return xhr
							};
							EMEController.prototype._onLicenseRequestReadyStageChange = function _onLicenseRequestReadyStageChange(xhr, url, keyMessage, callback) {
								switch (xhr.readyState) {
									case 4:
										if (xhr.status === 200) {
											this._requestLicenseFailureCount = 0;
											logger["b"].log('License request succeeded');
											callback(xhr.response)
										} else {
											logger["b"].error('License Request XHR failed (' + url + '). Status: ' + xhr.status + ' (' + xhr.statusText + ')');
											this._requestLicenseFailureCount++;
											if (this._requestLicenseFailureCount <= MAX_LICENSE_REQUEST_FAILURES) {
												var attemptsLeft = MAX_LICENSE_REQUEST_FAILURES - this._requestLicenseFailureCount + 1;
												logger["b"].warn('Retrying license request, ' + attemptsLeft + ' attempts left');
												this._requestLicense(keyMessage, callback);
												return
											}
											this.hls.trigger(events["a"].ERROR, {
												type: errors["b"].KEY_SYSTEM_ERROR,
												details: errors["a"].KEY_SYSTEM_LICENSE_REQUEST_FAILED,
												fatal: true
											})
										}
										break
								}
							};
							EMEController.prototype._generateLicenseRequestChallenge = function _generateLicenseRequestChallenge(keysListItem, keyMessage) {
								var challenge = void 0;
								if (keysListItem.mediaKeySystemDomain === KeySystems.PLAYREADY) {
									logger["b"].error('PlayReady is not supported (yet)')
								} else if (keysListItem.mediaKeySystemDomain === KeySystems.WIDEVINE) {
									challenge = keyMessage
								} else {
									logger["b"].error('Unsupported key-system:', keysListItem.mediaKeySystemDomain)
								}
								return challenge
							};
							EMEController.prototype._requestLicense = function _requestLicense(keyMessage, callback) {
								logger["b"].log('Requesting content license for key-system');
								var keysListItem = this._mediaKeysList[0];
								if (!keysListItem) {
									logger["b"].error('Fatal error: Media is encrypted but no key-system access has been obtained yet');
									this.hls.trigger(events["a"].ERROR, {
										type: errors["b"].KEY_SYSTEM_ERROR,
										details: errors["a"].KEY_SYSTEM_NO_ACCESS,
										fatal: true
									});
									return
								}
								var url = this.getLicenseServerUrl(keysListItem.mediaKeySystemDomain);
								var xhr = this._createLicenseXhr(url, keyMessage, callback);
								logger["b"].log('Sending license request to URL: ' + url);
								xhr.send(this._generateLicenseRequestChallenge(keysListItem, keyMessage))
							};
							EMEController.prototype.onMediaAttached = function onMediaAttached(data) {
								var _this7 = this;
								if (!this._emeEnabled) return;
								var media = data.media;
								this._media = media;
								media.addEventListener('encrypted', function (e) {
									_this7._onMediaEncrypted(e.initDataType, e.initData)
								})
							};
							EMEController.prototype.onManifestParsed = function onManifestParsed(data) {
								if (!this._emeEnabled) return;
								var audioCodecs = data.levels.map(function (level) {
									return level.audioCodec
								});
								var videoCodecs = data.levels.map(function (level) {
									return level.videoCodec
								});
								this._attemptKeySystemAccess(KeySystems.WIDEVINE, audioCodecs, videoCodecs)
							};
							eme_controller__createClass(EMEController, [{
								key: 'requestMediaKeySystemAccess',
								get: function get() {
									if (!this._requestMediaKeySystemAccess) throw new Error('No requestMediaKeySystemAccess function configured');
									return this._requestMediaKeySystemAccess
								}
							}]);
							return EMEController
						}(event_handler);
						var eme_controller = (eme_controller_EMEController);
						var requestMediaKeySystemAccess = function () {
							if (window.navigator && window.navigator.requestMediaKeySystemAccess) return window.navigator.requestMediaKeySystemAccess.bind(window.navigator);
							else return null
						}();
						var hlsDefaultConfig = {
							autoStartLoad: true,
							startPosition: -1,
							defaultAudioCodec: undefined,
							debug: false,
							capLevelOnFPSDrop: false,
							capLevelToPlayerSize: false,
							initialLiveManifestSize: 1,
							maxBufferLength: 30,
							maxBufferSize: 60 * 1000 * 1000,
							maxBufferHole: 0.5,
							lowBufferWatchdogPeriod: 0.5,
							highBufferWatchdogPeriod: 3,
							nudgeOffset: 0.1,
							nudgeMaxRetry: 3,
							maxFragLookUpTolerance: 0.25,
							liveSyncDurationCount: 3,
							liveMaxLatencyDurationCount: Infinity,
							liveSyncDuration: undefined,
							liveMaxLatencyDuration: undefined,
							liveDurationInfinity: false,
							maxMaxBufferLength: 600,
							enableWorker: true,
							enableSoftwareAES: true,
							manifestLoadingTimeOut: 10000,
							manifestLoadingMaxRetry: 1,
							manifestLoadingRetryDelay: 1000,
							manifestLoadingMaxRetryTimeout: 64000,
							startLevel: undefined,
							levelLoadingTimeOut: 10000,
							levelLoadingMaxRetry: 4,
							levelLoadingRetryDelay: 1000,
							levelLoadingMaxRetryTimeout: 64000,
							fragLoadingTimeOut: 20000,
							fragLoadingMaxRetry: 6,
							fragLoadingRetryDelay: 1000,
							fragLoadingMaxRetryTimeout: 64000,
							startFragPrefetch: false,
							fpsDroppedMonitoringPeriod: 5000,
							fpsDroppedMonitoringThreshold: 0.2,
							appendErrorMaxRetry: 3,
							loader: xhr_loader,
							fLoader: undefined,
							pLoader: undefined,
							xhrSetup: undefined,
							licenseXhrSetup: undefined,
							abrController: abr_controller,
							bufferController: buffer_controller,
							capLevelController: cap_level_controller,
							fpsController: fps_controller,
							stretchShortVideoTrack: false,
							maxAudioFramesDrift: 1,
							forceKeyFrameOnDiscontinuity: true,
							abrEwmaFastLive: 3,
							abrEwmaSlowLive: 9,
							abrEwmaFastVoD: 3,
							abrEwmaSlowVoD: 9,
							abrEwmaDefaultEstimate: 5e5,
							abrBandWidthFactor: 0.95,
							abrBandWidthUpFactor: 0.7,
							abrMaxWithRealBitrate: false,
							maxStarvationDelay: 4,
							maxLoadingDelay: 4,
							minAutoBitrate: 0,
							emeEnabled: false,
							widevineLicenseUrl: undefined,
							requestMediaKeySystemAccessFunc: requestMediaKeySystemAccess
						};
						if (true) {
							hlsDefaultConfig.subtitleStreamController = subtitle_stream_controller;
							hlsDefaultConfig.subtitleTrackController = subtitle_track_controller;
							hlsDefaultConfig.timelineController = timeline_controller;
							hlsDefaultConfig.cueHandler = cues_namespaceObject;
							hlsDefaultConfig.enableCEA708Captions = true;
							hlsDefaultConfig.enableWebVTT = true;
							hlsDefaultConfig.captionsTextTrack1Label = 'English';
							hlsDefaultConfig.captionsTextTrack1LanguageCode = 'en';
							hlsDefaultConfig.captionsTextTrack2Label = 'Spanish';
							hlsDefaultConfig.captionsTextTrack2LanguageCode = 'es'
						}
						if (true) {
							hlsDefaultConfig.audioStreamController = audio_stream_controller;
							hlsDefaultConfig.audioTrackController = audio_track_controller
						}
						if (true) hlsDefaultConfig.emeController = eme_controller;
						var hls__createClass = function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];
									descriptor.enumerable = descriptor.enumerable || false;
									descriptor.configurable = true;
									if ("value" in descriptor) descriptor.writable = true;
									Object.defineProperty(target, descriptor.key, descriptor)
								}
							}
							return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);
								if (staticProps) defineProperties(Constructor, staticProps);
								return Constructor
							}
						}();

						function hls__classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}
						__webpack_require__(12);
						var hls_Hls = function () {
							Hls.isSupported = function isSupported() {
								return is_supported_isSupported()
							};
							hls__createClass(Hls, null, [{
								key: 'version',
								get: function get() {
									return "0.9.1"
								}
							}, {
								key: 'Events',
								get: function get() {
									return events["a"]
								}
							}, {
								key: 'ErrorTypes',
								get: function get() {
									return errors["b"]
								}
							}, {
								key: 'ErrorDetails',
								get: function get() {
									return errors["a"]
								}
							}, {
								key: 'DefaultConfig',
								get: function get() {
									if (!Hls.defaultConfig) return hlsDefaultConfig;
									return Hls.defaultConfig
								},
								set: function set(defaultConfig) {
									Hls.defaultConfig = defaultConfig
								}
							}]);

							function Hls() {
								var _this = this;
								var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
								hls__classCallCheck(this, Hls);
								var defaultConfig = Hls.DefaultConfig;
								if ((config.liveSyncDurationCount || config.liveMaxLatencyDurationCount) && (config.liveSyncDuration || config.liveMaxLatencyDuration)) throw new Error('Illegal hls.js config: don\'t mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration');
								for (var prop in defaultConfig) {
									if (prop in config) continue;
									config[prop] = defaultConfig[prop]
								}
								if (config.liveMaxLatencyDurationCount !== undefined && config.liveMaxLatencyDurationCount <= config.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
								if (config.liveMaxLatencyDuration !== undefined && (config.liveMaxLatencyDuration <= config.liveSyncDuration || config.liveSyncDuration === undefined)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
								Object(logger["a"])(config.debug);
								this.config = config;
								this._autoLevelCapping = -1;
								var observer = this.observer = new events_default.a();
								observer.trigger = function trigger(event) {
									for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
										data[_key - 1] = arguments[_key]
									}
									observer.emit.apply(observer, [event, event].concat(data))
								};
								observer.off = function off(event) {
									for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
										data[_key2 - 1] = arguments[_key2]
									}
									observer.removeListener.apply(observer, [event].concat(data))
								};
								this.on = observer.on.bind(observer);
								this.off = observer.off.bind(observer);
								this.trigger = observer.trigger.bind(observer);
								var abrController = this.abrController = new config.abrController(this);
								var bufferController = new config.bufferController(this);
								var capLevelController = new config.capLevelController(this);
								var fpsController = new config.fpsController(this);
								var playListLoader = new playlist_loader(this);
								var fragmentLoader = new fragment_loader(this);
								var keyLoader = new key_loader(this);
								var id3TrackController = new id3_track_controller(this);
								var levelController = this.levelController = new level_controller(this);
								var fragmentTracker = new fragment_tracker_FragmentTracker(this);
								var streamController = this.streamController = new stream_controller(this, fragmentTracker);
								var networkControllers = [levelController, streamController];
								var Controller = config.audioStreamController;
								if (Controller) networkControllers.push(new Controller(this, fragmentTracker));
								this.networkControllers = networkControllers;
								var coreComponents = [playListLoader, fragmentLoader, keyLoader, abrController, bufferController, capLevelController, fpsController, id3TrackController, fragmentTracker];
								Controller = config.audioTrackController;
								if (Controller) {
									var audioTrackController = new Controller(this);
									this.audioTrackController = audioTrackController;
									coreComponents.push(audioTrackController)
								}
								Controller = config.subtitleTrackController;
								if (Controller) {
									var subtitleTrackController = new Controller(this);
									this.subtitleTrackController = subtitleTrackController;
									coreComponents.push(subtitleTrackController)
								}
								Controller = config.emeController;
								if (Controller) {
									var emeController = new Controller(this);
									this.emeController = emeController;
									coreComponents.push(emeController)
								} [config.subtitleStreamController, config.timelineController].forEach(function (Controller) {
									if (Controller) coreComponents.push(new Controller(_this))
								});
								this.coreComponents = coreComponents
							}
							Hls.prototype.destroy = function destroy() {
								logger["b"].log('destroy');
								this.trigger(events["a"].DESTROYING);
								this.detachMedia();
								this.coreComponents.concat(this.networkControllers).forEach(function (component) {
									component.destroy()
								});
								this.url = null;
								this.observer.removeAllListeners();
								this._autoLevelCapping = -1
							};
							Hls.prototype.attachMedia = function attachMedia(media) {
								logger["b"].log('attachMedia');
								this.media = media;
								this.trigger(events["a"].MEDIA_ATTACHING, {
									media: media
								})
							};
							Hls.prototype.detachMedia = function detachMedia() {
								logger["b"].log('detachMedia');
								this.trigger(events["a"].MEDIA_DETACHING);
								this.media = null
							};
							Hls.prototype.loadSource = function loadSource(url) {
								url = url_toolkit_default.a.buildAbsoluteURL(window.location.href, url, {
									alwaysNormalize: true
								});
								logger["b"].log('loadSource:' + url);
								this.url = url;
								this.trigger(events["a"].MANIFEST_LOADING, {
									url: url
								})
							};
							Hls.prototype.startLoad = function startLoad() {
								var startPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
								logger["b"].log('startLoad(' + startPosition + ')');
								this.networkControllers.forEach(function (controller) {
									controller.startLoad(startPosition)
								})
							};
							Hls.prototype.stopLoad = function stopLoad() {
								logger["b"].log('stopLoad');
								this.networkControllers.forEach(function (controller) {
									controller.stopLoad()
								})
							};
							Hls.prototype.swapAudioCodec = function swapAudioCodec() {
								logger["b"].log('swapAudioCodec');
								this.streamController.swapAudioCodec()
							};
							Hls.prototype.recoverMediaError = function recoverMediaError() {
								logger["b"].log('recoverMediaError');
								var media = this.media;
								this.detachMedia();
								this.attachMedia(media)
							};
							hls__createClass(Hls, [{
								key: 'levels',
								get: function get() {
									return this.levelController.levels
								}
							}, {
								key: 'currentLevel',
								get: function get() {
									return this.streamController.currentLevel
								},
								set: function set(newLevel) {
									logger["b"].log('set currentLevel:' + newLevel);
									this.loadLevel = newLevel;
									this.streamController.immediateLevelSwitch()
								}
							}, {
								key: 'nextLevel',
								get: function get() {
									return this.streamController.nextLevel
								},
								set: function set(newLevel) {
									logger["b"].log('set nextLevel:' + newLevel);
									this.levelController.manualLevel = newLevel;
									this.streamController.nextLevelSwitch()
								}
							}, {
								key: 'loadLevel',
								get: function get() {
									return this.levelController.level
								},
								set: function set(newLevel) {
									logger["b"].log('set loadLevel:' + newLevel);
									this.levelController.manualLevel = newLevel
								}
							}, {
								key: 'nextLoadLevel',
								get: function get() {
									return this.levelController.nextLoadLevel
								},
								set: function set(level) {
									this.levelController.nextLoadLevel = level
								}
							}, {
								key: 'firstLevel',
								get: function get() {
									return Math.max(this.levelController.firstLevel, this.minAutoLevel)
								},
								set: function set(newLevel) {
									logger["b"].log('set firstLevel:' + newLevel);
									this.levelController.firstLevel = newLevel
								}
							}, {
								key: 'startLevel',
								get: function get() {
									return this.levelController.startLevel
								},
								set: function set(newLevel) {
									logger["b"].log('set startLevel:' + newLevel);
									var hls = this;
									if (newLevel !== -1) newLevel = Math.max(newLevel, hls.minAutoLevel);
									hls.levelController.startLevel = newLevel
								}
							}, {
								key: 'autoLevelCapping',
								get: function get() {
									return this._autoLevelCapping
								},
								set: function set(newLevel) {
									logger["b"].log('set autoLevelCapping:' + newLevel);
									this._autoLevelCapping = newLevel
								}
							}, {
								key: 'autoLevelEnabled',
								get: function get() {
									return this.levelController.manualLevel === -1
								}
							}, {
								key: 'manualLevel',
								get: function get() {
									return this.levelController.manualLevel
								}
							}, {
								key: 'minAutoLevel',
								get: function get() {
									var hls = this,
										levels = hls.levels,
										minAutoBitrate = hls.config.minAutoBitrate,
										len = levels ? levels.length : 0;
									for (var i = 0; i < len; i++) {
										var levelNextBitrate = levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate;
										if (levelNextBitrate > minAutoBitrate) return i
									}
									return 0
								}
							}, {
								key: 'maxAutoLevel',
								get: function get() {
									var hls = this;
									var levels = hls.levels;
									var autoLevelCapping = hls.autoLevelCapping;
									var maxAutoLevel = void 0;
									if (autoLevelCapping === -1 && levels && levels.length) maxAutoLevel = levels.length - 1;
									else maxAutoLevel = autoLevelCapping;
									return maxAutoLevel
								}
							}, {
								key: 'nextAutoLevel',
								get: function get() {
									var hls = this;
									return Math.min(Math.max(hls.abrController.nextAutoLevel, hls.minAutoLevel), hls.maxAutoLevel)
								},
								set: function set(nextLevel) {
									var hls = this;
									hls.abrController.nextAutoLevel = Math.max(hls.minAutoLevel, nextLevel)
								}
							}, {
								key: 'audioTracks',
								get: function get() {
									var audioTrackController = this.audioTrackController;
									return audioTrackController ? audioTrackController.audioTracks : []
								}
							}, {
								key: 'audioTrack',
								get: function get() {
									var audioTrackController = this.audioTrackController;
									return audioTrackController ? audioTrackController.audioTrack : -1
								},
								set: function set(audioTrackId) {
									var audioTrackController = this.audioTrackController;
									if (audioTrackController) audioTrackController.audioTrack = audioTrackId
								}
							}, {
								key: 'liveSyncPosition',
								get: function get() {
									return this.streamController.liveSyncPosition
								}
							}, {
								key: 'subtitleTracks',
								get: function get() {
									var subtitleTrackController = this.subtitleTrackController;
									return subtitleTrackController ? subtitleTrackController.subtitleTracks : []
								}
							}, {
								key: 'subtitleTrack',
								get: function get() {
									var subtitleTrackController = this.subtitleTrackController;
									return subtitleTrackController ? subtitleTrackController.subtitleTrack : -1
								},
								set: function set(subtitleTrackId) {
									var subtitleTrackController = this.subtitleTrackController;
									if (subtitleTrackController) subtitleTrackController.subtitleTrack = subtitleTrackId
								}
							}, {
								key: 'subtitleDisplay',
								get: function get() {
									var subtitleTrackController = this.subtitleTrackController;
									return subtitleTrackController ? subtitleTrackController.subtitleDisplay : false
								},
								set: function set(value) {
									var subtitleTrackController = this.subtitleTrackController;
									if (subtitleTrackController) subtitleTrackController.subtitleDisplay = value
								}
							}]);
							return Hls
						}();
						var src_hls = __webpack_exports__["default"] = (hls_Hls)
					}), (function (module, exports, __webpack_require__) {
						function webpackBootstrapFunc(modules) {
							var installedModules = {};

							function __webpack_require__(moduleId) {
								if (installedModules[moduleId]) return installedModules[moduleId].exports;
								var module = installedModules[moduleId] = {
									i: moduleId,
									l: false,
									exports: {}
								};
								modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								module.l = true;
								return module.exports
							}
							__webpack_require__.m = modules;
							__webpack_require__.c = installedModules;
							__webpack_require__.i = function (value) {
								return value
							};
							__webpack_require__.d = function (exports, name, getter) {
								if (!__webpack_require__.o(exports, name)) {
									Object.defineProperty(exports, name, {
										configurable: false,
										enumerable: true,
										get: getter
									})
								}
							};
							__webpack_require__.r = function (exports) {
								Object.defineProperty(exports, '__esModule', {
									value: true
								})
							};
							__webpack_require__.n = function (module) {
								var getter = module && module.__esModule ? function getDefault() {
									return module['default']
								} : function getModuleExports() {
									return module
								};
								__webpack_require__.d(getter, 'a', getter);
								return getter
							};
							__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property)
							};
							__webpack_require__.p = "/";
							__webpack_require__.oe = function (err) {
								console.error(err);
								throw err;
							};
							var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
							return f.default || f
						}
						var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
						var dependencyRegExp = '\\((\/\\*.*?\\*\/)?\s?.*?(' + moduleNameReqExp + ').*?\\)'
						function quoteRegExp(str) {
							return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
						}
						function getModuleDependencies(sources, module, queueName) {
							var retval = {}
							retval[queueName] = []
							var fnString = module.toString()
							var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
							if (!wrapperSignature) return retval
							var webpackRequireName = wrapperSignature[1]
							var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
							var match
							while ((match = re.exec(fnString))) {
								if (match[3] === 'dll-reference') continue
								retval[queueName].push(match[3])
							}
							re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
							while ((match = re.exec(fnString))) {
								if (!sources[match[2]]) {
									retval[queueName].push(match[1])
									sources[match[2]] = __webpack_require__(match[1]).m
								}
								retval[match[2]] = retval[match[2]] || []
								retval[match[2]].push(match[4])
							}
							return retval
						}
						function hasValuesInQueues(queues) {
							var keys = Object.keys(queues)
							return keys.reduce(function (hasValues, key) {
								return hasValues || queues[key].length > 0
							}, false)
						}

						function getRequiredModules(sources, moduleId) {
							var modulesQueue = {
								main: [moduleId]
							}
							var requiredModules = {
								main: []
							}
							var seenModules = {
								main: {}
							}
							while (hasValuesInQueues(modulesQueue)) {
								var queues = Object.keys(modulesQueue)
								for (var i = 0; i < queues.length; i++) {
									var queueName = queues[i]
									var queue = modulesQueue[queueName]
									var moduleToCheck = queue.pop()
									seenModules[queueName] = seenModules[queueName] || {}
									if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
									seenModules[queueName][moduleToCheck] = true
									requiredModules[queueName] = requiredModules[queueName] || []
									requiredModules[queueName].push(moduleToCheck)
									var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
									var newModulesKeys = Object.keys(newModules)
									for (var j = 0; j < newModulesKeys.length; j++) {
										modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
										modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
									}
								}
							}
							return requiredModules
						}
						module.exports = function (moduleId, options) {
							options = options || {}
							var sources = {
								main: __webpack_require__.m
							}
							var requiredModules = options.all ? {
								main: Object.keys(sources)
							} : getRequiredModules(sources, moduleId)
							var src = ''
							Object.keys(requiredModules).filter(function (m) {
								return m !== 'main'
							}).forEach(function (module) {
								var entryModule = 0
								while (requiredModules[module][entryModule]) {
									entryModule++
								}
								requiredModules[module].push(entryModule)
								sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
								src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) {
									return '' + JSON.stringify(id) + ': ' + sources[module][id].toString()
								}).join(',') + '});\n'
							})
							src = src + '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) {
								return '' + JSON.stringify(id) + ': ' + sources.main[id].toString()
							}).join(',') + '})(self);'
							var blob = new window.Blob([src], {
								type: 'text/javascript'
							})
							if (options.bare) {
								return blob
							}
							var URL = window.URL || window.webkitURL || window.mozURL || window.msURL
							var workerUrl = URL.createObjectURL(blob)
							var worker = new window.Worker(workerUrl)
							worker.objectURL = workerUrl
							return worker
						}
					}), (function (module, __webpack_exports__, __webpack_require__) {
						"use strict";
						Object.defineProperty(__webpack_exports__, "__esModule", {
							value: true
						});
						var __WEBPACK_IMPORTED_MODULE_0__demux_demuxer_inline__ = __webpack_require__(8);
						var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
						var __WEBPACK_IMPORTED_MODULE_2__utils_logger__ = __webpack_require__(0);
						var __WEBPACK_IMPORTED_MODULE_3_events__ = __webpack_require__(6);
						var __WEBPACK_IMPORTED_MODULE_3_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_events__);
						var DemuxerWorker = function DemuxerWorker(self) {
							var observer = new __WEBPACK_IMPORTED_MODULE_3_events___default.a();
							observer.trigger = function trigger(event) {
								for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									data[_key - 1] = arguments[_key]
								}
								observer.emit.apply(observer, [event, event].concat(data))
							};
							observer.off = function off(event) {
								for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
									data[_key2 - 1] = arguments[_key2]
								}
								observer.removeListener.apply(observer, [event].concat(data))
							};
							var forwardMessage = function forwardMessage(ev, data) {
								self.postMessage({
									event: ev,
									data: data
								})
							};
							self.addEventListener('message', function (ev) {
								var data = ev.data;
								switch (data.cmd) {
									case 'init':
										var config = JSON.parse(data.config);
										self.demuxer = new __WEBPACK_IMPORTED_MODULE_0__demux_demuxer_inline__["a"](observer, data.typeSupported, config, data.vendor);
										try {
											Object(__WEBPACK_IMPORTED_MODULE_2__utils_logger__["a"])(config.debug === true)
										} catch (err) {
											console.warn('demuxerWorker: unable to enable logs')
										}
										forwardMessage('init', null);
										break;
									case 'demux':
										self.demuxer.push(data.data, data.decryptdata, data.initSegment, data.audioCodec, data.videoCodec, data.timeOffset, data.discontinuity, data.trackSwitch, data.contiguous, data.duration, data.accurateTimeOffset, data.defaultInitPTS);
										break;
									default:
										break
								}
							});
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_DECRYPTED, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSING_INIT_SEGMENT, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSED, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].ERROR, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSING_METADATA, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSING_USERDATA, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].INIT_PTS_FOUND, forwardMessage);
							observer.on(__WEBPACK_IMPORTED_MODULE_1__events__["a"].FRAG_PARSING_DATA, function (ev, data) {
								var transferable = [];
								var message = {
									event: ev,
									data: data
								};
								if (data.data1) {
									message.data1 = data.data1.buffer;
									transferable.push(data.data1.buffer);
									delete data.data1
								}
								if (data.data2) {
									message.data2 = data.data2.buffer;
									transferable.push(data.data2.buffer);
									delete data.data2
								}
								self.postMessage(message, transferable)
							})
						};
						__webpack_exports__["default"] = (DemuxerWorker)
					}), (function (module, exports) {
						if (!String.prototype.endsWith) {
							(function () {
								'use strict';
								var defineProperty = (function () {
									try {
										var object = {};
										var $defineProperty = Object.defineProperty;
										var result = $defineProperty(object, object, object) && $defineProperty
									} catch (error) { }
									return result
								}());
								var toString = {}.toString;
								var endsWith = function (search) {
									if (this == null) {
										throw TypeError();
									}
									var string = String(this);
									if (search && toString.call(search) == '[object RegExp]') {
										throw TypeError();
									}
									var stringLength = string.length;
									var searchString = String(search);
									var searchLength = searchString.length;
									var pos = stringLength;
									if (arguments.length > 1) {
										var position = arguments[1];
										if (position !== undefined) {
											pos = position ? Number(position) : 0;
											if (pos != pos) {
												pos = 0
											}
										}
									}
									var end = Math.min(Math.max(pos, 0), stringLength);
									var start = end - searchLength;
									if (start < 0) {
										return false
									}
									var index = -1;
									while (++index < searchLength) {
										if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
											return false
										}
									}
									return true
								};
								if (defineProperty) {
									defineProperty(String.prototype, 'endsWith', {
										'value': endsWith,
										'configurable': true,
										'writable': true
									})
								} else {
									String.prototype.endsWith = endsWith
								}
							}())
						}
					})])["default"]
				})
			}, {}
		],
		2: [
			function (require, module, exports) {
				(function (global) {
					'use strict';
					exports.__esModule = true;
					var _uumPlayer = (typeof window !== "undefined" ? window['uumPlayer'] : typeof global !== "undefined" ? global['uumPlayer'] : null);
					var _uumPlayer2 = _interopRequireDefault(_uumPlayer);
					var _hls = require('hls.js');
					var _hls2 = _interopRequireDefault(_hls);

					function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : {
							'default': obj
						}
					}

					function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
							throw new TypeError("Cannot call a class as a function");
						}
					}

					function _possibleConstructorReturn(self, call) {
						if (!self) {
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}
						return call && (typeof call === "object" || typeof call === "function") ? call : self
					}

					function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
							throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}
						subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: {
								value: subClass,
								enumerable: false,
								writable: true,
								configurable: true
							}
						});
						if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
					}
					var MediaSourceHandler = _uumPlayer2['default'].MediaSourceHandler;
					var HlsHandler = function (_MediaSourceHandler) {
						_inherits(HlsHandler, _MediaSourceHandler);

						function HlsHandler(player, options) {
							_classCallCheck(this, HlsHandler);
							var _this = _possibleConstructorReturn(this, _MediaSourceHandler.call(this, player, options));
							_this.player.isReady = false;
							_this.hls = new _hls2['default'](options);
							_this.hls.on(_hls2['default'].Events.MANIFEST_PARSED, function (event, data) {
								player.triggerReady()
							});
							_this.hls.on(_hls2['default'].Events.ERROR, function (event, data) {
								if (data.fatal) {
									switch (data.type) {
										case _hls2['default'].ErrorTypes.MEDIA_ERROR:
											_this.handleMediaError();
											break;
										case _hls2['default'].ErrorTypes.NETWORK_ERROR:
										default:
											_this.hls.destroy();
											break
									}
								}
							});
							return _this
						}
						HlsHandler.prototype.src = function src(_src) {
							this.player.isReady = false;
							this.hls.attachMedia(this.player.tech.el);
							this.hls.loadSource(_src)
						};
						HlsHandler.prototype.internalPlay = function internalPlay() {
							var playReturn = this.player.techGet('play');
							if (playReturn && playReturn.then) {
								playReturn.then(null, function (err) {
									console && console.error && console.error(err)
								})
							}
						};
						HlsHandler.prototype.play = function play() {
							if (this.player.isReady) {
								this.internalPlay()
							} else {
								this.player.ready(this.internalPlay)
							}
						};
						HlsHandler.prototype.handleMediaError = function handleMediaError() {
							var now = Date.now();
							var minRecoverInterval = 3000;
							if (!this.recoverDecodingErrorDate || now - this.recoverDecodingErrorDate > minRecoverInterval) {
								this.recoverDecodingErrorDate = now;
								this.hls.recoverMediaError()
							} else if (!this.recoverSwapAudioCodecDate || now - this.recoverSwapAudioCodecDate > minRecoverInterval) {
								this.recoverSwapAudioCodecDate = now;
								this.hls.swapAudioCodec();
								this.hls.recoverMediaError()
							} else {
								this.hls.destroy()
							}
						};
						HlsHandler.prototype.dispose = function dispose() {
							if (this.hls instanceof _hls2['default']) {
								this.hls.destroy();
								if (this.hls.bufferTimer) {
									clearInterval(this.hls.bufferTimer);
									this.hls.bufferTimer = undefined
								}
							}
							this.hls = null
						};
						HlsHandler.canPlay = function canPlay(src, type) {
							var fileExtReg = /\.m3u8?/i;
							var typeReg = /application\/((x-mpegURL)|(vnd\.apple\.mpegurl))/i;
							return _hls2['default'].isSupported() && (typeReg.test(type) || fileExtReg.test(src))
						};
						return HlsHandler
					}(MediaSourceHandler);
					exports['default'] = HlsHandler;
					MediaSourceHandler.register(HlsHandler, {
						name: 'hls'
					})
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
			}, {
				"hls.js": 1
			}
		]
	}, {}, [2])(2)
});