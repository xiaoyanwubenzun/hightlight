<template>
	<div>
		<Hightlightheader></Hightlightheader>
		<div class="uploadmain">
			<div class="uploadfengmian">
				<p class="uploadfengmianp">上传视频封面</p>
				<el-upload
					class="avatar-uploader"
					action="http://localhost:8090/uploadimg"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img v-if="fengmian" :src="fengmian" class="avatar" />
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<!-- 富文本编辑器 -->
			<div class="mywangeditor"></div>
			<!-- 风车 -->
			<div class="fengche">
				<div class="zhijia"></div>
				<div class="zhijia"></div>
				<div class="shan"></div>
				<div class="shan"></div>
				<div class="shan"></div>
				<div class="shan"></div>
			</div>

			<!-- 动态内容 -->
			<div class="vmessage">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="动态标题">
						<el-input
							v-model="vtitle"
							clearable
							placeholder="请输入标题"
							maxlength="20"
							show-word-limit
						></el-input>
					</el-form-item>
					<el-form-item label="游戏类型">
						<el-select
							clearable
							v-model="videotype"
							placeholder="请选择游戏类型"
						>
							<el-option
								label="英雄联盟"
								value="英雄联盟"
							></el-option>
							<el-option
								label="穿越火线"
								value="穿越火线"
							></el-option>
							<el-option
								label="绝地求生"
								value="绝地求生"
							></el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
			<div class="btn">
				<el-row>
					<el-tooltip
						class="item"
						effect="dark"
						content="搜索"
						placement="top-start"
					>
						<el-button
							v-model="keyong"
							disabled
							icon="el-icon-search"
							circle
						></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="编辑"
						placement="top-start"
					>
						<el-button
							@click="focusclick()"
							type="primary"
							icon="el-icon-edit"
							circle
						></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="发表"
						placement="top-start"
					>
						<el-button
							@click="addtiezi()"
							:disabled="addtiezikeyong"
							type="success"
							icon="el-icon-check"
							circle
						></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="邮箱"
						placement="top-start"
					>
						<el-button
							v-model="keyong"
							disabled
							type="info"
							icon="el-icon-message"
							circle
						></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="分享"
						placement="top-start"
					>
						<el-button
							@click="drawer = true"
							type="warning"
							icon="el-icon-share"
							circle
						></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="清空"
						placement="top-start"
					>
						<el-button
							@click="deleteall()"
							type="danger"
							icon="el-icon-delete"
							circle
						></el-button>
					</el-tooltip>
				</el-row>
			</div>
			<el-drawer
				class="chouti"
				title="分享至"
				:visible.sync="drawer"
				:before-close="handleClose"
			>
				<el-row>
					<el-tooltip
						class="item"
						effect="dark"
						content="分享到QQ空间"
						placement="top-start"
					>
						<el-button @click="share('qzone')" circle
							><img
								src="http://qzonestyle.gtimg.cn/aoi/img/logo/favicon.ico"
								alt=""
						/></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="分享到新浪微博"
						placement="top-start"
					>
						<el-button @click="share('sina')" type="primary" circle
							><img src="https://weibo.com/favicon.ico" alt=""
						/></el-button>
					</el-tooltip>
					<el-tooltip
						class="item"
						effect="dark"
						content="分享给QQ好友"
						placement="top-start"
					>
						<el-button @click="share('qq')" type="success" circle
							><img
								src="https://connect.qq.com/favicon.ico"
								alt=""
						/></el-button>
					</el-tooltip>
				</el-row>
			</el-drawer>
		</div>
	</div>
</template>

