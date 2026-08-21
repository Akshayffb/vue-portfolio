import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/docs/",
  outDir: "../dist/docs",
  head: [["meta", { name: "robots", content: "noindex, nofollow" }]],

  title: "Akshay ffb Notes",
  description: "A personal space for documenting what I learn, understand, and build.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "My Reference", link: "/my-reference/" },
      { text: "Learning", link: "/notes/" },
    ],

    sidebar: [
      {
        text: "My Reference",
        items: [
          { text: "About Me", link: "/my-reference/about-me" },
          {
            text: "Tell Me About Yourself",
            link: "/my-reference/tell-me-about-yourself",
          },
          {
            text: "Interview Last-Minute Review",
            link: "/my-reference/interview-review",
          },
          { text: "Projects", link: "/my-reference/projects" },
          {
            text: "Experience & Responsibilities",
            link: "/my-reference/experience",
          },
        ],
      },

      {
        text: "PHP",
        items: [
          { text: "Fundamentals", link: "/notes/php/fundamentals" },
          { text: "OOP", link: "/notes/php/oops" },
        ],
      },

      {
        text: "Laravel",
        items: [
          { text: "Fundamentals", link: "/notes/laravel/fundamentals" },
          { text: "Authentication", link: "/notes/laravel/authentication" },
        ],
      },

      {
        text: "Database",
        items: [
          { text: "SQL", link: "/notes/database/sql" },
          { text: "Database Design", link: "/notes/database/database-design" },
        ],
      },
    ],
  },
});
