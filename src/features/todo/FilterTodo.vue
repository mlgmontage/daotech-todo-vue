<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue'

const store = useStore()
const filter = computed(() => store.state.todo.filter)

</script>

<template>
  <div>
    <small>
      Filters
    </small>
    <div class="flex gap-1">
      <button :class="filter === 'all' && 'active'" @click="store.commit('setfilter', 'all')">all</button>
      <button :class="filter === 'todo' && 'active'" @click="store.commit('setfilter', 'todo')">todo</button>
      <button :class="filter === 'done' && 'active'" @click="store.commit('setfilter', 'done')">done</button>
    </div>
  </div>
</template>