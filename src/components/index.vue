<template>
  <render />
</template>

<script setup>
import { h, ref, defineProps, defineEmits } from "vue";
import Upload from "./upload.vue";
import UploadList from "./UploadList.vue";
import ImgViewer from "./ImgViewer.vue";

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
});

const onProgress = (percent) => {
  emit("progress", percent);
};
const onSuccess = (result, list) => {
  emit("success", result, list);
};
const onError = (error) => {
  emit("error", error);
};

const onChange = (file, fileList) => {
  emit("change", file, fileList);
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

const render = () => {
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
      ? h(ImgViewer, {
          ...imgViewerProps.value,
          showImgViewer: showImgViewer.value,
          onClose,
        })
      : "",
    props.fileList ? h(UploadList, propsData) : h(Upload, propsData),
  ]);
};
</script>
