<template>
  <section class="card-template">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.card-template {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  width: 100%;
  padding: 2rem;
  height: fit-content;
  background-color: $gray;
  position: relative;
  border: $border;

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    bottom: -1rem;
    right: 1rem;
    top: 1rem;
    background-color: $gray;
    border: $border;
    z-index: -1;
  }
}
</style>
