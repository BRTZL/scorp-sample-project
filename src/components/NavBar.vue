<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon
			class="d-flex d-md-none"
			@click="$store.commit('showDrawer')"
		/>

		<div class="d-flex align-center">
			<v-img
				alt="Scorp Logo"
				class="shrink mr-2 d-none d-sm-flex"
				contain
				src="/img/icons/favicon-96x96.png"
				transition="scale-transition"
				width="40"
			/>

			<h2 class="pl-2">Scorp | {{ $t("navbar." + $route.name) }}</h2>
		</div>

		<v-spacer></v-spacer>

		<div class="d-none d-md-flex">
			<v-btn color="white" to="/" small text class="mr-2">
				{{ $t("navbar.home") }}
			</v-btn>

			<v-btn color="white" to="/contact-us" small text class="mr-2">
				{{ $t("navbar.contactUs") }}
			</v-btn>
		</div>

		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="white" v-bind="attrs" v-on="on" small text class="mr-2">
					{{ $i18n.locale }}
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in $i18n.availableLocales"
					:key="index"
					@click="$i18n.locale = item"
				>
					<v-list-item-title>
						{{ item }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<div class="d-none d-sm-flex">
			<v-menu
				v-if="$store.state.user"
				v-model="accountMenu"
				:close-on-content-click="false"
				:nudge-width="200"
				offset-x
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="white black--text" v-bind="attrs" v-on="on">
						{{ $t("navbar.account") }}
						<v-icon>mdi-account</v-icon>
					</v-btn>
				</template>

				<v-card>
					<v-list>
						<v-list-item>
							<v-list-item-avatar>
								<img
									src="https://cdn.vuetifyjs.com/images/john.jpg"
									alt="John"
								/>
							</v-list-item-avatar>

							<v-list-item-content>
								<v-list-item-title>{{ fullName }}</v-list-item-title>
								<v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list>

					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn text color="primary" @click="logout">
							{{ $t("navbar.logout") }}
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-menu>

			<v-btn
				v-else
				@click="$store.commit('showLoginDialog')"
				style="text-transform: none"
			>
				{{ $t("navbar.login") }}
			</v-btn>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {
			accountMenu: false,
		};
	},
	methods: {
		logout() {
			this.accountMenu = false;
			this.$store.commit("setUser", null);
		},
	},
	computed: {
		fullName() {
			return this.$store.getters.fullName;
		},
		email() {
			return this.$store.state.user.email;
		},
	},
};
</script>
