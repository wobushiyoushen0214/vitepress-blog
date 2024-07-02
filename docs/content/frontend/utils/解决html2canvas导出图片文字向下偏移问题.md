---
description: utils
title: 解决 html2canvas 导出图片文字向下偏移问题
readingTime: true
tag:
  - 文章
# recommend: 1

top: 1
---

1. 修改 node_module -> html2canvas 并修改 dist 目录下 html2canvas.esm.js 中的 FontMetrics 函数

```javascript
var FontMetrics = /** @class */ (function () {
  function FontMetrics(document) {
    this._data = {}
    this._document = document
  }
  FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
    var container = this._document.createElement("div")
    var img = this._document.createElement("img")
    var span = this._document.createElement("span")
    var body = this._document.body
    container.style.visibility = "hidden"
    container.style.fontFamily = fontFamily
    container.style.fontSize = fontSize
    container.style.margin = "0"
    container.style.padding = "0"
    container.style.whiteSpace = "nowrap"
    body.appendChild(container)
    img.src = SMALL_IMAGE
    img.width = 1
    img.height = 1
    img.style.margin = "0"
    img.style.padding = "0"
    img.style.verticalAlign = "baseline"
    img.style.display = "inline-block"
    span.style.fontFamily = fontFamily
    span.style.fontSize = fontSize
    span.style.margin = "0"
    span.style.padding = "0"
    span.appendChild(this._document.createTextNode(SAMPLE_TEXT))
    container.appendChild(span)
    container.appendChild(img)
    var baseline = img.offsetTop - span.offsetTop + 2
    container.removeChild(span)
    container.appendChild(this._document.createTextNode(SAMPLE_TEXT))
    container.style.lineHeight = "normal"
    img.style.verticalAlign = "super"
    var middle = img.offsetTop - container.offsetTop + 2
    body.removeChild(container)
    return { baseline: baseline, middle: middle }
  }
  FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
    var key = fontFamily + " " + fontSize
    if (typeof this._data[key] === "undefined") {
      this._data[key] = this.parseMetrics(fontFamily, fontSize)
    }
    return this._data[key]
  }
  return FontMetrics
})()
```

然后通过 pnpm patch html2canvas 给该库打上补丁，会生成一个临时文件路径用于 commit<br />通过 pnpm commit <路径>将补丁提交
