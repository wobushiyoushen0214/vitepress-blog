在页面有滚动条时，dialog弹出默认会对页面滚动条进行隐藏显示，在dialog关闭时会导致页面出现抖动，这时需做如下操作：

1. 给dialog的lock-scroll属性设置成false
```vue
<el-dialog v-model="dialogVisible" :lock-scroll="false">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
</el-dialog>
```

2. 设置如下css
```css
:deep(.el-dialog) {
  display: flex !important;
  flex-direction: column !important;
  margin: 0 !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  overflow-y: auto !important;
  overflow-x: auto !important;
  max-height: 80vh !important;
}
```
