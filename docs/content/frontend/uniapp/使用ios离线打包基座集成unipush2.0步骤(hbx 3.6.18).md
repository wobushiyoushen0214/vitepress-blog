---
description: uniapp
title: 使用 ios 离线打包基座集成 unipush2.0 步骤(hbx 3.6.18)
readingTime: true
tag:
  - 文章
# recommend: 1
---

target --> 项目 --> Build Phases --> Link Binary With Libraries 添加 liblibPush.a libUnipush.a GTSDK.xcframework UserNotifications.framework 等库，并在项目目录下创建一个.swift 文件根据提示创建 oc 桥接 swift 桥接头文件，用于 oc 项目桥接 swift 的 unipush2.0 的库。然后在 Supporting Files --> Bundles --> PandoraApi 中找到 feature.plist 文件，在其中的 push 模块处加上

```xml
<dict>
  <key>class</key>
  <string>PGPushActualize</string>
  <key>autostart</key>
  <true/>
  <key>baseclass</key>
  <string>PGPush</string>
  <key>global</key>
  <true/>
  <key>server</key>
  <dict>
    <key>class</key>
    <string>PGPushServerAct</string>
    <key>identifier</key>
    <string>com.pushserver</string>
  </dict>
</dict>
```
