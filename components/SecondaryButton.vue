<template>
  <NuxtLink class="secondary-btn">
    <slot>Bouton interne</slot>
  </NuxtLink>
</template>

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

  @media (hover: hover) {
    &:hover,
    &:focus {
      background-color: $white;
      color: $black;
    }
  }
}
</style>
