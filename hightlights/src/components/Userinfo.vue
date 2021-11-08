<template>
	<div>
		<Hightlightheader class="uheader"></Hightlightheader>
		<div class="userinfo" :style="backgroundStyle">
			<div class="mymessage">
				<div class="userimg clearfloat">
					<img :src="userimg" alt="头像加载失败" />
					<el-upload
						class="upload-demo"
						action="http://localhost:8090/uploadimg"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload"
					>
						<el-button
							class="uploaduserimgbtn"
							size="small"
							type="primary"
							>点击上传新头像</el-button
						>
					</el-upload>
				</div>
				<div class="userageandgender">
					<span>年龄：</span>
					<el-input
						type="text"
						size="small"
						placeholder="0~100岁"
						clearable
						v-model="userage"
					></el-input>
					<span>性别：</span>
					<el-radio-group v-model="usergender">
						<el-radio :label="0">未知</el-radio>
						<el-radio :label="1">男</el-radio>
						<el-radio :label="2">女</el-radio>
					</el-radio-group>
				</div>
				<div class="usersign">
					<span>个性签名：</span>
					<el-input
						type="text"
						size="small"
						suffix-icon="el-icon-edit"
						maxlength="40"
						show-word-limit
						clearable
						v-model="usersign"
					></el-input>
				</div>
				<div class="usertel">
					<span>用户手机号：</span>
					<el-input
						type="text"
						size="small"
						suffix-icon="el-icon-phone-outline"
						clearable
						v-model="usertel"
					></el-input>
				</div>
				<div class="useremail">
					<span>用户邮箱：</span>
					<el-input
						type="email"
						size="small"
						suffix-icon="el-icon-message"
						clearable
						v-model="useremail"
					></el-input>
				</div>
				<div class="userconsttell">
					<span>星座：</span>
					<el-select v-model="consttell" placeholder="请选择星座">
						<el-option
							v-for="item in consttelloptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</div>
				<div class="usergamelike">
					<span>喜欢的游戏：</span>
					<el-select
						v-model="gamevalue"
						multiple
						placeholder="选择喜欢的游戏"
					>
						<el-option
							v-for="item in gameoptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</div>
				<div class="usermibao">
					<span>密保：</span>
					<el-input
						type="text"
						size="small"
						maxlength="10"
						show-word-limit
						clearable
						v-model="mibao"
					></el-input>
				</div>
				<div class="tijiaobtn">
					<el-button
						type="success"
						@click="confirmchangeusermessage()"
						>修改个人信息</el-button
					>
					<el-button type="info">取消</el-button>
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
			consttelloptions: [
				{
					value: "1",
					label: "水瓶座",
				},
				{
					value: "2",
					label: "双鱼座",
				},
				{
					value: "3",
					label: "白羊座",
				},
				{
					value: "4",
					label: "金牛座",
				},
				{
					value: "5",
					label: "双子座",
				},
				{
					value: "6",
					label: "巨蟹座",
				},
				{
					value: "7",
					label: "狮子座",
				},
				{
					value: "8",
					label: "处女座",
				},
				{
					value: "9",
					label: "天枰座",
				},
				{
					value: "10",
					label: "天蝎座",
				},
				{
					value: "11",
					label: "射手座",
				},
				{
					value: "12",
					label: "魔羯座",
				},
			],
			gameoptions: [
				{
					value: "英雄联盟",
					label: "英雄联盟",
				},
				{
					value: "穿越火线",
					label: "穿越火线",
				},
				{
					value: "绝地求生",
					label: "绝地求生",
				},
			],
			userimg: "",
			usergender: 0,
			userage: "",
			usersign: "",
			usertel: "",
			useremail: "",
			consttell: "",
			gamevalue: [],
			mibao: "",
		};
	},
	methods: {
		confirmchangeusermessage() {
			this.$confirm(
				"确认修改您的个人信息, 是否继续?",
				"个人信息修改提示",
				{
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				}
			)
				.then(() => {
					if (
						!this.userimg ||
						!this.userage ||
						!this.usersign ||
						!this.usertel ||
						!this.useremail ||
						!this.mibao
					) {
						this.$message.warning("请完善个人资料");
						return;
					} else if (
						!/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]*\.)+[A-Za-z]{2,14}$/.test(
							this.useremail
						)
					) {
						this.$message.warning("邮箱格式不正确");
						return;
					} else if (
						!/^((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/.test(
							this.usertel
						)
					) {
						this.$message.warning("手机号格式不正确");
						return;
					}
					switch (this.consttell) {
						case "水瓶座":
							this.consttell = 1;
							break;
						case "双鱼座":
							this.consttell = 2;
							break;
						case "白羊座":
							this.consttell = 3;
							break;
						case "金牛座":
							this.consttell = 4;
							break;
						case "双子座":
							this.consttell = 5;
							break;
						case "巨蟹座":
							this.consttell = 6;
							break;
						case "狮子座":
							this.consttell = 7;
							break;
						case "处女座":
							this.consttell = 8;
							break;
						case "天枰座":
							this.consttell = 9;
							break;
						case "天蝎座":
							this.consttell = 10;
							break;
						case "射手座":
							this.consttell = 11;
							break;
						case "魔羯座":
							this.consttell = 12;
							break;
						default:
							break;
					}
					this.changeusermessage();
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消修改",
					});
				});
		},
		changeusermessage() {
			this.axios
				.post("/changeusermessage", {
					uid: sessionStorage.getItem("who"),
					userimg: this.userimg,
					gender: this.usergender,
					uage: this.userage,
					usersign: this.usersign,
					tel: this.usertel,
					useremail: this.useremail,
					consttell: this.consttell,
					gamevalue: this.gamevalue.join(),
					mibao: this.mibao,
				})
				.then((res) => {
					if (res.data.code == 1) {
						this.$message.success(res.data.Msg);
						this.getusermessage();
					} else {
						this.$message.error(res.data.Msg);
						this.getusermessage();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		handleAvatarSuccess(res, file) {
			this.userimg = res.data[0].url;
		},
		beforeAvatarUpload(file) {
			// console.log(file);
			const isJPG = file.type === "image/jpeg";
			const isPNG = file.type === "image/png";
			const isLt10M = file.size / 1024 / 1024 < 10;
			if (!isJPG && !isPNG) {
				this.$message.error("上传头像只能是 JPG、PNG 格式!");
			}
			if (!isLt10M) {
				this.$message.error("上传头像不能超过 10MB!");
			}
			return isJPG || (isPNG && isLt10M);
		},
		getusermessage() {
			this.axios
				.post("/getusermessage", {
					uid: sessionStorage.getItem("who"),
				})
				.then((res) => {
					// console.log(res.data);
					switch (res.data.code) {
						case -1:
							this.$message.error(res.data.Msg);
							break;
						case 1:
							// this.$message.success(res.data.Msg);
							const user = res.data.user;
							this.userimg = user.userimg;
							this.usergender = user.gender;
							this.userage = user.uage;
							this.usersign = user.usersign;
							this.usertel = user.tel;
							this.useremail = user.useremail;
							switch (user.consttell) {
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
							this.gamevalue = user.gamelike.split(",");
							this.mibao = user.mibao;
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
		// let guankanjijin = document.querySelector(".el-menu-item:nth-child(7)");
		// guankanjijin.className = "el-menu-item right is-active";
	},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(7)");
		guankanjijin.className = "el-menu-item right is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
		this.getusermessage();
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
.userinfo {
	height: 120vh;
	position: relative;
}
.uheader {
	position: fixed;
	z-index: 100;
}
.mymessage {
	width: 475px;
	height: auto;
	position: absolute;
	top: 10%;
	left: 1%;
	border-radius: 10px;
	background-color: rgba(245, 222, 179, 0.7);
	.userimg {
		text-align: center;
		img {
			width: 60px;
			height: 60px;
			border-radius: 50%;
			object-fit: cover;
			margin-top: 10px;
			margin-left: 20%;
			float: left;
		}
		.uploaduserimgbtn {
			margin-left: 100px;
			margin-top: 37px;
		}
	}
	.userageandgender {
		.el-input {
			width: 22%;
		}
	}
	.usersign,
	.usertel,
	.useremail,
	.usermibao {
		.el-input {
			width: 50%;
		}
	}
	.userconsttell {
		.el-select {
			width: 28%;
		}
	}
	.usergamelike {
		.el-select {
			width: 65%;
		}
	}
	.tijiaobtn {
		text-align: center;
		margin-top: 50px !important;
		margin-bottom: 40px;
		span {
			color: white !important;
		}
		.el-button {
			margin-right: 20px;
		}
	}
	.userageandgender,
	.usersign,
	.usertel,
	.useremail,
	.userconsttell,
	.usergamelike,
	.usermibao,
	.tijiaobtn {
		color: #606266;
		margin-top: 20px;
		span {
			vertical-align: bottom;
			color: #559ad5;
			margin-left: 40px;
		}
	}
	.tijiaobtn button span {
		margin-left: 0;
	}
	.usergamelike .el-select span {
		margin-left: 0;
	}
	.usersign .el-input span {
		margin-left: 0;
	}
	.userageandgender {
		white-space: nowrap;
		.el-radio-group {
			span {
				margin-left: 0;
			}
		}
	}
	.userageandgender span:nth-child(3) {
		vertical-align: middle;
		margin-left: 20px;
	}
}
.is-active {
	color: rgb(255, 208, 75) !important;
	border-bottom-color: rgb(255, 208, 75) !important;
	background-color: rgb(64, 158, 255) !important;
}
</style>
