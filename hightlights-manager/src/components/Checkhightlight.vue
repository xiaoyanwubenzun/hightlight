<template>
	<div>
		<Hightlightcheck class="wheader"></Hightlightcheck>
		<div class="watchhightlight" :style="backgroundStyle">
			{{ backgroundStyle }}
			<div class="watchuser">
				<div class="userimgandname">
					<img class="userimg" :src="user.userimg" alt="" />
					<span>{{ user.username }}</span>
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
					<div id="uum-video">
						<video
							poster="http://localhost:8090/public/imgupload/1618306378729_image2019-09-08ompu40.jpg"
							src="http://localhost:8090/public/videoupload/1618306430576_11-3_HN4_NEW-2397225024_02.webm"
							id="video-el"
						></video>
					</div>
				</div>
				<div class="vcontent" v-html="vcontent"></div>
			</div>
			<div class="changevideostatusbtn">
				<div class="checkresult">
					<el-input
						type="textarea"
						clearable
						maxlength="30"
						size="large"
						show-word-limit
						placeholder="请输入审核结果及原因"
						v-model="checkresult"
						class="checkresultinput"
					>
					</el-input>
				</div>
				<div class="checkselect clearfloat">
					<el-select v-model="status" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
					<el-button
						@click="sendcheckresult()"
						class="checkselectbutton"
						type="success"
						icon="el-icon-check"
						circle
					></el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Hightlightcheck from "./Hightlightcheck.vue";
export default {
	data() {
		return {
			vid: "",
			uid: "",
			video: "",
			vcontent: "",
			user: "",
			gender: 1,
			consttell: "肉做的",
			backgroundStyle: "",
			checkresult: "",
			options: [
				{
					value: "1",
					label: "审核通过",
				},
				{
					value: "0",
					label: "暂定",
				},
				{
					value: "-1",
					label: "审核未通过",
				},
			],
			status: "",
		};
	},
	components: { Hightlightcheck },
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
							let videosrc = video.match(guizevideosrc)[0];
							let player = uumPlayer("video-el", {
								poster: this.video.fengmian,
								src: videosrc,
								loop: false,
								playsinline: true,
								MS: {
									hls: {},
								},
							});
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
								`请认真审核${res.data.user.username}的视频哦`
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
		sendcheckresult() {
			console.log(this.checkresult, this.status);
			this.$confirm("一定要认真审核视频哦, 是否确认审核结果?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.axios
						.post("/checkvideoresult", {
							vid: this.vid,
							checkresult: this.checkresult,
							status: this.status,
						})
						.then((res) => {
							console.log(res.data);
							switch (res.data.code) {
								case 1:
									this.$message({
										type: "success",
										message: res.data.Msg,
									});
									break;
								case 0:
									this.$message({
										type: "success",
										message: res.data.Msg,
									});
									break;

								default:
									break;
							}
							this.$router.push("/");
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消操作",
					});
				});
		},
	},
	created() {
		this.vid = this.$router.currentRoute.query.vid;
		this.uid = this.$router.currentRoute.query.uid;
		this.getvideomessage();
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(4)");
		// console.log(guankanjijin);
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
	},
	beforeDestroy() {},
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
		position: absolute;
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
		top: 200px;
		left: 20px;
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
		top: 150px;
		left: 28vw;
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
		#uum-video {
			width: 600px;
			height: 400px;
			margin: 0 auto;
			margin-top: 10px;
			.uumPlayer,
			.uum-gradient-bottom,
			video {
				width: 600px;
				border-radius: 5px;
				object-fit: cover;
			}
			.uumPlayer video {
				border-radius: 5px;
			}
			.uumPlayer {
				transition: all 0.2s ease-in-out;
			}
			.uumPlayer:hover {
				box-shadow: 5px 5px 5px rgba(117, 116, 116, 0.747);
			}
		}
		.vcontent {
			width: 600px;
			height: 100px;
			overflow: scroll;
			margin-left: 85px;
			margin-top: -25px;
			p {
				text-indent: 40px;
			}
		}
	}
	.changevideostatusbtn {
		width: 20vw;
		height: 60vh;
		background-color: rgba(255, 255, 255, 0);
		position: absolute;
		transition: all 0.2s ease-in-out;
		right: 5px;
		top: 150px;
		border-radius: 5px;
		.checkresultinput {
			margin-top: 290px;
		}
		.checkselect {
			margin-top: 20px;
			width: 130px;
			white-space: nowrap;
			.checkselectbutton {
				margin-left: 70px;
			}
		}
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
