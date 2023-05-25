<script setup>
const handleChange = (file) => {
  console.log(file);
};
const handleProgress = (progress) => {
  console.log('handleProgress', progress);
};
const handleSuccess = (res) => {
  console.log('handleSuccess', res);
};
const handleError = (err) => {
  console.log('handleError', err);
};

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    console.log('beforeUpload',file);
    setTimeout(() => {
      resolve(false);
    }, 3000)
  })
}
</script>

<template>
  <draggable-upload
    action="https://eopda57dr0r1oqg.m.pipedream.net"
    @change="handleChange"
    @progress="handleProgress"
    @success="handleSuccess"
    @error="handleError"
    :beforeUpload="beforeUpload"
  ></draggable-upload>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
