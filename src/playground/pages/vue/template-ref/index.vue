<script setup lang="ts">
const input = useTemplateRef('my-input');

onMounted(() => {
  input.value?.focus();
});
</script>

<template>
  <div>
    <input ref="my-input" />
  </div>
</template>

<style scoped></style>
