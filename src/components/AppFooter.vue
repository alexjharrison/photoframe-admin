<template>
  <footer
    class="h-6rem flex flex-column align-items-center justify-content-center mt-6"
  >
    <pre class="my-1">&copy; {{ year }}</pre>
    <a href="https://aharrison.xyz" target="_blank" rel="noreferrer noopener">
      <pre class="my-1">Mabel made me do it</pre>
    </a>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--surface-d);
  border-top: 1px solid var(--text-color);
}
a {
  color: var(--text-color);
  text-decoration: none;
}
</style>
