<template>
  <li class="stack-icon">
    <a
      target="_blank"
      :title="'Voir le site de ' + props.stackName"
      :href="props.stackLink"
    >
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

const imageURL = new URL(
  `../assets/images/${props.stackName}.svg`,
  import.meta.url
).href;
</script>

<style lang="scss" scoped>
.stack-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
