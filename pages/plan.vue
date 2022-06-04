<template>
  <div class="plan">
    <SitemapLink
      v-for="link in sitemap"
      :link-title="link.title"
      :to="link.url"
    >
      {{ link.caption }}
    </SitemapLink>
  </div>
</template>

<script setup>
const sitemap = ref([
  {
    title: "Accueil",
    url: "/",
    caption: "Pour retourner sur la page d’accueil",
  },
  {
    title: "Mes projets",
    url: "/projets",
    caption: "Pour voir tous mes projets",
  },
  {
    title: "À propos de moi",
    url: "/a-propos",
    caption: "Pour en savoir plus sur mes compétences / passions",
  },
  {
    title: "Plan du site",
    url: "/plan",
    caption: "Pour retrouver tous les liens de ce site",
  },
]);
</script>

<style lang="scss" scoped>
.plan {
  width: min(80%, 345px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
}
</style>
