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

```

## Example
[demo](https://hello7cat.com/draggable-vue-uploader/)

## Development

cd example

npm i

npm run dev

## Documentation

### Props
|Prop|Description|Type|Default|
|---|---|---|---|
|action|The URL for uploading.|`string`|`-`|
|headers|The header information for uploading requests.|{key: value}|`-`|
|fileList|The list of files.|`FileItem[]`|`-`|
|maximum|The maximum number of uploads for the list.|`number`|`10`|
|before-upload|Triggered before uploading files.|`(file: File) => boolean\| Promise`|`-`|

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