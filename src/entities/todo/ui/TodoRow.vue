<script setup lang="ts">
import RemoveTodo from '@/features/todo/RemoveTodo.vue'
import ToggleTodo from '@/features/todo/ToggleTodo.vue';

type Props = {
  id: number
  text: string
  level: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="`flex gap-1 p-1 space-between todo-row todo-row-${props.level}`">
    <ToggleTodo :id="props.id" />
    <div class="flex-1">
      {{ props.text }}
    </div>
    <RemoveTodo :id="props.id" />
  </div>
</template>
