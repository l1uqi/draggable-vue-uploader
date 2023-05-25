<template>
  <div class="upload-container">
    <div class="upload-icon">
      <span>+</span>
    </div>
    <input
      type="file"
      class="upload-input"
      @change="handldInputChange"
    />
    <img class="preview" :src="preview_img" v-if="preview_img !== ''" />
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits  } from 'vue';
import { uploadFile } from '../utils/index'

const emit = defineEmits(['change', 'delete', 'progress', 'success', 'error'])

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function
});

const preview_img = ref('');

const onProgress = (progress) => {
  emit('progress', progress);
};
const onSuccess = (result) => {
  emit('success', result);
};
const onError = (error) => {
  emit('error', error);
};
 
const handldInputChange = (event) => {
  const input = event.target;
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload =  async () => {
    let next = true;
    preview_img.value = reader.result;
    emit('change', file);
    if(props.beforeUpload) {
      next = await props.beforeUpload(file)
    }
    if(next) {
      console.log('uploadFile');
    }
    // uploadFile(file, props.action, onProgress, onSuccess, onError);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
</script>
<style>
.upload-container {
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  position: relative;
}

.upload-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 42px;
  color: #ccc;
}

.upload-input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.preview {
  height: 155px;
  width: 155px;
  border-radius: 5px;
  z-index: 1;
  object-fit: cover;
  cursor: pointer;
}
</style>
