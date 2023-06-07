
[![NPM version][npm-image]][npm-url]
<a href="https://github.com/l1uqi/draggable-vue-uploader/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-brightgreen">
</a>

[npm-image]: https://img.shields.io/npm/v/draggable-vue-uploader
[npm-url]: https://www.npmjs.com/package/draggable-vue-uploader
# draggable-vue-uploader

<div align="center">

English | [简体中文](./README.md)

</div>

![](https://github.com/l1uqi/PicGo/blob/main/blog/draggable.gif?raw=true)

A simple image uploader component that supports drag-and-drop sorting of image lists.

If this project helps you, please give it a star!

**Supports Vue 3**

## Installation
```
npm i draggable-vue-uploader
```

## Usage
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

## Example
[demo](https://hello7cat.com/draggable-vue-uploader/)

## Development

cd example

npm i

npm run dev

## Documentation

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| action | The URL to upload files | `string` | `-` |
| headers | The headers to be sent with the upload request | `{key: value}` | `-` |
| draggable | Whether to enable drag and drop file sorting | `boolean` | `true` |
| fileList | The list of files to be uploaded | `FileItem[]` | `-` |
| maximum | The maximum number of files that can be uploaded | `number` | `10` |
| before-upload | A function that will be called before uploading a file | `(file: File) => boolean\| Promise` | `-` |

### Events
|Event|Description|Parameters|
|---|---|---|
|change|Triggered when the file status changes.|fileList: `FileItem[]`<br>fileItem: `fileItem`|
|progress|Upload file progress bar.|fileItem: `fileItem`<br>progress: `progress`|
|success|Triggered when the upload is successful.|fileItem: `fileItem`<br>result: `result`|
|error|Triggered when the upload fails.|fileItem: `FileItem`<br>error: `error`|

## To-do

- [x] Basic functionality
- [x] Image preview
- [x] Package release
- [x] Animation
- [ ] Complete API