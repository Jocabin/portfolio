<template>
  <li class="stack-icon">
    <a
      target="_blank"
      :title="'Voir le site de ' + props.stackName"
      :href="props.stackLink"
    >
      <!-- Probleme chemin relatif: CV et images -->
      <!-- Aller au top de la page on mounted -->
      <img loading="lazy" :src="imageURL" :alt="'Logo de ' + props.stackName" />
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  stackName: {
    type: String,
    required: true,
  },
  stackLink: {
    type: String,
    required: true,
  },
});

const imageURL = computed(() => {
  return `_nuxt/assets/images/${props.stackName}.svg`;
});
</script>

<style lang="scss" scoped>
.stack-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
