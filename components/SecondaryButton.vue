<template>
  <a
    v-if="props.external"
    class="secondary-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot>Bouton externe</slot>
  </a>

  <NuxtLink v-else class="secondary-btn">
    <slot>Bouton interne</slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  external: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.secondary-btn {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: $border;
  outline-offset: -0.25rem;
  color: $white;
  font-family: $btn-font;
  padding: 1rem 1.5rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: $white;
    color: $black;
  }
}
</style>
