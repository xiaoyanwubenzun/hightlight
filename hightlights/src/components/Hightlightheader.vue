<template>
	<div class="hightlightheader">
		<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#409EFF"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-menu-item index="1"
				><router-link to="/">首页</router-link></el-menu-item
			>
			<el-menu-item index="2"
				><router-link to="/myhightlight"
					>我的集锦</router-link
				></el-menu-item
			>
			<el-menu-item index="3"
				><router-link to="/uploadhightlight"
					>上传新的集锦</router-link
				></el-menu-item
			>
			<el-menu-item index="4"
				><router-link to="/allhightlights?id=5"
					>大神们的集锦</router-link
				></el-menu-item
			>
			<el-menu-item index="5"
				><router-link to="">观看集锦</router-link></el-menu-item
			>
			<el-dropdown class="right">
				<span class="el-dropdown-link">
					<el-menu-item index="7">
						<img class="img-head" :src="userimg" alt="" />
					</el-menu-item>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-user"
						>{{ username }}
						<img :src="gender" alt="" width="13" height="13"
					/></el-dropdown-item>
					<el-dropdown-item
						icon="el-icon-refresh"
						@click.native="changeuser()"
						>切换用户</el-dropdown-item
					>
					<el-dropdown-item icon="el-icon-circle-plus-outline"
						>更多功能</el-dropdown-item
					>
					<el-dropdown-item
						@click.native="loginout()"
						icon="el-icon-circle-close"
						>退出登录</el-dropdown-item
					>
				</el-dropdown-menu>
			</el-dropdown>

			<el-menu-item class="right" index="6"
				><router-link to="/userinfo"
					>个人信息</router-link
				></el-menu-item
			>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			uid: "",
			username: "",
			userimg: "",
			gender: "",
			activeIndex: "1",
			activeIndex2: "",
			options: [
				{
					value: "lol",
					label: "英雄联盟",
				},
				{
					value: "cf",
					label: "穿越火线",
				},
				{
					value: "pubg",
					label: "绝地求生",
				},
			],
			value: "",
		};
	},
	methods: {
		changeuser() {
			this.$router.push("/login");
		},
		handleSelect(key, keyPath) {
			// console.log(key);
			// this.activeIndex2 = this.$route.path;
		},
		islogin() {
			//验证是否登录，已登录则获取当前用户信息，未登录跳转登录页面
			this.axios
				.get("/islogin")
				.then((res) => {
					console.log(res.data);
					const result = res.data;
					if (result.code == 1) {
						sessionStorage.setItem("who", result.uid);
						this.uid = sessionStorage.getItem("who");
						this.axios
							.post("/getusermessage", {
								uid: this.uid,
							})
							.then((res) => {
								this.userimg = res.data.user.userimg;
								this.username = res.data.user.username;
								this.gender = res.data.user.gender;
								switch (this.gender) {
									case 0:
										this.gender =
											"./img/icons/wan_sex_unknow.png";
										break;

									case 1:
										this.gender =
											"./img/icons/wan_sex_m.png";
										break;

									case 2:
										this.gender =
											"./img/icons/wan_sex_w.png";
										break;

									default:
										break;
								}
								// console.log(this.gender, this.username);
							})
							.catch((err) => {
								console.log(err);
							});
					} else {
						this.$router.push("/login");
						this.$message.warning("还没有登录哦，快去登录或注册吧");
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		loginout() {
			//退出登录，清除服务器session
			this.$confirm("确认退出登录?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.axios
						.get("/loginout")
						.then((res) => {
							console.log(res.data);
							const result = res.data;
							if (result.code == 1) {
								sessionStorage.removeItem("who");
								this.$message.success(result.Msg);
								this.$router.push("/login");
							} else if (result.code == -1) {
								this.$message.success(result.Msg);
							}
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消退出登录",
					});
				});
		},
	},
	mounted() {
		this.islogin();
		// this.activeIndex2 = this.$route.path;
		// this.getusermessage()
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
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
.el-menu.el-menu--horizontal {
	border-bottom: solid 0.0625rem #409eff !important;
}
.hightlightheader {
	width: 100%;
	position: fixed;
	display: block;
}
</style>
