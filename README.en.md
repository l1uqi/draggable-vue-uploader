
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