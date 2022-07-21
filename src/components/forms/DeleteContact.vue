<template>
  <BaseModal>
    <template v-slot:header>
      Excluir contato
    </template>
    <template v-slot:main>
      Deseja realmente excluir o contato?
    </template>
    <template v-slot:footer>
      <cancel-button @click="cancelModal()" />
      <delete-button @click="deleteContact()" />
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

import BaseModal from '@/components/modal/BaseModal.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'
import DeleteButton from '@/components/buttons/DeleteButton.vue'

const emit = defineEmits(['cancel-modal', 'delete-contact'])

const cancelModal = () => {
  emit('cancel-modal')
}

const deleteContact = () => {
  emit('delete-contact')
}

</script>
