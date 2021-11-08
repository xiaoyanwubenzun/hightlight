<template>
	<div>
		<Hightlightheader class="wheader"></Hightlightheader>
		<div class="watchhightlight clearfloat" :style="backgroundStyle">
			<div class="watchuser">
				<div class="userimgandname">
					<img class="userimg" :src="user.userimg" alt="" />
					<span @click.stop="watchhisvideo(user.uid)">{{
						user.username
					}}</span>
					<i><img :src="gender" alt="" /></i>
				</div>
				<div class="userhotpoint">
					<ul>
						<li>
							<i class="el-icon-video-camera"></i
							><span
								>发布集锦：<i>{{ user.sumvideo }}</i></span
							>
						</li>
						<li>
							<i class="el-icon-star-off"></i
							><span
								>获得点赞：<i>{{ user.sumlikecount }}</i></span
							>
						</li>
						<li>
							<i class="el-icon-view"></i
							><span
								>集锦被浏览总量：<i>{{
									user.sumwatchnum
								}}</i></span
							>
						</li>
					</ul>
				</div>
				<div class="userconsttellsigngamelike">
					<ul>
						<li>
							<i class=""></i
							><span
								>星座：<i>{{ consttell }}</i></span
							>
						</li>
						<li>
							<i class=""></i
							><span
								>喜欢的游戏：<i>{{ user.gamelike }}</i></span
							>
						</li>
						<li>
							<i class=""></i
							><span
								>个性签名：<i>{{ user.usersign }}</i></span
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="watchvideo">
				<div class="videostyle">
					<h2>{{ video.vtitle }}</h2>
					<div class="dateandwatchnum clearfloat">
						<ul>
							<li>
								<i class="el-icon-date"></i
								><span>{{
									new Date(
										video.createtime
									).toLocaleDateString()
								}}</span>
							</li>
							<li>
								<i class="el-icon-video-play"></i
								><span>播放量：</span>{{ video.watchnum }}
							</li>
						</ul>
					</div>
					<div class="xyw-video">
						<video
							controls="controls"
							preload="false"
							:poster="video.fengmian"
							:src="videosrc"
						></video>
					</div>
				</div>
				<div class="typedianzanpinglun">
					<ul>
						<li>
							<i><img src="../assets/icons/game.png" alt="" /></i
							><span>{{ video.videotype }}</span>
						</li>
						<li @click="tanchupinglun()">
							<i class="el-icon-chat-dot-square"></i
							><span>评论：</span
							>{{
								comment[0].username == "管理员"
									? 0
									: comment.length
							}}
						</li>
						<li @click="addlikecountweb()">
							<i class="el-icon-star-off"></i><span>点赞：</span
							><span>{{ video.likecount }}</span>
						</li>
					</ul>
				</div>
				<div class="vcontent" v-html="vcontent"></div>
			</div>
			<div class="commentarea">
				<div
					v-for="item in comment"
					:key="item.cid"
					class="eachpinglun clearfloat"
				>
					<img :src="item.userimg" alt="图片" />
					<span>{{ item.username }}</span>
					<div class="comment-content">
						<p>{{ item.content }}</p>
					</div>
					<p class="comment-createtime">
						{{ new Date(item.createtime).toLocaleString() }}
					</p>
				</div>
			</div>
			<div :class="pinglunstyle">
				<el-input
					type="text"
					placeholder="发个友善的评论吧(Enter)"
					v-model="pinglun"
					maxlength="200"
					show-word-limit
					@keydown.enter.native="addcomment()"
				>
				</el-input>
				<el-button
					@click="addcomment()"
					class="pinglunbtn"
					type="primary"
					icon="el-icon-s-promotion
"
					>发表</el-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import Hightlightheader from "./Hightlightheader.vue";
