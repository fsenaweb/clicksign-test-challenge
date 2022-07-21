<template>
 <div class="table-empty">
   <img src="@/assets/images/icon-book.svg" alt="Dados vazios">
   <div class="description">Nenhum contato foi criado ainda.</div>
   <add-button @click="openCadForm()" />
 </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

import AddButton from '@/components/buttons/AddButton.vue'

const emit = defineEmits(['open-cad-form'])

const openCadForm = () => {
  emit('open-cad-form')
}

</script>
