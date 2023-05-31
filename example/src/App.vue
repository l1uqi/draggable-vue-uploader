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
  {
    url: "https://images6.alphacoders.com/122/1220224.jpg",
    id: 9,
    file: null,
  },
  {
    url: "https://pica.zhimg.com/80/v2-183c6d6f03075ab56014d313e9c07f5b_720w.webp?source=1940ef5c",
    id: 10,
    file: null,
  },

  {
    url: "https://picx.zhimg.com/80/v2-8a065b0b29a0ff35ae9337acc11c0606_720w.webp?source=1940ef5c",
    id: 12,
    file: null,
  },
]);
const handleChange = (files) => {
  fileList.value = files;
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
    console.log("beforeUpload", file);
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
    ></draggable-upload>
    <span>列表</span>
    <draggable-upload
      action="https://eopda57dr0r1oqg.m.pipedream.net"
      @change="handleChange"
      @progress="handleProgress"
      @success="handleSuccess"
      @error="handleError"
      @delete="handleDelete"
      :before-upload="beforeUpload"
      :fileList="fileList"
    ></draggable-upload>
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
