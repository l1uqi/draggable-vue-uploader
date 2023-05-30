<template>
  <div class="draggable-upload-list">
    <div
      class="draggable-upload-list--item"
      v-for="(item, index) in list"
      :key="item.id"
      draggable="true"
      @dragstart="(e) => dragStart(e, index)"
      @dragend="dragEnd"
      @dragleave="dragLeave "
      @dragover="(e) => dragOver(e, index)"
    >
      <Upload
        :action="props.action"
        :beforeUpload="props.beforeUpload"
        :file="item.file"
        :url="item.url"
        @change="(e) => onChange(e, index)"
        @delete="(e) => onDelete(e, index)"
        @success="(e) => onSuccess(e, index)"
        @error="(e) => onError(e, index)"
        @progress="(e) => onProgress(e, index)"
        @viewer="(e) => onViewer(e, index)"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, computed } from "vue";
import Upload from "./upload.vue";

const emit = defineEmits(["change", "delete", "progress", "success", "error"]);

const dragElement = ref(null);

const dragIndex = ref(0);

const dragOverIndex = ref(0);

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  fileList: Array,
});

const list = ref(JSON.parse(JSON.stringify(props.fileList)));

onMounted(() => {
  addList();
});

const addList = () => {
  list.value.push({ file: null, url: "", id: new Date().getTime() });
};

const dragStart = (event, index) => {
  dragIndex.value = index;
  dragElement.value = list.value[index];
};

const dragEnd = (event) => {
  if(!dragOverIndex.value) {
    return
  }
  // 后删除
  list.value.splice(dragIndex.value, 1);
  // 先插入
  list.value.splice(dragOverIndex.value, 0, dragElement.value);
  emit("change", dragElement.value, getList());
};

const dragOver = (event, index) => {
  event.preventDefault();
  dragOverIndex.value = index;
};

// 事件在拖动的元素或选中的文本离开一个有效的放置目标时被触发。
const dragLeave = () => {
  dragOverIndex.value = null;
}

const drop = (event) => {
  // console.log('drop', event);
};

const dragover = () => {};

const onProgress = (percent) => {
  // emit("progress", percent);
};
const onSuccess = (result) => {
  // emit("success", result);
};
const onError = (error) => {
  // emit("error", error);
};

const onChange = (file, index) => {
  list.value[index].file = file;
  list.value[index].id = file.name;
  if (file.url) {
    list.value[index].url = file.url;
  }
  console.log(list.value);
  addList();
  emit("change", file, getList());
};

const onDelete = (e, index) => {
  list.value.splice(index, 1);
  emit("delete", e, getList());
};

const onViewer = (e, index) => {
  emit("viewer", e, index, getList());
};

const getList = () => {
  let fileList = [];
  list.value.forEach((element) => {
    if (element.file !== null || element.url !== "") {
      fileList.push(element);
    }
  });
  return fileList;
};
</script>
<style>
.draggable-upload-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.draggable-upload-list--item {
  overflow: hidden;
}
</style>
