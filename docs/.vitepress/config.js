export default {
  title: "Portfolio Ideas",
  description: "A curation of awesome portfolio to draw inspiration",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Portfolio Ideas",
    nav: [
      { text: "Crafts/Projects", link: "/portfolio" },
      { text: "Bio", link: "/guide" },
      { text: "Contributors", link: "/contributors" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/evavic44" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-karrot | Bhuvan.Kandhi",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
