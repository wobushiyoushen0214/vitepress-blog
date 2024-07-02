---
description: uniapp
title: 开发 app 兼容 iphone 底部横线
readingTime: true
tag:
  - 文章
# recommend: 1
---

```css
/**
* iphone底部横线兼容
*/
page {
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
```
