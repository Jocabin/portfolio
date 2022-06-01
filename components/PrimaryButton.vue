<template>
  <a
    v-if="props.external"
    class="primary-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span><slot>Bouton externe</slot></span>
  </a>

  <NuxtLink v-else class="primary-btn">
    <span><slot>Bouton interne</slot></span>
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
.primary-btn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: 0.25rem solid $white;
  outline-offset: -0.25rem;
  text-decoration: none;
  width: 100%;
  cursor: pointer;

  span {
    display: block;
    color: $black;
    font-family: $btn-font;
    padding: 1rem 1.5rem;
    background-color: $accent;
    z-index: 2;
    width: 100%;
    text-align: center;
    transition: transform 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    span {
      transform: translate(0.7rem, -0.7rem);
    }
  }
}
</style>
