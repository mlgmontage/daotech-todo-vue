<script setup lang="ts">
type Props = {
  id: number
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="card">
    {{ props.text }}
  </div>
</template>

