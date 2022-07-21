<template>
  <div class="table-list">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>Contatos</th>
        <th>E-mail</th>
        <th>Telefone</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="contact in contacts" :key="contact.id">
        <td>
          <span class="first-letter" :class="`letter-${contact.name.charAt(0).toLowerCase()}`">{{
              contact.name.charAt(0)
            }}</span>
        </td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.phone }}</td>
        <td>
          <img src="@/assets/images/icon-edit.svg" alt="Editar Dados" @click="editData(contact.id)">
          <img src="@/assets/images/icon-delete.svg" alt="Excluir Dados" @click="deleteData(contact)">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const contacts = computed(() => {
  return store.state.contacts
})

const emit = defineEmits(['edit-data', 'delete-data'])

const editData = (value) => {
  emit('edit-data', value)
}

const deleteData = (value) => {
  emit('delete-data', value)
}

</script>
