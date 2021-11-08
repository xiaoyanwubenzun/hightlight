<template>
	<div>
		<Hightlightcheck class="userlistheader"></Hightlightcheck>
		<div class="userlist" :style="backgroundStyle">
			<div class="emptyblock"></div>
			<div class="userlistsearch">
				<input
					class="input"
					type="text"
					placeholder="搜索(用户名、用户年龄、性别、星座)"
					v-model="keyword"
					@keydown.enter="searchuser()"
				/>
			</div>
			<div class="user-uploadvideo">
				<div class="diyeltable">
					<el-table
						:data="tableData"
						border
						class="eachuser"
						height="450"
					>
						<el-table-column
							sortable
							fixed="left"
							prop="uid"
							label="用户id"
							width="100"
						>
						</el-table-column>
						<el-table-column
							prop="username"
							label="用户名"
							width="120"
						>
						</el-table-column>
						<el-table-column
							prop="usertel"
							label="手机号"
							width="120"
						>
						</el-table-column>
						<el-table-column
							prop="useremail"
							label="邮箱"
							width="180"
						>
						</el-table-column>
						<el-table-column prop="userage" label="年龄" width="80">
						</el-table-column>
						<el-table-column
							prop="createtime"
							label="注册时间"
							width="180"
						>
						</el-table-column>
						<el-table-column
							prop="status"
							label="用户状态"
							width="120"
						>
						</el-table-column>
						<el-table-column
							prop="checkresult"
							label="备注"
							width="150"
						>
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="210">
							<template slot-scope="scope">
								<el-button
									@click="handleClick(scope.row)"
									size="mini"
									type="primary"
									>编辑</el-button
								>
								<el-button size="mini" type="success"
									>解封</el-button
								>
								<el-button size="mini" type="danger"
									>封号</el-button
								>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
			<el-pagination
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
import Hightlightcheck from "./Hightlightcheck.vue";
export default {
	components: { Hightlightcheck },
	data() {
		return {
			backgroundStyle: "",
			totalpage: 100,
			keyword: "",
			pagenum: 1,
			tableData: [
				{
					uid: 1,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 2,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 3,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 4,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 5,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 6,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 7,
					username: "xiaoyanwu",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 8,
					username: "fgdfgfgf",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 18,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 9,
					username: "xisdfdsf",
					usertel: "18780093542",
					useremail: "1769122103@qq.com",
					userage: 23,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
				{
					uid: 10,
					username: "dsfsdfds",
					usertel: "18780093087",
					useremail: "1769122103@qq.com",
					userage: 21,
					createtime: "2021/4/24 下午10:53:11",
					status: "正常使用",
					checkresult: "无",
				},
			],
		};
	},
	methods: {
		searchuser() {
			this.axios
				.get("/userlistsearch", {
					params: {
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
							this.userlist = res.data.user;
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
		},
		handleClick(row) {
			console.log(row.uid);
		},
	},
	created() {},
	mounted() {
		let guankanjijin = document.querySelector(".el-menu-item:nth-child(2)");
		guankanjijin.className = "el-menu-item is-active";
		this.$store.commit("suijibackgroundimg");
		this.backgroundStyle = this.$store.state.backgroundStyle;
	},
};
</script>

<style lang="scss">
.el-table .cell {
	text-align: center !important;
}
.el-table th,
.el-table tr {
	background-color: rgba(255, 255, 255, 0.5);
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
.userlistheader {
	width: 100%;
	position: fixed;
	display: block;
	z-index: 100;
}
.userlist {
	height: 120vh;
	.emptyblock {
		height: 61px;
	}
	.user-uploadvideo {
		border-radius: 5px;
		transition: all 0.2s ease-in-out;
		background-color: rgba(255, 255, 255, 0.7);
	}
	.user-uploadvideo {
		height: 500px;
		width: 80vw;
		margin: 0 auto;
		.el-table {
			background-color: rgba(255, 255, 255, 0);
		}
		.el-table--border::after {
			background-color: rgba(255, 255, 255, 0);
		}
		.eachuser {
			width: 100%;
			border-radius: 5px;
		}
	}
	.userlistsearch {
		width: 25vw;
		height: 50px;
		text-align: center;
		margin: 0 auto;
		margin-top: 35px;
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
		margin-top: -40px;
	}
}
</style>
