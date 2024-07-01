/*
 * @Author: LiZhiWei
 * @Date: 2024-06-28 14:59:46
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2024-07-01 17:15:36
 * @Descripttion:
 */
import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我不是游神",
  base: "/vitepress-blog/",
  description: "我不是游神",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "Web框架",
            items: [
              {
                text: "Vue",
                link: "/content/frontend/web/vue/",
              },
              {
                text: "React",
                link: "/content/frontend/web/react/",
              },
            ],
          },
          {
            text: "移动端",
            items: [
              {
                text: "Uniapp",
                link: "./content/frontend/mobile/uniapp/",
              },
              {
                text: "React Native",
                link: "./content/frontend/mobile/react-native/",
              },
              {
                text: "Flutter",
                link: "/content/frontend/mobile/flutter/",
              },
              {
                text: "Kotlin Multiplatform",
                link: "/content/frontend/mobile/kotlin-multiplatform",
              },
            ],
          },
          {
            text: "前端基础",
            items: [
              {
                text: "TypeScript",
                link: "/content/frontend/basics/typescript",
              },
              {
                text: "JavaScript",
                link: "/content/frontend/basics/javascript",
              },
              {
                text: "Html",
                link: "/content/frontend/basics/html",
              },
              {
                text: "Css",
                link: "/content/frontend/basics/css",
              },
            ],
          },
        ],
      },
      { text: "后端", items: [] },
    ],

    sidebar: [
      {
        text: "",
        items: [
          {
            text: "前端",
            items: [
              {
                text: "Web框架",
                collapsed: true,
                items: [
                  {
                    text: "Vue",
                    link: "/content/frontend/web/vue/",
                  },
                  {
                    text: "React",
                    link: "/content/frontend/web/react/",
                  },
                ],
              },
              {
                text: "移动端",
                collapsed: true,
                items: [
                  {
                    text: "Uniapp",
                    link: "/content/frontend/mobile/uniapp/",
                  },
                  {
                    text: "React Native",
                    link: "/content/frontend/mobile/react-native/",
                  },
                  {
                    text: "Flutter",
                    link: "/content/frontend/mobile/flutter/",
                  },
                  {
                    text: "Kotlin Multiplatform",
                    link: "/content/frontend/mobile/kotlin-multiplatform/",
                  },
                ],
              },
              {
                text: "前端基础",
                collapsed: true,
                items: [
                  {
                    text: "TypeScript",
                    link: "/content/frontend/basics/typescript/",
                  },
                  {
                    text: "JavaScript",
                    link: "/content/frontend/basics/javascript/",
                  },
                  {
                    text: "Html",
                    link: "/content/frontend/basics/html/",
                  },
                  {
                    text: "Css",
                    link: "/content/frontend/basics/css/",
                  },
                ],
              },
            ],
          },
          { text: "后端", items: [] },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
