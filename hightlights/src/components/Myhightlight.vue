<template>
	<div>
		<Hightlightheader class="myhightlightheader"></Hightlightheader>
		<div class="myhightlight" :style="backgroundStyle">
			<div class="emptyblock"></div>
			<div class="usermessagehead">
				<div v-if="user.username" class="whosmessage">
					<img
						class="whosuserimg"
						:src="user.userimg"
						alt="图片加载中"
					/>
					<span class="whosname">{{ user.username }}</span>
					<i class="whosgender"
						><img :src="user.gender" alt="图片加载中"
					/></i>
					<i class="whosage"
						><span>{{ user.uage }}</span></i
					>
					<span class="zonghepaiming"
						>本站贡献排名：{{ user.paiming }}</span
					>
				</div>
				<div v-if="user.username" class="whossignwnumlikenumvnum">
					<p class="whossign">签名：{{ user.usersign }}</p>
					<ul class="clearfloat">
						<li>
							<i class="el-icon-video-camera"></i
							><span
								>发布集锦：<i>{{ user.vnum }}</i></span
							>
						</li>
						<li>
							<i class="el-icon-star-off"></i
							><span
								>获得点赞：<i>{{ user.likenum }}</i></span
							>
						</li>
						<li>
							<i class="el-icon-view"></i
							><span
								>集锦被浏览总量：<i>{{ user.wnum }}</i></span
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="user-uploadvideo">
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
								<img
									:src="item.fengmian"
									width="200"
									height="150"
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
						</div>
					</div>
				</div>
			</div>
			<div class="myhightlightsearch">
				<input
					class="input"
					type="text"
					placeholder="搜索(标题关键字标题、内容、游戏类型、作者)"
					v-model="keyword"
					@keydown.enter="searuservideo()"
				/>
			</div>
			<el-pagination
				v-if="user.username"
				background
				layout="prev, pager, next"
				:total="totalpage"
				@current-change="currentChange"
			>
			</el-pagination>
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
			user: {},
			totalpage: 1000,
			keyword: "",
			pagenum: 1,
			videolist: [],
		};
	},
	methods: {
		getusermessage() {
			// console.log(this.$route.query.uid);
			let uid = this.$route.query.uid
				? this.$route.query.uid
				: sessionStorage.getItem("who");
			this.axios("/getuserpaiming", {
				uid: uid,
			})
				.then((res) => {
					// console.log(res.data);
					res.data.userlist.forEach((item, index, userlist) => {
						if (item.uid == uid) {
							this.user = item;
							this.user.paiming = index + 1;
							switch (item.gender) {
								case 0:
									this.user.gender =
										"../img/icons/wan_sex_unknow.png";
									break;
								case 1:
									this.user.gender =
										"../img/icons/wan_sex_m.png";
									break;
								case 2:
									this.user.gender =
										"../img/icons/wan_sex_w.png";
									break;
								default:
									break;
							}
							// this.user.gender = "../img/icons/wan_sex_w.png";
							// console.log(this.user);
						}
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		searchvideo() {
			this.axios
				.get("/myhightlightsearch", {
					params: {
						uid: this.$route.query.uid
							? this.$route.query.uid
							: sessionStorage.getItem("who"),
						keyword: this.keyword,
						pagenum: this.pagenum,
					},
				})
				.then((res) => {
					switch (res.data.code) {
						case 1:
							// this.$message.success(res.data.Msg);
							// console.log(JSON.stringify(res.data.video[0]));
							// this.$message.success(res.data.Msg);
							this.videolist = res.data.video;
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
		searuservideo() {
			if (this.keyword) {
				this.searchvideo();
				return;
			} else if (!this.keyword) {
				this.$message.warning("搜索内容不能为空哦！");
				this.searchvideo();
			}
		},
	},
	created() {
		this.getusermessage();
		this.searchvideo();
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(2)");
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
	},
};
</script>

<style lang="scss" scoped>
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
.myhightlightheader {
	width: 100%;
	position: fixed;
	display: block;
	z-index: 100;
}
.myhightlight {
	height: 120vh;
	.emptyblock {
		height: 61px;
	}
	.usermessagehead,
	.user-uploadvideo {
		border-radius: 5px;
		transition: all 0.2s ease-in-out;
		background-color: rgba(255, 255, 255, 0.7);
	}
	.usermessagehead:hover {
		box-shadow: 5px 5px 7px rgba(71, 70, 70, 0.6);
	}
	.usermessagehead {
		height: 150px;
		width: 65vw;
		margin-left: 100px;
		margin-top: 50px;
		.whosmessage {
			width: 100%;
			height: 50%;
			position: relative;
			.whosuserimg {
				margin: 10px 0 0 10px;
				height: 50px;
				width: 50px;
				border-radius: 50%;
				object-fit: cover;
			}
			.whosgender img {
				width: 15px;
				height: 15px;
				position: absolute;
				top: 25%;
				left: 25%;
			}
			.whosname {
				position: absolute;
				top: 15px;
				left: 70px;
				color: cornflowerblue;
			}
			.whosage span {
				position: absolute;
				top: 15px;
				left: 28%;
				font-style: normal;
				color: darkorchid;
			}
			.zonghepaiming {
				position: absolute;
				right: 50px;
				top: 20px;
				font-size: 20px;
				color: #f28123;
			}
		}
		.whossignwnumlikenumvnum {
			.whossign {
				margin-left: 65px;
				color: chocolate;
				font-size: 15px;
			}
			ul {
				list-style: none;
				color: #559ad5;
				margin: 10px 0 0 10px;
			}
			ul li {
				float: left;
			}
			ul li i {
				vertical-align: bottom;
				margin-right: 5px;
			}
			ul li span {
				font-weight: normal;
				font-size: 12px;
			}
			ul li span i {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				color: #000;
			}
		}
	}
	.user-uploadvideo {
		height: 500px;
		width: 80vw;
		margin-left: 100px;
		margin-top: 50px;
		.videolist {
			width: 55rem;
			height: 25.625rem;
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
					box-shadow: 0.3125rem 0.3125rem 0.4375rem
						rgba(71, 70, 70, 0.6);
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
			}
		}
	}
	.myhightlightsearch {
		position: absolute;
		top: 115px;
		right: 25px;
		width: 25vw;
		height: 50px;
		.input {
			width: 14.375rem;
			max-width: 90%;
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
		.input:hover {
			color: var(--txt-b-pure);
			background-color: rgba(255, 255, 255, 0.6);
			box-shadow: rgba(0, 0, 0, 0.3) 0 0 0.625rem;
			width: 33.125rem;
		}
	}
	.el-pagination {
		white-space: nowrap;
		padding: 2px 5px;
		color: #303133;
		font-weight: 700;
		text-align: center;
		margin-top: 20px;
	}
}
</style>
