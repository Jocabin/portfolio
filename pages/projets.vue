<template>
  <div class="card-layout">
    <CardTemplate v-for="project in projectList">
      <CardHeader>
        <h2 class="h1">{{ project.title }}</h2>
        <p class="texte">{{ project.text }}</p>
      </CardHeader>
      <CardNav>
        <CardRow>
          <PrimaryButton
            v-if="project.demoLink != ''"
            :external="true"
            :href="project.demoLink"
            :title="'Voir le projet ' + project.title"
            >Voir le projet</PrimaryButton
          >
        </CardRow>
        <CardRow>
          <SecondaryButton
            v-if="project.codeLink != ''"
            :external="true"
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
// TODO: remplacer par une firebase couplé a strapi
// TODO: pouvoir parser des liens dans le texte

useHead({
  title: "Projets",
});

const projectList = ref([
  {
    title: "Agenda Digital",
    text: "L’Agenda Digital est une web app from scratch de To-Do list, pour partager les devoirs au sein de ma classe à l’ECV Digital.",
    demoLink: "https://agendadigital.netlify.app/",
    codeLink: "https://github.com/Jocabin/agenda_digital",
  },
  {
    title: "Majuscules accentuées",
    text: "Copier en 1 clic la majuscule accentuée / caractère spécial de son choix.",
    demoLink:
      "https://chrome.google.com/webstore/detail/majuscules-et-caract%C3%A8res/jgclphfedglcbhenhaolbhnkbaebeipi?hl=fr&authuser=0",
    codeLink: "https://github.com/Jocabin/extension_maj_accent",
  },
  {
    title: "TP espace membre",
    text: "Espace membre crée avec PHP.",
    demoLink: "",
    codeLink: "https://github.com/Jocabin/tp_espace_membre",
  },
  {
    title: "Haarnak",
    text: "Haarnak est une application Android permettant de stocker vos documents à sortir rapidement.",
    demoLink: "https://jocabin.github.io/haarnak_website/",
    codeLink: "https://github.com/Jocabin/haarnak_website",
  },
  {
    title: "The Seal Agency",
    text: "The Seal Agency est le site d'une agence digitale fictive dans le cadre d'un cours",
    demoLink: "https://gtjesrad.github.io/ECV_DEV_PROJECT/",
    codeLink: "https://github.com/GTJesraD/ECV_DEV_PROJECT",
  },
]);
</script>

<style lang="scss" scoped></style>