<script>
import Hightlightheader from "./Hightlightheader.vue";
import E from "wangeditor";
import emoji from "../assets/emoji/emojin.json";
export default {
	components: { Hightlightheader },
	data() {
		return {
			addtiezikeyong: false,
			drawer: false,
			keyong: false,
			uid: "",
			vtitle: "",
			vcontent: "",
			vtext: "",
			videotype: "",
			fengmian: "",
			imageUrl: "",
			jishiqitime: 60,
			jishiqi: "",
			form: {
				name: "",
				region: "",
			},
		};
	},
	methods: {
		share(type) {
			//qq空间分享接口
			if (type == "qzone") {
				window.open(
					"https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?				url=" +
						document.location.href +
						"?sharesource=qzone&title=标题&pics=图片地址&summary= 描述"
				);
			}
			//新浪微博接口的传参
			if (type == "sina") {
				window.open(
					"http://service.weibo.com/share/share.php?url=" +
						document.location.href +
						"?sharesource=weibo&title=标题&pic=图片&appkey=微博平台申请的key"
				);
			}
			//qq好友接口的传参
			if (type == "qq") {
				window.open(
					"http://connect.qq.com/widget/shareqq/index.html?url=" +
						document.location.href +
						"?sharesource=qzone&title=标题&pics=图片地址&summary= 描述"
				);
			}
		},
		handleClose(done) {
			this.$confirm("确认取消分享？")
				.then((_) => {
					done();
					this.$message.error("取消了分享！");
				})
				.catch((_) => {});
		},
		daojishi() {
			this.jishiqi = setInterval(() => {
				this.timereduce();
				console.log("执行");
			}, 1000);
		},
		timereduce() {
			this.jishiqitime--;
			if (this.jishiqitime <= 0) {
				clearInterval(this.jishiqi);
				this.jishiqitime = this.$options.data().jishiqitime;
				this.addtiezikeyong = false;
				console.log(this.jishiqitime);
			}
		},
		focusclick() {
			//点击编辑聚焦到帖子内容
			// this.$refs.myQuillEditor.quill.focus();
		},
		contentortitleerr() {
			this.$message.error("标题或者内容不符合规范！");
		},
		addsuccess() {
			//帖子成功存到数据库
			this.$message({
				message:
					"恭喜你，动态成功发布啦！发布功能将冷却60秒(视频3天内完成审核)",
				type: "success",
			});
		},
		addfailed() {
			//帖子存到数据库失败
			this.$message.error("动态不知道为什么发布失败了！");
		},
		addtiezi() {
			// console.log(this.editor.txt.text());
			//发表帖子
			// this.content = this.content.replace(<img[\s]+src[\s]*=[\s]*((['"](?<src>[^'"]*)[\'"])|(?<src>[^\s]*)));//去除标签
			let textvideo = /<video/;
			if (
				!this.vtitle ||
				!this.vcontent ||
				this.vtitle.length > 20 ||
				this.vcontent.length > 10000
			) {
				//帖子内容验证
				// console.log(this.vtitle.length, this.vcontent.length);
				this.contentortitleerr();
				return;
			} else if (!textvideo.test(this.vcontent)) {
				this.$message.error("至少放入一个视频哦！");
				return;
			} else if (!this.fengmian) {
				this.$message.warning("没有选择视频封面哦！");
				return;
			}
			// const content = this.vcontent;
			// console.log(content);

			this.$confirm(
				"写好动态了吗？不要发表违规内容哦, 是否发表?",
				"提示",
				{
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				}
			)
				.then(() => {
					this.addtiezikeyong = true;
					this.daojishi();
					this.axios
						.post("/uploadhightlight", {
							uid: sessionStorage.getItem("who"),
							vtitle: this.vtitle,
							vcontent: this.vcontent,
							vtext: this.vtext,
							videotype: this.videotype,
							fengmian: this.fengmian,
						})
						.then((res) => {
							const result = res.data;
							if (result.code == 1) {
								this.addsuccess();
								this.vtitle = "";
								this.vcontent = "";
								this.videotype = "";
								this.fengmian = "";
								this.editor.txt.clear();
								// this.$router.push("/");
							} else {
								this.addfailed();
							}
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消发表",
					});
				});
		},
		deleteall() {
			//清空帖子
			this.$confirm("此操作将清空你的动态标题和内容, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.vtitle = "";
					this.vcontent = "";
					this.videotype = "";
					this.fengmian = "";
					this.editor.txt.clear();
					this.$message({
						type: "success",
						message: "清除成功!",
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消清除",
					});
				});
		},
		handleAvatarSuccess(res) {
			this.fengmian = res.data[0].url;
		},
		beforeAvatarUpload(file) {
			const isJPG = file.type === "image/jpeg";
			const isPNG = file.type === "image/png";
			const isLt10M = file.size / 1024 / 1024 < 10;
			if (!isJPG && !isPNG) {
				this.$message.error("上传封面图片只能是 JPG、PNG 格式!");
			}
			if (!isLt10M) {
				this.$message.error("上传封面图片大小不能超过 10MB!");
			}
			return isJPG || (isPNG && isLt10M);
		},
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(3)");
		guankanjijin.className = "el-menu-item is-active";
		let editor = new E(".mywangeditor");
		//图片上传设置
		editor.config.uploadImgServer = "http://localhost:8090/uploadimg";
		editor.config.showLinkImg = false;
		editor.config.uploadImgHeaders = {
			Accept: "text/x-json",
			a: 100,
		};
		editor.config.uploadImgAccept = ["jpg", "jpeg", "png", "gif", "bmp"];
		editor.config.uploadImgMaxSize = 10 * 1024 * 1024; // 2M
		editor.config.uploadImgMaxLength = 1; // 一次最多上传 1 个图片
		editor.config.uploadImgTimeout = 30 * 1000; //30s超时
		editor.config.uploadImgHooks = {
			// 上传图片之前
			// before: function (xhr) {
			//   console.log(xhr);

			//   // 可阻止图片上传
			//   return {
			//     prevent: true,
			//     msg: "需要提示给用户的错误信息",
			//   };
			// },
			// 图片上传并返回了结果，图片插入已成功
			success: function (xhr) {
				// console.log('success', xhr)
				// this.$message.success("图片上传并插入成功！");
			},
			// 图片上传并返回了结果，但图片插入时出错了
			fail: function (xhr, editor, resData) {
				console.log("fail", resData);
				// this.$message.error("图片插入文本失败！");
			},
			// 上传图片出错，一般为 http 请求的错误
			error: function (xhr, editor, resData) {
				console.log("error", xhr, resData);
				// this.$message.error("网络请求错误！");
			},
			// 上传图片超时
			timeout: function (xhr) {
				console.log("timeout");
				// this.$message.warning("图片上传超时！");
			},
			// 图片上传并返回了结果，想要自己把图片插入到编辑器中
			// 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
			customInsert: function (insertImgFn, result) {
				// result 即服务端返回的接口
				// console.log("customInsert", result);
				// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
				insertImgFn(result.data[0].url);
			},
		};

		editor.config.uploadVideoServer = "http://localhost:8090/uploadvideo";
		editor.config.showLinkVideo = false;
		editor.config.uploadVideoMaxSize = 1 * 500 * 1024 * 1024; // 500m
		editor.config.uploadVideoAccept = ["mp4", "webm"];
		editor.config.uploadVideoHeaders = {
			Accept: "text/x-json",
			a: 100,
		};
		editor.config.uploadVideoHooks = {
			// 上传视频之前
			// before: function (xhr) {
			//   console.log(xhr);

			//   // 可阻止视频上传
			//   // return {
			//   //     prevent: true,
			//   //     msg: '需要提示给用户的错误信息'
			//   // }
			// },
			// 视频上传并返回了结果，视频插入已成功
			success: function (xhr) {
				console.log("success", xhr);
			},
			// 视频上传并返回了结果，但视频插入时出错了
			fail: function (xhr, editor, resData) {
				console.log("fail", resData);
			},
			// 上传视频出错，一般为 http 请求的错误
			error: function (xhr, editor, resData) {
				console.log("error", xhr, resData);
			},
			// 上传视频超时
			timeout: function (xhr) {
				console.log("timeout");
			},
			// 视频上传并返回了结果，想要自己把视频插入到编辑器中
			// 例如服务器端返回的不是 { errno: 0, data: { url : '.....'} } 这种格式，可使用 customInsert
			customInsert: function (insertVideoFn, result) {
				// result 即服务端返回的接口
				console.log("customInsert", result);

				// insertVideoFn 可把视频插入到编辑器，传入视频 src ，执行函数即可
				insertVideoFn(result.data[0].url);
			},
		};
		//自定义 placeholder 提示文字
		editor.config.placeholder =
			"单张图片大小不超过10M，单个视频大小不超过500M哦，支持mp4, webm, jpg, jpeg, png,gif, bmp";

		// 配置 onchange 回调函数，将数据同步到 vue 中
		editor.config.onchange = (newHtml) => {
			this.editorData = newHtml;
			this.vcontent = newHtml;
			this.vtext = this.editor.txt.text();
		};
		editor.create();
		this.editor = editor;
		const SINA_URL_PATH =
			"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal";
		this.editor.config.emotions = [
			{
				title: "默认",
				type: "image",
				content: emoji,
			},
			{
				title: "新浪", // tab 的标题
				type: "image", // 'emoji' 或 'image' ，即 emoji 形式或者图片形式
				content: [
					{
						alt: "[坏笑]",
						src: `${SINA_URL_PATH}/50/pcmoren_huaixiao_org.png`,
					},
					{
						alt: "[舔屏]",
						src: `${SINA_URL_PATH}/40/pcmoren_tian_org.png`,
					},
					{
						alt: "[污]",
						src: `${SINA_URL_PATH}/3c/pcmoren_wu_org.png`,
					},
				],
			},
		];
	},
	beforeDestroy() {
		// 调用销毁 API 对当前编辑器实例进行销毁
		this.editor.destroy();
		this.editor = null;
	},
};
</script>

