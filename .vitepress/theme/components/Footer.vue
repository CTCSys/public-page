<template>
  <footer>
    copyrights reserved
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<style scoped>
footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  background: var(--c-bg);
  color: var(--c-text);
}
a {
  color: var(--c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--c-hover);
}
</style>

