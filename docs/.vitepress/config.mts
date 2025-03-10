/*
 * @Author: LiZhiWei
 * @Date: 2024-07-02 11:54:59
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2024-07-04 15:49:59
 * @Descripttion:
 */
import { defineConfig } from "vitepress"

// 导入主题的配置
import { blogTheme } from "./blog-theme"

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: "zh-cn",
  title: "我不是游神",
  description: "一个爱打羽毛球的前端菜鸟",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `/vitepress-blog/logo.png` }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    // 修改了 base 这里也需要同步修改
    // ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  base: "/vitepress-blog/",
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdatedText: "上次更新于",

    // 设置logo
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "vue",
            link: "/content/frontend/vue/wangEditor富文本回显css.md",
          },
          {
            text: "react",
            link: "/content/frontend/react",
          },
          {
            text: "uniapp",
            link: "/content/frontend/uniapp/云打包报错问题.md",
          },
          {
            text: "flutter",
            link: "/content/frontend/flutter/mac安装flutter开发环境.md",
          },
          {
            text: "utils",
            link: "/content/frontend/utils/前端下载文件并存入指定目录.md",
          },
        ],
      },
      { text: "关于作者", link: "" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ATQQ/sugar-blog/tree/master/packages/theme",
      },
    ],
  },
})
