<template>
	<div>
		<Hightlightcheck class="indexheader"></Hightlightcheck>
		<div class="indexmain" :style="backgroundStyle">
			<div class="emptyblock"></div>
			<div class="search">
				<div class="nowtime">
					<h1 v-text="nowtime">17:00</h1>
					<p v-text="daydate"></p>
				</div>
			</div>
			<div class="result">
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
								:href="
									'/checkhightlight?vid=' +
									item.vid +
									'&uid=' +
									item.uid
								"
							>
								<img
									width="100%"
									height="100%"
									:src="item.fengmian"
									alt="封面加载错误"
								/>
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
							<div class="changevideostatus">
								<h3 class="notpassh3">待审核</h3>
							</div>
						</div>
					</div>
				</div>
				<div v-if="videolist[0]" class="choosepage">
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
import Hightlightcheck from "./Hightlightcheck.vue";
export default {
	components: { Hightlightcheck },
	data() {
		return {
			backgroundStyle: "",
			nowtime: "",
			daydate: "",
			beginnowtime: "",
			totalpage: 1000,
			pagenum: 1,
			keyword: "",
			videolist: [],
		};
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
							console.log(res.data);
							this.videolist = res.data.video;
							// console.log(this.videolist);
							this.totalpage = res.data.length;
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
		currentChange(val) {
			this.pagenum = val;
			this.searchvideo();
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
	height: 56.25rem;
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
}
.result {
	height: 31.25rem;
	width: 78.125rem;
	margin: 0 auto;
	border-radius: 0.3125rem;
	top: 10vh;
	position: relative;
	background-color: rgba(255, 255, 255, 0.7);
	.videolist {
		width: 70rem;
		height: 25.625rem;
		position: absolute;
		left: 1.5625rem;
		top: 1.875rem;
		overflow-x: scroll;
		overflow-y: unset;
		.containeachvideo {
			width: 69.75rem;
			margin-top: 1.25rem;
			position: relative;
			.videomessage {
				height: 9.375rem;
				width: 37.5rem;
				position: absolute;
				background-color: rgba(250, 235, 215, 0.7);
				border-radius: 0.625rem;
				right: 16.625rem;
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
			.changevideostatus {
				position: absolute;
				top: 20px;
				right: 0;
				.notpassh3 {
					color: red;
				}
				.passh3 {
					color: #559ad5;
				}
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
		left: 35rem;
	}
}
.is-active {
	color: rgb(255, 208, 75) !important;
	border-bottom-color: rgb(255, 208, 75) !important;
	background-color: rgb(64, 158, 255) !important;
}
</style>
