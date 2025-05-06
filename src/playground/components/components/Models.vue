<script setup lang="ts">
const firstName = defineModel<string>('firstName');
const lastName = defineModel<string>('lastName');
</script>

<template>
  <div>
    <p>
      <input v-model="firstName" type="text" />
    </p>
    <p>
      <input v-model="lastName" type="text" />
    </p>
  </div>
</template>

<style scoped></style>
