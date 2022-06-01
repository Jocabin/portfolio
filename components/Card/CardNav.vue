<template>
  <nav class="nav">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 1rem;
  }
}
</style>
