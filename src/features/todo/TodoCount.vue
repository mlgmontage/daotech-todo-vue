<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore()
const count = computed(() => store.getters.countTodos)
</script>

<template>
  <div class="count">
    {{ count.todo }} / {{ count.done }}
  </div>
</template>

<style scoped>
.count {
  margin-left: auto;
}
</style>