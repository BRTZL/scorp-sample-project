<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-card>
				<v-card-title>
					<span class="text-h5">
						{{ $t("contactUsForm.title") }}
					</span>
				</v-card-title>
				<v-card-text>
					<v-form v-model="isValid">
						<v-container>
							<v-row>
								<v-col cols="12" sm="4">
									<v-text-field
										:label="$t('contactUsForm.name')"
										:rules="rules.name"
										v-model="name"
										type="name"
										required
									></v-text-field>
								</v-col>

								<v-col cols="12" sm="8">
									<v-text-field
										:label="$t('contactUsForm.email')"
										:rules="rules.email"
										v-model="email"
										type="email"
										required
									></v-text-field>
								</v-col>
								<v-col cols="12" sm="4">
									<v-autocomplete
										:label="$t('contactUsForm.countryCode')"
										:rules="rules.countryCode"
										v-model="countryCode"
										:items="countryList"
									></v-autocomplete>
								</v-col>
								<v-col cols="12" sm="8">
									<v-text-field
										:label="$t('contactUsForm.phoneNumber')"
										:rules="rules.phoneNumber"
										v-model="phoneNumber"
										type="number"
										required
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-textarea
										:label="$t('contactUsForm.feedback')"
										:rules="rules.feedback"
										v-model="feedback"
									></v-textarea>
								</v-col>
							</v-row>
						</v-container>
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer />

					<v-btn
						color="primary"
						style="text-transform: none"
						:disabled="!isValid"
						@click="submit"
					>
						{{ $t("contactUsForm.submit") }}
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: "ContactUs",
	metaInfo() {
		return {
			title: `Scorp | ${this.$t("meta.contactUs")}`,
		};
	},
	data() {
		return {
			rules: {
				name: [(v) => !!v || this.$t("errors.required.name")],
				email: [
					(v) => !!v || this.$t("errors.required.email"),
					(v) => /.+@.+/.test(v) || this.$t("errors.valid.email"),
				],
				countryCode: [(v) => !!v || this.$t("errors.required.countryCode")],
				phoneNumber: [
					(v) => !!v || this.$t("errors.required.phoneNumber"),
					(v) => /.[0-9]{9}/.test(v) || this.$t("errors.valid.phoneNumber"),
				],
				feedback: [(v) => !!v || this.$t("errors.required.feedback")],
			},
			countryList: ["TR", "US", "GB", "DE", "SE", "KE", "BR", "ZW"],
			countryCode: "",
			name: "",
			email: "",
			phoneNumber: "",
			feedback: "",
			isValid: false,
		};
	},
	methods: {
		submit() {
			if (this.isValid) {
				// TODO: some request to send contactus model
				console.log({
					name: this.name,
					email: this.email,
					phoneNumber: this.phoneNumber,
					feedback: this.feedback,
					country_code: this.countryCode,
				});

				this.$router.push("/");
			}
		},
	},
	created() {
		this.name = this.$store.getters.fullName || "";
		this.email = this.$store.state.user?.email || "";
	},
};
</script>

