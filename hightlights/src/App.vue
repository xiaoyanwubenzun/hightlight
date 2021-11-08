<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
::-webkit-scrollbar {
	display: none;
	/* Chrome Safari */
}
#app {
	min-width: 81.25rem;
}
</style>
