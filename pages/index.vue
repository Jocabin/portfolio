<template>
  <div class="card-layout">
    <CardTemplate>
      <CardHeader>
        <h2 class="h1">
          Salut&nbsp;!&nbsp;👋&nbsp;Moi, c’est
          <strong>Yaakov Ferechtehfar</strong>
        </h2>
        <p class="texte">
          Je suis un&nbsp;<strong class="gras"
            >développeur <span class="gras" lang="en">Front-End</span></strong
          >
          axé&nbsp;vers la&nbsp;<strong class="light">qualité</strong>
          et&nbsp;centré <strong class="light">utilisateur</strong>.
        </p>
      </CardHeader>
      <CardNav>
        <CardRow>
          <PrimaryButton
            title="Aller voir mes projets en développement web"
            to="/projets"
            >Mes projets</PrimaryButton
          ></CardRow
        >
        <CardRow>
          <PrimaryButton title="Plus d'informations sur moi" to="/a-propos"
            >À propos de moi</PrimaryButton
          >
        </CardRow>
        <CardRow>
          <PrimaryButton title="Contactez-moi" @click="scrollToContact"
            >Me contacter</PrimaryButton
          ></CardRow
        >
      </CardNav>
    </CardTemplate>

    <CardTemplate id="contactSection">
      <CardHeader>
        <h2 class="h1">📝&nbsp;Écrivez moi !</h2>
        <p class="texte">
          Pour toute&nbsp;proposition
          <span class="gras">d’<strong class="gras">alternance</strong></span>
          ou&nbsp;de&nbsp;<strong class="gras">projet</strong>, n’hésitez pas
          à&nbsp;me&nbsp;contacter&nbsp;!
        </p>
      </CardHeader>

      <ul class="social-medias">
        <SocialMediaIcon social-media="mail" />
        <SocialMediaIcon social-media="github" />
        <SocialMediaIcon social-media="linkedin" />
      </ul>

      <SecondaryButton
        external
        href="/CV.pdf"
        download="Yaakov_Ferechtehfar_CV.pdf"
        title="Télécharger mon CV"
        >Télécharger mon CV</SecondaryButton
      >
    </CardTemplate>
  </div>
</template>
<script setup>
useHead({
  title: "Accueil",
});

function scrollToContact() {
  document.querySelector("#contactSection").scrollIntoView();
}
</script>

<style lang="scss">
.card-layout {
  position: relative;
  z-index: 1;
  width: min(80%, 345px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 11rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;

  .social-medias {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
}

.sticked-bottom {
  margin-bottom: 2rem;
}
</style>
