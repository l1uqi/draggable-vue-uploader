# draggable-vue-uploader

<div align="center">

[简体中文](./README.md) | English

</div>

A simple image uploader component that supports drag-and-drop sorting of image lists.

If this project is helpful to you, please star it!

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

## Run demo

cd example

npm run i

npm run dev

## Documentation

### Props
|Prop|Description|Type|Default|
|---|---|---|---|
|action|The URL to upload to|`string`|`-`|
|fileList|List of files|`FileItem[]`|`-`|
|maximum|Maximum number of files in the list|`number`|`10`|
|before-upload|Triggered before uploading a file|`(file: File) => boolean\| Promise`|`-`|

### Events
|Event|Description|Parameters|
|---|---|---|
|change|Triggered when the status of a file being uploaded changes|fileList: `FileItem[]`<br>fileItem: `fileItem`|
|progress|Upload file progress bar|fileItem: `fileItem`<br>progress: `progress`|
|success|Triggered when upload is successful|fileItem: `fileItem`<br>result: `result`|
|error|Triggered when upload fails|fileItem: `FileItem`<br>error: `error`|

## Todo

- [x] Basic functionality
- [x] Image preview
- [x] Packaging
- [ ] Animation