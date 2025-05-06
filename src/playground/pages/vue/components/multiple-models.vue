<script setup lang="ts">
const first = ref('Obivan');
const last = ref('Kenobi');
</script>

<template>
  <div>
    <ComponentsModels v-model:first-name="first" v-model:last-name="last" />
  </div>
</template>

<style scoped></style>
