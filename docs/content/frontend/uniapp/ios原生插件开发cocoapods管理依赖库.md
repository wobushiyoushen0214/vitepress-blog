---
description: uniapp
title: ios 原生插件开发 cocoapods 管理依赖库.
readingTime: true
tag:
  - 文章
# recommend: 1
top: 1
---

**使用 CocoaPods 管理 IOS 依赖库开发插件需在 Target --> Build Setting --> Other Links Flags 中添加**

**$(inherited),否则无法读取到 CocoaPods 加载的依赖库，并且还要在插件的.podspec 文件中加入 s.dependency '依赖名称',否则用 CocoaPods 开发的插件无法读取依赖包，无法导入头文件。**
