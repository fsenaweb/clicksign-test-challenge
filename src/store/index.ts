import { createStore } from 'vuex'
import axios from 'axios'
import { Contact } from '@/types/Contact'

export interface State {
  contacts: Contact[]
  contact: Contact | null
  cadForm: boolean
  editForm: boolean
  deleteForm: boolean
}

export default createStore<State>({
  state: {
    contacts: [],
    contact: null,
    cadForm: false,
    editForm: false,
    deleteForm: false
  },
  getters: {},
  mutations: {
    GET_CONTACTS (state, payload) {
      state.contacts = payload
    },
    GET_CONTACT (state, payload) {
      state.contact = payload
    },
    ADD_CONTACT (state, payload) {
      state.contacts.push(payload)
    },
    REMOVE_CONTACT (state, payload) {
      state.contacts.splice(
        state.contacts.findIndex(
          (contact) => contact.id === payload
        ), 1
      )
    },
    SEARCH_CONTACT (state, payload) {
      state.contacts = state.contacts.filter(
        (x) =>
          x.name.toLowerCase().includes(payload)
      )
    },
    EMPTY_CONTACT (state) {
      state.contact = null
    },
    SET_CAD_FORM (state, value) {
      state.cadForm = value
    },
    SET_EDIT_FORM (state, value) {
      state.editForm = value
    },
    SET_DELETE_FORM (state, value) {
      state.deleteForm = value
    }
  },
  actions: {
    async getData ({ commit }) {
      return axios.get('http://localhost:3000/contacts?_sort=name&_order=asc')
        .then((response) => {
          commit('GET_CONTACTS', response.data)
        })
    },
    async addContact ({
      dispatch,
      commit
    }, value) {
      axios.post('http://localhost:3000/contacts', value)
        .then(() => {
          commit('ADD_CONTACT', value)
          dispatch('getData')
          dispatch('emptyContact')
          dispatch('setCadForm', false)
        })
    },
    async selectContact ({
      dispatch,
      commit
    }, value) {
      dispatch('setEditForm', true)
      return axios.get(`http://localhost:3000/contacts/${value}`)
        .then((response) => {
          commit('GET_CONTACT', response.data)
        })
    },
    setContact ({ commit }, value) {
      commit('GET_CONTACT', value)
    },
    async editContact ({ dispatch }, value) {
      return axios.put(`http://localhost:3000/contacts/${value.id}`, value)
        .then(() => {
          dispatch('getData')
          dispatch('setEditForm', false)
        })
    },
    async deleteContact ({
      dispatch,
      commit
    }, value) {
      axios.delete(`http://localhost:3000/contacts/${value}`)
        .then(() => {
          commit('REMOVE_CONTACT', value)
          dispatch('getData')
        })
    },
    searchContact ({ commit }, value) {
      commit('SEARCH_CONTACT', value)
    },
    emptyContact ({ commit }) {
      commit('EMPTY_CONTACT')
    },
    setLoading ({ commit }, value) {
      commit('SET_LOADING', value)
    },
    setCadForm ({ commit }, value) {
      commit('SET_CAD_FORM', value)
    },
    setEditForm ({ commit }, value) {
      commit('SET_EDIT_FORM', value)
    },
    setDeleteForm ({ commit }, value) {
      commit('SET_DELETE_FORM', value)
    }
  },
  modules: {}
})
