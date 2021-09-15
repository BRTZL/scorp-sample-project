<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-card v-if="$store.state.user != null" class="mx-auto">
				<v-card-title>
					<span class="text-h5">
						{{ $t("account.title") }}
					</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field
									:label="$t('account.name')"
									v-model="$store.getters.fullName"
									readonly
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-text-field
									:label="$t('account.email')"
									v-model="$store.state.user.email"
									readonly
								></v-text-field>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>

				<v-card-actions>
					<v-btn block color="primary" @click="$store.commit('setUser', null)">
						{{ $t("navbar.logout") }}
					</v-btn>
				</v-card-actions>
			</v-card>

			<v-btn
				v-else
				color="primary"
				@click="$store.commit('showLoginDialog')"
				style="text-transform: none"
			>
				{{ $t("loginModal.title") }}
			</v-btn>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: "ContactUs",
	metaInfo() {
		return {
			title: `Scorp | ${this.$t("meta.account")}`,
		};
	},
};
</script>

