<script setup lang="ts">
import RemoveTodo from '@/features/todo/RemoveTodo.vue'

type Props = {
  id: number
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-1 p-1 space-between">
    <!-- <input type="checkbox" :checked="todo.completed"> -->
    <div class="flex-1">
      {{ $props.text }}
    </div>
    <RemoveTodo :id="$props.id" />
  </div>
</template>
