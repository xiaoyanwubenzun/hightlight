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
				><router-link to="/">集锦列表</router-link></el-menu-item
			>
			<el-menu-item index="2"
				><router-link to="/userlist"
					>用户列表</router-link
				></el-menu-item
			>
			<el-menu-item index="3"
				><router-link to="/commentlist"
					>评论列表</router-link
				></el-menu-item
			>
			<el-menu-item index="4"
				><router-link to="">审核集锦</router-link></el-menu-item
			>
			<el-dropdown class="right">
				<span class="el-dropdown-link">
					<el-menu-item index="5">
						<img
							class="img-head"
							src="http://localhost:8090/public/imgupload/defaultuserimg.jpg"
							alt=""
						/>
					</el-menu-item>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-user"
						>{{ managername }}
					</el-dropdown-item>
					<el-dropdown-item
						@click.native="managerloginout()"
						icon="el-icon-circle-close"
						>退出登录</el-dropdown-item
					>
				</el-dropdown-menu>
			</el-dropdown>
			<el-menu-item class="right" index="7">{{
				managertype
			}}</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mid: "",
				managername: "",
				managertype: "",
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
			changemanager() {
				this.$router.push("/login");
			},
			handleSelect(key, keyPath) {
				// console.log(key);
				// this.activeIndex2 = this.$route.path;
			},
			managerislogin() {
				//验证是否登录，已登录则获取当前用户信息，未登录跳转登录页面
				this.axios
					.post("/managerislogin")
					.then((res) => {
						console.log(res.data);
						const result = res.data;
						if (result.code == 1) {
							sessionStorage.setItem("whichmanager", result.mid);
							this.mid = sessionStorage.getItem("whichmanager");
							this.axios
								.get("/managermessage", {
									params: {
										mid: this.mid,
									},
								})
								.then((res) => {
									this.managername = res.data.manager.managername;
									this.managertype = res.data.manager.usertype;
									// console.log(this.gender, this.managername);
									// console.log(res.data);
								})
								.catch((err) => {
									console.log(err);
								});
						} else {
							this.$router.push("/login");
							this.$message.warning("还没有登录哦");
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			managerloginout() {
				//退出登录，清除服务器session
				this.$confirm("确认退出登录?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				})
					.then(() => {
						this.axios
							.post("/managerloginout")
							.then((res) => {
								console.log(res.data);
								const result = res.data;
								if (result.code == 1) {
									sessionStorage.removeItem("whichmanager");
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
			this.managerislogin();
			// this.activeIndex2 = this.$route.path;
			// this.getmanagermessage()
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
