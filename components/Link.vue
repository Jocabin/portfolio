<template>
  <NuxtLink class="link">
    <slot>Lien interne</slot>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  color: $accent;
  font-family: $btn-font;
  cursor: pointer;
  text-decoration: underline;
}
</style>
