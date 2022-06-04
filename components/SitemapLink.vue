<template>
  <NuxtLink class="sitemap-link">
    <span class="link-title">{{ props.linkTitle }}</span>
    <br />
    <span class="link-caption">
      <slot></slot>
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  linkTitle: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.sitemap-link,
:visited {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border: dashed 4px $gray;
  border-radius: 0.5rem;
  width: 100%;

  .link-title {
    color: $accent;
    width: 100%;
    font-family: font_bold;
  }

  .link-caption {
    color: $white;
  }

  @media (hover: hover) {
    &:hover,
    &:focus {
      background-color: $gray;
      border-color: $white;
    }
  }
}
</style>
