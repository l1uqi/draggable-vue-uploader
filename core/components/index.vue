<template>
  <uploader />
</template>

<script setup>
import { h, ref, defineProps, defineEmits } from "vue";
import Upload from "./upload.vue";
import UploadList from "./UploadList.vue";
import Viewer from "./Viewer.vue";

const emit = defineEmits(["change", "delete", "progress", "success", "error"]);

const showImgViewer = ref(false);

const imgViewerProps = ref({
  imgURL: "",
  index: 0,
  list: [],
});

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  fileList: Array,
  url: String,
  maximum: Number,
  headers: Object,
  draggable: Boolean,
});

const onProgress = (file, percent) => {
  emit("progress", file, percent);
};

const onSuccess = (file, result) => {
  emit("success", file, result);
};

const onError = (file, error) => {
  emit("error", file, error);
};

const onChange = (files) => {
  emit("change", files);
};

const onDelete = (file, index) => {
  emit("delete", file, index);
};

const onViewer = (imgURL, index, fileList) => {
  imgViewerProps.value.imgURL = imgURL;
  if (fileList) {
    imgViewerProps.value.index = index;
    imgViewerProps.value.list = fileList;
  }

  showImgViewer.value = true;
};

const onClose = () => {
  showImgViewer.value = false;
};

const uploader = () => {
  const propsData = {
    ...props,
    onChange,
    onDelete,
    onSuccess,
    onError,
    onProgress,
    onViewer,
  };
  return h("div", null, [
    showImgViewer.value
      ? h(Viewer, {
          ...imgViewerProps.value,
          showImgViewer: showImgViewer.value,
          onClose,
        })
      : "",
    props.fileList ? h(UploadList, propsData) : h(Upload, propsData),
  ]);
};
</script>
