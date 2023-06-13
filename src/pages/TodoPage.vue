<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import TodoRow from '@/entities/todo/ui/TodoRow.vue'
import CreateTodo from '@/features/todo/CreateTodo.vue'
import FilterTodo from '@/features/todo/FilterTodo.vue'
import TodoCount from '@/features/todo/TodoCount.vue'

const store = useStore()
const todos = computed(() => store.getters.filteredTodos)

</script>

<template>
  <div class="bg-blue p-1">
    <div class="filters-container flex items-center">
      <FilterTodo />
      <TodoCount />
    </div>
  </div>

  <div class="container">
    <h1 class="center">TODO</h1>
    <CreateTodo />
    <TodoRow v-for="todo in todos" :id="todo.id" :text="todo.text" :key="todo.id" />
  </div>
</template>
