<template lang="pug">
	#contacts.mx-auto.mt-5
		.grid(justify='center').mx-5
			div.py-2.px-2(v-for="contact in contacts")
				v-card.mx-auto(height='100%')
					v-container
						v-row
							v-col(cols="auto")
								v-row.flex-column.ma-0.fill-height(justify="center")
									v-avatar(size="120")
										img(v-if="contact" :src="`/images/${contact.photo}.jpg`", alt='')
									span.text-center.mt-1 {{ contact.title }}
							v-col
								v-list-item
									v-list-item-content.py-0
										h3 {{ contact.name }}
										v-list-item-subtitle.my-3 Location...
										h4 {{ contact.company }}
										v-row
											v-col
												p(style='word-wrap:break-word;display:block') {{ contact.address }}
												v-list-item-subtitle P: {{ contact.phone }}
											v-col.py-0.px-0.mr-1.action-btns(cols="auto")
												v-card-actions.py-0.px-0.mr-2
													v-spacer
													v-btn.py-0.px-0(icon @click="remove(contact.id)")
														v-icon mdi-delete
													v-btn(icon @click.stop="openDialog(contact)")
														v-icon mdi-pencil
			div.py-2.px-2
				v-card.mx-auto.d-flex.align-center(height='100%' style="min-height: 219px")
					v-container.d-flex.justify-center
						v-btn(icon @click="")
							v-icon(x-large color="green") mdi-plus

		v-dialog(v-model='dialog', max-width='320')
			v-card
				v-card-title.headline Edit contact
				v-card-text
					v-text-field(label="Name" v-model="edited_contact.name")
					v-text-field(label="Company" v-model="edited_contact.company")
					v-text-field(label="Phone" v-model="edited_contact.phone")
					v-text-field(label="Title" v-model="edited_contact.title")
				v-card-actions
					v-spacer
					v-btn(color='green darken-1', @click='editContact')
						| Confirm
					v-btn(color='primary darken-1', @click='dialog = false')
						| Cancel
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data: () => ({
		dialog: false,
		edited_contact: {
				id: '',
				name: '',
				location: {},
				company: '',
				address: '',
				phone: '',
				title: '',
				photo: ''
		}
	}),
	computed: {
		...mapState(['contacts', 'current_contact']),
	},
	methods: {
		...mapMutations(['remove', 'setCurrentContact', 'edit']),

		openDialog(contact) {
			this.setCurrentContact(contact);
			this.edited_contact = this._.cloneDeep(this.current_contact)
			this.dialog = true;
		},
		editContact() {
			this.dialog = false;
			this.edit(this.edited_contact)
		}
	}
}
</script>

<style lang="scss">
#contacts {
	.action-btns {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		z-index: 2;
	}
	.grid {
		display: grid;
		grid-template-columns: 33.3333% 33.3333% 33.3333%;

		@include xl-down {
			grid-template-columns: 50% 50%;
		}

		@include md-down {
			grid-template-columns: 100%;
		}
	}
}
</style>