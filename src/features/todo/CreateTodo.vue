<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const input = ref('')
</script>

<template>
  <form @submit.prevent="() => { store.commit('createtodo', input); input = '' }">
    <input v-model="input" type="text" class="block no-border p-1 w-full" placeholder="Write something to do">
  </form>
</template>
