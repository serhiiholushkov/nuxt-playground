<template>
  <div>
    <TestTextBox v-model="textValue" />
    <TestButton @click="buttonClickHandler" />
    <div data-testId="some-output">
      Some silly other value: {{ someSillyOtheValue }} with a text of
      {{ textValue }}
    </div>
  </div>
</template>

<script setup lang="ts">
const textValue = ref('');
const someSillyOtheValue = ref(0);

const buttonClickHandler = () => {
  console.log('Button clicked! Current text value:', textValue.value);
  someSillyOtheValue.value += 1;
};
</script>
