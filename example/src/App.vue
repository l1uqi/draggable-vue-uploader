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
