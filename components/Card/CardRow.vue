<template>
  <li class="card-row">
    <slot></slot>
  </li>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-row {
  width: 100%;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
