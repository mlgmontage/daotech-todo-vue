<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const todos = computed(() => store.state.todo.todos)
</script>

<template>
  <div class="flex gap-1 p-1" v-for="todo in todos" :key="todo.id">
    <input type="checkbox" :checked="todo.completed">
    <div>
      {{ todo.text }}
    </div>
  </div>
</template>
