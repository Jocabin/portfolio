<template>
  <li class="stack-icon">
    <a
      target="_blank"
      :title="'Voir le site de ' + props.stackName"
      :href="props.stackLink"
    >
      <img
        loading="lazy"
        :src="'/assets/images/' + props.stackName + '.svg'"
        :alt="'Logo de ' + props.stackName"
      />
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
</script>

<style lang="scss" scoped>
.stack-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
