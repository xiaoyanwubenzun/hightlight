<template>
	<div>
		<Hightlightheader class="indexheader"></Hightlightheader>
		<div class="indexmain" :style="backgroundStyle">
			<div class="emptyblock"></div>
			<div class="search">
				<div class="nowtime">
					<h1 v-text="nowtime">17:00</h1>
					<p v-text="daydate"></p>
				</div>
				<input
					class="input"
					type="text"
					placeholder="搜索(标题关键字标题、内容、游戏类型、作者)"
					v-model="keyword"
					@keydown.enter="searchallvideo()"
				/>
			</div>
			<div class="result">
				<div class="bestvideo">
					<div class="biaoti">
						<i
							><img
								src="../assets/index/hot.png"
								alt="图片加载失败"
						/></i>
						<h3>本周热度冠军</h3>
					</div>
					<div class="bestuser">
						<i
							><img
								src="../assets/index/king.png"
								alt="图片加载失败"
						/></i>
						<i
							><img :src="bestvideo.userimg" alt="头像加载失败" />
							<span>{{ bestvideo.username }}</span>
						</i>
					</div>
					<div class="bestvideomain">
						<div class="bestvideotitle">
							<h4>{{ bestvideo.vtitle }}</h4>
						</div>
						<div class="eachvideo">
							<a
								:href="'/watchhightlight?vid=' + bestvideo.vid"
								class="v-lnk"
								><img
									:src="bestvideo.fengmian"
									width="100%"
									height="100%"
									alt="封面加载错误" />
								<div class="v-overlay"></div>
								<span class="v-icon"></span
							></a>
						</div>
						<div class="bestvideomessage">
							<ul>
								<li>
									<i class="el-icon-video-play"></i
									><span>{{ bestvideo.watchnum }}</span>
								</li>
								<li>
									<i class="el-icon-star-off"></i
									><span>{{ bestvideo.likecount }}</span>
								</li>
								<li>
									<i class="el-icon-chat-dot-square"
										><span>{{ bestvideo.cnum }}</span></i
									><i
										><img
											src="../assets/index/game.png"
											alt=""
										/><span>{{
											bestvideo.videotype
										}}</span></i
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="videolist">
					<!-- v-for="item in videolist" :key="item.vid" -->
					<div
						v-for="item in videolist"
						:key="item.vid"
						class="containeachvideo"
					>
						<div class="eachvideo">
							<a
								class="v-lnk"
								:href="'/watchhightlight?vid=' + item.vid"
							>
								<img :src="item.fengmian" alt="封面加载错误" />
								<div class="v-overlay"></div>
								<span class="v-icon"></span>
							</a>
							<div class="videomessage">
								<h3 class="videotitle">{{ item.vtitle }}</h3>
								<div class="videocontent">
									<p>
										{{
											item.vtext == ""
												? "这位用户很懒，没有写文字内容哦"
												: item.vtext
										}}
									</p>
									<p
										data-we-empty-p=""
										style="text-align: center"
									></p>
								</div>
								<div class="typeanduser">
									<div class="videotype">
										<i
											><img
												src="../assets/index/game.png"
												alt="图片加载失败"
										/></i>
										<span>{{ item.videotype }}</span>
									</div>
									<div class="videouser">
										<i
											><img
												src="../assets/index/user.png"
												alt="图片加载失败"
										/></i>
										<span>{{ item.username }}</span>
									</div>
								</div>
								<div class="sangezhibiao">
									<ul class="clearfloat">
										<li>
											<i class="el-icon-video-play"></i>
											浏览：{{ item.watchnum }}
										</li>
										<li>
											<i class="el-icon-star-off"></i>
											获赞：{{ item.likecount }}
										</li>
										<li>
											<i
												class="el-icon-chat-dot-square"
											></i>
											评论：{{ item.cnum }}
										</li>
										<li>
											发布日期：{{
												new Date(
													item.createtime
												).toLocaleDateString()
											}}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="choosepage">
					<el-pagination
						background
						layout="prev, pager, next"
						:total="totalpage"
						@current-change="currentChange"
					>
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Hightlightheader from "./Hightlightheader.vue";
export default {
	components: { Hightlightheader },
	data() {
		return {
			backgroundStyle: "",
			nowtime: "",
			daydate: "",
			beginnowtime: "",
			totalpage: 1000,
			// keyarr:[],
			keyword: "",
			pagenum: 1,
			videolist: [],
			bestvideo: {},
		};
	},
	watch: {
		keyword() {
			if (this.keyword == "") {
				this.searchallvideo();
			}
		},
	},
	methods: {
		searchvideo() {
			this.axios
				.get("/search", {
					params: {
						keyword: this.keyword,
						pagenum: this.pagenum,
					},
				})
				.then((res) => {
					switch (res.data.code) {
						case 1:
							// console.log(JSON.stringify(res.data.video[0]));
							// this.$message.success(res.data.Msg);
							this.videolist = res.data.video;
							this.totalpage = res.data.length;
							// console.log(this.totalpage);
							break;
						case 0:
							this.$message.error(res.data.Msg);
							break;
						default:
							break;
					}
					// console.log(res.data);
					// console.log(this.totalpage);
					// console.log(this.videolist);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		searchbestvideo() {
			this.axios
				.get("/searchbestvideo")
				.then((res) => {
					switch (res.data.code) {
						case 1:
							this.bestvideo = res.data.video;
							break;
						case 0:
							this.$message.error(res.data.Msg);
							break;
						default:
							break;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		currentChange(val) {
			this.pagenum = val;
			this.searchvideo();
		},
		searchallvideo() {
			if (this.keyword) {
				this.searchvideo();
				// this.keyarr=this.videolist;
				// this.keyarr.forEach(items => {
				//   // console.log(items.vtitle);
				//   if(items.vtitle.indexOf(this.keyword)!==-1||items.vtext.indexOf(this.keyword)!==-1||items.videotype.indexOf(this.keyword)!==-1||items.username.indexOf(this.keyword)!==-1){
				//           items.vtitle=items.vtitle.replace(
				//               new RegExp(this.keyword,"gm"),
				//               `<span style='color:red'>${this.keyword}</span>`
				//           );
				//           items.vtext=items.vtext.replace(
				//               new RegExp(this.keyword,"gm"),
				//               `<span style='color:red'>${this.keyword}</span>`
				//           );
				//           // items.videotype=items.videotype.replace(
				//           //     new RegExp(this.keyword,"gm"),
				//           //     `<span style='color:red'>${this.keyword}</span>`
				//           // );
				//           // items.username=items.username.replace(
				//           //     new RegExp(this.keyword,"gm"),
				//           //     `<span style='color:red'>${this.keyword}</span>`
				//           // );暂时弃用类型用户名搜索高亮展示有bug
				//       }
				// });
				return;
			} else if (!this.keyword) {
				this.keyarr = [];
				this.$message.warning("搜索内容不能为空哦！");
				this.searchvideo();
			}
		},
		showtime() {
			this.beginnowtime = setInterval(() => {
				let cnday;
				let date = new Date();
				let year = date.getFullYear(); //获取当前年份
				let mon = date.getMonth() + 1; //获取当前月份
				let da = date.getDate(); //获取当前日
				let day = date.getDay(); //获取当前星期几
				let h = date.getHours(); //获取小时
				let m = date.getMinutes(); //获取分钟
				let s = date.getSeconds(); //获取
				if (h < 10) {
					h = `0${h}`;
				} else if (m < 10) {
					m = `0${m}`;
				} else if (s < 10) {
					s = `0${s}`;
				}
				switch (day) {
					case 1:
						cnday = "星期一";
						break;
					case 2:
						cnday = "星期二";
						break;
					case 3:
						cnday = "星期三";
						break;
					case 4:
						cnday = "星期四";
						break;
					case 5:
						cnday = "星期五";
						break;
					case 6:
						cnday = "星期六";
						break;
					case 0:
						cnday = "星期天";
						break;
					default:
						break;
				}

				this.nowtime = `${h}:${m}:${s}`;
				this.daydate = `${year}/${mon}/${da}    ${cnday}`;
			}, 1000);
		},
	},
	created() {
		this.showtime();
		this.searchbestvideo();
		this.searchvideo();
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(1)");
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
	},
	beforeDestroy() {
		clearInterval(this.beginnowtime);
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
.indexheader {
	width: 100%;
	position: fixed;
	display: block;
	z-index: 100;
}
.clearfloat::after {
	display: block;
	clear: both;
	content: "";
	visibility: hidden;
	height: 0;
}
.clearfloat {
	zoom: 1;
}
.right {
	float: right !important;
}
.img-head {
	height: 3.125rem;
	width: 3.125rem;
	background-color: white;
	object-fit: cover;
	border-radius: 50%;
}
.select:hover {
	background-color: rgb(64, 158, 255) !important;
}
a {
	font-weight: normal !important;
	color: #2c3e50;
	text-decoration: none;
}
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 0.75rem;
}
.demonstration {
	display: block;
	color: #8492a6;
	font-size: 0.875rem;
	margin-bottom: 1.25rem;
}
.indexmain {
	height: 120vh;
}
.emptyblock {
	width: 100%;
	height: 3.8125rem;
}
.search {
	height: 9.375rem;
	width: 100%;
	.nowtime {
		width: 6.25rem;
		height: 4.375rem;
		margin: 0 auto;
		position: relative;
		z-index: 2;
		top: 1.25rem;
	}
	.nowtime h1 {
		font-weight: 100;
		color: white;
		white-space: nowrap;
	}
	.nowtime p {
		position: absolute;
		white-space: nowrap;
		color: white;
		left: 12.5rem;
		top: 1rem;
	}
	.input:hover {
		color: var(--txt-b-pure);
		background-color: rgba(255, 255, 255, 0.6);
		box-shadow: rgba(0, 0, 0, 0.3) 0 0 0.625rem;
		width: 33.125rem;
	}
	.input {
		position: absolute;
		top: 8.75rem;
		left: 50%;
		transform: translateX(-50%);
		width: 14.375rem;
		max-width: 80%;
		outline: none;
		/* border: 1px solid rgba(255,255,255,0.3); */
		border: none;
		padding: 0.8125rem 0.9375rem;
		border-radius: 1.875rem;
		// color: rgba(255, 255, 255, 0.8);
		color: black;
		font-size: small;
		font-weight: normal;
		font-family: "Microsoft Yahei", sans-serif;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.25);
		box-shadow: rgba(0, 0, 0, 0.2) 0 0 0.625rem;
		-webkit-backdrop-filter: blur(0.625rem);
		backdrop-filter: blur(0.625rem);
		transition: color 0.25s, background-color 0.25s, box-shadow 0.25s,
			left 0.25s, opacity 0.25s, top 0.25s, width 0.25s;
	}
}
.result {
	height: 31.25rem;
	width: 78.125rem;
	margin: 0 auto;
	border-radius: 0.3125rem;
	top: 10vh;
	position: relative;
	background-color: rgba(255, 255, 255, 0.7);
	.bestvideo {
		height: 25rem;
		width: 18.75rem;
		background-color: rgba(250, 235, 215, 0.7);
		border-radius: 0.625rem;
		margin-left: 1.875rem;
		position: absolute;
		top: 1.875rem;
		transition: all 0.2s ease-in-out;
		.biaoti img {
			position: absolute;
			top: 1.5rem;
			left: 4.375rem;
		}
		.biaoti h3 {
			color: #f28123;
			text-align: center;
			margin-top: 1.25rem;
		}
		.bestuser i span {
			position: absolute;
			right: 4rem;
			top: 4.375rem;
			width: 12.5rem;
			white-space: nowrap;
			font-style: normal;
			font-weight: bold;
			text-align: right;
			color: #409eff;
		}
		.bestuser i:nth-child(1) img {
			position: absolute;
			right: 0.75rem;
			top: 2.125rem;
			transform: rotate(28deg);
		}
		.bestuser i:nth-child(2) img {
			position: absolute;
			right: 0.9375rem;
			top: 3.125rem;
			width: 2.5rem;
			height: 2.5rem;
			object-fit: cover;
			border-radius: 50%;
		}
		.bestvideomain {
			.bestvideotitle h4 {
				color: #f5b93b;
				position: absolute;
				top: 16.5625rem;
				left: 1.25rem;
				width: 15.625rem;
				text-align: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.eachvideo {
				width: 13.75rem;
				height: 9.375rem;
				display: inline-block;
				margin: 0.625rem;
				position: absolute;
				top: 5.9375rem;
				left: 0.625rem;
				.v-lnk {
					position: relative;
					display: block;
					height: 9.375rem;
					cursor: pointer;
				}
				@keyframes ani-ico {
					from {
						transform: scale(3);
						opacity: 0;
					}
					to {
						transform: scale(1);
						opacity: 1;
					}
				}
				.v-lnk:hover .v-overlay {
					opacity: 1;
					filter: alpha(opacity=100);
					background-color: #53bcf6;
					opacity: 0.7;
					border-radius: 0.625rem;
					filter: alpha(opacity=70);
				}
				.v-lnk:hover .v-icon {
					animation: 0.2s linear 0s normal none ani-ico;
					-webkit-animation: 0.2s linear 0s normal none ani-ico;
					opacity: 1;
				}
				.v-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					border-radius: 0.625rem;
					background: rgba(84, 189, 247, 0.7);
					filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#77df4e3a',endColorstr='#77df4e3a');
					zoom: 1;
					height: 9.375rem;
					opacity: 0;
					filter: alpha(opacity=0);
					-webkit-transition: all 0.3s ease-in-out;
					-moz-transition: all 0.3s ease-in-out;
					transition: all 0.3s ease-in-out;
				}
				.v-icon {
					width: 3.125rem;
					height: 3.125rem;
					background: url("../assets/index/play.png") no-repeat;
					background-size: cover;
					position: absolute;
					left: 5.3125rem;
					top: 3.125rem;
					opacity: 0;
				}
			}
			.eachvideo img {
				border-radius: 0.625rem;
				object-fit: cover;
			}
			.bestvideomessage ul {
				position: absolute;
				top: 19.0625rem;
				left: 1.875rem;
				list-style: none;
			}
			.bestvideomessage li:nth-child(1),
			.bestvideomessage li:nth-child(2),
			.bestvideomessage li:nth-child(3) {
				color: #559ad5;
			}
			.bestvideomessage ul li span {
				font-weight: normal;
				font-size: 0.8125rem;
				position: relative;
				left: 0.3125rem;
				top: -0.0625rem;
			}
			.bestvideomessage ul li i:nth-child(2) {
				position: relative;
				left: 8.4375rem;
				top: -0.0625rem;
			}
			.bestvideomessage ul li i:nth-child(2) img {
				position: relative;
				left: 0rem;
				top: 0.3125rem;
			}
			.bestvideomessage ul li i:nth-child(2) span {
				font-style: normal;
				position: relative;
				left: 0.3125rem;
				top: 0.125rem;
			}
		}
	}
	.bestvideo:hover {
		box-shadow: 0.3125rem 0.3125rem 0.4375rem rgba(71, 70, 70, 0.6);
	}
	.videolist {
		width: 55rem;
		height: 25.625rem;
		position: absolute;
		left: 21.5625rem;
		top: 1.875rem;
		overflow: hidden;
		overflow-x: scroll;
		overflow-y: unset;
		.containeachvideo {
			width: 53.75rem;
			margin-top: 1.25rem;
			position: relative;
			.videomessage {
				height: 9.375rem;
				width: 37.5rem;
				position: absolute;
				background-color: rgba(250, 235, 215, 0.7);
				border-radius: 0.625rem;
				right: 0.625rem;
				top: 0.625rem;
				transition: all 0.2s ease-in-out;
				.videotitle {
					margin-top: 0.625rem;
					text-align: center;
					color: #409eff;
				}
				.videocontent {
					width: 31.25rem;
					height: 4.375rem;
					margin-top: 1.25rem;
					margin: 0 auto;
				}
				.videocontent p {
					width: 13.125rem;
					color: #559ad5;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.typeanduser .videotype i {
					position: absolute;
					bottom: 1.75rem;
					left: 1.25rem;
				}
				.typeanduser .videotype span {
					position: absolute;
					bottom: 1.875rem;
					left: 2.5rem;
					font-size: 0.875rem;
					color: #66c3ff;
				}
				.typeanduser .videouser i {
					position: absolute;
					bottom: 1.625rem;
					right: 6.875rem;
				}
				.typeanduser .videouser span {
					display: block;
					width: 5.625rem;
					height: 1.25rem;
					text-align: left;
					position: absolute;
					bottom: 1.75rem;
					right: 0.9375rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 0.875rem;
					color: #66c3ff;
				}
				.sangezhibiao {
					height: 1.875rem;
					width: 37.5rem;
					position: absolute;
					bottom: 0;
				}
				.sangezhibiao ul {
					list-style: none;
				}
				.sangezhibiao ul li {
					color: #559ad5;
					margin: 0 0.8125rem;
					font-size: 0.8125rem;
					float: right;
					line-height: 1.875rem;
				}
				.sangezhibiao ul li:nth-child(4) {
					color: #559ad5;
					margin: 0 0.8125rem;
					font-size: 0.8125rem;
					float: left;
					line-height: 1.875rem;
				}
			}
			.videomessage:hover {
				box-shadow: 0.3125rem 0.3125rem 0.4375rem rgba(71, 70, 70, 0.6);
			}
		}
		.eachvideo {
			width: 12.5rem;
			height: 9.375rem;
			display: inline-block;
			margin: 0.625rem;
			.v-lnk {
				position: relative;
				display: block;
				height: 9.375rem;
				cursor: pointer;
			}
			@keyframes ani-ico {
				from {
					transform: scale(3);
					opacity: 0;
				}
				to {
					transform: scale(1);
					opacity: 1;
				}
			}
			.v-lnk:hover .v-overlay {
				opacity: 1;
				filter: alpha(opacity=100);
				background-color: #53bcf6;
				opacity: 0.7;
				border-radius: 0.625rem;
				filter: alpha(opacity=70);
			}
			.v-lnk:hover .v-icon {
				animation: 0.2s linear 0s normal none ani-ico;
				-webkit-animation: 0.2s linear 0s normal none ani-ico;
				opacity: 1;
			}
			.v-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				border-radius: 0.625rem;
				background: rgba(84, 189, 247, 0.7);
				filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#77df4e3a',endColorstr='#77df4e3a');
				zoom: 1;
				height: 9.375rem;
				opacity: 0;
				filter: alpha(opacity=0);
				-webkit-transition: all 0.3s ease-in-out;
				-moz-transition: all 0.3s ease-in-out;
				transition: all 0.3s ease-in-out;
			}
			.v-icon {
				width: 3.125rem;
				height: 3.125rem;
				background: url("../assets/index/play.png") no-repeat;
				background-size: cover;
				position: absolute;
				left: 4.6875rem;
				top: 3.125rem;
				opacity: 0;
			}
		}
		.eachvideo img {
			border-radius: 0.625rem;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
	.choosepage {
		position: absolute;
		bottom: 0.3125rem;
		right: 12.5rem;
	}
}
.is-active {
	color: rgb(255, 208, 75) !important;
	border-bottom-color: rgb(255, 208, 75) !important;
	background-color: rgb(64, 158, 255) !important;
}
</style>
