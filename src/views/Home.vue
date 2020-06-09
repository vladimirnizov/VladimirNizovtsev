<template lang="pug">
	#home
		v-row
			v-col
				contacts
			
</template>

<script>
import Contacts from '@/components/Contacts';

export default {
	components: {
		Contacts
	}
}
</script>

<style lang="scss">
#home {
	background-color: rgba(154, 158, 157, 0.1);
	height: 100%;
}
</style>
