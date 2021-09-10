<template>
	<v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
		<v-list nav dense>
			<v-list-item-group active-class="primary--text text--accent-4">
				<v-list-item to="/account">
					<v-list-item-icon>
						<v-icon>mdi-account</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ $t("navbar.account") }}
					</v-list-item-title>
				</v-list-item>

				<v-divider />

				<v-list-item to="/">
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ $t("navbar.home") }}
					</v-list-item-title>
				</v-list-item>

				<v-list-item to="/contact-us">
					<v-list-item-icon>
						<v-icon>mdi-phone</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ $t("navbar.contactUs") }}
					</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>