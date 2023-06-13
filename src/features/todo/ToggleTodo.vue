<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

type Props = {
  id: number
}

const props = defineProps<Props>()

const store = useStore()
const todo = computed(() => store.state.todo.todos.find((todo: any) => todo.id === props.id))
</script>

<template>
  <input type="checkbox" :checked="todo.completed" @change="() => store.commit('toggletodo', props.id)" />
</template>