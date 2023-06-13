<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const id = computed(() => store.state.ui.details.id)
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <button @click="() => store.commit('toggleDetails')">x</button>
      <h1>{{ store.getters.getTodo(id)?.text }}</h1>
    </div>
  </div>
</template>