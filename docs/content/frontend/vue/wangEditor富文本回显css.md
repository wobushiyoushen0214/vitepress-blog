---
description: vue
title: wangEditor富文本回显css
readingTime: true
tag:
  - 文章
# recommend: 1
top: 3
---

```css
:root,
:host {
  --w-e-textarea-bg-color: #fff;
  --w-e-textarea-color: #333;
  --w-e-textarea-border-color: #ccc;
  --w-e-textarea-slight-border-color: #e8e8e8;
  --w-e-textarea-slight-color: #d4d4d4;
  --w-e-textarea-slight-bg-color: #f5f2f0;
  --w-e-textarea-selected-border-color: #b4d5ff;
  --w-e-textarea-handler-bg-color: #4290f7;
  --w-e-toolbar-color: #595959;
  --w-e-toolbar-bg-color: #fff;
  --w-e-toolbar-active-color: #333;
  --w-e-toolbar-active-bg-color: #f1f1f1;
  --w-e-toolbar-disabled-color: #999;
  --w-e-toolbar-border-color: #e8e8e8;
  --w-e-modal-button-bg-color: #fafafa;
  --w-e-modal-button-border-color: #d9d9d9;
}

.w-e-text-container * {
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 0;
}

.w-e-text-container {
  word-wrap: break-word;
  border-top: 1px solid transparent;
  min-height: 100%;
  outline: 0;
  padding: 0 10px;
  white-space: pre-wrap;
}
.w-e-text-container p,
.w-e-text-container li {
  white-space: pre-wrap; /* 保留空格 */
}
.w-e-text-container p {
  margin: 15px 0;
}

.w-e-text-container p > a {
  background-color: transparent;
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.w-e-text-container h1,
.w-e-text-container h2,
.w-e-text-container h3,
.w-e-text-container h4,
.w-e-text-container h5 {
  margin: 20px 0;
}
.w-e-text-container h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.w-e-text-container h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.w-e-text-container h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}
.w-e-text-container h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.w-e-text-container h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.w-e-text-container img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  vertical-align: middle;
}

.w-e-text-container img {
  cursor: default;
  display: inline !important;
  max-width: 100%;
  min-height: 20px;
  min-width: 20px;
}
.w-e-text-container span {
  text-indent: 0;
}

.w-e-text-container table {
  border-collapse: collapse;
}
.w-e-text-container table td,
.w-e-text-container table th {
  border: 1px solid var(--w-e-textarea-border-color);
  line-height: 1.5;
  min-width: 30px;
  padding: 3px 5px;
  text-align: left;
}
.w-e-text-container table th {
  background-color: var(--w-e-textarea-slight-bg-color);
  font-weight: 700;
  text-align: center;
}
.w-e-text-container ul,
.w-e-text-container ol {
  padding-left: 20px;
}

.w-e-text-container input[type="checkbox"] {
  margin-right: 5px;
}

.w-e-text-container blockquote {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  unicode-bidi: isolate;
  border-left: 8px solid #d0e5f2;
  padding: 10px 10px;
  margin: 10px 0;
  background-color: #f1f1f1;
}

.w-e-text-container code,
kbd,
samp {
  font-size: 1em;
}

.w-e-text-container code {
  background-color: var(--w-e-textarea-slight-bg-color);
  border-radius: 3px;
  font-family: monospace;
  padding: 3px;
}

.w-e-text-container pre > code {
  background-color: var(--w-e-textarea-slight-bg-color);
  border: 1px solid var(--w-e-textarea-slight-border-color);
  border-radius: 4px 4px;
  display: block;
  font-size: 14px;
  padding: 10px;
  text-indent: 0;
  word-wrap: normal;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  -webkit-hyphens: none;
  hyphens: none;
  line-height: 1.5;
  margin: 0.5em 0;
  overflow: auto;
  padding: 1em;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  text-align: left;
  text-shadow: 0 1px #fff;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
}

.w-e-text-container pre > code .token.cdata,
.w-e-text-container pre > code .token.comment,
.w-e-text-container pre > code .token.doctype,
.w-e-text-container pre > code .token.prolog {
  color: #708090;
}
.w-e-text-container pre > code .token.punctuation {
  color: #999;
}
.w-e-text-container pre > code .token.namespace {
  opacity: 0.7;
}
.w-e-text-container pre > code .token.boolean,
.w-e-text-container pre > code .token.constant,
.w-e-text-container pre > code .token.deleted,
.w-e-text-container pre > code .token.number,
.w-e-text-container pre > code .token.property,
.w-e-text-container pre > code .token.symbol,
.w-e-text-container pre > code .token.tag {
  color: #905;
}
.w-e-text-container pre > code .token.attr-name,
.w-e-text-container pre > code .token.builtin,
.w-e-text-container pre > code .token.char,
.w-e-text-container pre > code .token.inserted,
.w-e-text-container pre > code .token.selector,
.w-e-text-container pre > code .token.string {
  color: #690;
}
.w-e-text-container pre > code .language-css .token.string,
.w-e-text-container pre > code .style .token.string,
.w-e-text-container pre > code .token.entity,
.w-e-text-container pre > code .token.operator,
.w-e-text-container pre > code .token.url {
  color: #9a6e3a;
}
.w-e-text-container pre > code .token.atrule,
.w-e-text-container pre > code .token.attr-value,
.w-e-text-container pre > code .token.keyword {
  color: #07a;
}
.w-e-text-container pre > code .token.class-name,
.w-e-text-container pre > code .token.function {
  color: #dd4a68;
}
.w-e-text-container pre > code .token.important,
.w-e-text-container pre > code .token.regex,
.w-e-text-container pre > code .token.variable {
  color: #e90;
}
.w-e-text-container pre > code .token.bold,
.w-e-text-container pre > code .token.important {
  font-weight: 700;
}
.w-e-text-container pre > code .token.italic {
  font-style: italic;
}
.w-e-text-container pre > code .token.entity {
  cursor: help;
}
```
