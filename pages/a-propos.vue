<template>
  <div class="card-layout">
    <CardTemplate>
      <CardHeader>
        <h2 class="h1">👨&nbsp;Qui suis-je&nbsp;?</h2>
        <p class="texte">
          Je suis Yaakov Ferechtehfar, en&nbsp;2e année de&nbsp;bachelor chef
          de&nbsp;projet digital à&nbsp;l’école
          <Link :external="true" href="//www.ecv.fr/">ECV Digital</Link>, et
          je&nbsp;compte m’orienter vers un&nbsp;master développement web.
        </p>
      </CardHeader>

      <img
        class="rounded"
        width="100"
        src="/assets/images/pp.webp"
        alt="Photo du visage de Yaakov Ferechtehfar"
      />
    </CardTemplate>

    <CardTemplate>
      <CardHeader>
        <h2 class="h1">🔧&nbsp;Mes&nbsp;stacks</h2>
      </CardHeader>
      <!-- Mettre att title pour tous les liens -->
      <ul class="grid-stacks">
        <StackIcon stack-link="//vuejs.org/" stack-name="vue" />
        <StackIcon stack-link="//v3.nuxtjs.org/" stack-name="nuxt" />
        <StackIcon stack-link="//sass-lang.com/" stack-name="sass" />
        <StackIcon stack-link="//www.netlify.com/" stack-name="netlify" />
        <StackIcon stack-link="//nodejs.org/en/" stack-name="nodejs" />
        <StackIcon stack-link="//www.rust-lang.org/fr/" stack-name="rust" />
      </ul>
      <HSeparator />
      <ul class="line-tech">
        <StackIcon stack-link="//code.visualstudio.com/" stack-name="vscode" />
        <StackIcon stack-link="//www.figma.com/" stack-name="figma" />
        <StackIcon
          stack-link="//www.microsoft.com/fr-fr/windows/"
          stack-name="windows"
        />
      </ul>
    </CardTemplate>
    <!-- TODO: Ajouter mes passions, perfs/access -->
  </div>
</template>

<script setup>
useHead({
  title: "À propos",
});
</script>

<style lang="scss" scoped>
.rounded {
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.grid-stacks {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem 1.5rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.line-tech {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
