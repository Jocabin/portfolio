<template>
  <NuxtLink class="primary-btn">
    <span><slot>Bouton interne</slot></span>
  </NuxtLink>
</template>

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

  @media (hover: hover) {
    &:hover,
    &:focus {
      span {
        transform: translate(0.7rem, -0.7rem);
      }
    }
  }
}
</style>
