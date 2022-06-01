<template>
  <GoBackLink v-if="route.name != 'index'" />
  <NuxtPage />
  <Link class="sticked-bottom" to="/plan" :external="false">Plan du site</Link>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss">
#__nuxt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
}
</style>
