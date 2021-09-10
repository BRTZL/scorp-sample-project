<template>
	<v-app>
		<NavBar />
		<Drawer />

		<v-main>
			<router-view />

			<LoginModal />
		</v-main>

		<Footer />
	</v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

export default {
	name: "App",
	components: {
		NavBar,
		Drawer,
		Footer,
		LoginModal,
	},
};
</script>
