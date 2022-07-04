<template>
  <div class="card-layout">
    <CardTemplate v-for="project in projectList">
      <CardHeader>
        <h2 class="h1">{{ project.title }}</h2>
        <p class="texte">{{ project.desc }}</p>
      </CardHeader>
      <CardNav>
        <CardRow>
          <PrimaryButton
            v-if="project.demoLink != ''"
            external
            target="_blank"
            :href="project.demoLink"
            :title="'Voir le projet ' + project.title"
            >Voir le projet</PrimaryButton
          >
        </CardRow>
        <CardRow>
          <SecondaryButton
            v-if="project.codeLink != ''"
            external
            target="_blank"
            :href="project.codeLink"
            :title="'Voir le code du projet ' + project.title"
            >Voir le code</SecondaryButton
          >
        </CardRow>
      </CardNav>
    </CardTemplate>
  </div>
</template>

<script setup>
import axios from "axios";
useHead({
  title: "Projets",
});

const projectList = ref([]);

onMounted(() => {
  axios
    .get(
      "https://portfolio-projects-f87cb-default-rtdb.firebaseio.com/projets.json"
    )
    .then((res) => {
      for (const id in res.data) {
        projectList.value.unshift(res.data[id]);
      }
    });
});
</script>
