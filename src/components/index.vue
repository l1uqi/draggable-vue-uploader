<template>
   <UploadList
    v-if="props.fileList"
    :action="props.action"
    :fileList="props.fileList"
    @change="onChange"
    @delete="onDelete"
    @success="onSuccess"
    @error="onError"
    @progress="onProgress"
  />
  <Upload
    v-else
    :action="props.action"
    @change="onChange"
    @delete="onDelete"
    @success="onSuccess"
    @error="onError"
    @progress="onProgress"
  />
</template>
<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";
import Upload from "./upload.vue";
import UploadList from './UploadList.vue'

const emit = defineEmits(["change", "delete", "progress", "success", "error"]);

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  fileList: Array
});

const onProgress = (percent) => {
  emit("progress", percent);
};
const onSuccess = (result) => {
  emit("success", result);
};
const onError = (error) => {
  emit("error", error);
};

const onChange = (event) => {
  emit("change", event);
  console.log(event);
};

const onDelete = (file, fileList) => {
  emit("delete", file, fileList);
};
</script>
