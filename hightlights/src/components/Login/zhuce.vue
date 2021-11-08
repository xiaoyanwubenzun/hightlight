<template>
	<div class="bigmain">
		<el-page-header class="zhucehead" @back="goBack" content="注册">
		</el-page-header>
		<div class="zhucemain">
			<div class="zhuce">
				<el-form
					:model="ruleForm"
					status-icon
					:rules="rules"
					ref="ruleForm"
					label-width="100px"
					class="demo-ruleForm myfrom"
				>
					<el-form-item label="手机号码" prop="tel" class="redim">
						<el-input v-model="ruleForm.tel"></el-input>
					</el-form-item>
					<el-form-item
						label="注册用户名"
						prop="username"
						class="redim"
					>
						<el-input v-model="ruleForm.username"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="passwd">
						<el-input
							type="password"
							v-model="ruleForm.passwd"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input
							type="password"
							v-model="ruleForm.checkPass"
							autocomplete="off"
						></el-input>
					</el-form-item>

					<el-form-item>
						<el-button
							type="primary"
							@click="submitForm('ruleForm')"
							:disabled="ddd"
							>立即注册</el-button
						>
						<el-button @click="resetForm('ruleForm')"
							>重置</el-button
						>
					</el-form-item>
				</el-form>
				<div class="block toptozhuce">
					<el-slider v-model="toptozhuce" vertical height="200px">
					</el-slider>
					<span class="zhucekaiguan">拖至顶部激活注册按钮哦</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		var checktel = (rule, tel, callback) => {
			tel = tel.replace(/\s/g, ""); //去除空格
			let regs =
				/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
			if (tel.length == 0) {
				return callback(new Error("手机号不能为空"));
			}
			setTimeout(() => {
				if (tel.length != 11) {
					callback(new Error("手机号必须为11位数"));
				} else {
					if (!regs.test(tel)) {
						callback([new Error("手机号输入不合法")]);
					} else {
						callback();
					}
				}
			}, 1000);
		};
		var checkusername = (rule, username, callback) => {
			if (!username) {
				return callback(new Error("用户名不能为空"));
			}
			setTimeout(() => {
				if (username.length > 10) {
					callback(new Error("用户名必须小于10字符"));
				} else {
					if (username.length < 3) {
						callback(new Error("用户名必须大于3个字符"));
					} else {
						callback();
					}
				}
			}, 1000);
		};
		var validatePass = (rule, passwd, callback) => {
			if (passwd === "") {
				callback(new Error("请输入密码"));
			} else if (passwd.length < 6) {
				callback(new Error("密码必须大于等于6个字符"));
			} else if (passwd.length > 10) {
				callback(new Error("密码必须小于10个字符"));
			} else {
				if (this.ruleForm.checkPass !== "") {
					this.$refs.ruleForm.validateField("checkPass");
				}
				callback();
			}
		};
		var validatePass2 = (rule, passwd, callback) => {
			if (passwd == "") {
				callback(new Error("请再次输入密码"));
			} else if (passwd.length < 6) {
				callback(new Error("密码必须大于等于6个字符"));
			} else if (passwd.length > 10) {
				callback(new Error("密码必须小于10个字符"));
			} else if (passwd !== this.ruleForm.passwd) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				tel: "",
				passwd: "",
				checkPass: "",
				username: "",
			},
			rules: {
				tel: [{ validator: checktel, trigger: "blur" }],
				passwd: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [{ validator: validatePass2, trigger: "blur" }],
				username: [{ validator: checkusername, trigger: "blur" }],
			},
			ddd: true,
			toptozhuce: 0,
		};
	},
	methods: {
		submitForm(formName) {
			// console.log(this.ruleForm.username.length);
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.axios
						.post("/zhuce", {
							username: this.ruleForm.username,
							passwd: this.ruleForm.passwd,
							tel: this.ruleForm.tel,
						})
						.then((res) => {
							// console.log(res.data);
							const result = res.data;
							switch (result.code) {
								case 1:
									this.$message.success(result.Msg);
									this.$router.push("/login");
									break;
								case 0:
									this.$message.error(result.Msg);
									break;
								case -1:
									this.$message.warning(result.Msg);
									break;
								case -2:
									this.$message.warning(result.Msg);
									break;
								default:
									break;
							}
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					//   console.log("error submit!!");
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		goBack() {
			this.$router.go(-1);
		},
	},
	watch: {
		toptozhuce() {
			if (this.toptozhuce == 100) {
				this.ddd = false;
			} else {
				this.ddd = true;
			}
		},
	},
};
</script>

<style lang="scss">
.bigmain {
	position: relative;
	.zhucehead {
		position: absolute;
		color: #128290;
	}
}
.zhucemain {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("../../assets/zhuce/images10.png");
	background-size: cover;
}
.zhuce {
	width: 800px;
	height: 450px;
	margin: auto 100px;
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
	.toptozhuce {
		position: absolute;
		right: 30px;
		bottom: 110px;
		.zhucekaiguan {
			position: absolute;
			color: #409eff;
			right: 40px;
			bottom: -10px;
			white-space: nowrap;
		}
	}
}
.zhuce:hover {
	box-shadow: 0 2px 7px rgba(37, 35, 35, 0.904);
	border-color: transparent;
}
.myfrom {
	width: 500px;
	height: 300px;
	position: absolute;
	top: 60px;
	font-weight: bold;
	color: gold !important;
}
.el-form-item__label {
	text-align: right;
	vertical-align: middle;
	float: left;
	font-size: 14px;
	color: black;
	line-height: 40px;
	padding: 0 12px 0 0;
	box-sizing: border-box;
}
.el-form-item__error {
	color: red;
	font-size: 12px;
	line-height: 1;
	padding-top: 4px;
	position: absolute;
	top: 100%;
	left: 0;
}
</style>
