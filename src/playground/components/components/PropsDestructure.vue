<script setup lang="ts">
const {
  name,
  id,
  someFancyProp = 'some default value',
  description = '',
} = defineProps<{
  name: string;
  id: number;
  someFancyProp?: string;
  description?: string;
}>();

const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

const reactiveIdProp = computed(() => `new id received: ${id}`);

watchEffect(() => {
  // from VUE 3.5 destructured props still reactive
  console.log('new ID is:');
  console.log(id);
});
</script>

<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ id }}</p>
    <p>{{ someFancyProp }}</p>
    <p v-if="description">{{ description }}</p>
    <p>{{ reactiveIdProp }}</p>
    <div class="flex gap-2">
      <button @click="emit('change', id)">Change</button>
      <button @click="emit('update', id.toString())">Update</button>
    </div>
  </div>
</template>

<style scoped></style>
