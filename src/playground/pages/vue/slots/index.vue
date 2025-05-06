<script setup lang="ts">
import MultipleSlots from '~/components/slots/MultipleSlots.vue';
</script>

<template>
  <MultipleSlots>
    <template #header="{ someHeaderProp }">
      <h1>Here might be a page title {{ someHeaderProp }}</h1>
    </template>

    <!-- implicit default slot, note if default slot is a scoped slot like header above
      then you should put it into default template: <template #default="defaultProps">
      to access props of child component
      just calling v-slot on MultipleSlots component like this <MyComponent v-slot="{ text, count }">
      won't compile, should be <template #default="{ message }"> or whatever. 
    -->
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </MultipleSlots>
</template>

<style scoped></style>
