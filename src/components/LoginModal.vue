<template>
	<v-dialog v-model="$store.state.loginDialog" persistent max-width="600px">
		<v-card>
			<v-card-title>
				<span class="text-h5">
					{{ $t("loginModal.title") }}
				</span>

				<v-spacer />
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							color="black"
							v-bind="attrs"
							v-on="on"
							small
							text
							class="mr-2"
						>
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
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12" sm="4" md="4">
							<v-text-field
								:label="$t('loginModal.firstName')"
								v-model="firstName"
								type="name"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="4" md="4">
							<v-text-field
								:label="$t('loginModal.middleName')"
								v-model="middleName"
								type="middleName"
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="4" md="4">
							<v-text-field
								:label="$t('loginModal.lastName')"
								v-model="lastName"
								type="lastName"
								required
							></v-text-field>
						</v-col>

						<v-col cols="12">
							<v-text-field
								:label="$t('loginModal.email')"
								v-model="email"
								type="email"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								:label="$t('loginModal.password')"
								v-model="password"
								type="password"
								required
							></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="secondary"
					text
					@click="$store.commit('hideLoginDialog')"
					style="text-transform: none"
				>
					{{ $t("loginModal.cancel") }}
				</v-btn>
				<v-btn color="primary" @click="submit" style="text-transform: none">
					{{ $t("loginModal.login") }}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>


<script>
export default {
	data() {
		return {
			firstName: "",
			middleName: "",
			lastName: "",
			email: "",
			password: "",
		};
	},
	methods: {
		submit() {
			// TODO: some request to create user
			this.$store.commit("setUser", {
				firstName: this.firstName,
				middleName: this.middleName,
				lastName: this.lastName,
				email: this.email,
				password: this.password,
			});

			this.$store.commit("hideLoginDialog");
		},
	},
};
</script>

