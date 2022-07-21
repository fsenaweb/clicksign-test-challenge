<template>
  <BaseModal>
    <template v-slot:header>
      Editar contato
    </template>
    <template v-slot:main v-if="$store.state.contact">
      <div class="form-group">
        <label for="name">Nome</label>
        <input :value="$store.state.contact.name"
               @input="event => contact.name = event.target.value"
               type="text"
               class="form-input-lg"
               id="name"/>
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input :value="$store.state.contact.email"
               @input="event => contact.email = event.target.value"
               type="email"
               class="form-input-lg"
               id="email"/>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input :value="$store.state.contact.phone"
               @input="event => contact.phone = event.target.value"
               type="text"
               class="form-input-small"
               id="phone"/>
      </div>
    </template>
    <template v-slot:footer>
      <cancel-button @click="cancelModal()"/>
      <save-button @click="editContact()"/>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

import { Contact } from '@/types/Contact'
import BaseModal from '@/components/modal/BaseModal.vue'
import SaveButton from '@/components/buttons/SaveButton.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'

const store = useStore()

const contact = reactive({} as Contact)

const emit = defineEmits(['cancel-modal', 'edit-contact'])

const cancelModal = () => {
  emit('cancel-modal')
}

const editContact = () => {
  const data = {
    id: store.state.contact.id,
    name: contact.name || store.state.contact.name,
    email: contact.email || store.state.contact.email,
    phone: contact.phone || store.state.contact.phone
  }
  emit('edit-contact', data)
}

</script>
