<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import RemoveTodo from '@/features/todo/RemoveTodo.vue'

const store = useStore()
const todos = computed(() => store.state.todo.todos)
</script>

<template>
  <div class="flex gap-1 p-1 space-between" v-for="todo in todos" :key="todo.id">
    <input type="checkbox" :checked="todo.completed">
    <div class="flex-1">
      {{ todo.text }}
    </div>
    <RemoveTodo :id="todo.id" />
  </div>
</template>
