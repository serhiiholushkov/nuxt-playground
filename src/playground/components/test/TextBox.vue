<template>
  <div>
    <input
      v-model="modelValue"
      type="text"
      placeholder="Input some text"
      data-testid="some-input-field"
    />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();
</script>
