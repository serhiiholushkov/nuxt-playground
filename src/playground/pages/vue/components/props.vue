<script setup lang="ts">
const id = ref(0);

const onNextId = () => id.value++;
</script>

<template>
  <div>
    <ComponentsPropsDestructure
      :id="id"
      name="some name"
      some-fancy-prop="override fancy prop"
      @change="id => console.log(id)"
      @update="id => console.log(id)"
    />
    <div>
      <button @click="onNextId">Next Id</button>
    </div>
  </div>
</template>

<style scoped></style>
