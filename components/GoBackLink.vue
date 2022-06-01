<template>
  <NuxtLink to="/" class="goback-link">
    <ArrowIcon />
    <span>Retour à l'accueil</span>
  </NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
.goback-link,
:visited {
  display: inline-flex;
  flex-flow: row nowrap;
  color: $white;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  margin-top: 5rem;

  span {
    font-family: $btn-font;
  }

  &:hover,
  &:focus {
    background-color: $gray;
  }
}
</style>
