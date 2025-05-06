<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <!-- scoped slot -->
      <slot name="header" some-header-prop="some header text" />
    </div>
    <div>
      <slot />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped></style>
