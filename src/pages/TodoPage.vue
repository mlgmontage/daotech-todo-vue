<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import TodoRow from '@/entities/todo/ui/TodoRow.vue'
import TodoCard from '@/entities/todo/ui/TodoCard.vue'
import CreateTodo from '@/features/todo/CreateTodo.vue'
import FilterTodo from '@/features/todo/FilterTodo.vue'
import TodoCount from '@/features/todo/TodoCount.vue'
import SwitchMode from '@/features/todo/SwitchMode.vue'

const store = useStore()
const todos = computed(() => store.getters.filteredTodos)
const viewmode = computed(() => store.state.todo.viewmode)

</script>

<template>
  <div class="bg-blue p-1">
    <div class="filters-container flex gap-1 items-center">
      <FilterTodo />
      <SwitchMode />
      <TodoCount />
    </div>
  </div>

  <div v-show="viewmode === 'list'" class="container">
    <h1 class="center">TODO</h1>
    <CreateTodo />
    <TodoRow v-for="todo in todos" :id="todo.id" :text="todo.text" :key="todo.id" />
  </div>

  <div v-show="viewmode === 'card'" class="card-container">
    <TodoCard v-for="todo in todos" :id="todo.id" :text="todo.text" :key="todo.id" />
  </div>
</template>
