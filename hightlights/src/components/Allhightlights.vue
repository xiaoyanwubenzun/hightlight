<template>
	<div>
		<Hightlightheader class="allhightlightheader"></Hightlightheader>
		<div class="allhightlight clearfloat" :style="backgroundStyle">
			<div class="emptyblock"></div>
			<div class="userbestvideo">
				<h3 class="title">
					<span>{{ bestvideolist[0].username }}</span
					>最受欢迎的两个视频
				</h3>
				<div
					v-for="(item, index) in bestvideolist"
					:key="item.vid"
					class="containeachvideo"
				>
					<span class="paiming">热度第{{ index + 1 }}</span>
					<i class="paiminghot"
						><img src="../assets/index/hot.png" alt="图片加载失败"
					/></i>
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
											? "这位用户很懒，没有写内容哦"
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
										<i class="el-icon-chat-dot-square"></i>
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
			<div class="userlist">
				<div
					class="eachuser"
					v-for="item in userlist"
					:key="item.uid"
					@click="searchuserbestvideo(item.uid)"
				>
					<div class="userimgandname">
						<img
							class="userimg"
							:src="item.userimg"
							alt="头像加载失败"
						/>
						<span @click.stop="watchhisvideo(item.uid)">{{
							item.username
						}}</span>
						<i><img :src="item.gender" alt="性别图标加载失败" /></i>
						<span class="usersign">签名：{{ item.usersign }}</span>
					</div>
					<div class="userhotpoint">
						<ul class="clearfloat">
							<li>
								<i class="el-icon-video-camera"></i
								><span
									>发布集锦：<i>{{ item.vnum }}</i></span
								>
							</li>
							<li>
								<i class="el-icon-star-off"></i
								><span
									>获得点赞：<i>{{ item.likenum }}</i></span
								>
							</li>
							<li>
								<i class="el-icon-view"></i
								><span
									>集锦被浏览总量：<i>{{
										item.wnum
									}}</i></span
								>
							</li>
						</ul>
					</div>
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
			bestvideolist: [
				{
					vid: 1,
					uid: 1,
					vtitle: "默认标题",
					vtext: "默认文本",
					videotype: "英雄联盟",
					fengmian:
						"http://localhost:8090/public/imgupload/defaultuserimg.jpg",
					createtime: "1998-06-29T12:30:00.000Z",
					watchnum: 0,
					likecount: 0,
					status: 0,
					username: "管理员",
					cnum: 0,
				},
			],
			userlist: [
				{
					uid: 1,
					userimg:
						"http://localhost:8090/public/imgupload/defaultuserimg.jpg",
					username: "管理员",
					gender: "./img/icons/wan_sex_m.png",
					usersign: "还没有用户哦",
					wnum: 0,
					likenum: 0,
					vnum: 0,
					sums: 0,
				},
			],
			// bestvideolist:[],
			// userlist:[],
		};
	},
	methods: {
		getuserpaiming() {
			this.axios("/getuserpaiming")
				.then((res) => {
					//  console.log(res.data);
					switch (res.data.code) {
						case 1:
							this.userlist = res.data.userlist;
							this.userlist.forEach((item, index, userlist) => {
								switch (item.gender) {
									case 0:
										userlist[index].gender =
											"./img/icons/wan_sex_unknow.png";
										break;
									case 1:
										userlist[index].gender =
											"./img/icons/wan_sex_m.png";
										break;
									case 2:
										userlist[index].gender =
											"./img/icons/wan_sex_w.png";
										break;
									default:
										break;
								}
							});
							//  console.log(this.userlist);
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
		watchhisvideo(uid) {
			this.$router.push(`/myhightlight?uid=${uid}`);
		},
		searchuserbestvideo(uid) {
			this.axios("/searchuserbestvideo", {
				params: {
					searchuid: uid,
				},
			})
				.then((res) => {
					// console.log(res.data);
					switch (res.data.code) {
						case 1:
							this.bestvideolist = res.data.bestvideolist;
							break;
						case 0:
							this.$$message.error(res.data.Msg);
							break;
						default:
							break;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	created() {
		this.getuserpaiming();
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(4)");
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
		// console.log(guankanjijin);
	},
};
</script>

<style lang="scss" scoped>
.allhightlightheader .is-active {
	color: rgb(255, 208, 75) !important;
	border-bottom-color: rgb(255, 208, 75) !important;
	background-color: rgb(64, 158, 255) !important;
}
.allhightlight {
	height: 120vh;
	.userbestvideo {
		height: 80vh;
		width: 65vw;
		margin-top: 30px;
		margin-left: 20px;
		float: left;
		border-radius: 5px;
		background-color: rgba(255, 255, 255, 0.7);
		.title {
			color: coral;
			font-family: kaiti;
			text-align: right;
			font-size: 25px;
			margin-top: 20px;
			margin-right: 80px;
			span {
				color: #559ad5;
				font-family: kaiti;
				font-size: 30px;
			}
		}
		.containeachvideo {
			width: 860px;
			margin-top: 45px !important;
			position: relative;
			margin: 0 auto;
			.paiming {
				position: absolute;
				left: -50px;
				top: -15px;
				color: #f28123;
				font-weight: 600;
			}
			.paiminghot {
				img {
					position: absolute;
					left: 15px;
					top: -15px;
				}
			}
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
		}
	}
	.userlist {
		height: 70vh;
		width: 23vw;
		margin-top: 50px;
		margin-left: 120px;
		float: left;
		position: relative;
		border-radius: 5px;
		transition: all 0.2s ease-in-out;
		overflow-y: scroll;
		background-color: rgba(250, 235, 215, 0.7);
		.eachuser:nth-child(1) {
			margin-top: 25px;
		}
		.eachuser {
			cursor: pointer;
			width: 95%;
			height: 80px;
			margin: 0 auto;
			margin-top: 40px;
			position: relative;
			border-radius: 5px;
			transition: all 0.2s ease-in-out;
			background-color: rgba(255, 255, 255, 0.7);
			.userimgandname .userimg {
				margin-top: 5px;
				margin-left: 5px;
				height: 40px;
				width: 40px;
				border-radius: 50%;
				object-fit: cover;
			}
			.userimgandname span:nth-child(2) {
				white-space: nowrap;
				font-style: normal;
				font-weight: bold;
				color: #409eff;
				position: absolute;
				left: 70px;
			}
			.userimgandname span:nth-child(2):hover {
				white-space: nowrap;
				font-style: normal;
				font-weight: bold;
				color: #f28123;
				position: absolute;
				left: 70px;
			}
			.usersign {
				white-space: nowrap;
				font-style: normal;
				color: burlywood;
				position: absolute;
				top: 30px;
				font-size: 13px;
				left: 70px;
			}
			.userimgandname i img {
				position: absolute;
				top: 5px;
				right: 35px;
				margin-left: 15px;
				width: 15px;
				height: 15px;
			}
			.userhotpoint ul {
				list-style: none;
				color: #559ad5;
			}
			.userhotpoint ul li {
				float: right;
			}
			.userhotpoint ul li i {
				vertical-align: bottom;
				margin-right: 5px;
			}
			.userhotpoint ul li span {
				font-weight: normal;
				font-size: 12px;
			}
			.userhotpoint ul li span i {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				color: #000;
			}
		}
	}
	.userlist:hover,
	.eachuser:hover {
		box-shadow: 0.3125rem 0.3125rem 0.4375rem rgba(71, 70, 70, 0.6);
	}
}
.emptyblock {
	width: 100%;
	height: 61px;
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
.allhightlightheader {
	width: 100%;
	position: fixed;
	display: block;
	z-index: 100;
}
</style>
