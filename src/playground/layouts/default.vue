<template>
  <div class="m-10 flex">
    <nav class="mr-10">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vue/template-ref">Template Ref</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vue/components/props">Props</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vue/components/multiple-models"
            >Multiple Models
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vue/animations/gsap-first">Gsap first </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/vue/slots">Slots</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test/test-page" data-testId="link-e2e-test1-page"
            >E2E Test Page</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div class="flex flex-1">
      <slot />
    </div>
  </div>
</template>
