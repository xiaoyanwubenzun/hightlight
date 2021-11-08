<template>
	<div>
		<Hightlightcheck></Hightlightcheck>
		<div class="commentlist" :style="backgroundStyle"></div>
	</div>
</template>

<script>
	import Hightlightcheck from "./Hightlightcheck.vue";
	export default {
		components: { Hightlightcheck },
		data() {
			return {
				backgroundStyle: "",
			};
		},
		methods: {},
		mounted() {
			let guankanjijin = document.querySelector(".el-menu-item:nth-child(3)");
			guankanjijin.className = "el-menu-item is-active";
			this.$store.commit("suijibackgroundimg");
			this.backgroundStyle = this.$store.state.backgroundStyle;
		},
		beforeDestroy() {},
	};
</script>

<style lang="scss">
	.commentlist {
		height: 120vh;
	}
</style>
