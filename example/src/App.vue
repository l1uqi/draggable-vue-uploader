<script setup>
const fileList = [

];
const handleChange = (file) => {
  console.log(file);
};
const handleProgress = (progress) => {
  console.log("handleProgress", progress);
};
const handleSuccess = (res) => {
  console.log("handleSuccess", res);
};
const handleError = (err) => {
  console.log("handleError", err);
};

const handleDelete = (file, fileList) => {
  console.log("handleDelete", file, fileList);
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
    <draggable-upload
    action="https://eopda57dr0r1oqg.m.pipedream.net"
    @change="handleChange"
    @progress="handleProgress"
    @success="handleSuccess"
    @error="handleError"
    @delete="handleDelete"
    :beforeUpload="beforeUpload"
    :fileList="fileList"
  ></draggable-upload>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
}
</style>
