<script setup lang="ts">
import { useStore } from 'vuex'

type Props = {
  id: number
}

defineProps<Props>()
const store = useStore()

</script>

<template>
  <button @click="() => store.commit('removetodo', $props.id)">x</button>
</template>