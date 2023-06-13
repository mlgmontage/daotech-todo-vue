<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, } from 'vue'

const store = useStore()
const mode = computed(() => store.state.todo.viewmode)

</script>

<template>
  <div>
    <small>
      Mode
    </small>
    <div class="flex gap-1">
      <button :class="mode === 'list' && 'active'" @click="store.commit('setviewmode', 'list')">list</button>
      <button :class="mode === 'card' && 'active'" @click="store.commit('setviewmode', 'card')">card</button>
    </div>
  </div>
</template>