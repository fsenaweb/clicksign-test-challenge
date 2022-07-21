<template>
  <div class="content">
    <BaseHeader
      @open-cad-form="openCadForm()"
      @search-contact="searchContact($event)"
    />
    <BaseBody>
      <delete-contact
        v-if="$store.state.deleteForm"
        @cancel-modal="cancelModal()"
        @delete-contact="removeContact()"
      />
      <cad-user
        v-if="$store.state.cadForm"
        @add-contact="addContact($event)"
        @cancel-modal="cancelModal()"
      />
      <edit-user
        v-if="$store.state.editForm"
        @cancel-modal="cancelModal()"
        @edit-contact="editContact($event)"
      />
      <table-list
        v-if="store.state.contacts.length"
        @edit-data="selectContact($event)"
        @delete-data="openRemoveModal($event)"
      />
      <empty-table
        v-else
        @open-cad-form="openCadForm()"
      />
    </BaseBody>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import BaseHeader from '@/components/layout/BaseHeader.vue'
import BaseBody from '@/components/layout/BaseBody.vue'
import EmptyTable from '@/components/tables/EmptyTable.vue'
import TableList from '@/components/tables/TableList.vue'
import EditUser from '@/components/forms/EditContact.vue'
import CadUser from '@/components/forms/CadContact.vue'
import DeleteContact from '@/components/forms/DeleteContact.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getData')
})

const searchContact = (value) => {
  if (value === '') {
    store.dispatch('getData')
  }
  store.dispatch('searchContact', value)
}

const openCadForm = () => {
  store.dispatch('setCadForm', true)
}

const addContact = (value) => {
  store.dispatch('addContact', value)
}

const selectContact = (value) => {
  store.dispatch('selectContact', value)
}

const editContact = (value) => {
  store.dispatch('editContact', value)
}

const openRemoveModal = (value) => {
  store.dispatch('setDeleteForm', true)
  store.dispatch('setContact', value)
}

const removeContact = () => {
  store.dispatch('deleteContact', store.state.contact.id)
  store.dispatch('setDeleteForm', false)
}

const cancelModal = () => {
  store.dispatch('setCadForm', false)
  store.dispatch('setEditForm', false)
  store.dispatch('setDeleteForm', false)
  store.dispatch('emptyContact')
}

</script>
