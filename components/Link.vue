<template>
  <a
    v-if="props.external"
    class="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot>Lien externe</slot>
  </a>

  <NuxtLink v-else class="link">
    <slot>Lien interne</slot>
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
.link {
  color: $accent;
  font-family: $btn-font;
  cursor: pointer;
  text-decoration: underline;
}
</style>
