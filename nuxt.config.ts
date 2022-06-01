import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  css: ["@/assets/css/styles.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: `@import "@/assets/css/_variables.scss";`,
        },
      },
    },
  },
});
