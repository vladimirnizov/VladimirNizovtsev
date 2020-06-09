<template lang="pug">
	#navbar
		v-app-bar(app)
			v-toolbar-title {{ title }}
			v-spacer
			v-switch(label="Dark Theme" v-model="$vuetify.theme.dark" style="height: 25px")
</template>

<script>
export default {
	data: () => ({
		title: 'TRAVELFACTORY - CONTACT APPLICATION'
	})
};
</script>