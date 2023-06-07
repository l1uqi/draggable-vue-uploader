
[![NPM version][npm-image]][npm-url]
<a href="https://github.com/l1uqi/draggable-vue-uploader/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-brightgreen">
</a>

[npm-image]: https://img.shields.io/npm/v/draggable-vue-uploader
[npm-url]: https://www.npmjs.com/package/draggable-vue-uploader

# draggable-vue-uploade

<div align="center">

简体中文 | [English](./README.en.md)

</div>

![](https://github.com/l1uqi/PicGo/blob/main/blog/draggable.gif?raw=true)

一个简单的图片上传组件, 支持图片列表拖拽排序。

如果项目对你有所帮助, 欢迎star!

**支持 Vue 3**

## 安装
```
npm i draggable-vue-uploader
```

## 使用
```
import DraggableUploader from 'draggable-vue-uploader';
import 'draggable-vue-uploader/dist/style.css'

createApp(App).use(DraggableUploader).mount('#app')

<!-- vue -->
<script setup>
import { ref } from "vue";
const fileList = ref([
  {
    url: "https://images4.alphacoders.com/127/1274960.png",
    id: 1,
    file: null,
  },
  {
    url: "https://images3.alphacoders.com/129/1290495.jpg",
    id: 2,
    file: null,
  },
  {
    url: "https://images5.alphacoders.com/899/899831.jpg",
    id: 3,
    file: null,
  },
  {
    url: "https://images8.alphacoders.com/907/907668.png",
    id: 4,
    file: null,
  },
  {
    url: "https://images2.alphacoders.com/100/1003736.jpg",
    id: 5,
    file: null,
  },
  {
    url: "https://images7.alphacoders.com/125/1258896.jpg",
    id: 6,
    file: null,
  },
  {
    url: "https://images7.alphacoders.com/125/1257235.jpg",
    id: 7,
    file: null,
  },
  {
    url: "https://images2.alphacoders.com/125/1257233.jpg",
    id: 8,
    file: null,
  },
]);
const handleChange = (files) => {
  console.log("handleChange", files);
};
const handleProgress = (file, progress) => {
  console.log("handleProgress", file, progress);
};
const handleSuccess = (file, res) => {
  console.log("handleSuccess", file, res);
};
const handleError = (file, err) => {
  console.log("handleError", err);
};

const handleDelete = (file, index) => {
  console.log("handleDelete", file, index);
};

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 0);
  });
};
</script>

<template>
  <div class="container">
    <span>单个</span>
    <draggable-upload
      action="https://eopda57dr0r1oqg.m.pipedream.net"
      @change="handleChange"
      @progress="handleProgress"
      @success="handleSuccess"
      @error="handleError"
      @delete="handleDelete"
      :beforeUpload="beforeUpload"
    />
    <span>列表(最多上传10张)</span>
    <draggable-upload
      action="https://eopda57dr0r1oqg.m.pipedream.net"
      :draggable="false"
      @change="handleChange"
      @progress="handleProgress"
      @success="handleSuccess"
      @error="handleError"
      @delete="handleDelete"
      :before-upload="beforeUpload"
      :maximum="15"
      :fileList="fileList"
    />
    序号:
    <span v-for="(item, index) in fileList" :key="item.id"
      >{{ item.id }}&nbsp;</span
    >
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>


```

## 例子
[demo](https://hello7cat.com/draggable-vue-uploader/)

## 开发

cd example

npm i

npm run dev

## 文档

### 传参
|参数名|描述|类型|默认值|
|---|---|---|---|
|action|上传的URL|`string`|`-`|
|headers|上传请求头信息|{key: value}|`-`|
|draggable|是否拖拽排序|`boolean`|`true`|
|fileList|文件列表|`FileItem[]`|`-`|
|maximum|列表最大上传数|`number`|`10`|
|before-upload|上传文件前触发|`(file: File) => boolean\| Promise`|`-`|
### 事件
|事件名|描述|参数|
|---|---|---|
|change|上传的文件状态发生改变时触发|fileList: `FileItem[]`<br>fileItem: `fileItem`|
|progress|上传文件进度条|fileItem: `fileItem`<br>progress: `progress`|
|success|上传成功|fileItem: `fileItem`<br>result: `result`|
|error|上传失败时触发|fileItem: `FileItem`<br>error: `error`|

## 待办

- [x] 基础功能
- [x] 图片预览
- [x] 打包发布
- [x] 动画
- [ ] 完善的API
- [ ] 组件测试