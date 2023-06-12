<script setup lang="ts">
import CreateTodo from '@/features/todo/CreateTodo.vue'
import TodoRow from '@/entities/todo/ui/TodoRow.vue'
</script>

<template>
  <div class="container">
    <h1 class="center">TODO</h1>
    <CreateTodo />
    <TodoRow />
  </div>
</template>


