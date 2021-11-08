<template>
	<div class="main">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" id="bg1"></div>
				<div class="swiper-slide" id="bg2"></div>
				<div class="swiper-slide" id="bg3"></div>
			</div>
		</div>

		<div class="login">
			<div class="logina">
				<h1 class="logintitle">集锦后台审核系统</h1>
				<div class="line">
					<img class="smallImg" src="../assets/login/icon3.png" />
					<input
						placeholder="admin"
						type="text"
						v-model="managername"
					/>
				</div>
				<span v-html="managernameerr" class="managernameerr err"
					>用户名错误</span
				>
				<div class="line">
					<img class="smallImg" src="../assets/login/icon4.png" />
					<input
						placeholder="pass"
						type="password"
						v-model="password"
					/>
				</div>
				<span v-html="passworderr" class="passworderr err"
					>密码错误</span
				>
				<button type="button" class="logBut" @click="managerlogin()">
					登&nbsp;&nbsp;录
				</button>

				<div class="yanzhengma">
					<div v-html="yanzhengimg" class="yanzhengimg"></div>
					<span class="yanzhengimg-span">验证码：</span>
					<input
						v-model="yanzhengma"
						class="yanzhengimg-input"
						type="text"
					/>
					<span
						v-html="yanzhengmaerr"
						class="yanzhengmaerr err"
					></span>
				</div>

				<div @click="getsvgimg()" class="btn-yanzhengma">
					看不清,换一张
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			managername: "",
			password: "",
			managernameerr: "",
			passworderr: "",
			yanzhengma: "",
			yanzhengmaerr: "",
			yanzhengimg: "",
		};
	},
	watch: {
		managername() {
			if (this.managername.length < 3 || this.managername.length > 10) {
				this.managernameerr = "用户名大于等于3个字符，不得超过10个字符";
			} else {
				this.managernameerr = "";
			}
		},
		password() {
			if (this.password.length < 6 || this.password.length > 10) {
				this.passworderr = "密码大于等于6个字符，不得超过10个字符";
			} else {
				this.passworderr = "";
			}
		},
		checked() {},
	},
	methods: {
		managerlogin() {
			if (
				this.managername == "" ||
				this.password == "" ||
				this.yanzhengma == ""
			) {
				this.$message.error("请完善必填项！");
				return;
			} else if (
				this.managername.length < 3 ||
				this.managername.length > 10
			) {
				console.log(this.managername.length);
				this.$message.error(
					"管理员账号大于等于3个字符，不得超过10个字符"
				);
				return;
			} else if (this.password.length < 6 || this.password.length > 10) {
				this.$message.error("密码大于等于6个字符，不得超过10个字符");
				return;
			} else {
				this.axios
					.post("/managerlogin", {
						managername: this.managername,
						passwd: this.password,
						yanzhengma: this.yanzhengma,
					})
					.then((res) => {
						console.log(res.data);
						const result = res.data;
						if (result.code == -1) {
							this.managernameerr = result.Msg;
							this.getsvgimg();
						} else if (result.code == 0) {
							this.passworderr = result.Msg;
							this.getsvgimg();
						} else if (result.code == -2) {
							this.yanzhengmaerr = result.Msg;
							this.getsvgimg();
						} else if (result.code == 1) {
							// sessionStorage.setItem("whichmanager",result.mid);
							this.$message.success(
								`等你很久啦~，${this.managername}，快去审核视频吧！`
							);
							this.$router.push("/");
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		getsvgimg() {
			this.axios
				.get("/svgimg")
				.then((res) => {
					this.yanzhengimg = res.data.data;
					// console.log(res.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	mounted() {
		this.getsvgimg();
		new Swiper(".swiper-container", {
			autoplay: true,
			speed: 5000,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
		});
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
.main {
	height: 722px;
	display: flex;
}
.login {
	width: 800px;
	height: 450px;
	margin: 0 auto;
	margin-top: 10%;
	border-radius: 5px;
	background-size: cover;
	background: rgba(128, 105, 91, 0.3);
	align-self: end;
	transition: all 0.2s ease-in-out;
	transition-property: all;
	transition-duration: 0.2s;
	transition-timing-function: ease-in-out;
	transition-delay: 0s;
	position: relative;
}
.logintitle {
	color: #f9d2ab;
	text-align: center;
	padding-top: 10px;
}
.login:hover {
	box-shadow: 0 2px 7px rgba(37, 35, 35, 0.904);
	border-color: transparent;
}

.line {
	margin: 32px auto;
	width: 700px;
	background: #ffffffe8;
	padding: 5px 2%;
}

.line input {
	border: none;
	padding: 0px 1%;
	margin: 1% 0px;
	background: none;
	width: 550px;
	font-size: 16px;
	line-height: 30px;
	outline: none;
}

.line .smallImg {
	width: 26px;
	float: left;
	vertical-align: middle;
	margin-top: 5px;
	margin-left: 8px;
}

.logBut {
	background: #00ced1;
	padding: 14px 0px;
	border: none;
	color: #fff;
	font-size: 16px;
	width: 480px;
	margin-left: 50px;
	margin-top: 10px;
	outline: none;
}

.logBut:hover {
	cursor: pointer;
	border-radius: 5px;
	color: wheat;
}

.swiper-container {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: -1;
}
.yanzhengma {
	position: absolute;
	right: 50px;
	bottom: 50px;
	width: 150px;
	height: 150px;
}
.yanzhengimg {
	position: absolute;
	right: 70px;
	bottom: 45px;
	background-color: wheat;
	width: 100px;
	height: 50px;
	border-radius: 5px;
}
.yanzhengimg-input {
	outline: none;
	border: 2px #00bfff solid;
	border-radius: 5px;
	width: 50px;
	height: 20px;
	position: absolute;
	bottom: 5px;
	left: -20px;
}
.yanzhengimg-span {
	position: absolute;
	white-space: nowrap;
	width: 40px;
	right: 130px;
	bottom: 105px;
	color: white;
}
.btn-yanzhengma {
	position: absolute;
	right: 10px;
	bottom: 95px;
	cursor: pointer;
	text-align: center;
	color: gold;
	text-decoration: underline white;
}
.err {
	position: absolute;
	color: red;
	font-size: 13px;
}
.managernameerr {
	left: 100px;
	top: 145px;
}
.passworderr {
	left: 100px;
	top: 230px;
}
.yanzhengmaerr {
	right: 20px;
	bottom: 5px;
}

#bg1 {
	height: 100vh;
	background: url("../assets/login/background2.jpg") no-repeat;
	background-size: cover;
}

#bg2 {
	height: 100vh;
	background: url("../assets/login/background1.jpg") no-repeat;
	background-size: cover;
}

#bg3 {
	height: 100vh;
	background: url("../assets/login/background3.jpg") no-repeat;
	background-size: cover;
}
</style>
