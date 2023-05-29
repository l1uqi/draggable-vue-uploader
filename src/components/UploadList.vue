<template>
  <div class="draggable-upload-list">
    <div
      class="draggable-upload-list--item"
      v-for="(item, index) in list"
      :key="item.id"
    >
      <Upload
        :action="props.action"
        :file="item.file"
        :url="item.url"
        @change="(e) => onChange(e, index)"
        @delete="(e) => onDelete(e, index)"
        @success="onSuccess"
        @error="(e) => onError(e, index)"
        @progress="onProgress"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, computed } from "vue";
import Upload from "./upload.vue";

const emit = defineEmits(["change", "delete", "progress", "success", "error"]);

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  fileList: Array,
});

const list = ref(props.fileList);

onMounted(() => {
  addList();
});

const addList = () => {
  list.value.push({ file: null, url: "", id: new Date().getTime() });
};

const onProgress = (percent) => {
  // emit("progress", percent);
};
const onSuccess = (result) => {
  // emit("success", result);
};
const onError = (error) => {
  // emit("error", error);
};

const onChange = (event, index) => {
  list.value[index].file = event;
  addList();
  emit("change", getList());
};

const onDelete = (e, index) => {
  list.value.splice(index, 1);
  emit("delete", e, getList());
};

const getList = () => {
  return list.value.filter((item) => {
    if((item.url !== "" && typeof item.url !== "undefined") || item.file !== null) {
      return item
    }
  });
};
</script>
<style>
.draggable-upload-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
}

.draggable-upload-list--item {
  overflow: hidden;
}
</style>