<style lang="scss">
.uploadmain {
	height: 100vh;
	background-image: url("../assets/uploadhightlight/background.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-position-y: 61px;
	.uploadfengmian {
		position: relative;
		top: 180px;
		.uploadfengmianp {
			width: 200px;
			text-align: center;
			color: #f9c27f;
			white-space: nowrap;
			font-size: 20px;
		}
		.avatar-uploader .el-upload {
			border: 1px dashed #d9d9d9;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.avatar-uploader .el-upload:hover {
			border-color: #409eff;
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 200px;
			height: 150px;
			line-height: 150px;
			text-align: center;
		}
		.avatar {
			width: 200px;
			height: 150px;
			display: block;
		}
	}
	.mywangeditor {
		width: 58vw;
		height: 81.5vh;
		position: absolute;
		z-index: 0;
		top: 70px;
		left: 210px;
		border-radius: 5px;
		transition: all 0.2s ease-in-out;

		.w-e-toolbar {
			border-radius: 5px 5px 0px 0px;
			background-color: rgba(255, 255, 255, 0.7) !important;
		}
		.w-e-text-container {
			height: 70vh !important;
			background-color: rgba(255, 255, 255, 0.7) !important;
			border-radius: 0px 0px 5px 5px;
		}
		.w-e-text-container .placeholder {
			color: #999999;
			position: absolute;
			font-size: 11pt;
			line-height: 22px;
			left: 10px;
			top: 10px;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			z-index: -1;
		}
	}
	.mywangeditor:hover {
		box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
	}

	.fengche {
		width: 300px;
		height: 300px;
		position: absolute;
		animation: rotatex 15s linear infinite;
		top: 10vh;
		right: 5vw;
		@keyframes rotatex {
			0% {
				transform: rotate(0);
			}

			50% {
				transform: rotate(-200deg);
			}

			100% {
				transform: rotate(-360deg);
			}
		}

		.zhijia {
			width: 300px;
			height: 2px;
			background-color: #f9c27f;
		}

		.zhijia:first-child {
			position: relative;
			top: 50%;
		}

		.zhijia:nth-child(2) {
			position: relative;
			top: 50%;
			transform: rotate(90deg);
			top: 147px;
		}

		.shan {
			position: absolute;
			width: 50px;
			height: 80px;
			background-color: #f9c27f;
		}

		.shan:nth-child(4) {
			position: absolute;
			top: 0px;
			left: 150px;
		}

		.shan:nth-child(3) {
			position: absolute;
			top: 220px;
			left: 99px;
		}

		.shan:nth-child(6) {
			position: absolute;
			right: 15px;
			top: 137px;
			transform: rotate(90deg);
		}

		.shan:nth-child(5) {
			position: absolute;
			left: 15px;
			top: 86px;
			transform: rotate(90deg);
		}
	}
	.vmessage {
		position: absolute;
		bottom: 120px;
		right: 70px;
		.el-form-item__label {
			color: #f9c27f;
			white-space: nowrap;
			font-size: 20px;
		}
	}
	.btn {
		position: absolute;
		bottom: 9vh;
		right: 5vw;
	}
}
</style>
