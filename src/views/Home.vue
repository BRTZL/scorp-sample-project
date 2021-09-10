<template>
	<v-container fluid>
		<v-layout align-center justify-center>
			<v-flex>
				<h1>
					{{ $t("home.title") }}
				</h1>
				<h4>
					{{ $t("home.text") }}
				</h4>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
export default {
	name: "Home",
	metaInfo() {
		return {
			title: `Scorp | ${this.$t("meta.home")}`,
		};
	},
};
</script>
