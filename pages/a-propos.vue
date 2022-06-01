<template>
  <div class="card-layout">
    <CardTemplate>
      <CardHeader>
        <h2 class="h1">👨&nbsp;Qui suis-je&nbsp;?</h2>
        <p class="texte">
          Je suis Yaakov Ferechtehfar, en&nbsp;2e année de&nbsp;bachelor chef
          de&nbsp;projet digital à&nbsp;l’école
          <Link :external="true" href="https://www.ecv.fr/">ECV Digital</Link>,
          et je&nbsp;compte m’orienter vers un&nbsp;master développement web.
        </p>
      </CardHeader>

      <img
        class="rounded"
        width="100"
        src="~/assets/images/pp.jpg"
        loading="lazy"
        alt="Photo du visage de Yaakov Ferechtehfar"
      />
    </CardTemplate>

    <CardTemplate>
      <CardHeader>
        <h2 class="h1">🔧&nbsp;Mes&nbsp;stacks</h2>
      </CardHeader>
      <!-- Mettre att title pour tous les liens -->
      <ul class="grid-stacks">
        <li>
          <a target="_blank" title="Voir le site" href="https://vuejs.org/">
            <img src="~/assets/images/vue.svg" alt="Logo de Vue3" />
          </a>
        </li>
        <li>
          <a target="_blank" title="Voir le site" href="http://v3.nuxtjs.org/">
            <img src="~/assets/images/nuxt.svg" alt="Logo de Nuxt3" />
          </a>
        </li>
        <li>
          <a target="_blank" title="Voir le site" href="https://sass-lang.com/">
            <img src="~/assets/images/sass.svg" alt="Logo de Sass" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="Voir le site"
            href="https://www.netlify.com/"
          >
            <img src="~/assets/images/netlify.svg" alt="Logo de Netlify" />
          </a>
        </li>
        <li>
          <a target="_blank" title="Voir le site" href="https://nodejs.org/en/">
            <img src="~/assets/images/nodejs.svg" alt="Logo de NodeJS" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="Voir le site"
            href="https://www.rust-lang.org/fr/"
          >
            <img src="~/assets/images/rust.svg" alt="Logo de Rust" />
          </a>
        </li>
      </ul>
      <HSeparator />
      <ul class="line-tech">
        <li>
          <a
            target="_blank"
            title="Voir le site"
            href="https://code.visualstudio.com/"
          >
            <img src="~/assets/images/vscode.svg" alt="Logo de VSCode" />
          </a>
        </li>
        <li>
          <a target="_blank" title="Voir le site" href="https://www.figma.com/">
            <img src="~/assets/images/figma.svg" alt="Logo de Figma" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            title="Voir le site"
            href="https://www.microsoft.com/fr-fr/windows"
          >
            <img src="~/assets/images/windows.svg" alt="Logo de Windows" />
          </a>
        </li>
      </ul>
    </CardTemplate>
    <!-- TODO: Ajouter mes passions, perfs/access -->
  </div>
</template>

<script setup></script>

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
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>
