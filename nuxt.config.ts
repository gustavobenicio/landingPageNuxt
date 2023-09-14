// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  app: {
    head: { 
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
        { rel: 'stylesheet',
        href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' }]
      }
  }

})
