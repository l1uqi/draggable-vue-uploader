<template>
    <transition-group class="draggable-upload-list" name="flip-list" tag="ul">
      <li
        class="draggable-upload-list--item"
        v-for="(item, index) in list"
        :key="item.id"
        :draggable="index < list.length - 1"
        @dragstart="(e) => dragStart(e, index)"
        @dragover="(e) => dragOver(e, index)"
      >
        <Upload
          :action="props.action"
          :headers="props.headers"
          :beforeUpload="props.beforeUpload"
          :file="item.file"
          :url="item.url"
          @change="(e) => onChange(e, index)"
          @delete="(e) => onDelete(e, index)"
          @success="(file, res) => onSuccess(file, res, index)"
          @error="(file, err) => onError(file, err, index)"
          @progress="onProgress"
          @viewer="(e) => onViewer(e, index)"
        />
      </li>
    </transition-group>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, computed } from "vue";
import Upload from "./upload.vue";

const emit = defineEmits(["change", "delete", "progress", "success", "error"]);

const dragElement = ref(null);

const dragIndex = ref(0);

const dragOverIndex = ref(-1);

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  fileList: Array,
  headers: {
    type: Object,
    default: {},
    required: false,
  },
  maximum: {
    type: Number,
    default: 10,
    required: false,
  },
});

const list = ref(props.fileList);

let lastDragOverTimestamp = 0;

let time = 200;

onMounted(() => {
  addList();
});

const addList = () => {
  if (list.value.length < props.maximum) {
    list.value.push({ file: null, url: "", id: new Date().getTime() });
  }
};

const fileList = computed(() => {
  let fileList = [];
  list.value.forEach((element) => {
    if (element.file !== null || element.url !== "") {
      fileList.push(element);
    }
  });
  return fileList;
});

const dragStart = (event, index) => {
  dragIndex.value = index;
  dragElement.value = list.value[index];
};

const dragOver = (event, index) => {
  const currentTimestamp = new Date().getTime();
  event.preventDefault();
  dragOverIndex.value = index;
  if (
    dragOverIndex.value === -1 ||
    dragIndex.value === index ||
    dragOverIndex.value === list.value.length - 1 ||
    currentTimestamp - lastDragOverTimestamp <= time
  ) {
    return;
  }
  lastDragOverTimestamp = currentTimestamp;
  // 后删除
  list.value.splice(dragIndex.value, 1);
  // 先插入
  list.value.splice(index, 0, dragElement.value);
  // 更改当前下标
  dragIndex.value = index;
  dragElement.value = list.value[index];
  emit("change", fileList.value);
};

const onProgress = (file, percent) => {
  emit("progress", file, percent);
};
const onSuccess = (file, result, index) => {
  list.value[index].file = file;
  list.value[index].url = file.url;
  emit("success", file, result);
};
const onError = (file, err, index) => {
  list.value.splice(index, 1);
  emit("error", file, err);
};

const onChange = (file, index) => {
  list.value[index].file = file;
  addList();
  emit("change", fileList.value);
};

const onDelete = (e, index) => {
  list.value.splice(index, 1);
  if (
    list.value[list.value.length - 1].file !== null ||
    list.value[list.value.length - 1].url !== ""
  ) {
    addList();
  }
  emit("delete", e, index);
};

const onViewer = (e, index) => {
  emit("viewer", e, index, fileList.value);
};
</script>
<style>
.draggable-upload-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  width: 100%;
}

.draggable-upload-list--item {
  list-style: none;
}

.flip-list-move {
  transition: transform 0.3s;
}
</style>
