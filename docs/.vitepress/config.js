export default {
  title: "Port-f-olio",
  description: "A curation of awesome portfolio to draw inspiration",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: " bhuvanK.",
    nav: [
      { text: "Crafts/Projects", link: "/portfolio" },
      { text: "Bio", link: "/bio" },
      { text: "Contributors", link: "/contributors" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Karroat" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-karrot | Bhuvan.Kandhi",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
