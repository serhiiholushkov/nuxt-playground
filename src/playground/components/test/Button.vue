<template>
  <div>
    <button data-testid="some-button" @click="onClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: [];
}>();

const onClick = () => {
  emit('click');
};
</script>
