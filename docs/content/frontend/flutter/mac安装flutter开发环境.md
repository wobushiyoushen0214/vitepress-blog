---
description: flutter
title: mac安装flutter开发环境
readingTime: true
tag:
  - 文章
# recommend: 1
top: 1
---

1. 下载 flutter
   :::info
   下载链接：[https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#install-the-flutter-sdk](https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#install-the-flutter-sdk)
   :::

2. 解压压缩包到你想要安装 flutter 的路径
3. 配置环境变量

进入当前用户文件夹下，例如：/Users/lizhiwei/<br />command + shift + . 显示隐藏文件，找到.bash_profile 和 .zshrc 文件打开，在其中加入以下内容
:::info
export PATH=$HOME/development/flutter/bin:$PATH
:::
其中$HOME 为你当前用户文件夹路径，例如/Users/lizhiwei/，后面则为你 flutter 下载的文件夹地址

4. 打开终端，输入 flutter doctor 查看 flutter 环境。