export default {
	data() {
		return {
			vid: "",
			uid: "",
			video: "",
			vcontent: "",
			videosrc: "",
			user: "",
			comment: [
				{
					cid: 1,
					content: "还没有评论哦",
					createtime: "1998-06-29T12:30:00.000Z",
					uid: 1,
					userimg:
						"http://localhost:8090/public/imgupload/defaultuserimg.jpg",
					username: "管理员",
				},
			],
			gender: 1,
			consttell: "肉做的",
			islike: false,
			backgroundStyle: "",
			pinglun: "",
			pinglunstyle: "pinglun",
			flag: false,
		};
	},
	components: { Hightlightheader },
	methods: {
		getvideomessage() {
			this.axios
				.get("/getvideomessage", {
					params: {
						vid: this.vid,
						uid: this.uid,
					},
				})
				.then((res) => {
					// console.log(res.data);
					switch (res.data.code) {
						case 0:
							this.$message.error(res.data.Msg);
							break;
						case 1:
							this.user = res.data.user;
							this.video = res.data.video;
							this.comment = res.data.comment;
							// console.log(this.user);
							// console.log(this.video.vcontent);
							// console.log(this.video.vcontent.match(/\<video.*?\<\/video\>/)[0]);
							let oldvcontent = this.video.vcontent.match(
								/\<video.*?\<\/video\>/
							)[0];
							this.vcontent = this.video.vcontent.replace(
								oldvcontent,
								""
							);
							let guizevideo = /<video[^<>]*? src="([^<>]*?)"/gim;
							let guizevideosrc = /(?<=(src="))[^"]*?(?=")/gim;
							let video =
								this.video.vcontent.match(guizevideo)[0];
							this.videosrc = video.match(guizevideosrc)[0];
							// let player = uumPlayer("video-el", {
							//   poster: this.video.fengmian,
							//   src: videosrc,
							//   loop: false,
							//   playsinline: true,
							//   MS: {
							//     hls: {},
							//   },
							// });
							// player.play();
							switch (this.user.gender) {
								case 0:
									this.gender =
										"./img/icons/wan_sex_unknow.png";
									break;

								case 1:
									this.gender = "./img/icons/wan_sex_m.png";
									break;

								case 2:
									this.gender = "./img/icons/wan_sex_w.png";
									break;

								default:
									break;
							}
							switch (this.user.consttell) {
								case 1:
									this.consttell = "水瓶座";
									break;
								case 2:
									this.consttell = "双鱼座";
									break;
								case 3:
									this.consttell = "白羊座";
									break;
								case 4:
									this.consttell = "金牛座";
									break;
								case 5:
									this.consttell = "双子座";
									break;
								case 6:
									this.consttell = "巨蟹座";
									break;
								case 7:
									this.consttell = "狮子座";
									break;
								case 8:
									this.consttell = "处女座";
									break;
								case 9:
									this.consttell = "天枰座";
									break;
								case 10:
									this.consttell = "天蝎座";
									break;
								case 11:
									this.consttell = "射手座";
									break;
								case 12:
									this.consttell = "魔羯座";
									break;
								default:
									break;
							}

							this.$message.success(
								`欢迎观看${res.data.user.username}的视频`
							);

							break;

						default:
							break;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addlikecountweb() {
			this.islike = !this.islike;
			let like = document.querySelector(
				".typedianzanpinglun ul li:nth-child(3) i"
			);
			if (this.islike == true) {
				like.className = "el-icon-star-on";
				like.style.color = "rgb(0, 140, 255)";
				like.parentElement.style.color = "rgb(0, 140, 255)";
				like.nextSibling.nextSibling.innerText =
					Number(like.nextSibling.nextSibling.innerText) + 1;
			} else if (this.islike == false) {
				like.className = "el-icon-star-off";
				like.style.color = "black";
				like.parentElement.style.color = "black";
				like.nextSibling.nextSibling.innerText =
					Number(like.nextSibling.nextSibling.innerText) - 1;
			}
		},
		addlikecountsql() {
			this.axios("/addlikecount", {
				params: {
					vid: this.vid,
				},
			})
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		tanchupinglun() {
			this.flag = !this.flag;
			// console.log( "dom前"+this.flag);
			// this.flag==true?document.querySelector(".pinglun").style.right = "115px":document.querySelector(".pinglun").style.right = "-200px!important";
			if (this.flag) {
				this.pinglunstyle = "tanchupinglun";
			} else {
				this.pinglunstyle = "pinglun";
			}
			//  console.log( "dom后"+this.flag);
		},
		addcomment() {
			if (!this.pinglun) {
				this.$message.warning("评论不能为空哦");
				return;
			}
			this.axios("/addcomment", {
				params: {
					uid: this.uid,
					vid: this.vid,
					content: this.pinglun,
				},
			})
				.then((res) => {
					// console.log(res.data);
					switch (res.data.code) {
						case 1:
							this.$message.success(res.data.Msg);
							this.reloadcomment();
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
		reloadcomment() {
			this.axios("/reloadcomment", {
				params: {
					vid: this.vid,
				},
			})
				.then((res) => {
					switch (res.data.code) {
						case 1:
							this.comment = res.data.comment;
							this.pinglun = "";
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
	},
	created() {
		this.vid = this.$router.currentRoute.query.vid;
		this.uid = sessionStorage.getItem("who");
		this.getvideomessage();
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(5)");
		// console.log(guankanjijin);
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
	},
	beforeDestroy() {
		if (this.islike) {
			this.addlikecountsql();
		}
	},
};
</script>

<style lang="scss">
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
.wheader {
	position: fixed;
	z-index: 100;
}
.watchhightlight {
	height: 120vh;
	position: relative;
	overflow: hidden;
	.watchuser,
	.watchvideo,
	.commentarea {
		border-radius: 10px;
		transition: all 0.2s ease-in-out;
		float: left;
	}
	.watchuser:hover,
	.watchvideo:hover,
	.commentarea:hover,
	.eachpinglun:hover {
		box-shadow: 5px 5px 5px rgba(14, 13, 13, 0.747);
	}
	.watchuser {
		margin-top: 25vh;
		margin-left: 20px;
		width: 25vw;
		height: 40vh;
		background-color: rgba(250, 235, 215, 0.7);
		.userimgandname .userimg {
			margin-top: 15px;
			margin-left: 50px;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			object-fit: cover;
		}
		.userimgandname span {
			white-space: nowrap;
			font-style: normal;
			font-weight: bold;
			color: #409eff;
		}
		.userimgandname span:nth-child(2):hover {
			cursor: pointer;
			color: #f28123;
		}
		.userimgandname i img {
			position: relative;
			top: 2px;
			margin-left: 15px;
			width: 15px;
			height: 15px;
		}
		.userhotpoint ul {
			list-style: none;
			color: #559ad5;
		}
		.userhotpoint ul li {
			margin-left: 50px;
			margin-top: 10px;
		}
		.userhotpoint ul li i {
			vertical-align: bottom;
			margin-right: 5px;
		}
		.userhotpoint ul li:nth-child(1) {
			margin-left: 50px;
			margin-top: 20px;
		}
		.userhotpoint ul li span {
			font-weight: normal;
			font-size: 13px;
		}
		.userhotpoint ul li span i {
			font-style: normal;
			font-weight: normal;
			font-size: 13px;
			color: #000;
		}
		.userconsttellsigngamelike {
			width: 360px;
			height: 80px;
			margin: 20px 10px 10px 10px;
			ul {
				list-style: none;
			}
			ul li {
				margin-left: 10px;
				margin-top: 2px;
			}
			ul li:nth-child(3) span {
				display: block;
				margin-top: 5px;
				width: 300px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			ul li span {
				font-weight: normal;
				font-size: 12px;
				color: #000;
			}
			ul li span i {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				color: brown;
				font-family: "KaiTi";
			}
		}
	}
	.watchvideo {
		margin-top: 20vh;
		margin-left: 2vw;
		width: 50vw;
		height: 75vh;
		background-color: rgba(255, 255, 255, 0.5);
		.videostyle {
			position: relative;
			h2 {
				text-align: left;
				color: #504746;
				margin: 20px 0 0 90px;
			}
			.dateandwatchnum {
				position: absolute;
				right: 0;
			}
			.dateandwatchnum ul {
				list-style: none;
				color: #559ad5;
				float: right;
				font-size: 13px;
				margin: -16px 90px 0 0;
			}
			.dateandwatchnum ul li {
				float: left;
				margin-left: 15px;
			}
			.dateandwatchnum ul li i {
				margin-right: 2px;
			}
		}
		.xyw-video {
			width: 39vw;
			margin: 0 auto;
			margin-top: 10px;
			video {
				transition: all 0.2s ease-in-out;
				width: 39vw;
				border-radius: 5px;
				margin-top: 3vh;
			}
			video:hover {
				box-shadow: 5px 5px 5px rgba(117, 116, 116, 0.747);
			}
			// .uumPlayer,
			// .uum-gradient-bottom,
			// .uumPlayer video {
			//   border-radius: 5px;
			// }
			// .uumPlayer {
			//   transition: all 0.2s ease-in-out;
			// }
			// .uumPlayer:hover {
			//   box-shadow: 5px 5px 5px rgba(117, 116, 116, 0.747);
			// }
		}
		.typedianzanpinglun {
			ul {
				margin-top: 2vh !important;
				list-style: none;
				margin: 0 auto;
				color: black;
				font-size: 13px;
			}
			ul li {
				float: left;
			}
			ul li:nth-child(1) i {
				vertical-align: middle;
			}
			ul li:nth-child(1) {
				margin-right: 18vw;
				margin-left: 8vw;
				i {
					vertical-align: middle;
				}
			}
			ul li:nth-child(2),
			ul li:nth-child(3) {
				i {
					font-size: 16px;
					vertical-align: middle;
					margin-right: 5px;
				}
				margin-left: 1vw;
				cursor: pointer;
			}
			ul li:nth-child(2):hover,
			ul li:nth-child(3):hover {
				color: rgb(0, 140, 255);
			}
		}
		.vcontent {
			width: 39vw;
			height: 10vh;
			overflow: scroll;
			margin: 0 auto;
			p {
				text-indent: 40px;
			}
		}
	}
	.commentarea {
		margin-top: 25vh;
		margin-left: 1vw;
		width: 20vw;
		height: 60vh;
		background-color: rgba(250, 235, 215, 0.7);
		overflow: scroll;
		.eachpinglun {
			width: 90%;
			height: auto;
			margin: 0 auto;
			margin-top: 10px !important;
			background-color: rgb(255, 255, 255, 0.7);
			border-radius: 5px;
			transition: all 0.2s ease-in-out;
			img {
				width: 35px;
				height: 35px;
				border-radius: 50%;
				float: left;
				object-fit: cover;
			}
			span {
				font-size: 12px;
				color: darkred;
			}
			.comment-content {
				margin-top: 10px !important;
				width: 70%;
				margin: 0 auto;
				p {
					font-size: 12px;
					font-weight: 700;
					color: gray;
					font-family: "KaiTi";
				}
			}
			.comment-createtime {
				text-align: right;
				font-size: 12px;
				color: darkred;
				margin-top: 5px;
				margin-right: 10px;
			}
		}
	}
	.pinglun {
		position: absolute;
		bottom: 170px;
		right: -200px;
		width: 13vw;
		transition: all 1s ease-out;
	}
	.tanchupinglun {
		position: absolute;
		bottom: 170px;
		right: 115px;
		width: 13vw;
		transition: all 1s ease-out;
	}
	.pinglunbtn {
		position: absolute;
		right: -100px;
		bottom: 0;
	}
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
.is-active {
	color: rgb(255, 208, 75) !important;
	border-bottom-color: rgb(255, 208, 75) !important;
	background-color: rgb(64, 158, 255) !important;
}
</style>
