import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//const axios = require('axios');

export default new Vuex.Store({
	state: () => ({
		contacts: [
			{
				id: '1',
				name: 'John Smith',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'Graphics designer',
				photo: 'john smith'
			},
			{
				id: '2',
				name: 'Alex Johnatan',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'CEO',
				photo: 'alex jonathan'
			},
			{
				id: '3',
				name: 'Monica Smith',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'Marketing manager',
				photo: 'monica smith'
			},
			{
				id: '4',
				name: 'Michael Zimber',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'Sales manager',
				photo: 'michael zimber'
			},
			{
				id: '5',
				name: 'Sandra Smith',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'Graphics designer',
				photo: 'sandra smith'
			},
			{
				id: '6',
				name: 'Janet Carton',
				location: {},
				company: 'Twitter, Inc.',
				address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
				phone: '(123)456-7890',
				title: 'Graphics designer',
				photo: 'janeth carton'
			}
		],
		current_contact: null
    }),
	mutations: {
		remove( state, value ) {
			state.contacts = state.contacts.filter(contact => contact.id !== value)
		},
		setCurrentContact( state, value ) {
			state.current_contact = value
		},
		edit( state, value ) {
			const index = state.contacts.findIndex(x => x.id == value.id);
			state.contacts[index] = value;
		}
	}
})
