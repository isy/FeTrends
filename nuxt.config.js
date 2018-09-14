module.exports = {
  head: {
    title: "FeTrends",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "トレンド商品" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@assets/style/app.css"],
  loading: { color: "#3b80e8" },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  },
  plugins: [
    {
      // Doc: https://at-ui.github.io/at-ui/#/en
      src: "~/plugins/at-ui",
      ssr: false
    }
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
};
