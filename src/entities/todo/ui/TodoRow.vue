<script setup lang="ts">
import RemoveTodo from '@/features/todo/RemoveTodo.vue'
import ToggleTodo from '@/features/todo/ToggleTodo.vue';
import { useStore } from 'vuex';

type Props = {
  id: number
  text: string
  level: string
}

const props = defineProps<Props>()
const store = useStore()
</script>

<template>
  <div :class="`flex gap-1 p-1 space-between todo-row todo-row-${props.level}`">
    <ToggleTodo :id="props.id" />
    <div class="flex-1">
      {{ props.text }}
    </div>
    <button @click="() => store.commit('toggleDetails', props.id)">*</button>
    <RemoveTodo :id="props.id" />
  </div>
</template>
