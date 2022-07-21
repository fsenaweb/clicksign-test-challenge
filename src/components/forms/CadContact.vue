<template>
  <BaseModal>
    <template v-slot:header>
      Criar novo cadastro
    </template>
    <template v-slot:main>
      <div class="form-group">
        <label for="name">Nome</label>
        <input v-model="contact.name"
               type="text"
               class="form-input-lg"
               id="name"/>
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input v-model="contact.email"
               type="email"
               class="form-input-lg"
               id="email"/>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input v-model="contact.phone"
               type="text"
               class="form-input-small"
               id="phone"/>
      </div>
    </template>
    <template v-slot:footer>
      <cancel-button @click="cancelModal()"/>
      <save-button @click="addContact()" :disabled="disabledButton"/>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed, defineEmits, reactive, watch } from 'vue'
import { Contact } from '@/types/Contact'
import { mask } from 'maska'

import BaseModal from '@/components/modal/BaseModal.vue'
import SaveButton from '@/components/buttons/SaveButton.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'

const contact = reactive({} as Contact)

const disabledButton = computed(() => {
  return !contact.name || !contact.email || !contact.phone
})

watch(() => contact.phone, () => {
  contact.phone = mask(contact.phone, '(##) #####-####')
})

const emit = defineEmits(['cancel-modal', 'add-contact'])

const cancelModal = () => {
  emit('cancel-modal')
}

const addContact = () => {
  emit('add-contact', contact)
}
</script>
