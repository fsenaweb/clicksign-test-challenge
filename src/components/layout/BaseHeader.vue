<template>
  <div class="header">
    <div class="header_image">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Logo Ubook">
      </router-link>
    </div>
    <div class="header_button">
      <add-button v-if="$store.state.contacts.length" @click="openCadForm()"/>
    </div>
    <div class="header_form">
      <input
        v-model="search"
        type="text"
        name="search"
        class="input_search"
        placeholder="Buscar..."
        @keyup="searchContact()"
      />
      <search-button @click="searchContact()"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

import AddButton from '@/components/buttons/AddButton.vue'
import SearchButton from '@/components/buttons/SearchButton.vue'

const search = ref('')

const emit = defineEmits(['open-cad-form', 'search-contact'])

const openCadForm = () => {
  emit('open-cad-form')
}

const searchContact = () => {
  emit('search-contact', search.value)
}

</script>
